export default function ApplicationLabel(props) {

    //Siguro dagdag din 
    let app = props.app
    let utype = props.utype
    let name = app.name
    let date = app.date;
    let test = 0; 

    if (utype == "Approver"){
        return (
            <div>
              
              <h1 className="font-lexend-deca font-bold text-slate-800 text-left text-xl rounded-md"> {name} </h1>
              <h1 className="font-lexend-deca font-light text-slate-800 text-left text-l rounded-md"> {date} </h1>
      
            </div>
          );
    }
    else if (test == 0){ // If current application ; pls edit condition
      return (
        <div>
          
          <h1 className="font-lexend-deca text-slate-800 text-left text-xl rounded-md"> Current Application </h1>
  
        </div>
      );
    }
    else {
      return ( // If not current application, shows date of application
        <div>
          
          <h1 className="font-lexend-deca font-bold text-slate-800 text-left text-xl rounded-md"> {date} </h1>
  
        </div>
      );
    }

    
  }
  