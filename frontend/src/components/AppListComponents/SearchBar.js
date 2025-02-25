
import SimpleTextBox from "../../components/SimpleTextBox";

export default function SearchBar(props) {
    return (
    <div className="flex-col border-racing-green border-solid border-2 relative rounded-lg my-5 mx-auto px-5 py-8" style={{ maxWidth: '50rem' }}>
        
        <SimpleTextBox placeholder="Search..." />
        <button
          className="mt-6 bg-racing-green hover:bg-red-600 text-white rounded-lg px-4 py-2"
        >
            Filter
        </button>
        <button
          className="mt-6 bg-racing-green hover:bg-red-600 text-white rounded-lg px-4 py-2"
        >
            Search
        </button>
    </div>   

    );
  }