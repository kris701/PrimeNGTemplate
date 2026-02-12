using PrimeNGTemplate.Plugins.COR.Models.Shared.Users;
using System.Text.Json.Serialization;

namespace PrimeNGTemplate.Plugins.COR.Models.Shared.Authentication
{
	public class AuthenticationOutput
	{
		public UserModel User { get; set; }
		[JsonPropertyName("jwtToken")]
		public string JWTToken { get; set; }

		public AuthenticationOutput(UserModel user, string jWTToken)
		{
			User = user;
			JWTToken = jWTToken;
		}
	}
}
