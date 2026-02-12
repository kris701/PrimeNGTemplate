CREATE PROCEDURE [COR].[UpdateUser]
@ExecID UNIQUEIDENTIFIER, @ID UNIQUEIDENTIFIER, @FirstName NVARCHAR (MAX), @LastName NVARCHAR (MAX), @Email NVARCHAR (MAX), @LoginName NVARCHAR (100), @Permissions [GLB].[StringListType] READONLY, @IsActive BIT, @IsStaff BIT
AS
BEGIN TRANSACTION;

DELETE [COR].[UserPermissions]
WHERE  FK_User_ID = @ID;

UPDATE  [COR].[Users]
    SET FirstName = @FirstName,
        LastName  = @LastName,
        Email     = @Email,
        LoginName = @LoginName,
        IsActive  = @IsActive,
        IsStaff   = @IsStaff,
        UpdatedAt = GETUTCDATE()
WHERE   PK_ID = @ID;

INSERT INTO [COR].[UserPermissions]
SELECT NEWID(),
       @ID,
       *
FROM   @Permissions;

EXECUTE [COR].[SP_GetUser] @ExecID, @ID;

COMMIT TRANSACTION;