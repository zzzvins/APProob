export default function Card_HorizontalText(props) {

    return (
    <div className="flex-col flex-grow bg-new-blue hover:bg-new-blue-dark transition-all border-new-blue-dark border-solid border-[1px] relative rounded-lg my-5 px-5 py-8 drop-shadow-md">
        <div className="flex justify-between">
          <h5 className="font-lexend-deca text-white text-2xl rounded-md">{props.leading}</h5>
          <h5 className="font-lexend-deca font-bold text-white text-left text-l rounded-md text-2xl">{props.trailing}</h5>
        </div>
    </div>   

    );
  }