using DatabaseSharp;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.API.Tools.Helpers;
using PrimeNGTemplate.Plugins.Core.DatabaseInterface.Users;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.Core.Controllers
{
	/// <summary>
	/// Controller endpoints for company users
	/// </summary>
	/// <response code="401">If Unauthroized.</response>
	[Authorize]
	[Produces("application/json")]
	public class UsersController : ControllerBase
	{
		private readonly IDBClient _dbClient;

		public UsersController([FromKeyedServices(CorePlugin.DBClientKeyName)] IDBClient dbClient)
		{
			_dbClient = dbClient;
		}

		/// <summary>
		/// Add a new user
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">Returns the newly created user</response>
		[HttpPost(Endpoints.Core.Users.Post_AddUser)]
		[Authorize(Roles = PermissionsTable.Core_Users_Write)]
		public async Task<IActionResult> Post_AddUser([FromBody] AddCompanyUserInput inputModel)
		{
			User.SetExecID(inputModel);
			var model = new AddUserModel(_dbClient);
			return Ok(await model.ExecuteAsync(inputModel));
		}

		/// <summary>
		/// Update an existing user.
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">Returns the updated user</response>
		[HttpPatch(Endpoints.Core.Users.Patch_UpdateUser)]
		[Authorize(Roles = PermissionsTable.Core_Users_Write + "," + PermissionsTable.Core_User_EditProfile)]
		public async Task<IActionResult> Patch_UpdateUser([FromBody] UserModel inputModel)
		{
			User.SetExecID(inputModel);
			if (!User.HasPermission(PermissionsTable.Core_Users_Write) &&
				User.HasPermission(PermissionsTable.Core_User_EditProfile) &&
				User.GetExecID() != inputModel.ExecID)
				return Unauthorized("You can only modify your own user!");
			var model = new UpdateUserModel(_dbClient);
			return Ok(await model.ExecuteAsync(inputModel));
		}

		/// <summary>
		/// Get all users
		/// </summary>
		/// <returns></returns>
		/// <response code="200">Returns a list of existing users in a simplified format</response>
		[HttpGet(Endpoints.Core.Users.Get_AllUsers)]
		[Authorize(Roles = PermissionsTable.Core_Users_Read)]
		public async Task<IActionResult> Get_AllUsers()
		{
			var inputModel = new EmptyModel();
			User.SetExecID(inputModel);
			var model = new GetAllUsersModel(_dbClient);
			return Ok(await model.ExecuteAsync(inputModel));
		}

		/// <summary>
		/// Get a single user.
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">Returns the requested user</response>
		[HttpGet(Endpoints.Core.Users.Get_User)]
		[Authorize(Roles = PermissionsTable.Core_Users_Read)]
		public async Task<IActionResult> Get_User([FromQuery] GetModel inputModel)
		{
			User.SetExecID(inputModel);
			var model = new GetUserModel(_dbClient);
			return Ok(await model.ExecuteAsync(inputModel));
		}

		/// <summary>
		/// Delete a user
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">Deletes the target user</response>
		[HttpDelete(Endpoints.Core.Users.Delete_User)]
		[Authorize(Roles = PermissionsTable.Core_Users_Write)]
		public async Task<IActionResult> Delete_User([FromQuery] DeleteModel inputModel)
		{
			User.SetExecID(inputModel);
			var model = new DeleteUserModel(_dbClient);
			return Ok(await model.ExecuteAsync(inputModel));
		}
	}
}
