import SquareButton from "./SquareButton";
import { Link } from "react-router-dom";

export default function ApproverCard(props) {
    return(
        <div className="flex flex-col flex-grow my-2">
        <div className="flex flex-row bg-white border-new-blue-dark hover:border-new-blue transition-all border-solid border-2 rounded-lg flex-grow justify-start">
          <div className="flex flex-row bg-new-blue-dark hover:bg-new-blue  transition-all rounded-md items-center px-5 py-2 w-[50%]">
            <div className="mr-5">
                👤
            </div>
            <div className="flex flex-col font-lexend-deca justify-center">
              <div className="text-baby-powder font-bold text-cxl">{props.name}</div>
            </div>
          </div>
          <div className="flex flex-row flex-grow font-lexend-deca justify-between px-4 items-center">
            <div className="flex flex-col text-slate-800 justify-center">
              <div className="font-light">{props.email}</div>
            </div>
          </div>
        </div>
      </div>
    );
}