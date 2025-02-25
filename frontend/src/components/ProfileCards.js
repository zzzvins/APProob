export default function ProfileCard(props) {
    return (
        <div className="flex flex-col flex-grow bg-new-blue border-new-blue-dark text-white border-solid border-2 relative rounded-lg my-2 px-5 py-3"  >
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h5 className="font-lexend-deca font-bold text-sm rounded-md">{props.header}</h5>
          </div>
          <div className="flex">
            <p className="font-lexend-deca text-xl text-center">{props.context}</p>
          </div>
        </div>
      </div>

    );
  }