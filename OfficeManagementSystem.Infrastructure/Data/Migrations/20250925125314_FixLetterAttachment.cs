using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class FixLetterAttachment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LetterAttachments_Documents_DocumentId",
                table: "LetterAttachments");

            

            migrationBuilder.AddForeignKey(
                name: "FK_LetterAttachments_Documents_DocumentId",
                table: "LetterAttachments",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LetterAttachments_Documents_DocumentId",
                table: "LetterAttachments");

            

            migrationBuilder.AddForeignKey(
                name: "FK_LetterAttachments_Documents_DocumentId",
                table: "LetterAttachments",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
