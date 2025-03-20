using DatabaseSharp;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.API.Tools.Serialization;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Users
{
	public class GetUserModel(IDBClient client) :
		BaseDBModel<GetModel, UserModel>(client)
	{
		public override async Task<UserModel> ExecuteAsync(GetModel input)
		{
			var result = await _client.ExecuteAsync("COR.SP_GetCompanyUser", input);

			var model = result[0][0].Fill<UserModel>();
			model.Permissions = result[1].GetAllValues<string>("FK_Permission_ID");

			return model;
		}
	}
}
