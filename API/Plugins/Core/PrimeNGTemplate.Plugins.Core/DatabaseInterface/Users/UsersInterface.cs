using DatabaseSharp;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Users
{
	public class UsersInterface(IDBClient client) : BaseCRUDModel<AddUserInput, UserModel, EmptyModel, ListUserModel>(
		client,
		"COR.SP_AddCompanyUser",
		"COR.SP_UpdateCompanyUser",
		"COR.SP_GetCompanyUser",
		"COR.SP_GetAllCompanyUsers",
		"COR.SP_DeleteCompanyUser")
	{
	}
}
