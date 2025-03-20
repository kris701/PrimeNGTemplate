using DatabaseSharp;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.API.Tools.Serialization;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Users
{
	public class DeleteUserModel(IDBClient client) :
		BaseSerializableSingleDBModel<DeleteModel, EmptyModel>(client, "COR.SP_DeleteCompanyUser")
	{
	}
}
