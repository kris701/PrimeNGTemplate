using DatabaseSharp;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.API.Tools.Serialization;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Authentication;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface
{
	public class AddPermissionIfNotExistModel(IDBClient client) :
		BaseSerializableSingleDBModel<PermissionModel, EmptyModel>(client, "COR.SP_AddPermissionIfNotExist")
	{
	}
}
