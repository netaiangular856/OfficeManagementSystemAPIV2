using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddCarbonFootprintModule : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CarbonActivities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ActivityType = table.Column<int>(type: "int", nullable: false),
                    TransportType = table.Column<int>(type: "int", nullable: false),
                    Distance = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ParticipantsCount = table.Column<int>(type: "int", nullable: false),
                    EmissionValue = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    Destination = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Origin = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    ActivityDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RelatedEntityId = table.Column<int>(type: "int", nullable: true),
                    RelatedEntityType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(450)", maxLength: 450, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarbonActivities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CarbonActivities_AspNetUsers_CreatedBy",
                        column: x => x.CreatedBy,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "CarbonEmissionFactors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TransportType = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    NameAr = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Factor = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    Unit = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true, defaultValue: "kg/km"),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarbonEmissionFactors", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CarbonActivities_ActivityDate",
                table: "CarbonActivities",
                column: "ActivityDate");

            migrationBuilder.CreateIndex(
                name: "IX_CarbonActivities_ActivityType",
                table: "CarbonActivities",
                column: "ActivityType");

            migrationBuilder.CreateIndex(
                name: "IX_CarbonActivities_CreatedBy",
                table: "CarbonActivities",
                column: "CreatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_CarbonActivities_RelatedEntityType_RelatedEntityId",
                table: "CarbonActivities",
                columns: new[] { "RelatedEntityType", "RelatedEntityId" });

            migrationBuilder.CreateIndex(
                name: "IX_CarbonActivities_TransportType",
                table: "CarbonActivities",
                column: "TransportType");

            migrationBuilder.CreateIndex(
                name: "IX_CarbonEmissionFactors_IsActive",
                table: "CarbonEmissionFactors",
                column: "IsActive");

            migrationBuilder.CreateIndex(
                name: "IX_CarbonEmissionFactors_TransportType_IsActive",
                table: "CarbonEmissionFactors",
                columns: new[] { "TransportType", "IsActive" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarbonActivities");

            migrationBuilder.DropTable(
                name: "CarbonEmissionFactors");
        }
    }
}
