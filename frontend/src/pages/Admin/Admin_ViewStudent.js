import Drawer from "../../components/DrawerComponents/Drawer";
import ProfileCard from "../../components/ProfileCards";

export default function ViewStudent() {
    const buttons = [
        { icon: "dashboard.png", title: "Dashboard" },
        { icon: "appli.png", title: "Application" },
        { icon: "student.png", title: "Student" },
        { icon: "approver.png", title: "Approver" },
      ];

    const student = {
        name: "Juan Dela Cruz",
        studentNumber: "2018-00001",
        email: "email@testing.com",
        adviser: "Dr. Juan Dela Cruz",
    }

    return (
        <div className="flex flex-row h-screen">
        <Drawer buttons={buttons} />
        <div className="flex flex-col b border-solid border-gray-border border-2 rounded-lg flex-grow my-3 ml-3 p-6">
          <div className="font-lexend-deca text-baby-powder text-4xl ">
            Student {">"} View
          </div>
          <div className="flex flex-col flex-grow mx-96 font-lexend-deca">
            <div className="flex self-start text-baby-powder font-bold text-xl mb-3">
               {"<"} Back
            </div>
            <div className="border-solid border-gray-border border-2 rounded-lg flex flex-col p-6">
                <div className="text-baby-powder text-2xl">
                    User Information
                </div>
                <ProfileCard className="w-24" header="Name" context={student.name} />
                <ProfileCard header="Student Number" context={student.studentNumber} />
                <ProfileCard header="Email" context={student.email} />
                <ProfileCard header="Adviser" context={student.adviser} />
            </div>
          </div>
        </div>
      </div>
    );
}