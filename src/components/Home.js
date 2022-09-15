import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className=" w-full h-screen bg-[#1f2833]">
      <div className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">
        <p className="text-[#c5c6c7]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#66FCF1]">
          Rupert Aranda.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#c5c6c7]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#c5c6c7] padding-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint
          exercitationem saepe vitae sapiente incidunt, blanditiis, unde itaque
          vero quos eaque et odio voluptatem rem quis nesciunt assumenda
          inventore modi!
        </p>
        {/* <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-400 hover:border-purple-400">
            View Work
            <span>
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
