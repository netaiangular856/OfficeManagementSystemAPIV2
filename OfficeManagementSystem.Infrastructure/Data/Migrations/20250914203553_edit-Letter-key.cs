using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class editLetterkey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letters_AspNetUsers_ApprovedById",
                table: "Letters");

            migrationBuilder.DropIndex(
                name: "IX_Letters_ApprovedById",
                table: "Letters");

            migrationBuilder.DropColumn(
                name: "ApprovedById",
                table: "Letters");

            migrationBuilder.AlterColumn<string>(
                name: "ApprovedByUserId",
                table: "Letters",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Letters_ApprovedByUserId",
                table: "Letters",
                column: "ApprovedByUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Letters_AspNetUsers_ApprovedByUserId",
                table: "Letters",
                column: "ApprovedByUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letters_AspNetUsers_ApprovedByUserId",
                table: "Letters");

            migrationBuilder.DropIndex(
                name: "IX_Letters_ApprovedByUserId",
                table: "Letters");

            migrationBuilder.AlterColumn<string>(
                name: "ApprovedByUserId",
                table: "Letters",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApprovedById",
                table: "Letters",
                type: "nvarchar(450)",
                nullable: true);

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
    }
}
