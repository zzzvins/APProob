import { useState, useEffect } from "react";
import DrawerButton from "./DrawerButton";
import { useNavigate } from "react-router-dom";
import { LogoutIcon } from '@heroicons/react/solid';

import Cookies from "universal-cookie";

export default function Drawer(props) {
  const [expand, setExpand] = useState(false); //initial state is false
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);
  let buttons = props.buttons;

  const cookies = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleButtonClick = (route) => {
    if (props.onButtonClick) {
      props.onButtonClick(route);
    }
  };

  const logout = () => {
    if (!storedUser) return undefined;
    navigate("/");
    cookies.remove("authToken");
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <div
      className={`${
        expand ? "w-72" : "w-20"
      } flex flex-col pt-8 pl-4 duration-300 bg-new-blue border-new-blue-light drop-shadow-md border-solid border-[1px] relative rounded-lg my-3 ml-3`}
    >
      {/* Image that is clicked to expand or unexpand the sidebar */}
      <img
        onClick={() => setExpand(!expand)}
        src="assets/drawer_icon.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full  ${
          expand && "rotate-180 duration-300"
        } ${!expand && "rotate-360 duration-300"}`}
      />

      {buttons.map((button, index) => {
        return (
          <DrawerButton
            key={index}
            expand={expand}
            icon={button.icon}
            title={button.title}
            onClick={() => handleButtonClick(button.route)}
          />
        );
      })}

      {expand && user && (
        <>
         <hr className=" mr-4 border-new-blue-dark" style={{ marginTop: 'auto' }}></hr>
          <h1 className="text-white text-sm  font-bold font-lexend-deca duration-500 mt-2">
            SIGNED IN AS
          </h1>
          <h1 className="text-white text-m  duration-500 mt-1">{user.email}</h1>
          
          <div className="flex items-center border-new-blue-dark border-solid border-2 rounded-2xl px-1 mt-2" style={{ width: 'fit-content' }}>
              <span className="font-lexend-deca font-bold text-white text-xs">{user.userType.toUpperCase()}</span>
           </div>
          
           <div className="flex items-center">
              <button
                type="button"
                onClick={logout}
                className="flex items-center text-white text-m font-bold font-lexend-deca mb-3 mr-5 mt-3 duration-500"
              >
                <LogoutIcon className="h-5 w-5 mr-2" />
                Log Out
              </button>

  
          </div>
        </>
        
      )}
    </div>
  );
}
