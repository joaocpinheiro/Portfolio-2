import React from "react";
import Trail from "../../assets/images/carousel1.png";

const Carousel1 = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="lg:flex w-screen">
        <div className="lg:container lg:basis-1/2 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[33%] overflow-hidden flex justify-center items-center mx-auto lg:mr-2">
          <img className="max-w-full mx-auto" src={Trail} alt="" />
        </div>
        <div className="container lg:px-0 lg:mx-auto lg:mr-auto bg-red-600 lg:my-auto lg:max-w-[60%] lg:max-h-[60%]">
          <div className="lg:max-h-full overflow-hidden">
            <p className="lg:ml-10 lg:mr-4 lg:max-w-[500px] mt-4 mx-4 text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus laboriosam molestias architecto, consectetur
              quidem, quisquam eos nisi omnis qui repellat perferendis at eum
              est harum corrupti rem, molestiae esse labore. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quibusdam non quam est
              perspiciatis illum fuga eius voluptates, totam ad officiis neque
              maiores nesciunt eligendi dolores quidem necessitatibus
              dignissimos modi qui.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Carousel1;
