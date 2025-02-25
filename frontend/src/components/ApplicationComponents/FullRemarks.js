import FullRemarksCard from "./FullRemarksCard";

export default function FullRemarks(props) {
    let remarkdata = props.remarkdata;

    return(
    <div className="h-screen flex flex-col border-solid border-2 border-gray-200 relative rounded-lg my-3 p-3">

        <div className="flex flex-row items-center justify-between">
            <h1 className="font-lexend-deca text-slate-800 text-left text-xl rounded-md p-1 w-2/3 "> Remark </h1>
            <button className="border-solid border-2 border-gray-200 text-slate-800 text-xs py-1/2 px-2 rounded-2xl cursor-pointer"> View All </button>
        </div>
        
        <div className="overflow-y-scroll">
            {remarkdata.map((remdata, index) => {
                return (<FullRemarksCard key={index} date={remdata.date} step={remdata.step} author={remdata.author} remarks={remdata.remarks}/>);
            })}
        </div>
            
    </div>
  )
}