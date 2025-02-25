import React from "react";
import axios from "axios";

export default function GitRepo(props) {
  const repo = props.repo;

  const handleSubmit = async () => {
    try {
      const data = {
        studentNumber: props.studentNumber,
        link: repo,
      };

      await axios.post("http://localhost:3001/submit-application", data);

      // Handle the successful submission, such as showing a success message or updating the UI
    } catch (error) {
      console.error(error);
      // Handle errors if necessary
    }
  };

  return (
    <div className="flex flex-col border-racing-green border-solid border-2 relative rounded-lg my-3 p-3">
      <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md p-1">
        Github Repository
      </h1>

      <div className="flex flex-col items-center justify-center mx-2">
        <p className="w-full text-center text-gray-600 mb-2">{props.repo}</p>
        <button
          className="w-full border-solid border-2 bg-eerie-black border-racing-green text-celadon text-m font-bold m-2 px-2 rounded-xl cursor-pointer hover:bg-[#344338]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
