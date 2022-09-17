import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#1f2833]">
      <div className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">
        <p className="text-[#c5c6c7] ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#66FCF1]">
          Rupert Aranda.
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#c5c6c7]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#c5c6c7] padding-4 max-w-[700px]">
          I've always had a passion for building things and love to work on
          products that are made to help people. I have experience working with
          Ruby on Rails, React, Redux, and many other technologies and
          frameworks. Check out some of my latest projects below or feel free to
          shoot me an email!
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
