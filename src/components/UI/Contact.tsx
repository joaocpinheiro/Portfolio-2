import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = React.useRef<HTMLFormElement | null>(null);
  const [value, setValue] = React.useState("");
  let [message, setMessage] = React.useState<React.ReactNode | null>(null);
  const [ok, setOk] = React.useState<boolean | null>(null);

  function handleOk(message: React.ReactNode) {
    setOk(true);
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
      setOk(null);
    }, 3500);
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_d3tww4e",
          "template_dlw67q5",
          form.current,
          "7Fv7fIIL3EZ0HGW4o"
        )
        .then(
          (result: any) => {
            console.log(result.text);
            let message = (
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="300"
                className="fixed top-32 z-50 left-auto w-[80%] sm:w-auto sm:right-9 flex items-center p-4 mb-4 text-[16px] text-green-800 border font-semibold border-green-300 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-semibold">
                    E-mail enviado com sucesso!
                  </span>{" "}
                  Em breve entrarei em contato.
                </div>
              </div>
            );
            handleOk(message);
            form.current?.reset();
          },
          (error: any) => {
            console.log(error.text);

            let message: React.ReactNode = (
              <div
                data-aos="fade-zoom-in"
                data-aos-delay="50"
                data-aos-duration="300"
                id="alert-2"
                className="fixed top-32 z-50 left-auto w-[80%] sm:w-auto sm:right-9 flex m-auto justify-center items-center p-4 mb-4 text-[16px] text-red-800 rounded-lg bg-red-200 font-semibold dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM1 
                  2 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                  />
                </svg>
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-semibold">
                  Houve um erro, tente novamente
                </div>
              </div>
            );

            handleOk(message);
          }
        );
    }
  };

  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-delay="500"
      data-aos-duration="2000"
      id="contact"
      className="pb-16"
    >
      <div className="container ">
        <h2
          className="border-b-4 
        inline-block border-primaryColor text-headingColor font-[700] text-[2.2rem] mb-10  dark:text-textDark rounded-lg"
        >
          Entre em contato
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px] ">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452702.641276743!2d-48.79991923262801!3d-27.570597624277436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527394eb2c632d7%3A0x81bc550b6a04c746!2sFlorian%C3%B3polis%2C%20State%20of%20Santa%20Catarina!5e0!3m2!1sen!2sbr!4v1697413900664!5m2!1sen!2sbr"
              width="600"
              height="450"
              className="border-0 w-full h-full"
              allowFullScreen={undefined}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 ">
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <div className="mb-5">
                <input
                  required
                  type="text"
                  placeholder="Seu nome"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:text-darkMode"
                  name="user_name"
                />
              </div>
              <div className="mb-5">
                <input
                  required
                  type="email"
                  name="user_email"
                  placeholder="Seu email"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:text-darkMode"
                />
              </div>
              <div className="mb-5">
                <textarea
                  required
                  rows={3}
                  name="message"
                  placeholder="Escreva sua mensagem"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:text-darkMode"
                />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor group hover:bg-headingColor text-white text-center ease-linear duration-150">
                <input
                  className="cursor-pointer"
                  type="submit"
                  value="Enviar"
                />
              </button>
            </form>
            {ok ? message : null}
            {}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
