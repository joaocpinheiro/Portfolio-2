import React from "react";
import data from "../assets/data/portfolioData";
import Modal from "./UI/Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = React.useState(6);
  const [portfolios, setPortfolios] = React.useState(data);
  const [showModal, setShowModal] = React.useState(false);
  const [activeID, setActiveID] = React.useState<number | null>(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id: number | null) => {
    if (!id) return;
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="border-b-4 border-primaryColor text-headingColor text-[2rem] font-[700]  dark:text-textDark rounded-lg">
              Meus projetos
            </h3>
          </div>
        </div>

        {/* ====== imagens portfolio ====== */}
        <div className=" flex items-center gap-4 flex-wrap mt-12 z-20">
          {portfolios?.slice(0, nextItems).map((portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] "
            >
              <figure>
                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block cursor-pointer rounded-[8px] ">
                <div
                  onClick={() => showModalHandler(+portfolio.id)}
                  className="w-full h-full flex items-center justify-center"
                >
                  <button
                    onClick={() => showModalHandler(+portfolio.id)}
                    className="text-white bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    Mais detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 group">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-primaryColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 group-hover:bg-smallTextColor"
            >
              Veja mais
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
