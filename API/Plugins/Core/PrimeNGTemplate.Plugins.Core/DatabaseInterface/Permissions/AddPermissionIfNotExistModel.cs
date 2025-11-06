using DatabaseSharp;
using DatabaseSharp.Tools;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Authentication;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Permissions
{
	public class AddPermissionIfNotExistModel(IDBClient client) :
		BaseSingleSerializerModel<PermissionModel, EmptyModel, EmptyModel>(client, "COR.SP_AddPermissionIfNotExist")
	{
	}
}
