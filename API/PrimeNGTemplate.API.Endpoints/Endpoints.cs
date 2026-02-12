// This document is auto generated!
public static class Endpoints {
	public const string Name = "endpoints";
	public static class COR {
		public const string Name = "endpoints/cor";
		public static class Authentication {
			public const string Name = "endpoints/cor/authentication";
			public const string Post_Authenticate = "endpoints/cor/authentication";
			public const string Post_UpdatePassword = "endpoints/cor/authentication/updatepassword";
			public const string Post_Impersonate = "endpoints/cor/authentication/impersonate";
		}
		public static class Permissions {
			public const string Name = "endpoints/cor/permissions";
			public const string Get_AllPermissions = "endpoints/cor/permissions";
		}
		public static class Users {
			public const string Name = "endpoints/cor/users";
			public const string Post_AddUser = "endpoints/cor/users";
			public const string Patch_UpdateUser = "endpoints/cor/users";
			public const string Patch_UpdatePassword = "endpoints/cor/users/updatepassword";
			public const string Get_AllUsers = "endpoints/cor/users/users";
			public const string Get_User = "endpoints/cor/users";
			public const string Delete_User = "endpoints/cor/users";
		}
	}
}
