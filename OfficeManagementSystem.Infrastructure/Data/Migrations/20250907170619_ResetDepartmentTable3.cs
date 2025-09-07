using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class ResetDepartmentTable3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            // امسح الأولاد الأول لو في FK
            migrationBuilder.Sql("DELETE FROM Departments");
            migrationBuilder.Sql("DBCC CHECKIDENT ('Departments', RESEED, -1)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
