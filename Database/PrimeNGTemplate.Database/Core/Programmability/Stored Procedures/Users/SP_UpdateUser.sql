CREATE PROCEDURE [COR].[SP_UpdateUser]
	@ExecID UNIQUEIDENTIFIER,
	@ID UNIQUEIDENTIFIER,
	@FirstName NVARCHAR(MAX),
	@LastName NVARCHAR(MAX),
	@Email NVARCHAR(MAX),
	@PhoneNumber NVARCHAR(MAX),
	@LoginName NVARCHAR(100),
	@Permissions [GLB].[StringListType] READONLY
AS
BEGIN TRANSACTION
	DELETE FROM [COR].[UserPermissions] WHERE FK_User_ID = @ID;
	UPDATE [COR].[Users] SET FirstName = @FirstName, LastName = @LastName, Email = @Email, PhoneNumber = @PhoneNumber, LoginName = @LoginName WHERE PK_ID = @ID
	INSERT INTO [COR].[UserPermissions] SELECT NEWID(), @ID, * FROM @Permissions;
	EXEC [COR].[SP_GetUser] @ExecID, @ID
COMMIT
