export default function NameCard(props) {
    return (
        <div className="flex-col text-white bg-new-blue border-new-blue-dark border-solid border-2 relative rounded-lg mb-3 mr-auto px-5 py-3">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h5 className="font-lexend-deca font-bold text-sm rounded-md">Name</h5>
            <div className="flex items-center border-gray-200 border-solid border-2  rounded-2xl px-1">
              <span className="font-lexend-deca text-xs">{props.userType}</span>
            </div>
          </div>
          <div className="flex">
            <p className="font-lexend-deca = text-xl text-center">{props.name}</p>
          </div>
        </div>
      </div>

    );
  }