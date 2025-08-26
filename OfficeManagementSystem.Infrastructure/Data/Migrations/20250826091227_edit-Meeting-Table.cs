using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class editMeetingTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MeetingAttachments_AspNetUsers_UploadedByUserId",
                table: "MeetingAttachments");

            migrationBuilder.DropForeignKey(
                name: "FK_MeetingAttendees_AspNetUsers_UserId",
                table: "MeetingAttendees");

            migrationBuilder.DropForeignKey(
                name: "FK_Recommendations_AspNetUsers_OwnerUserId",
                table: "Recommendations");

            migrationBuilder.DropTable(
                name: "MeetingBookings");

            migrationBuilder.DropIndex(
                name: "IX_Recommendations_DueDate",
                table: "Recommendations");

            migrationBuilder.DropIndex(
                name: "IX_Recommendations_OwnerUserId",
                table: "Recommendations");

            migrationBuilder.DropIndex(
                name: "IX_Recommendations_Status",
                table: "Recommendations");

            migrationBuilder.DropIndex(
                name: "IX_MeetingAttendees_MeetingId_UserId",
                table: "MeetingAttendees");

            migrationBuilder.DropIndex(
                name: "IX_MeetingAttachments_UploadedByUserId",
                table: "MeetingAttachments");

            migrationBuilder.DropColumn(
                name: "DueDate",
                table: "Recommendations");

            migrationBuilder.DropColumn(
                name: "LinkedTaskId",
                table: "Recommendations");

            migrationBuilder.DropColumn(
                name: "OwnerUserId",
                table: "Recommendations");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Recommendations");

            migrationBuilder.DropColumn(
                name: "AttachmentsCount",
                table: "MeetingMinutes");

            migrationBuilder.DropColumn(
                name: "RoleInMeeting",
                table: "MeetingAttendees");

            migrationBuilder.DropColumn(
                name: "UploadedAt",
                table: "MeetingAttachments");

            migrationBuilder.DropColumn(
                name: "UploadedByUserId",
                table: "MeetingAttachments");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Meetings",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValueSql: "GETUTCDATE()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "EndAt",
                table: "Meetings",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<int>(
                name: "LocationMode",
                table: "Meetings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "OnlineUrl",
                table: "Meetings",
                type: "nvarchar(1000)",
                maxLength: 1000,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PlaceId",
                table: "Meetings",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "MeetingAttendees",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldMaxLength: 450);

            migrationBuilder.AddColumn<string>(
                name: "Department",
                table: "MeetingAttendees",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DisplayName",
                table: "MeetingAttendees",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "JobTitle",
                table: "MeetingAttendees",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Kind",
                table: "MeetingAttendees",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Organization",
                table: "MeetingAttendees",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Role",
                table: "MeetingAttendees",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Meetings_LocationMode",
                table: "Meetings",
                column: "LocationMode");

            migrationBuilder.CreateIndex(
                name: "IX_Meetings_PlaceId",
                table: "Meetings",
                column: "PlaceId");

            migrationBuilder.AddForeignKey(
                name: "FK_MeetingAttendees_AspNetUsers_UserId",
                table: "MeetingAttendees",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_Meetings_MeetingPlaces_PlaceId",
                table: "Meetings",
                column: "PlaceId",
                principalTable: "MeetingPlaces",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MeetingAttendees_AspNetUsers_UserId",
                table: "MeetingAttendees");

            migrationBuilder.DropForeignKey(
                name: "FK_Meetings_MeetingPlaces_PlaceId",
                table: "Meetings");

            migrationBuilder.DropIndex(
                name: "IX_Meetings_LocationMode",
                table: "Meetings");

            migrationBuilder.DropIndex(
                name: "IX_Meetings_PlaceId",
                table: "Meetings");

            migrationBuilder.DropColumn(
                name: "LocationMode",
                table: "Meetings");

            migrationBuilder.DropColumn(
                name: "OnlineUrl",
                table: "Meetings");

            migrationBuilder.DropColumn(
                name: "PlaceId",
                table: "Meetings");

            migrationBuilder.DropColumn(
                name: "Department",
                table: "MeetingAttendees");

            migrationBuilder.DropColumn(
                name: "DisplayName",
                table: "MeetingAttendees");

            migrationBuilder.DropColumn(
                name: "JobTitle",
                table: "MeetingAttendees");

            migrationBuilder.DropColumn(
                name: "Kind",
                table: "MeetingAttendees");

            migrationBuilder.DropColumn(
                name: "Organization",
                table: "MeetingAttendees");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "MeetingAttendees");

            migrationBuilder.AddColumn<DateTime>(
                name: "DueDate",
                table: "Recommendations",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LinkedTaskId",
                table: "Recommendations",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OwnerUserId",
                table: "Recommendations",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "Recommendations",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "open");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Meetings",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "EndAt",
                table: "Meetings",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AttachmentsCount",
                table: "MeetingMinutes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "MeetingAttendees",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldMaxLength: 450,
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RoleInMeeting",
                table: "MeetingAttendees",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "required");

            migrationBuilder.AddColumn<DateTime>(
                name: "UploadedAt",
                table: "MeetingAttachments",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()");

            migrationBuilder.AddColumn<string>(
                name: "UploadedByUserId",
                table: "MeetingAttachments",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "MeetingBookings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MeetingId = table.Column<int>(type: "int", nullable: false),
                    PlaceId = table.Column<int>(type: "int", nullable: false),
                    AttachmentId = table.Column<int>(type: "int", nullable: true),
                    Cost = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    Currency = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    EndAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    StartAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MeetingBookings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MeetingBookings_MeetingPlaces_PlaceId",
                        column: x => x.PlaceId,
                        principalTable: "MeetingPlaces",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_MeetingBookings_Meetings_MeetingId",
                        column: x => x.MeetingId,
                        principalTable: "Meetings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Recommendations_DueDate",
                table: "Recommendations",
                column: "DueDate");

            migrationBuilder.CreateIndex(
                name: "IX_Recommendations_OwnerUserId",
                table: "Recommendations",
                column: "OwnerUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Recommendations_Status",
                table: "Recommendations",
                column: "Status");

            migrationBuilder.CreateIndex(
                name: "IX_MeetingAttendees_MeetingId_UserId",
                table: "MeetingAttendees",
                columns: new[] { "MeetingId", "UserId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MeetingAttachments_UploadedByUserId",
                table: "MeetingAttachments",
                column: "UploadedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_MeetingBookings_MeetingId",
                table: "MeetingBookings",
                column: "MeetingId");

            migrationBuilder.CreateIndex(
                name: "IX_MeetingBookings_PlaceId",
                table: "MeetingBookings",
                column: "PlaceId");

            migrationBuilder.CreateIndex(
                name: "IX_MeetingBookings_PlaceId_StartAt_EndAt",
                table: "MeetingBookings",
                columns: new[] { "PlaceId", "StartAt", "EndAt" });

            migrationBuilder.CreateIndex(
                name: "IX_MeetingBookings_Status",
                table: "MeetingBookings",
                column: "Status");

            migrationBuilder.AddForeignKey(
                name: "FK_MeetingAttachments_AspNetUsers_UploadedByUserId",
                table: "MeetingAttachments",
                column: "UploadedByUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MeetingAttendees_AspNetUsers_UserId",
                table: "MeetingAttendees",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Recommendations_AspNetUsers_OwnerUserId",
                table: "Recommendations",
                column: "OwnerUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }
    }
}
