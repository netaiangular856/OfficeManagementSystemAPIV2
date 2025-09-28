BEGIN TRANSACTION;
INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250925125621_FixLetterAttachment0', N'9.0.8');

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250925125855_FixLetterAttachment1', N'9.0.8');

ALTER TABLE [MeetingAttachments] DROP CONSTRAINT [FK_MeetingAttachments_Documents_DocumentId];

ALTER TABLE [MeetingAttachments] ADD CONSTRAINT [FK_MeetingAttachments_Documents_DocumentId] FOREIGN KEY ([DocumentId]) REFERENCES [Documents] ([Id]) ON DELETE CASCADE;

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250925131301_FixMeetingAttachment1', N'9.0.8');

COMMIT;
GO

