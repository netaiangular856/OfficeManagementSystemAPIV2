using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class editLetteraddUserId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Kind",
                table: "Letters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Letters",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Letters_UserId",
                table: "Letters",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Letters_AspNetUsers_UserId",
                table: "Letters",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letters_AspNetUsers_UserId",
                table: "Letters");

            migrationBuilder.DropIndex(
                name: "IX_Letters_UserId",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "Kind",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Letters");
        }
    }
}
