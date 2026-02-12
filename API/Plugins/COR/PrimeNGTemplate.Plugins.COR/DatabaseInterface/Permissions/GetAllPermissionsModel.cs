using DatabaseSharp;
using DatabaseSharp.Tools;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Authentication;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Permissions
{
	public class GetAllPermissionsModel(IDBClient client) :
		BaseListSerializerModel<EmptyModel, PermissionModel, EmptyModel>(client, "COR.GetAllPermissions")
	{
	}
}
