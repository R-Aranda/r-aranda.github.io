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
              Upon graduating from Union College in 2017 with a degree in
              Geology, I began working for a geotechnical engineering and
              consulting firm in Boston. After working for five years with the
              same company, I decided to completely switch careers and follow my
              passion. I then enrolled at Launch Academy, an 18-week full-stack
              developer course focused on developing skills in client and server
              side languages and frameworks such as Ruby on Rails and React.js.
              Since then, I have continued to build personal projects and
              explore other industry standard languages and technologies such as
              Python, Typescript, Node.js and Django.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
