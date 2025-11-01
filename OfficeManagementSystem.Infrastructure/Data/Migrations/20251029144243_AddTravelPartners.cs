using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddTravelPartners : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Travels_AspNetUsers_CreatedByUserId",
                table: "Travels");

            migrationBuilder.DropIndex(
                name: "IX_Travels_CreatedByUserId",
                table: "Travels");

            migrationBuilder.DropColumn(
                name: "CreatedByUserId",
                table: "Travels");

            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                table: "Travels",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Travels",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.CreateTable(
                name: "TravelPartners",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TravelId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    JobTitle = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TravelPartners", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TravelPartners_Travels_TravelId",
                        column: x => x.TravelId,
                        principalTable: "Travels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Travels_CreatedBy",
                table: "Travels",
                column: "CreatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_Travels_EndDate",
                table: "Travels",
                column: "EndDate");

            migrationBuilder.CreateIndex(
                name: "IX_Travels_StartDate",
                table: "Travels",
                column: "StartDate");

            migrationBuilder.CreateIndex(
                name: "IX_TravelPartners_TravelId",
                table: "TravelPartners",
                column: "TravelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Travels_AspNetUsers_CreatedBy",
                table: "Travels",
                column: "CreatedBy",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Travels_AspNetUsers_CreatedBy",
                table: "Travels");

            migrationBuilder.DropTable(
                name: "TravelPartners");

            migrationBuilder.DropIndex(
                name: "IX_Travels_CreatedBy",
                table: "Travels");

            migrationBuilder.DropIndex(
                name: "IX_Travels_EndDate",
                table: "Travels");

            migrationBuilder.DropIndex(
                name: "IX_Travels_StartDate",
                table: "Travels");

            migrationBuilder.AlterColumn<string>(
                name: "CreatedBy",
                table: "Travels",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldMaxLength: 450,
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Travels",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValueSql: "GETUTCDATE()");

            migrationBuilder.AddColumn<string>(
                name: "CreatedByUserId",
                table: "Travels",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Travels_CreatedByUserId",
                table: "Travels",
                column: "CreatedByUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Travels_AspNetUsers_CreatedByUserId",
                table: "Travels",
                column: "CreatedByUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
