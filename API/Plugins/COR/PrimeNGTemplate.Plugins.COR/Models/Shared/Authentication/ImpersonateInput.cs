using PrimeNGTemplate.API.Tools;
using System.ComponentModel.DataAnnotations;

namespace PrimeNGTemplate.Plugins.COR.Models.Shared.Authentication
{
	public class ImpersonateInput : BaseExecIDModel
	{
		[Required]
		public Guid TargetUser { get; set; }
	}
}
