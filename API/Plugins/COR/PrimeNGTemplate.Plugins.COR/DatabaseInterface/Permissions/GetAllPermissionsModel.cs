using DatabaseSharp;
using DatabaseSharp.Tools;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.Plugins.COR.Models.Shared.Authentication;

namespace PrimeNGTemplate.Plugins.COR.DatabaseInterface.Permissions
{
	public class GetAllPermissionsModel(IDBClient client) :
		BaseListSerializerModel<EmptyModel, PermissionModel, EmptyModel>(client, "COR.GetAllPermissions")
	{
	}
}
