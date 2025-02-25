
import SimpleTextBox from "../../components/SimpleTextBox";

export default function FilterApps(props) {

    return (
    <div className="flex-col border-racing-green border-solid border-2 font-lexend-deca  text-baby-powder relative rounded-lg my-5 mx-auto px-5 py-8" style={{ maxWidth: '50rem' }}>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-1/3">
            Filter By
            <br/>
            
            <div className="flex flex-row">
                <input type="radio" id="none" name="filter" value="none"/>
                <label for="none">None</label><br/>
                <input type="radio" id="date" name="filter" value="date"/>
                <label for="date">Date</label><br/>
                <input type="radio" id="adviser" name="filter" value="adviser"/>
                <label for="adviser">Adviser</label> 
            </div>

            <div className="flex flex-row">
                <input type="radio" id="step" name="filter" value="step"/>
                <label for="step">Step</label><br/>
                <input type="radio" id="status" name="filter" value="status"/>
                <label for="status">Status</label><br/>
            </div>

            
         </div>

        <div className="flex flex-col w-1/3">
            <div>
            Is Equal To
            <br/>
            <SimpleTextBox placeholder="..." />
            </div>
        </div>

        <div className="flex flex-col w-1/3">
            Sort By
            <br/>
            
            <div className="flex flex-row">
                <input type="radio" id="date" name="sort" value="date"/>
                <label for="date">Date</label><br/>
                
                <input type="radio" id="step" name="sort" value="step"/>
                <label for="step">Ascending</label><br/>
            </div>

            <div className="flex flex-row">
                <input type="radio" id="name" name="sort" value="name"/>
                <label for="name">Name</label> 
                <input type="radio" id="status" name="sort" value="status"/>
                <label for="status">Descending</label><br/>
            </div>

            <div className="flex flex-row">
                <button className="mt-6 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2">
                    Clear
                </button>
                <button className="mt-6 bg-racing-green hover:bg-red-600 text-white rounded-lg px-4 py-2">
                    Submit
                </button>
            </div>

            
         </div>
        
        
        </div>
    </div>   

    );
  }