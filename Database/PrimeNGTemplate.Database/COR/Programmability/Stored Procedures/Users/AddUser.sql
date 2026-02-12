CREATE PROCEDURE [COR].[AddUser]
@ExecID UNIQUEIDENTIFIER, @FirstName NVARCHAR (MAX), @LastName NVARCHAR (MAX), @Email NVARCHAR (MAX), @LoginName NVARCHAR (100), @Password NVARCHAR (MAX), @Permissions [GLB].[StringListType] READONLY, @IsActive BIT, @IsStaff BIT
AS
BEGIN TRANSACTION;

DECLARE @ID AS UNIQUEIDENTIFIER = NEWID();

INSERT  INTO [COR].[Users]
VALUES (@ID, @FirstName, @LastName, @Email, @LoginName, @Password, @IsActive, @IsStaff, GETUTCDATE(), NULL);

INSERT INTO [COR].[UserPermissions]
SELECT NEWID(),
       @ID,
       *
FROM   @Permissions;

EXECUTE [COR].[GetUser] @ExecID, @ID;

COMMIT TRANSACTION;