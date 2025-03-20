CREATE PROCEDURE [COR].[SP_AddUser]
	@ExecID UNIQUEIDENTIFIER,
	@FirstName NVARCHAR(MAX),
	@LastName NVARCHAR(MAX),
	@Email NVARCHAR(MAX),
	@PhoneNumber NVARCHAR(MAX),
	@LoginName NVARCHAR(100),
	@Password NVARCHAR(MAX),
	@Permissions [GLB].[StringListType] READONLY
AS
BEGIN TRANSACTION
	DECLARE @ID UNIQUEIDENTIFIER = NEWID()
	INSERT INTO [COR].[Users] VALUES (@ID, @FirstName, @LastName, @Email, @PhoneNumber, @LoginName, @Password);
	INSERT INTO [COR].[UserPermissions] SELECT NEWID(), @ID, * FROM @Permissions;
	EXEC [COR].[SP_GetUser] @ExecID, @ID
COMMIT