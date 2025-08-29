using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddEmployeeKPIupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EmployeeKPIs_AspNetUsers_EmployeeId1",
                table: "EmployeeKPIs");

            migrationBuilder.DropIndex(
                name: "IX_EmployeeKPIs_EmployeeId1",
                table: "EmployeeKPIs");

            migrationBuilder.DropColumn(
                name: "EmployeeId1",
                table: "EmployeeKPIs");

            migrationBuilder.AlterColumn<string>(
                name: "EmployeeId",
                table: "EmployeeKPIs",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeKPIs_EmployeeId",
                table: "EmployeeKPIs",
                column: "EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_EmployeeKPIs_AspNetUsers_EmployeeId",
                table: "EmployeeKPIs",
                column: "EmployeeId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EmployeeKPIs_AspNetUsers_EmployeeId",
                table: "EmployeeKPIs");

            migrationBuilder.DropIndex(
                name: "IX_EmployeeKPIs_EmployeeId",
                table: "EmployeeKPIs");

            migrationBuilder.AlterColumn<int>(
                name: "EmployeeId",
                table: "EmployeeKPIs",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "EmployeeId1",
                table: "EmployeeKPIs",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeKPIs_EmployeeId1",
                table: "EmployeeKPIs",
                column: "EmployeeId1");

            migrationBuilder.AddForeignKey(
                name: "FK_EmployeeKPIs_AspNetUsers_EmployeeId1",
                table: "EmployeeKPIs",
                column: "EmployeeId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
