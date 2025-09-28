using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class FixMeetingAttachment1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MeetingAttachments_Documents_DocumentId",
                table: "MeetingAttachments");

            migrationBuilder.AddForeignKey(
                name: "FK_MeetingAttachments_Documents_DocumentId",
                table: "MeetingAttachments",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MeetingAttachments_Documents_DocumentId",
                table: "MeetingAttachments");

            migrationBuilder.AddForeignKey(
                name: "FK_MeetingAttachments_Documents_DocumentId",
                table: "MeetingAttachments",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
