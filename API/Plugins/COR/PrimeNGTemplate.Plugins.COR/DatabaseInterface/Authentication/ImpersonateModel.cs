using DatabaseSharp;
using PrimeNGTemplate.API.Tools.Serialization;
using PrimeNGTemplate.Plugins.COR.Helpers;
using PrimeNGTemplate.Plugins.COR.Models.Internal.Authentication;
using PrimeNGTemplate.Plugins.COR.Models.Shared.Authentication;
using PrimeNGTemplate.Plugins.COR.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.COR.DatabaseInterface.Authentication
{
	public class ImpersonateModel(IDBClient client, JWTSettings settings) :
		BaseDBModel<ImpersonateInput, AuthenticationOutput>(client)
	{
		private readonly JWTSettings _settings = settings;

		public override async Task<AuthenticationOutput> ExecuteAsync(ImpersonateInput input)
		{
			var result = await _client.ExecuteAsync("COR.Impersonate", input);
			if (result[0].Count == 0)
				throw new Exception("Username or password is invalid!");

			var user = result[0][0].Fill<UserModel>();

			return new AuthenticationOutput(user, JWTTokenHelpers.CreateToken(user, _settings.Secret, _settings.LifetimeMin));
		}
	}
}
