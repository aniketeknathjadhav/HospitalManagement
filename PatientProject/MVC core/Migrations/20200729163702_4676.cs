using Microsoft.EntityFrameworkCore.Migrations;

namespace HospitalManagementMVC.Migrations
{
    public partial class _4676 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PatientList",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientList", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ProblemList",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    patientProblem = table.Column<string>(nullable: true),
                    patientid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProblemList", x => x.id);
                    table.ForeignKey(
                        name: "FK_ProblemList_PatientList_patientid",
                        column: x => x.patientid,
                        principalTable: "PatientList",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProblemList_patientid",
                table: "ProblemList",
                column: "patientid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProblemList");

            migrationBuilder.DropTable(
                name: "PatientList");
        }
    }
}
