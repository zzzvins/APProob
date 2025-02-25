export default function DrawerButton(props) {
  return (
    <div className="flex items-center space-x-4 pb-5" onClick={props.onClick}>
      {/* alligns the image and h1 to the center*/}
      <img
        src={props.icon}
        className={`cursor-pointer w-10  duration-300 ${
          !props.expand && "hover:bg-slate-800 rounded-md p-1"
        }`}
        alt="Logo"
      />
      <h1
        className={`origin-left font-lexend-deca font-bold text-baby-powder text-xl hover:bg-slate-800 duration-300 cursor-pointer hover:bg-new-blue-l rounded-md ${
          !props.expand && "scale-0"
        } pl-5 pr-5 pt-2 pb-2`}
      >
        {props.title}
      </h1>
    </div>
  );
}
