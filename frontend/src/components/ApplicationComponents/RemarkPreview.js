import RemarkPreviewCard from "./RemarkPreviewCard";

export default function RemarkPreview(props) {
    let remarkdata = props.remarkdata;

    if (remarkdata.length == 0){
        return(
            <div className="h-full w-full flex flex-col bg-new-blue border-new-blue-dark text-white  border-solid  drop-shadow-md border-[1px] relative rounded-lg my-3 p-3">
        
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-lexend-deca font-bold text-white text-left text-l rounded-md p-1 w-2/3 "> Remark </h1>
                    <button className="border-solid border-2 bg-new-blue border-new-blue-dark text-white  text-xs py-1/2 px-2 rounded-2xl cursor-pointer"> View All </button>
                </div>
                <div className="flex flex-col items-center justify-center m-auto w-full">
                    <h3 className="font-lexend-deca text-white text-center text-m rounded-md p-1 font-light"> No Remarks </h3>
                </div>
                
                    
            </div>
          )
    }
    else {
        return(
            <div className="h-full flex flex-col bg-new-blue border-new-blue-dark text-white  border-solid drop-shadow-md border-[1px] relative rounded-lg my-3 p-3">
                
                <div className="flex flex-row items-center justify-between">
                    <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-l rounded-md p-1 w-2/3 "> Remark </h1>
                    <button className="border-solid border-[1px] bg-new-blue border-new-blue-dark text-white n text-xs py-1/2 px-2 rounded-2xl cursor-pointer"> View All </button>
                </div>
                
                <div className="flex flex-row overflow-x-scroll">
                    {remarkdata.map((remdata, index) => {
                        return (<RemarkPreviewCard key={index} date={remdata.date} step={remdata.step} remarks={remdata.remarks}/>);
                    })}
                </div>
                    
            </div>
          )
    }

    
}