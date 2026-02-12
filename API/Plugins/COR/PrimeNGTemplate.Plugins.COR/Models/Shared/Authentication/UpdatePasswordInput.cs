using DatabaseSharp.Attributes;
using PrimeNGTemplate.API.Tools;
using System.ComponentModel.DataAnnotations;

namespace PrimeNGTemplate.Plugins.COR.Models.Shared.Authentication
{
	public class UpdatePasswordInput : BaseExecIDModel
	{
		[Required]
		[DatabaseSharpIgnore]
		public string OldPassword { get; set; }
		[Required]
		public string NewPassword { get; set; }
	}
}
