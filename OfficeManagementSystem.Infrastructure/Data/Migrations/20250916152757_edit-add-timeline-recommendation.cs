﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagementSystem.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class editaddtimelinerecommendation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Recommendations",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DueDate",
                table: "Recommendations",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Recommendations");

            migrationBuilder.DropColumn(
                name: "DueDate",
                table: "Recommendations");
        }
    }
}
