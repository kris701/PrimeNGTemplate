using DatabaseSharp.Models;
using System.Text.Json.Serialization;

namespace PrimeNGTemplate.Plugins.Core.Models.Shared.Users
{
	public class ListUserModel
	{
		[DatabaseSharp(ColumnName = "PK_ID")]
		[JsonPropertyName("id")]
		public Guid ID { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public string PhoneNumber { get; set; }
		public int PermissionsCount { get; set; }
	}
}
