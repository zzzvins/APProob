import ApplicationStatus from "./ApplicationStatus";

export default function ApplicationHistory(props) {
    let appstatuslist = props.appstatuslist;

    if (appstatuslist.length == 0){
        return(
            <div className="flex flex-col w-1/3 border-racing-green border-solid border-2 relative rounded-lg my-3 ml-3 p-5">
                <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md"> Application History </h1>
                <div className="flex flex-col items-center justify-center m-auto w-full">
                    <div className="box-border border-racing-green border-2 w-32 h-32 p-4 ml-2"></div>
                    
                    <h3 className="font-lexend-deca text-celadon text-center text-l rounded-md p-1 font-light"> No past applications. </h3>
                </div>
            </div>
          );
    }
    else {
        return(
            <div className="flex flex-col w-1/3 border-racing-green border-solid border-2 relative rounded-lg my-3 ml-3 p-5">
                <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md"> Application History </h1>
        
                    {appstatuslist.map((appstatus, index) => {
                        return (<ApplicationStatus key={index} icon={appstatus.icon} date={appstatus.date} step={appstatus.step} currentstatus={appstatus.currentstatus}/>);
                    })}
            </div>
          );
    }

}