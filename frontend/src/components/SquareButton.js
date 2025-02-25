import React from "react";

export default function SquareButton(props) {
  return (
    <button
      className="w-11 h-11 bg-new-blue-dark hover:bg-new-blue transition-all hover:drop-shadow-md text-white rounded-lg flex items-center justify-center ml-4"
      onClick={props.onClick}
    > 
      {props.icon}
    </button>
  );
}
