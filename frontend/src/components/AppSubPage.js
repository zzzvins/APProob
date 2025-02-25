import CurrentStatus from "./ApplicationComponents/CurrentStatus";
import GitRepo from "./ApplicationComponents/GitRepo";
import ClearanceCert from "./ApplicationComponents/ClearanceCert";
import CurrentStep from "./ApplicationComponents/CurrentStep";
import RemarkPreview from "./ApplicationComponents/RemarkPreview";

export default function AppSubPage(props) {
    let remarks = props.remarks;
    let repository = props.repository
    let certificate = props.certificate
    let status = props.status
    let step = props.step

    return(
    <div className="flex flex-col w-2/3 border-racing-green border-solid border-2 relative rounded-lg my-3 p-5">
        <h1
        className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md"> Current Application </h1>

        <div className="flex flex-row">

            <div className="flex flex-col w-1/2 mr-2">
                <CurrentStatus currstatus={status}/>
                <GitRepo repo={repository}/>
                <ClearanceCert cert={certificate}/>
            </div>

            <div className="flex flex-col w-1/2 ml-2">
                <CurrentStep currstep={step}/>
                <RemarkPreview remarkdata={remarks}/>
            </div>

        </div>

    </div>
  );
}