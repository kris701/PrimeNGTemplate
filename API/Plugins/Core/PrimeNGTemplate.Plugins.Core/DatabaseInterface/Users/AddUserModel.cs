using DatabaseSharp;
using PrimeNGTemplate.API.Tools.Serialization;
using PrimeNGTemplate.Plugins.Core.Helpers;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Users
{
	public class AddUserModel(IDBClient client) :
		BaseDBModel<AddCompanyUserInput, UserModel>(client)
	{
		public override async Task<UserModel> ExecuteAsync(AddCompanyUserInput input)
		{
			input.Password = HashingHelpers.CreateMD5(input.Password);

			var result = await _client.ExecuteAsync("COR.SP_AddCompanyUser", input);

			var model = result[0][0].Fill<UserModel>();
			model.Permissions = result[1].GetAllValues<string>("FK_Permission_ID");

			return model;
		}
	}
}
