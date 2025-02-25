import PendingAppCard from "./PendingAppCard";
import TotalPending from "./TotalPending";
import SearchBar from "./SearchBar";



export default function PendingList(props) {
    let pendingapps = props.pendingapps

    return (
        <div>
            {pendingapps.map((pending, index) => {
                return (<PendingAppCard key={index} name={pending.name} studno={pending.studno} date={pending.date} status={pending.status} step={pending.step}/>);
            })}
        </div>
    );
  }