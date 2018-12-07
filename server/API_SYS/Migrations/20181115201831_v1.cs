using Microsoft.EntityFrameworkCore.Migrations;

namespace API_SYS.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "api");

            migrationBuilder.CreateTable(
                name: "cargos",
                schema: "api",
                columns: table => new
                {
                    idCargos = table.Column<int>(type: "int(11)", nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    cargo = table.Column<string>(unicode: false, maxLength: 45, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cargos", x => x.idCargos);
                });

            migrationBuilder.CreateTable(
                name: "departamentos",
                schema: "api",
                columns: table => new
                {
                    idDepartamento = table.Column<int>(type: "int(11)", nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    departamento = table.Column<string>(unicode: false, maxLength: 45, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_departamentos", x => x.idDepartamento);
                });

            migrationBuilder.CreateTable(
                name: "usuarios",
                schema: "api",
                columns: table => new
                {
                    idUsuarios = table.Column<int>(type: "int(11)", nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    uidUsuarios = table.Column<string>(nullable: true),
                    nome = table.Column<string>(unicode: false, maxLength: 255, nullable: false),
                    email = table.Column<string>(unicode: false, maxLength: 255, nullable: true),
                    Permissao = table.Column<int>(nullable: false),
                    cargoId = table.Column<int>(type: "int(11)", nullable: true),
                    departamentoId = table.Column<int>(type: "int(11)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_usuarios", x => x.idUsuarios);
                    table.ForeignKey(
                        name: "fkCargo",
                        column: x => x.cargoId,
                        principalSchema: "api",
                        principalTable: "cargos",
                        principalColumn: "idCargos",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "fkDepartamento",
                        column: x => x.departamentoId,
                        principalSchema: "api",
                        principalTable: "departamentos",
                        principalColumn: "idDepartamento",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "chamados",
                schema: "api",
                columns: table => new
                {
                    idChamados = table.Column<int>(type: "int(11)", nullable: false),
                    status = table.Column<string>(type: "enum('0','1','2')", nullable: false),
                    description = table.Column<string>(unicode: false, maxLength: 45, nullable: true),
                    Informations = table.Column<string>(nullable: true),
                    Alert = table.Column<int>(nullable: false),
                    usuarioId = table.Column<int>(type: "int(11)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_chamados", x => x.idChamados);
                    table.ForeignKey(
                        name: "fkUsuario",
                        column: x => x.usuarioId,
                        principalSchema: "api",
                        principalTable: "usuarios",
                        principalColumn: "idUsuarios",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                schema: "api",
                table: "cargos",
                columns: new[] { "idCargos", "cargo" },
                values: new object[,]
                {
                    { 1, "Vendedor" },
                    { 2, "Pedagogo" },
                    { 3, "Pedagogo II" },
                    { 4, "Copeira" },
                    { 5, "Gerente Financeiro" },
                    { 6, "Gerente de Tecnologia" },
                    { 7, "Programador" }
                });

            migrationBuilder.InsertData(
                schema: "api",
                table: "departamentos",
                columns: new[] { "idDepartamento", "departamento" },
                values: new object[,]
                {
                    { 1, "Financeiro" },
                    { 2, "Assessoria" },
                    { 3, "Juridico" },
                    { 4, "Tecnlogia" },
                    { 5, "Vendas" }
                });

            migrationBuilder.InsertData(
                schema: "api",
                table: "usuarios",
                columns: new[] { "idUsuarios", "cargoId", "departamentoId", "email", "nome", "Permissao", "uidUsuarios" },
                values: new object[] { 1, 7, 4, "kelvinsilva.ksv@gmail.com", "Kelvin Silva", 2, "jSM6Yak6g8XGKKI5xnfqcNNhs8B3" });

            migrationBuilder.CreateIndex(
                name: "fkUsuario_idx",
                schema: "api",
                table: "chamados",
                column: "usuarioId");

            migrationBuilder.CreateIndex(
                name: "fkCargo_idx",
                schema: "api",
                table: "usuarios",
                column: "cargoId");

            migrationBuilder.CreateIndex(
                name: "fkDepartamento_idx",
                schema: "api",
                table: "usuarios",
                column: "departamentoId");

            migrationBuilder.CreateIndex(
                name: "email_UNIQUE",
                schema: "api",
                table: "usuarios",
                column: "email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "idUsuarios_UNIQUE",
                schema: "api",
                table: "usuarios",
                column: "idUsuarios",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "chamados",
                schema: "api");

            migrationBuilder.DropTable(
                name: "usuarios",
                schema: "api");

            migrationBuilder.DropTable(
                name: "cargos",
                schema: "api");

            migrationBuilder.DropTable(
                name: "departamentos",
                schema: "api");
        }
    }
}
