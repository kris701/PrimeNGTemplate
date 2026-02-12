using DatabaseSharp.Attributes;
using System.ComponentModel.DataAnnotations;

namespace PrimeNGTemplate.Plugins.Core.Models.Shared.Authentication
{
	public class AuthenticateInput
	{
		[Required]
		public string Username { get; set; }
		[Required]
		[DatabaseSharpIgnore]
		public string Password { get; set; }
	}
}
