using DatabaseSharp.Models;
using System.Text.Json.Serialization;

namespace PrimeNGTemplate.Plugins.Core.Models.Shared.Authentication
{
	public class PermissionModel
	{
		[DatabaseSharp(ColumnName = "PK_ID")]
		[JsonPropertyName("id")]
		public string ID { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }

		public PermissionModel()
		{
			ID = "";
			Name = "";
			Description = "";
		}

		public PermissionModel(string iD, string name, string description)
		{
			ID = iD;
			Name = name;
			Description = description;
		}
	}
}
