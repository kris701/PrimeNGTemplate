using DatabaseSharp;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.API.Tools.Helpers;
using PrimeNGTemplate.Plugins.COR.DatabaseInterface.Users;
using PrimeNGTemplate.Plugins.COR.Models.Shared.Users;

namespace PrimeNGTemplate.Plugins.COR.Controllers
{
	/// <summary>
	/// Controller endpoints for users
	/// </summary>
	/// <response code="401">If Unauthroized.</response>
	[Authorize]
	[Produces("application/json")]
	public class UsersController : ControllerBase
	{
		private readonly UsersInterface _interface;

		public UsersController(IDBClient dbClient)
		{
			_interface = new UsersInterface(dbClient);
		}

		/// <summary>
		/// Add a new user
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">Returns the newly created user</response>
		[HttpPost(Endpoints.COR.Users.Post_AddUser)]
		[Authorize(Roles = PermissionsTable.COR_Users_Write)]
		public async Task<IActionResult> Post_AddUser([FromBody] AddUserInput inputModel)
		{
			User.SetExecID(inputModel);
			return Ok(await _interface.AddAsync(inputModel));
		}

		/// <summary>
		/// Update an existing user.
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">Returns the updated user</response>
		[HttpPatch(Endpoints.COR.Users.Patch_UpdateUser)]
		[Authorize(Roles = PermissionsTable.COR_Users_Write + "," + PermissionsTable.COR_Users_Own_Write)]
		public async Task<IActionResult> Patch_UpdateUser([FromBody] UserModel inputModel)
		{
			User.SetExecID(inputModel);
			if (!User.HasPermission(PermissionsTable.COR_Users_Write) &&
				User.HasPermission(PermissionsTable.COR_Users_Own_Write) &&
				User.GetExecID() != inputModel.ExecID)
				return Unauthorized("You can only modify your own user!");
			return Ok(await _interface.UpdateAsync(inputModel));
		}

		/// <summary>
		/// Get all users
		/// </summary>
		/// <returns></returns>
		/// <response code="200">Returns a list of existing users in a simplified format</response>
		[HttpGet(Endpoints.COR.Users.Get_AllUsers)]
		[Authorize(Roles = PermissionsTable.COR_Users_Read)]
		public async Task<IActionResult> Get_AllUsers()
		{
			var inputModel = new EmptyModel();
			User.SetExecID(inputModel);
			return Ok(await _interface.GetAllAsync(inputModel));
		}

		/// <summary>
		/// Get a single user.
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">Returns the requested user</response>
		[HttpGet(Endpoints.COR.Users.Get_User)]
		[Authorize(Roles = PermissionsTable.COR_Users_Read + "," + PermissionsTable.COR_Users_Own_Read)]
		public async Task<IActionResult> Get_User([FromQuery] GetModel inputModel)
		{
			User.SetExecID(inputModel);
			if (!User.HasPermission(PermissionsTable.COR_Users_Read) &&
				User.HasPermission(PermissionsTable.COR_Users_Own_Read) &&
				User.GetExecID() != inputModel.ExecID)
				return Unauthorized("You can only read your own user!");
			return Ok(await _interface.GetAsync(inputModel));
		}

		/// <summary>
		/// Delete a user
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">Deletes the target user</response>
		[HttpDelete(Endpoints.COR.Users.Delete_User)]
		[Authorize(Roles = PermissionsTable.COR_Users_Write)]
		public async Task<IActionResult> Delete_User([FromQuery] DeleteModel inputModel)
		{
			User.SetExecID(inputModel);
			return Ok(await _interface.DeleteAsync(inputModel));
		}
	}
}
