export default function SimpleTextBox(props) {
  return (
    <div className="bg-white rounded-lg border-solid border-new-blue-dark  transition-all font-lexend-deca font-light text-slate-800 border w-full h-[31px]">
      <input
        className="w-full h-full bg-transparent text-left px-2"

        placeholder={props.placeholder}
        value={props.value} // Add the value prop
        onChange={props.onChange} // Add the onChange prop
      />
    </div>
  );
}
