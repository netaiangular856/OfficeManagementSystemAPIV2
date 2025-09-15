using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class editLetter : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ApprovalNotes",
                table: "Letters",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ApprovedAt",
                table: "Letters",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApprovedById",
                table: "Letters",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApprovedByUserId",
                table: "Letters",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BodyFormatting",
                table: "Letters",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "EmailSentAt",
                table: "Letters",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsEmailSent",
                table: "Letters",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "PdfPath",
                table: "Letters",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SignatureImagePath",
                table: "Letters",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Letters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Letters_ApprovedById",
                table: "Letters",
                column: "ApprovedById");

            migrationBuilder.AddForeignKey(
                name: "FK_Letters_AspNetUsers_ApprovedById",
                table: "Letters",
                column: "ApprovedById",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letters_AspNetUsers_ApprovedById",
                table: "Letters");

            migrationBuilder.DropIndex(
                name: "IX_Letters_ApprovedById",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "ApprovalNotes",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "ApprovedAt",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "ApprovedById",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "ApprovedByUserId",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "BodyFormatting",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "EmailSentAt",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "IsEmailSent",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "PdfPath",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "SignatureImagePath",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Letters");
        }
    }
}
