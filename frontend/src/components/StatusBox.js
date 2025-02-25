export default function StatusBox(props) {
    let status = props.status;

    if (status == "Open" || status == "Cleared"){
        return(
            <div className="box-border bg-[#55c266] border-solid border-[1px] border-new-blue-dark w-1 h-1 p-3 ml-2 rounded-md"></div>
        )
    } else {
        return(
            <div className="box-border bg-new-red border-solid border-[1px] border-red-flag w-1 h-1 p-3 ml-2 rounded-md"></div>
        )
    }
    
}