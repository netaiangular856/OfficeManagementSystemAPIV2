using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class edittaskFeedbackkeys : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskFeedbacks_AspNetUsers_EmployeeId",
                table: "TaskFeedbacks");

            migrationBuilder.DropIndex(
                name: "IX_TaskFeedbacks_EmployeeId",
                table: "TaskFeedbacks");

            migrationBuilder.DropColumn(
                name: "EmployeeId",
                table: "TaskFeedbacks");

            migrationBuilder.AlterColumn<string>(
                name: "EmployeeUserId",
                table: "TaskFeedbacks",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_TaskFeedbacks_EmployeeUserId",
                table: "TaskFeedbacks",
                column: "EmployeeUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskFeedbacks_AspNetUsers_EmployeeUserId",
                table: "TaskFeedbacks",
                column: "EmployeeUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskFeedbacks_AspNetUsers_EmployeeUserId",
                table: "TaskFeedbacks");

            migrationBuilder.DropIndex(
                name: "IX_TaskFeedbacks_EmployeeUserId",
                table: "TaskFeedbacks");

            migrationBuilder.AlterColumn<string>(
                name: "EmployeeUserId",
                table: "TaskFeedbacks",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "EmployeeId",
                table: "TaskFeedbacks",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TaskFeedbacks_EmployeeId",
                table: "TaskFeedbacks",
                column: "EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskFeedbacks_AspNetUsers_EmployeeId",
                table: "TaskFeedbacks",
                column: "EmployeeId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
