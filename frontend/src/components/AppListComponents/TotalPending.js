

export default function TotalPending(props) {
    let count = props.count

    return (
    <div className="flex-col border-racing-green border-solid border-2 relative rounded-lg my-5 mx-auto px-5 py-8" style={{ maxWidth: '50rem' }}>
        <div className="flex justify-between">
          <h5 className="font-lexend-deca text-baby-powder text-2xl rounded-md">Total Pending Applications</h5>
          <h5 className="font-lexend-deca font-bold text-celadon text-left text-l rounded-md ">{count}</h5>
        </div>
    </div>   

    );
  }