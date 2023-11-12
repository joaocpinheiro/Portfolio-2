import React from "react";

const Footer = () => {
  const year = new Date().getFullYear;

  return (
    <footer className="bg-[#12141e] pt-7 pb-4">
      {/* ====== footer top ====== */}
      <div className="container">
        <div className="w-full justify-center items-center md:gap-8">
          <div className="w-full flex justify-center items-center">
            <h2 className="text-[1.5rem] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Você precisa de algum projeto?
            </h2>
          </div>
          <a href="#contact" className="flex items-center justify-center">
            <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] ">
              <i className="ri-mail-line"></i>Entre em contato
            </button>
          </a>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-center gap-4 flex-wrap md:gap-8 mt-10">
            <span className="text-gray-300 font-bold text-[1rem] ">
              Me siga nas redes sociais:{" "}
            </span>
            <span className="w-[35px] h-35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
              <a
                href="https://github.com/joaocpinheiro"
                target="blank"
                className="text-gray-300 font-[500] text-[18px]"
              >
                <i className="ri-github-fill"></i>
              </a>
            </span>
            <span className="w-[35px] h-35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-carlos-pinheiro/"
                target="blank"
                className="text-gray-300 font-[500] text-[18px]"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </span>
            <span className="w-[35px] h-35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
              <a
                href="https://instagram.com/joaocpinheiro"
                target="blank"
                className="text-gray-300 font-[500] text-[18px]"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="text-white flex items-center justify-center mt-5 font-medium">
        © João Carlos 2023 - Todos os direitos reservados
      </div>
      {/* ====== footer top end ====== */}
      {/* ====== footer bottom ====== */}

      {/* ====== footer bottom end ====== */}
    </footer>
  );
};

export default Footer;
