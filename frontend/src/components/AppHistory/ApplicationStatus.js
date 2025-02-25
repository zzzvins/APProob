

export default function ApplicationStatus(props) {
  let step = props.step;
  let label;
  switch (step){
      case 1:
          label = "Pre-Adviser"
          break;
      case 2: 
          label = "Adviser"
          break;
      case 3: 
          label = "Clearance Officer"
          break;
  }

    return (
      <div className="flex bg-eerie-black border-racing-green border-solid border-2 relative rounded-lg my-3 ml-2 mr-2 text-celadon text-left font-light items-center space-x-2 p-2">
        
        <div className="items-center justify-center flex flex-row w-1/5">
            <img src={props.icon} className="w-10"/>
        </div>

        <div className="flex flex-col w-3/5">

            <h1 className={`font-lexend-deca font-bold text-baby-powder text-left text-s rounded-md`}> {props.date} </h1>

            {label}

            <br/>

            {props.currentstatus}

        </div>

        <div className="items-center justify-center flex flex-row w-1/5">
            <img src="assets/plain_arrow.png" className="w-10"/>
        </div>
    
      </div>
    );
  }
  