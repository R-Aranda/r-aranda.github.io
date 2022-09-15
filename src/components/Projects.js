import React from "react";

const Projects = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#c5c6c7] bg-[#1f2833]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#66FCF1]">
            Projects
          </p>
          <p className="py-4">Check out some of my recent projects.</p>
        </div>
        <div>
          <div>
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
