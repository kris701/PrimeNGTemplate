CREATE PROCEDURE [COR].[SP_AuthenticateByUsername]
	@Username NVARCHAR(MAX)
AS
BEGIN
	DECLARE @targetID UNIQUEIDENTIFIER = (SELECT TOP 1 PK_ID FROM [COR].[Users] WHERE (LoginName = @Username OR Email = @Username))
	IF (@targetID = NULL)
		THROW 51000, 'Username is incorrect!', 1;

	SELECT PK_ID, LoginPassword FROM [COR].[Users] WHERE PK_ID = @targetID;
END