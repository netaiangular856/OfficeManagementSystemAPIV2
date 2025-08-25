using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class updatetaskAttachments : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskAttachments_AspNetUsers_UploadedByUserId",
                table: "TaskAttachments");

            migrationBuilder.DropIndex(
                name: "IX_TaskAttachments_UploadedAt",
                table: "TaskAttachments");

            migrationBuilder.DropIndex(
                name: "IX_TaskAttachments_UploadedByUserId",
                table: "TaskAttachments");

            migrationBuilder.DropColumn(
                name: "FilePath",
                table: "TaskAttachments");

            migrationBuilder.DropColumn(
                name: "FileType",
                table: "TaskAttachments");

            migrationBuilder.DropColumn(
                name: "UploadedAt",
                table: "TaskAttachments");

            migrationBuilder.DropColumn(
                name: "UploadedByUserId",
                table: "TaskAttachments");

            migrationBuilder.DropColumn(
                name: "MimeType",
                table: "Documents");

            migrationBuilder.DropColumn(
                name: "SizeBytes",
                table: "Documents");

            migrationBuilder.AddColumn<int>(
                name: "DocumentId",
                table: "TaskAttachments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Documents",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TaskAttachments_DocumentId",
                table: "TaskAttachments",
                column: "DocumentId");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskAttachments_Documents_DocumentId",
                table: "TaskAttachments",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskAttachments_Documents_DocumentId",
                table: "TaskAttachments");

            migrationBuilder.DropIndex(
                name: "IX_TaskAttachments_DocumentId",
                table: "TaskAttachments");

            migrationBuilder.DropColumn(
                name: "DocumentId",
                table: "TaskAttachments");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Documents");

            migrationBuilder.AddColumn<string>(
                name: "FilePath",
                table: "TaskAttachments",
                type: "nvarchar(1000)",
                maxLength: 1000,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FileType",
                table: "TaskAttachments",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UploadedAt",
                table: "TaskAttachments",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()");

            migrationBuilder.AddColumn<string>(
                name: "UploadedByUserId",
                table: "TaskAttachments",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MimeType",
                table: "Documents",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<long>(
                name: "SizeBytes",
                table: "Documents",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_TaskAttachments_UploadedAt",
                table: "TaskAttachments",
                column: "UploadedAt");

            migrationBuilder.CreateIndex(
                name: "IX_TaskAttachments_UploadedByUserId",
                table: "TaskAttachments",
                column: "UploadedByUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskAttachments_AspNetUsers_UploadedByUserId",
                table: "TaskAttachments",
                column: "UploadedByUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
