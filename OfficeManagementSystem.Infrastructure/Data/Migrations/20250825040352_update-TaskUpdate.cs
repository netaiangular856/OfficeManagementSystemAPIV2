using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class updateTaskUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AttachmentId",
                table: "TaskUpdates");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AttachmentId",
                table: "TaskUpdates",
                type: "int",
                nullable: true);
        }
    }
}
