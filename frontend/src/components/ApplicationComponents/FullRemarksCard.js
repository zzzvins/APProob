export default function FullRemarksCard(props) {
    return (

        <div className="flex border-gray-200 border-solid border-2 relative rounded-lg my-3 ml-2 mr-2 text-left p-3"> 

            <div className="w-2/7 bg-new-blue border-new-blue-dark border-solid border-2 text-white relative rounded-lg my-3 ml-2 mr-2 p-3">
                
                
                <h1 className="font-lexend-deca font-bold text-l rounded-md"> 
                Date
                </h1>
                
                {props.date}

                <hr className="h-px my-1 bg-new-blue-dark border-0"/>

                <h1 className="font-lexend-deca font-bold text-l rounded-md"> 
                    Step
                </h1>

                {props.step}

                <hr className="h-px my-1 bg-new-blue-dark border-0"/>

                <h1 className="font-lexend-deca font-bold text-l rounded-md">
                    Author
                </h1>

                {props.author}

            </div>

            <div className="text-slate-800"> 

            {props.remarks}

            </div>

            

        </div>

        
      
    );
  }
  