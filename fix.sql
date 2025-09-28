BEGIN TRANSACTION;
ALTER TABLE [LetterAttachments] DROP CONSTRAINT [FK_LetterAttachments_Documents_DocumentId];

ALTER TABLE [LetterAttachments] DROP CONSTRAINT [FK_LetterAttachments_Documents_DocumentId1];

DROP INDEX [IX_LetterAttachments_DocumentId1] ON [LetterAttachments];

DECLARE @var sysname;
SELECT @var = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[LetterAttachments]') AND [c].[name] = N'DocumentId1');
IF @var IS NOT NULL EXEC(N'ALTER TABLE [LetterAttachments] DROP CONSTRAINT [' + @var + '];');
ALTER TABLE [LetterAttachments] DROP COLUMN [DocumentId1];

ALTER TABLE [LetterAttachments] ADD CONSTRAINT [FK_LetterAttachments_Documents_DocumentId] FOREIGN KEY ([DocumentId]) REFERENCES [Documents] ([Id]) ON DELETE CASCADE;

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250925123832_FixLetterAttachment', N'9.0.8');

COMMIT;
GO

