import { useState } from "react";

import DrawerButton from "./DrawerComponents/DrawerButton";
import { getButtonInfo } from "./DrawerData";

export default function Drawer(props) {
  const [expand, setExpand] = useState(false); //initial state is false
  // let buttons = getButtonInfo(props.userType); // pass the param
  let buttons = getButtonInfo("admin");

  return (
    <div
      className={`${
        expand ? "w-80" : "w-20"
      } flex flex-col pt-8 pl-4 duration-300  bg-eerie-black border-racing-green border-solid border-2 relative rounded-lg my-3 ml-3`}
    >
      {/* Image the is clicked to expand on unexpand the sidebar */}
      <img
        onClick={() => setExpand(!expand)} //sets the value of expand
        src="assets/drawer_icon.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7  rounded-full border-2 border-racing-green ${
          expand && "rotate-180 duration-300"
        }  ${!expand && "rotate-360 duration-300"}`}
      />

      {buttons.map((button, index) => (
        <DrawerButton
          key={index}
          expand={expand}
          icon={button.icon}
          title={button.title}
          onClick={{/*() => handleButtonClick(button.route)*/}}
        />
      ))}
    </div>
  );
}
