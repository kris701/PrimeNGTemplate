using DatabaseSharp;
using DatabaseSharp.Tools;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.Plugins.Core.Helpers;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Users
{
	public class UsersInterface : BaseCRUDSerializerModel<AddUserInput, EmptyModel, UserModel, ListUserModel, GetModel, DeleteModel, EmptyModel>
	{
		public UsersInterface(IDBClient client) : base(
			client,
			"COR.AddUser",
			"COR.UpdateUser",
			"COR.GetUser",
			"COR.GetAllUsers",
			"COR.DeleteUser")
		{
			AddPreExecute = async (m) =>
			{
				m.Password = HashingHelpers.HashString(m.Password);
				return m;
			};
		}
	}
}
