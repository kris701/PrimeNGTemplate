using DatabaseSharp;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.API.Tools.Serialization;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Users
{
	public class GetAllUsersModel(IDBClient client) :
		BaseSerializableListDBModel<EmptyModel, ListUserModel>(client, "COR.SP_GetAllCompanyUsers")
	{
	}
}
