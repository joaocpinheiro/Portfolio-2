import React from "react";
import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css.png";
import JavaScript from "../../assets/images/javascript.png";
import TypeScript from "../../assets/images/typescript.png";
import ReactImg from "../../assets/images/react.png";
import Tailwind from "../../assets/images/tailwind.png";
import GitHubDark from "../../assets/images/github-dark.png";
import GitHubLight from "../../assets/images/github-light.png";
import Git from "../../assets/images/git.png";

const Skills = () => {
  return (
    <section
      id="services"
      className=" container w-full h-full text-head  pt-5 pb-16"
    >
      {/* ==== Container ==== */}
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="2000"
        className="container mx-auto p-4 flex flex-col justify-center max-w-[1100px] h-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-primaryColor text-headingColor dark:text-textDark rounded-lg">
            Tecnologias
          </p>
          <p className="py-4 ">
            Estas são as tecnologias que eu tenho trabalhado
          </p>
        </div>

        <div className="w-[90%] sm:w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 mx-auto sm:mx-0 sm:container ">
          <div className="shadow-md shadow-[#4E4E4E]   dark:shadow-primaryColor hover:scale-110 duration-500">
            <img
              className="sm:sm:w-20 w-12 mx-auto"
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#4E4E4E]  dark:shadow-primaryColor  hover:scale-110 duration-500">
            <img className="sm:w-20 w-12 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#4E4E4E]  dark:shadow-primaryColor  hover:scale-110 duration-500">
            <img
              className="sm:w-20 w-12 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#4E4E4E]  dark:shadow-primaryColor  hover:scale-110 duration-500">
            <img
              className="sm:w-20 w-12 mx-auto"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#4E4E4E]  dark:shadow-primaryColor  hover:scale-110 duration-500">
            <img
              className="sm:w-20 w-12 mx-auto"
              src={TypeScript}
              alt="HTML icon"
            />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-[#4E4E4E]  dark:shadow-primaryColor  hover:scale-110 duration-500">
            <img
              className="sm:w-20 w-12 mx-auto"
              src={Tailwind}
              alt="HTML icon"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#4E4E4E]  dark:shadow-primaryColor  hover:scale-110 duration-500">
            <img className="sm:w-20 w-12 mx-auto" src={Git} alt="HTML icon" />
            <p className="my-4 ">Git</p>
          </div>
          <div className="shadow-md shadow-[#4E4E4E]  dark:shadow-primaryColor  hover:scale-110 duration-500">
            <img
              className="sm:w-20 w-12 mx-auto"
              src={GitHubLight}
              alt="HTML icon"
            />
            <p className="my-4 ">GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
