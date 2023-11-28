import React from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Trail1 from "../../assets/images/carousel1.png";
import Trail2 from "../../assets/images/carousel2.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface slides {
  slides: string[];
}

const CarouselItem = ({ slides }: slides) => {
  const [current, setCurrent] = React.useState(0);
  const [mobile, setMobile] = React.useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img
            src={i === 0 ? Trail1 : Trail2}
            alt={`carousel-thumbnail-${i + 1}`}
          />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    swipeToSlide: true, // Esta opção permite arrastar para navegar entre os slides
  };

  React.useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth);
    };

    // Adiciona um ouvinte de evento de redimensionamento
    window.addEventListener("resize", handleResize);

    // Limpa o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="cursor-grab relative lg:mx-[40px container p-9 max-w-slide sm:px-[52.5px]">
      <Slider arrows {...settings} className="">
        <div className="">
          <div className="lg:flex justify-center items-center">
            <img
              className="border-[2px] rounded-full border-primaryColor mx-auto lg:max-w-[48%] max-w-[94%] sm:max-w-[80] w-full h-full"
              src={Trail1}
              alt=""
            />

            <p className="lg:ml-10 lg:mr-4 lg:max-w-[500px] mt-4 mx-auto text-[20px]">
              Olha só essa paisagem! Só de ver, já dá para imaginar que é a ilha
              da magia, Florianópolis, a minha cidade natal. Aqui eu cresci,
              estudei e aprendi a programar. Como você pode perceber, eu gosto
              de me aventurar por aí e sempre buscar novos desafios, assim como
              eu levo isso para os códigos. Não é à toa que os meus amigos me
              chamam de Ragnar Lothbrok, o lendário rei viking que explorou o
              mundo e conquistou territórios. Claro que eu não sou tão ousado
              quanto ele, mas eu tenho a mesma sede de conhecimento e desafios.
            </p>
          </div>
        </div>
        <div>
          <div className="lg:flex justify-center items-center">
            <p className="lg:ml-10 hidden lg:flex lg:mr-4 lg:max-w-[500px] mt-4 mx-4 text-[20px]">
              E nas minhas horas vagas? Como dá para ver na foto ao lado, eu
              faço alguns treinos com ninguém menos do que o astro da NBA
              Stephen Curry (Bom, pelo menos a foto foi antes de eu errar essa
              bandeja livre). Agora que voce já conheceu um pouco sobre mim, e
              sabe sobre minha paixão em aventuras, basquete e NBA, deixa eu te
              levar para o universo das tecnologias junto aos meus projetos que
              me fazem perder algumas noites de sono.
            </p>
            <img
              className="border-[2px] rounded-full border-primaryColor mx-auto lg:max-w-[48%] max-w-[94%] sm:max-w-[80%] w-full h-full"
              src={Trail2}
              alt=""
            />

            <p className="lg:hidden lg:ml-10 lg:mr-4 lg:max-w-[500px] mt-4 mx-4 text-[20px]">
              E nas minhas horas vagas? Como dá para ver na foto acima, eu faço
              alguns treinos com ninguém menos do que o astro da NBA Stephen
              Curry (Bom, pelo menos a foto foi antes de eu errar essa bandeja
              livre). Agora que voce já conheceu um pouco sobre mim, e sabe
              sobre minha paixão em aventuras, basquete e NBA, deixa eu te levar
              para o universo das tecnologias junto aos meus projetos que me
              fazem perder algumas noites de sono.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default CarouselItem;
