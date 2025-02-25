/**
 * Consists of the data for the drawer !!!unused
 */

const adminButtons = [
    { icon: "dashboard.png", title: "Dashboard", route: ""},
    { icon: "profile.png", title: "Profile", route: "" },
    { icon: "appli.png", title: "Application", route:"" },
    { icon: "student.png", title: "Student", route:"" },
    { icon: "approver.png", title: "Approver", route:""},
  ];

const approverButtons = [
    { icon: "dashboard.png", title: "Dashboard", route: ""},
    { icon: "profile.png", title: "Profile", route: "" },
    { icon: "appli.png", title: "Application", route:"" },
  ];

const studentButtons = [
    { icon: "dashboard.png", title: "Dashboard", route: ""},
    { icon: "profile.png", title: "Profile", route: "" },
    { icon: "appli.png", title: "Application", route:"" },
];

const getButtonInfo = (userType) => {
    switch (userType) {
        case "admin":
            return adminButtons;
        case "approver":
            return approverButtons;
        case "student":
            return studentButtons;
        default:
            return studentButtons;
    }
};

export {getButtonInfo} ;