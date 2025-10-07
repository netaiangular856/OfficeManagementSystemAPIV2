using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class editDocumentReferenceNumber : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ReferenceNumber",
                table: "Documents",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReferenceNumber",
                table: "Documents");
        }
    }
}
