using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API_SYS.Migrations
{
    public partial class v3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "criado",
                schema: "api",
                table: "chamados",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "ultimaAtualizacao",
                schema: "api",
                table: "chamados",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "criado",
                schema: "api",
                table: "chamados");

            migrationBuilder.DropColumn(
                name: "ultimaAtualizacao",
                schema: "api",
                table: "chamados");
        }
    }
}
