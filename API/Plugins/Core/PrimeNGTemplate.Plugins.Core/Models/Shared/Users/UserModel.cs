using DatabaseSharp.Models;
using PrimeNGTemplate.API.Tools;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PrimeNGTemplate.Plugins.Core.Models.Shared.Users
{
	public class UserModel : BaseExecIDModel
	{
		[DatabaseSharp(ColumnName = "PK_ID")]
		[JsonPropertyName("id")]
		public Guid ID { get; set; }
		[Required]
		public string FirstName { get; set; }
		[Required]
		public string LastName { get; set; }

		[Required]
		public string Email { get; set; }
		[Required]
		public string PhoneNumber { get; set; }

		[Required]
		public string LoginName { get; set; }

		[Required]
		[DatabaseSharpIgnore(IgnoreAsParameter = false)]
		public List<string> Permissions { get; set; }
	}
}
