import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center p-12 rounded-xl  border-solid border-[1px] bg-white border-gray-200 drop-shadow-lg">
        <div className="text-xl my-4">👍</div>
        <div>
          <h2 className="text-2xl mb-4 font-lexend-deca text-new-blue">APProob</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link
            to="/login"
            className="font-lexend-deca my-4 bg-new-blue hover:bg-new-blue-light hover:drop-shadow-lg focus:bg-new-blue-dark transition-all text-white font-bold py-2 px-16 rounded-full"
          >
            Login
          </Link>
          <hr className="px-32 my-3"/>
          <div>
            <p className="font-lexend-deca font-light text-white-300 text-center my-4">No account yet?</p>
          </div>
          <Link
            to="/signup"
            className="font-lexend-deca bg-white border-gray-200 border-solid border-2 hover:drop-shadow-lg focus:bg-gray-400 transition-all text-black font-bold py-2 px-14 rounded-full"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
