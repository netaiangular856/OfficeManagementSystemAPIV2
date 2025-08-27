using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class editPartner : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_PartnerContacts_IsPrimary",
                table: "PartnerContacts");

            migrationBuilder.DropColumn(
                name: "RelationshipScore",
                table: "Partners");

            migrationBuilder.DropColumn(
                name: "Tags",
                table: "Partners");

            migrationBuilder.DropColumn(
                name: "FullName",
                table: "PartnerContacts");

            migrationBuilder.DropColumn(
                name: "IsPrimary",
                table: "PartnerContacts");

            migrationBuilder.DropColumn(
                name: "Position",
                table: "PartnerContacts");

            migrationBuilder.DropColumn(
                name: "PreferredChannel",
                table: "PartnerContacts");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Partners",
                type: "datetime2",
                nullable: true,
                defaultValueSql: "GETUTCDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValueSql: "GETUTCDATE()");

            migrationBuilder.AddColumn<DateTime>(
                name: "ContractStartDate",
                table: "Partners",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Partners",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContractStartDate",
                table: "Partners");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "Partners");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "Partners",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValueSql: "GETUTCDATE()");

            migrationBuilder.AddColumn<byte>(
                name: "RelationshipScore",
                table: "Partners",
                type: "tinyint",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Tags",
                table: "Partners",
                type: "nvarchar(1000)",
                maxLength: 1000,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "PartnerContacts",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsPrimary",
                table: "PartnerContacts",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Position",
                table: "PartnerContacts",
                type: "nvarchar(150)",
                maxLength: 150,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PreferredChannel",
                table: "PartnerContacts",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "email");

            migrationBuilder.CreateIndex(
                name: "IX_PartnerContacts_IsPrimary",
                table: "PartnerContacts",
                column: "IsPrimary");
        }
    }
}
