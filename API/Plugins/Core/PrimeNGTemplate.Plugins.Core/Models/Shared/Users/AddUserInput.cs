﻿using PrimeNGTemplate.API.Tools;
using System.ComponentModel.DataAnnotations;

namespace PrimeNGTemplate.Plugins.Core.Models.Shared.Users
{
	public class AddUserInput : BaseExecIDModel
	{
		[Required]
		public string FirstName { get; set; }
		[Required]
		public string LastName { get; set; }

		[Required]
		public string Email { get; set; }

		[Required]
		public string LoginName { get; set; }
		[Required]
		public string Password { get; set; }

		[Required]
		public List<string> Permissions { get; set; }
		[Required]
		public bool IsActive { get; set; }
		[Required]
		public bool IsStaff { get; set; }
	}
}
