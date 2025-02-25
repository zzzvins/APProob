export default function ClearanceCert(props) {
    let cert = props.cert;

    if (cert == null || cert.length == 0){
      return (
        <div className="h-fit flex flex-col w-1/3 border-gray-200 drop-shadow-xl bg-white text-slate-800 border-solid border-2 relative rounded-lg ml-3 p-5">
              
          <h1 className="font-lexend-deca font-bold text-left text-xl rounded-md p-1"> Clearance Certificate </h1>
          <div className="flex flex-col items-center justify-center m-auto w-full">
                    <div className="box-border border-slate-800 border-2 w-32 h-32 p-4"></div>
                    
                    <h3 className="font-lexend-deca text-slate-800 text-center text-l rounded-md p-1 font-light"> No certificate. </h3>
                </div>
  
        </div>
      );
    }
    else {
      return (
        <div className="h-fit flex flex-col w-1/3 border-gray-200 drop-shadow-xl bg-white text-slate-800 border-solid border-2 relative rounded-lg ml-3 p-5">
              
          <h1 className="font-lexend-deca font-bold text-left text-xl rounded-md p-1"> Clearance Certificate </h1>
          <div className="flex flex-col font-lexend-deca font-light items-center justify-center mx-2">
  
            <a href={cert}> Download </a> 
  
          </div>
  
        </div>
      );
    }

    
  }
  