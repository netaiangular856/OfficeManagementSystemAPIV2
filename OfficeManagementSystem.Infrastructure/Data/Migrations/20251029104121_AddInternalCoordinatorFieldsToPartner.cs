using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddInternalCoordinatorFieldsToPartner : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "InternalCoordinatorEmail",
                table: "Partners",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InternalCoordinatorJobTitle",
                table: "Partners",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InternalCoordinatorName",
                table: "Partners",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InternalCoordinatorPhone",
                table: "Partners",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InternalCoordinatorEmail",
                table: "Partners");

            migrationBuilder.DropColumn(
                name: "InternalCoordinatorJobTitle",
                table: "Partners");

            migrationBuilder.DropColumn(
                name: "InternalCoordinatorName",
                table: "Partners");

            migrationBuilder.DropColumn(
                name: "InternalCoordinatorPhone",
                table: "Partners");
        }
    }
}
