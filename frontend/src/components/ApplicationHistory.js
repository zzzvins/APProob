import ApplicationStatus from "./AppHistory/ApplicationStatus";

export default function ApplicationHistory(props) {
    let appstatuslist = props.appstatuslist;

    return(
    <div className="flex flex-col w-1/3 bg-eerie-black border-racing-green border-solid border-2 relative rounded-lg my-3 ml-3 p-5">
        <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md"> Application History </h1>

            {appstatuslist.map((appstatus, index) => {
                return (<ApplicationStatus key={index} icon={appstatus.icon} date={appstatus.date} step={appstatus.step} currentstatus={appstatus.currentstatus}/>);
            })}
    </div>
  );
}