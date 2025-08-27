using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class editLetter2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LetterAttachments_AspNetUsers_UploadedByUserId",
                table: "LetterAttachments");

            migrationBuilder.DropIndex(
                name: "IX_Letters_Number",
                table: "Letters");

            migrationBuilder.DropIndex(
                name: "IX_LetterAttachments_UploadedByUserId",
                table: "LetterAttachments");

            migrationBuilder.DropColumn(
                name: "Number",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "LetterAttachments");

            migrationBuilder.DropColumn(
                name: "UploadedAt",
                table: "LetterAttachments");

            migrationBuilder.DropColumn(
                name: "UploadedByUserId",
                table: "LetterAttachments");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Letters",
                type: "datetime2",
                nullable: true,
                defaultValueSql: "GETUTCDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValueSql: "GETUTCDATE()");

            migrationBuilder.AddColumn<DateTime>(
                name: "LetterDate",
                table: "Letters",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LetterDate",
                table: "Letters");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Letters",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValueSql: "GETUTCDATE()");

            migrationBuilder.AddColumn<string>(
                name: "Number",
                table: "Letters",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "LetterAttachments",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UploadedAt",
                table: "LetterAttachments",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()");

            migrationBuilder.AddColumn<string>(
                name: "UploadedByUserId",
                table: "LetterAttachments",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Letters_Number",
                table: "Letters",
                column: "Number");

            migrationBuilder.CreateIndex(
                name: "IX_LetterAttachments_UploadedByUserId",
                table: "LetterAttachments",
                column: "UploadedByUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_LetterAttachments_AspNetUsers_UploadedByUserId",
                table: "LetterAttachments",
                column: "UploadedByUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
