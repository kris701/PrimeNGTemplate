using DatabaseSharp;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.API.Tools.Helpers;
using PrimeNGTemplate.Plugins.COR.DatabaseInterface.Permissions;

namespace PrimeNGTemplate.Plugins.COR.Controllers
{
	/// <summary>
	/// Controller endpoints for permissions
	/// </summary>
	/// <response code="401">If Unauthroized.</response>
	[Authorize]
	[Produces("application/json")]
	public class PermissionsController : ControllerBase
	{
		private readonly IDBClient _dbClient;

		public PermissionsController(IDBClient dbClient)
		{
			_dbClient = dbClient;
		}

		/// <summary>
		/// Get all the permissions in the system
		/// </summary>
		/// <returns></returns>
		/// <exception cref="Exception"></exception>
		/// <response code="200">A list of all permissions and descriptions½.</response>
		[HttpGet(Endpoints.COR.Permissions.Get_AllPermissions)]
		[Authorize(Roles = PermissionsTable.COR_Permission_Read)]
		public async Task<IActionResult> Get_AllPermissions()
		{
			var inputModel = new EmptyModel();
			User.SetExecID(inputModel);
			var model = new GetAllPermissionsModel(_dbClient);
			return Ok(await model.ExecuteAsync(inputModel));
		}
	}
}
