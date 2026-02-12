using DatabaseSharp;
using PrimeNGTemplate.API.Tools;
using PrimeNGTemplate.API.Tools.Serialization;
using PrimeNGTemplate.Plugins.Core.Helpers;
using PrimeNGTemplate.Plugins.Core.Models.Shared.Authentication;

namespace PrimeNGTemplate.Plugins.Core.DatabaseInterface.Authentication
{
	public class UpdatePasswordModel(IDBClient client) :
		BaseDBModel<UpdatePasswordInput, EmptyModel>(client)
	{
		public override async Task<EmptyModel> ExecuteAsync(UpdatePasswordInput input)
		{
			var result = await _client.ExecuteAsync("COR.AuthenticateByUserID", new GetModel(input.ExecID, input.ExecID));
			if (result[0].Count == 0)
				throw new Exception("UserID is invalid!");
			var passwordHash = result[0][0].GetValue<string>("LoginPassword");
			if (!HashingHelpers.VerifyHash(passwordHash, input.OldPassword))
				throw new Exception("Password is invalid!");

			input.NewPassword = HashingHelpers.HashString(input.NewPassword);

			await _client.ExecuteAsync("COR.UpdatePassword", input);
			return new EmptyModel();
		}
	}
}
