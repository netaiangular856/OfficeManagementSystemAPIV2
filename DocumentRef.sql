BEGIN TRANSACTION;
ALTER TABLE [Documents] ADD [ReferenceNumber] nvarchar(max) NULL;

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250928153607_edit-Document-ReferenceNumber', N'9.0.8');

COMMIT;
GO

