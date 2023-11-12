import React from "react";
import aboutImg from "../../assets/images/AboutImg.png";
import { FaAward } from "react-icons/fa";
import local from "../../assets/images/local.png";

const About = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="2000"
      className="container lg:max-w-[1400px] z-1"
    >
      <div className="flex z-1 justify-center">
        <h2 className="inline-block mb-20 mt-0 text-4xl font-bold border-b-4 border-primaryColor text-headingColor dark:text-textDark rounded-lg">
          Sobre mim
        </h2>
      </div>

      <div className="sm:grid z-1 sm:grid-cols-2 gap-[10%]">
        <div className="w-full h-full min-w-[320px] min-h-[200px] aspect-square rounded-[2rem] grid place-items-center">
          <div className="sm:basis-1/2">
            <img src={aboutImg} alt="about image" />
          </div>
        </div>

        <div className="lg:mr-10 z-1 mr-0">
          <div className="flex items-center justify-center gap-[1rem]">
            <article className=" bg-primaryColor border-[1px] border-transparent rounded-[1rem] p-[1rem] text-center mt-5 sm:mt-0 text-white">
              <h5 className="flex justify-center items-center text-[18px]">
                <img src={local} alt="local" className="w-[32px]" />
                Florianópolis - SC
              </h5>
            </article>
          </div>
          <div className="z-1 basis-1/2">
            <div className=" h-full flex items-center justify-center">
              <p className="text-center mt-7 relative before:block before:content-[''] before:w-3 before:h-[3px] before:rounded-[15px] before:bg-primaryColor before:absolute before:-left-3 before:top-3 before:-translate-x-1/2 font-bold text-[21px]">
                Quem sou eu?
              </p>
            </div>
            <p className="z-1 text-center sm:text-center text-[18px] font-normal basis basis-1/2">
              Eu sou João Carlos um entusiasta da tecnologia. Atualmente, estou
              mergulhado no universo do desenvolvimento front-end, nessa jornada
              de descobertas, estou trilhando o caminho para me tornar um
              desenvolvedor full-stack.
            </p>
            <div className="flex items-center justify-center">
              <p className="text-center mt-7 relative before:block before:content-[''] before:w-3 before:h-[3px] before:rounded-[15px] before:bg-primaryColor before:absolute before:-left-3 before:top-3 before:-translate-x-1/2 font-bold text-[21px]">
                O que me impulsiona?
              </p>
            </div>
          </div>
          <p className="text-center sm:text-center font-normal text-[18px]">
            Não é só sobre códigos! Minhas soft skills são uma parte essencial
            do meu perfil. Sou comunicativo, adoro resolver problemas, encaro
            desafios com flexibilidade e coloco meu comprometimento na
            colaboração e na proatividade. Acredito que essas habilidades,
            combinadas com o conhecimento técnico, são essenciais para o sucesso
            no universo do desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
