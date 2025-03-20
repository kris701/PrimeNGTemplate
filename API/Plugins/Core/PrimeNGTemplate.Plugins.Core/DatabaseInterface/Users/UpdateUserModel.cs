using DatabaseSharp;
using PrimeNGTemplate.API.Tools.Serialization;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Users
{
	public class UpdateUserModel(IDBClient client) :
		BaseDBModel<UserModel, UserModel>(client)
	{
		public override async Task<UserModel> ExecuteAsync(UserModel input)
		{
			var result = await _client.ExecuteAsync("COR.SP_UpdateCompanyUser", input);

			var model = result[0][0].Fill<UserModel>();
			model.Permissions = result[1].GetAllValues<string>("FK_Permission_ID");

			return model;
		}
	}
}
