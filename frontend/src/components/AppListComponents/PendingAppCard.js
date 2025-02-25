import StatusBox from "../../components/StatusBox";

export default function PendingAppCard(props) {
    let name = props.name;
    let studno = props.studno;
    let date = props.date;
    let status = props.status; 
    let step = props.step;


    return (
    <div className="flex-col border-racing-green border-solid border-2 font-lexend-deca  text-baby-powder relative rounded-lg my-5 mx-auto px-5 py-8" style={{ maxWidth: '50rem' }}>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            {name}
            <br/>
            {studno} {date}

            
            </div>
        <div className="flex flex-col">
            Status
            <br/>
            <div className="flex flex-row"><StatusBox status={status}/>{status}</div>
            
            
            </div>
            <div className="flex flex-col">
            Step
            <br/>
            {step}
            
            </div>
        </div>
    </div>   

    );
  }