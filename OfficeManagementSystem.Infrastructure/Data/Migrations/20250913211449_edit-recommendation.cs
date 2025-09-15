using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class editrecommendation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AssigneeUserId",
                table: "Recommendations",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Recommendations_AssigneeUserId",
                table: "Recommendations",
                column: "AssigneeUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Recommendations_AspNetUsers_AssigneeUserId",
                table: "Recommendations",
                column: "AssigneeUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recommendations_AspNetUsers_AssigneeUserId",
                table: "Recommendations");

            migrationBuilder.DropIndex(
                name: "IX_Recommendations_AssigneeUserId",
                table: "Recommendations");

            migrationBuilder.DropColumn(
                name: "AssigneeUserId",
                table: "Recommendations");
        }
    }
}
