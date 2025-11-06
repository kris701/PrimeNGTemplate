IF ((SELECT COUNT(*) FROM [COR].[Users]) = 0)
BEGIN
	DECLARE @NewUserID UNIQUEIDENTIFIER = NEWID();
	INSERT INTO [COR].[Users] VALUES (@NewUserID, 'Admin', 'Admin', 'email', 'admin', 'Fq5zcVIv03NELaQhmsp9kuOAhi6/SkkYP+KutfUx9LpaNXbg', 1, 1, GETUTCDATE(), NULL)
	INSERT INTO [COR].[UserPermissions] SELECT NEWID(), @NewUserID, PK_ID FROM [COR].[Permissions]
END