using DatabaseSharp;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using PrimeNGTemplate.API.Tools.Serialization;
using PrimeNGTemplate.Plugins.Core.Helpers;
using PrimeNGTemplate.Plugins.Core.Models.Internal.Authentication;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Authentication;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Users;
using System.Text;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Authentication
{
	public class AuthenticateModel(IDBClient client, JWTSettings settings) :
		BaseDBModel<AuthenticateInput, AuthenticationOutput>(client)
	{
		private readonly JWTSettings _settings = settings;

		public override async Task<AuthenticationOutput> ExecuteAsync(AuthenticateInput input)
		{
			input.Password = HashingHelpers.CreateMD5(input.Password);

			var result = await _client.ExecuteAsync("COR.SP_Authenticate", input);
			if (result[0].Count == 0)
				throw new Exception("Username or password is invalid!");

			var user = result[0][0].Fill<UserModel>();
			user.Permissions = result[1].GetAllValues<string>("FK_Permission_ID");

			return new AuthenticationOutput(user, CreateToken(user));
		}

		public string CreateToken(UserModel model)
		{
			var tokenHandler = new JsonWebTokenHandler();
			tokenHandler.SetDefaultTimesOnTokenCreation = false;
			var key = Encoding.ASCII.GetBytes(_settings.Secret);

			var claims = new Dictionary<string, object>()
			{
				["nameid"] = model.ID.ToString(),
				["role"] = model.Permissions
			};

			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Claims = claims,
				Expires = DateTime.UtcNow.AddMinutes(_settings.LifetimeMin),
				IssuedAt = DateTime.UtcNow,
				NotBefore = DateTime.UtcNow,
				SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
			};
			var token = tokenHandler.CreateToken(tokenDescriptor);
			return token;
		}
	}
}
