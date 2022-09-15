import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1f2833] text-[#c5c6c7]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#66FCF1]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Rupert.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              accusamus nesciunt error veritatis, recusandae pariatur, suscipit
              quo ab tempore quidem ex porro asperiores molestiae doloribus quod
              dolores quaerat omnis cumque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
