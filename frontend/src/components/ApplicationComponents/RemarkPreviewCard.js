export default function RemarkPreviewCard(props) {
    return (
      <div className="shrink-0 w-1/3 text-sm font-light bg-new-blue border-new-blue-dark border-solid border-[1px] drop-shadow-md relative rounded-lg my-3 ml-2 mr-2 text-white text-left p-3">
        {props.date}

        <h1 className="font-lexend-deca font-bold text-m rounded-md"> 
        Step: {props.step}
        </h1>

        <hr className="h-px my-1 bg-new-blue-dark border-0"/>

        <h1 className="font-lexend-deca font-bold text-m rounded-md break-normal"> 
        Remarks
        </h1>

        {props.remarks}

      </div>
    );
  }
  