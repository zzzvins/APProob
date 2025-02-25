import CurrentStatus from "./CurrentStatus";
import GitRepo from "./GitRepo";
import ClearanceCert from "./ClearanceCert";
import CurrentStep from "./CurrentStep";
import RemarkPreview from "./RemarkPreview";
import ApplicationLabel from "./ApplicationLabel";
import SimpleTextBox from "../SimpleTextBox";

import React, { useState } from "react";


export default function AppSubPage(props) {

    //Pa-edit na lang din ng params di ako sure dito
    let application = props.application
    let usertype = props.usertype
    let link = application.link

    let remarks = application.remarks;
    let certificate = application.certificate
    let status = application.status
    let step = application.step

    const [showComponent, setShowComponent] = useState(false); // State variable to track component visibility
    
    // Pacheck na lang din kasi iba ata perms ng approver/admin dito; as in di sila nagpapasa ng repo diba
    const handleCreateClick = () => {
        setShowComponent(!showComponent); // Show the component when clicked

    };

    if (link==null || link.length == 0){ // No repository yet; need atang ipasa yung buong listahan ng application para maaccess yung total no. ng applications
        if (showComponent==false){
            return(
                <div className="h-screen flex flex-col w-2/3 border-new-blue-dark border-solid border-2 relative rounded-lg my-3 p-5">
                    <h1
                    className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md"> Current Application </h1>
            
                    <div className="flex flex-col items-center justify-center m-auto w-full">
                        <div className="box-border border-new-blue-dark border-2 w-32 h-32 p-4 ml-2"></div>
                        <h1 className="font-lexend-deca font-bold text-baby-powder text-center text-3xl rounded-md p-1"> No Active Application </h1>
                        
                        <h3 className="font-lexend-deca text-celadon text-center text-l rounded-md p-1 font-light"> Create one by clicking the button below. </h3>
                        <button className="border-solid border-2 bg-eerie-black border-new-blue-dark text-celadon text-m font-bold m-2 px-6 rounded-xl cursor-pointer hover:bg-[#344338]" onClick={handleCreateClick}> Create Application </button>
                    </div>
                </div>
            )
        } 
        else { // Textbox to submit a new github link, given that there is no current application yet
            return (
                <div className="h-screen flex flex-col w-2/3 border-new-blue-dark border-solid border-2 relative rounded-lg my-3 p-5">
            
                    <div className="flex flex-col items-center justify-center m-auto w-full">
                        <SimpleTextBox/>
                        <div className="flex flex-row">
                            
                        <button className="border-solid border-2 bg-eerie-black border-new-blue-dark text-celadon text-m font-bold m-2 px-6 rounded-xl cursor-pointer hover:bg-[#344338]" onClick={handleCreateClick}> Back </button>
                        
                        <button className="border-solid border-2 bg-eerie-black border-new-blue-dark text-celadon text-m font-bold m-2 px-6 rounded-xl cursor-pointer hover:bg-[#344338]" onClick={handleCreateClick}> Submit </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    else { // Shows current application
        return(
            <div className="flex flex-col w-2/3 border-gray-200 drop-shadow-xl bg-white text-slate-800 border-solid border-2 relative rounded-lg p-5">
                <div className="flex flex-row justify-between">   
                    <ApplicationLabel app={application} utype={usertype}/>
                    <button className="border-solid border-2 bg-new-red border-red-flag text-baby-powder text-m font-bold m-2 px-6 rounded-xl cursor-pointer hover:bg-red-800"> Close Application </button>
                        
                </div>
        
                <div className="flex flex-col">

                    <div className="flex flex-row">
                        <CurrentStatus currstatus={status}/>
                        <CurrentStep currstep={step}/>
                    </div>
        
                    <div className="flex flex-row">
                        <GitRepo repo={link}/>
                    </div>
        
                    <div className="flex flex-row">
                        <RemarkPreview remarkdata={remarks}/>
                    </div>
        
                </div>
        
            </div>
          );
    }

    
}