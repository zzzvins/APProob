import StatusBox from "../../components/StatusBox";

export default function CurrentStatus(props) {
    let currstatus = props.currstatus;

    return(
    <div className="flex flex-col w-full font-light text-white bg-new-blue border-new-blue-dark border-solid drop-shadow-md border-[1px] relative rounded-lg my-2 mr-1 p-3">

        <h1 className="font-lexend-deca font-bold text-left text-l rounded-md p-1 w-2/3 "> Status </h1>
        <div className="flex flex-row">
            <StatusBox status={currstatus}/>
            <div className="px-2 py-1 text-l">
                {currstatus}
            </div>
        </div>

    </div>
  )
}