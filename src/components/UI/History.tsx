import React from "react";
import CarouselItem from "./CarouselItem";
import Trail from "../../assets/images/carousel1.png";
import Trail2 from "../../assets/images/carousel1.png";

const History = () => {
  const slides: string[] = [Trail, Trail2];
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="2000"
      id="history"
      className="w-full h-full m-auto mb-24 sm:mb-40 "
    >
      <CarouselItem slides={slides} />
    </div>
  );
};

export default History;
