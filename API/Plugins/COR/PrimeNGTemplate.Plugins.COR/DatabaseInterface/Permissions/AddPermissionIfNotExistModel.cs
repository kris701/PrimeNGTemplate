using DatabaseSharp;
using DatabaseSharp.Tools;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.Plugins.COR.Models.Shared.Authentication;

namespace PrimeNGTemplate.Plugins.COR.DatabaseInterface.Permissions
{
	public class AddPermissionIfNotExistModel(IDBClient client) :
		BaseSingleSerializerModel<PermissionModel, EmptyModel, EmptyModel>(client, "COR.AddPermissionIfNotExist")
	{
	}
}
