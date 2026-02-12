using System.Security.Cryptography;

namespace PrimeNGTemplate.Plugins.Core.Helpers
{
	// https://stackoverflow.com/a/10402129
	public static class HashingHelpers
	{
		public static string HashString(string value)
		{
			byte[] salt;
			new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);
			var pbkdf2 = new Rfc2898DeriveBytes(value, salt, 100000);
			var hash = pbkdf2.GetBytes(20);
			var hashBytes = new byte[36];
			Array.Copy(salt, 0, hashBytes, 0, 16);
			Array.Copy(hash, 0, hashBytes, 16, 20);
			var savedPasswordHash = Convert.ToBase64String(hashBytes);
			return savedPasswordHash;
		}

		public static bool VerifyHash(string hashValue, string value)
		{
			/* Extract the bytes */
			var hashBytes = Convert.FromBase64String(hashValue);
			/* Get the salt */
			var salt = new byte[16];
			Array.Copy(hashBytes, 0, salt, 0, 16);
			/* Compute the hash on the password the user entered */
			var pbkdf2 = new Rfc2898DeriveBytes(value, salt, 100000);
			var hash = pbkdf2.GetBytes(20);
			/* Compare the results */
			for (var i = 0; i < 20; i++)
				if (hashBytes[i + 16] != hash[i])
					return false;
			return true;
		}
	}
}
