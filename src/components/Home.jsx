import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#8C8C8C]">Hi, I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kaushal Rijal
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          You know I&apos;m something of a programmer myself.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-justify">
          I love to code and I have been coding since I was 12. My cousin first
          introduced me to HTML and there was no looking back. Five years later,
          I now know 5 different programming languages and have build quite a
          few programs. I won't go into my life history as there is not so much
          yet and you might not be interested.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#8C8C8C] hover:border-[#8c8c8c]">
              Read More{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
