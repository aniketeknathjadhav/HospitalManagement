using Microsoft.EntityFrameworkCore.Migrations;

namespace HospitalManagementMVC.Migrations.SignupPatientDalMigrations
{
    public partial class _6976 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SignupPatientList",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(nullable: true),
                    lastName = table.Column<string>(nullable: true),
                    gender = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    contact = table.Column<int>(nullable: false),
                    userName = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SignupPatientList", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SignupPatientList_contact",
                table: "SignupPatientList",
                column: "contact",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SignupPatientList_email",
                table: "SignupPatientList",
                column: "email",
                unique: true,
                filter: "[email] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_SignupPatientList_userName",
                table: "SignupPatientList",
                column: "userName",
                unique: true,
                filter: "[userName] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SignupPatientList");
        }
    }
}
