import React from "react";
import HeroImg from "../../assets/images/hero.png";
import CountUp from "react-countup";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-scroll";

const Hero = () => {
  const [text] = useTypewriter({
    words: [" Aventureiro!", " de Software."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      className="container pt-5 sm:pt-0 sm:w-full lg:flex items-center font-titlefont mb-20 sm:mb-[220px] pb-0"
      id="home"
    >
      <div className="lg:hidden lg:w-1/2 mt-10 md:max-w-[600px] mx-auto flex justify-center items-center  sm:items-center sm:justify-center">
        <figure className=" flex items-center justify-center hover:scale-110 duration-500">
          <img src={HeroImg} alt="" />
        </figure>
      </div>
      <div className="lg:w-[60%] container-flex flex-col gap-5 mt-10">
        <div className="flex flex-col gap-5">
          <h1 className="lg:text-[40px] text-[24px] sm:text-[30px] md:text-[38px] font-bold text-headingColor text-center dark:text-textDark leading-7  lg:leading-[3rem] sm:leading-none lg:text-center lg:mt-10 ">
            <span className="inline-block ">Bem-vindo ao Universo do</span>
            <br />
            <span className="text-primaryColor capitalize leading-3 lg:text-[40px] relative">
              {"\n"} João Carlos
            </span>{" "}
            um{" "}
            {(window.innerWidth < 767 && window.innerWidth > 375) ||
            window.innerWidth <= 1535 ? (
              <br />
            ) : (
              ""
            )}{" "}
            Desenvoldedor
            <span className="sm:leading-[0px] leading-5">{text}</span>
            <Cursor
              cursorBlinking={true}
              cursorStyle="|"
              cursorColor="#5C00F1"
            />
          </h1>
          <p className="text-[18px] md:text-[20px] dark:text-textDark font-normal text-center lg:text-center leading-6 tracking-wide mt-0 max-w-[700px] mx-auto">
            Dá uma olhada nesse carinha da foto aí{" "}
            {window.innerWidth > 1024 ? "do lado!" : "em cima!"} Sim, sou eu,
            desbravando trilhas, que mais parece estar curtindo uma trilha
            incrível em meio a uma paisagem de tirar o fôlego. Mas espere aí,
            não se engane pela aparência serena, também estava preocupado com o
            bug em produção da noite passada.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-delay="200"
            className="flex items-center gap-5 mt-7 "
          >
            <Link
              to="history"
              smooth={true}
              offset={-80}
              duration={500}
              className="group text-smallTextColor font-[700] text-[18px]  border-primaryColor text-center dark:text-textDark cursor-pointer mx-auto"
            >
              <p className="">
                Deixa eu te contar um pouco da minha história até chegar nesse
                precioso bug.{" "}
              </p>

              <button className="mt-10 arrow">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:w-1/2 max-w-[650px] sm:w-1/2 mt-10 w-full lg:flex justify-center items-center sm:items-center sm:justify-center">
        <figure className="flex items-center justify-center hover:scale-110 duration-500">
          <img src={HeroImg} alt="" />
        </figure>
      </div>
      <div className="hidden z-10 lg:flex fixed flex-col top-[35%] lg:right-[0px]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] rounded-[16px]  duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-50 pr-2 "
              target="blank"
              href="https://www.linkedin.com/in/jo%C3%A3o-carlos-pinheiro/"
            >
              <FaLinkedin size={30} />
              Linkedin
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] rounded-[16px] duration-300 bg-darkMode dark:bg-black">
            <a
              className="flex justify-between items-center w-full text-gray-50 dark:text-textDark pr-2 "
              target="blank"
              href="https://github.com/joaocpinheiro"
            >
              <FaGithub size={30} />
              GitHub
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] rounded-[16px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-50 pr-2"
              href="mailto:joaocpinheiro03@gmail.com"
            >
              <HiOutlineMail size={30} />
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
