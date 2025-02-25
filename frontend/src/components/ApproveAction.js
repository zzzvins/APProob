

export default function ApproveAction(props) {

    return (
      <div className="flex flex-col h-full w-1/3 border-racing-green border-solid border-2 relative rounded-lg my-3 ml-3 p-5">
        
        <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md p-1"> Actions </h1>
        <div className="flex flex-col items-center justify-center mx-2">

           <button className="w-full border-solid border-2 bg-eerie-black border-racing-green text-celadon text-m font-bold m-2 px-2 rounded-xl cursor-pointer hover:bg-[#344338]"> Approve </button>
           <hr className="h-px my-1 bg-racing-green border-0"/>
           <textarea placeholder="Remarks..." rows="4" className="block p-2.5 w-full h-full bg-transparent text-racing-green text-left border-solid border-racing-green rounded-lg border-2"></textarea>
           
           <button className="w-full border-solid border-2 bg-eerie-black border-racing-green text-celadon text-m font-bold m-2 px-2 rounded-xl cursor-pointer hover:bg-[#344338]"> Return With Remarks </button>
        </div>

      </div>
    );
  }
  