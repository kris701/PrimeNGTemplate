using DatabaseSharp;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using PrimeNGTemplate.API.Tools.Helpers;
using PrimeNGTemplate.Plugins.COR.DatabaseInterface.Authentication;
using PrimeNGTemplate.Plugins.COR.Models.Internal.Authentication;
using PrimeNGTemplate.Plugins.COR.Models.Shared.Authentication;

namespace PrimeNGTemplate.Plugins.COR.Controllers
{
	/// <summary>
	/// Controller endpoints for authentication
	/// </summary>
	/// <response code="401">If Unauthroized.</response>
	[Authorize]
	[Produces("application/json")]
	public class AuthenticationController : ControllerBase
	{
		private readonly IDBClient _dbClient;
		private readonly JWTSettings _settings;

		public AuthenticationController(IDBClient dbClient, JWTSettings settings)
		{
			_dbClient = dbClient;
			_settings = settings;
		}

		/// <summary>
		/// Authenticate using a username and password
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">If login was successful.</response>
		[AllowAnonymous]
		[HttpPost(Endpoints.COR.Authentication.Post_Authenticate)]
		public async Task<IActionResult> Post_Authenticate([FromBody] AuthenticateInput inputModel)
		{
			var model = new AuthenticateModel(_dbClient, _settings);
			return Ok(await model.ExecuteAsync(inputModel));
		}

		/// <summary>
		/// Impersonate a given user
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <response code="200">Resulting JWT token for the user.</response>
		[HttpPost(Endpoints.COR.Authentication.Post_Impersonate)]
		[Authorize(Roles = PermissionsTable.COR_User_Impersonate)]
		public async Task<IActionResult> Post_Impersonate([FromBody] ImpersonateInput inputModel)
		{
			User.SetExecID(inputModel);
			var model = new ImpersonateModel(_dbClient, _settings);
			return Ok(await model.ExecuteAsync(inputModel));
		}

		/// <summary>
		/// Change your password
		/// </summary>
		/// <param name="inputModel"></param>
		/// <returns></returns>
		/// <exception cref="Exception"></exception>
		/// <response code="200">If password change was successful.</response>
		[HttpPost(Endpoints.COR.Authentication.Post_UpdatePassword)]
		[Authorize(Roles = PermissionsTable.COR_Users_Own_Write)]
		public async Task<IActionResult> Post_UpdatePassword([FromBody] UpdatePasswordInput inputModel)
		{
			User.SetExecID(inputModel);
			var model = new UpdatePasswordModel(_dbClient);
			return Ok(await model.ExecuteAsync(inputModel));
		}
	}
}
