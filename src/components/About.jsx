import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#8C8C8C]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi. I'm Kaushal, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-justify">
            <p>
              I am passionate about building things that helps me make things
              easier. I specialize in creating softwares ranging from individual
              and small-business all the way up to large enterprise
              corporations. What would you do if you had a software expert
              available at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
