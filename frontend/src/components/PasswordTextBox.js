export default function PasswordTextBox(props) {
  return (
    <div className="relative w-[396px]">
      <div className="bg-white font-lexend-deca font-light rounded-lg border-solid border-new-blue-dark border w-full h-[31px]">
        <input
          className="w-full h-full bg-transparent text-slate-800 text-left px-2"
          style={{
            outline: "none",
            font: "300 16px 'Lexend', sans-serif",
          }}
          placeholder="Password"
          type="password"
          value={props.value} // Add the value prop
          onChange={props.onChange} // Add the onChange prop
        />
      </div>
    </div>
  );
}
