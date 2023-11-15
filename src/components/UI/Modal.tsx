import React from "react";
import portfolios from "../../assets/data/portfolioData";
import { TbExternalLink } from "react-icons/tb";
import gitDark from "../../assets/images/github-dark.png";

const Modal = ({
  activeID,
  setShowModal,
}: {
  activeID: number | null;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const portfolio = portfolios.find((portfolio) => +portfolio.id === activeID);

  const modalRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (
          e.target instanceof Node &&
          modalRef.current &&
          !modalRef.current.contains(e.target)
        )
          setShowModal(false);
      }}
      className=" w-full sm:h-full fixed h-screen top-10 left-0 z-10 bg-headingColor bg-opacity-40 overflow-y-auto"
    >
      <div
        ref={modalRef}
        className="w-10/12 max-h-[85%] md:max-w-[650px] lg:max-w-[650px] md:w-full border-[1px] lg:max-h-[90%] 
        absolute top-1/2 left-1/2 z-20 bg-white dark:bg-darkMode dark:text-textDark rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 overflow-y-auto"
      >
        <div>
          <figure className="">
            <img className="rounded-[8px]" src={portfolio?.imgUrl} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl dark:text-textDark text-headingColor font-[700] my-5 border-b-2 border-b-primaryColor w-10 ">
            {portfolio?.title}
          </h2>

          <p className="text-[15px] leading-7 font-semibold text-smallTextColor dark:text-textDark overflow-y-auto max-h-[170px]">
            {portfolio?.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor dark:text-textDark text-[18px] text-[700]">
              Tecnologias:
            </h4>

            {portfolio?.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 dark:text-darkMode font-bold"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex justify-between sm:mr-14 w-[100%] sm:w-[100%]">
            <div className="inline-block">
              <a target="blank" href={portfolio?.siteUrl}>
                <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[20px] dark:bg-darkMode dark:border dark:rounded-[20px] font-[500] ease-in duration-300 flex justify-center items-center gap-1 transition-transform transform-gpu hover:scale-105 ">
                  <span className="text-[20px] h-full">
                    <TbExternalLink />
                  </span>
                  Visitar site
                </button>
              </a>
            </div>
            <div className="inline-block ">
              <a target="blank" href={portfolio?.siteCode}>
                <button className="bg-darkMode text-white py-2 px-4 my-8 rounded-[20px] dark:bg-darkMode dark:border dark:rounded-[20px] font-[500] ease-in duration-300 flex justify-center items-center gap-1 transition-transform transform-gpu hover:scale-105">
                  <img
                    src={gitDark}
                    alt=""
                    className="w-5 inline-block self-center"
                  />
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer dark:bg-darkMode"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
