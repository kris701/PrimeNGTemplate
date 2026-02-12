using DatabaseSharp;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.API.Tools.Serialization;
using PrimeNGTemplate.Plugins.COR.Helpers;
using PrimeNGTemplate.Plugins.COR.Models.Internal.Authentication;
using PrimeNGTemplate.Plugins.COR.Models.Shared.Authentication;
using PrimeNGTemplate.Plugins.COR.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.COR.DatabaseInterface.Authentication
{
	public class AuthenticateModel(IDBClient client, JWTSettings settings) :
		BaseDBModel<AuthenticateInput, AuthenticationOutput>(client)
	{
		private readonly JWTSettings _settings = settings;

		public override async Task<AuthenticationOutput> ExecuteAsync(AuthenticateInput input)
		{
			var result = await _client.ExecuteAsync("COR.AuthenticateByUsername", input);
			if (result[0].Count == 0)
				throw new Exception("Username is invalid!");
			var userID = new Guid(result[0][0].GetValue<string>("PK_ID"));
			var passwordHash = result[0][0].GetValue<string>("LoginPassword");
			if (!HashingHelpers.VerifyHash(passwordHash, input.Password))
				throw new Exception("Password is invalid!");

			result = await _client.ExecuteAsync("COR.GetUser", new GetModel(userID, Guid.Empty));
			var user = result[0][0].Fill<UserModel>();

			return new AuthenticationOutput(user, JWTTokenHelpers.CreateToken(user, _settings.Secret, _settings.LifetimeMin));
		}
	}
}
