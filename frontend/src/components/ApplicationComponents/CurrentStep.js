export default function CurrentStep(props) {
    let currstep = props.currstep;
    let label;
    switch (currstep){
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

    return(
    <div className="flex flex-col w-full text-white font-light bg-new-blue border-new-blue-dark border-solid drop-shadow-md border-[1px] relative rounded-lg my-2 ml-1 p-3">

        <div className="flex flex-row justify-between">
            <h1 className="font-lexend-deca font-bold text-left text-l rounded-md w-2/3 p-1"> Step </h1>
            <div className="p-1 text-l"> # {currstep} </div>
        </div>
        <div className="flex flex-row justify-between">
            <div className="p-1 text-l">
                {label}
            </div>
        </div>

    </div>
  )
}