using Microsoft.EntityFrameworkCore.Migrations;

namespace HospitalManagementMVC.Migrations
{
    public partial class dfsf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DoctorList",
                columns: table => new
                {
                    doctorId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    doctorName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DoctorList", x => x.doctorId);
                });

            migrationBuilder.CreateTable(
                name: "PatientList",
                columns: table => new
                {
                    patientId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(nullable: true),
                    lastName = table.Column<string>(nullable: true),
                    gender = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    contact = table.Column<long>(nullable: false),
                    userName = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true),
                    doctor = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientList", x => x.patientId);
                });

            migrationBuilder.CreateTable(
                name: "ProblemList",
                columns: table => new
                {
                    problemId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    problem = table.Column<string>(nullable: true),
                    patientId_fk = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProblemList", x => x.problemId);
                    table.ForeignKey(
                        name: "FK_ProblemList_PatientList_patientId_fk",
                        column: x => x.patientId_fk,
                        principalTable: "PatientList",
                        principalColumn: "patientId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PatientList_contact",
                table: "PatientList",
                column: "contact",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PatientList_email",
                table: "PatientList",
                column: "email",
                unique: true,
                filter: "[email] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_PatientList_userName",
                table: "PatientList",
                column: "userName",
                unique: true,
                filter: "[userName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ProblemList_patientId_fk",
                table: "ProblemList",
                column: "patientId_fk");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DoctorList");

            migrationBuilder.DropTable(
                name: "ProblemList");

            migrationBuilder.DropTable(
                name: "PatientList");
        }
    }
}
