import React from "react";
import jc from "../../assets/images/jc-logo.png";
import dark from "../../assets/images/darkMode.png";
import sun from "../../assets/images/sunMode.png";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const Header = () => {
  const headerRef: React.MutableRefObject<HTMLElement | null> =
    React.useRef(null);

  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const ulRef = React.useRef<HTMLUListElement | null>(null);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  // const options = {
  //   icon1: "MdDarkMode",
  //   icon2: "BsSun",
  // };

  const [theme, setTheme] = React.useState("dark");
  let isTheme = theme === "light" ? "bg-white" : "dark:bg-darkMode";

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black dark:bg-textDark transition ease transform duration-300`;
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        (document.documentElement.scrollTop > 80 && headerRef.current)
      ) {
        headerRef.current?.classList.add("sticky__header");

        headerRef.current?.classList.add(`${isTheme}`);
      } else {
        headerRef.current?.classList.remove("sticky__header");
      }
    });
  };

  function handleTheme() {
    // Troque o estado do tema quando o botão de tema for clicado.
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }

  React.useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.target as HTMLElement | null;

    if (target) {
      e.preventDefault();
      const targetAttr = target.getAttribute("href");

      if (targetAttr) {
        const element = document.querySelector(targetAttr);
        if (element instanceof HTMLElement) {
          const location = element.offsetTop;
          window.scrollTo({
            top: location - 80,
            left: 0,
          });
        }
      }
    }
  };

  const toggleMenu = (e: React.MouseEvent) => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("show__menu");
      ulRef.current?.classList.add(`${isTheme}`);
      setIsOpen(!isOpen);
    } else {
      setIsOpen(!isOpen);
    }
  };

  React.useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header
      ref={headerRef}
      className="overflow-hidden w-full h-[80px] leading-[80px] flex items-center"
    >
      <div
        data-aos={window.innerWidth > 768 ? "fade-down" : ""}
        data-aos-duration={window.innerWidth > 768 ? "700" : ""}
        data-aos-delay={window.innerWidth > 768 ? "200" : ""}
        className="container "
      >
        <div className="flex items-center justify-between ">
          {/* ======= logo ======= */}
          <div className="flex items-center gap-[10px]  ">
            <span>
              <img
                className="w-[35px] h-[35px] ml-1 bg-primaryColor font-[500] rounded-full flex items-center justify-center"
                src={jc}
                alt=""
              />
            </span>
            <div className="leading-[20px]">
              <h2 className=" text-xl dark:text-textDark text-smallTextColor font-[700]">
                João
              </h2>
              <p className=" text-smallTextColor dark:text-textDark text-[20px] font-[500]">
                Carlos
              </p>
            </div>
          </div>
          {/* ======= logo end ========= */}
          {/* ======= menu start ======= */}
          <div className="flex items-center">
            <button
              className="md:flex md:justify-self-start md:mr-14 hidden "
              onClick={handleTheme}
            >
              {theme === "dark" ? (
                <MdDarkMode size={20} />
              ) : (
                <BsSun size={20} />
              )}
            </button>
            <div className={`menu`} ref={menuRef} onClick={toggleMenu}>
              <ul
                ref={ulRef}
                className={` flex items-center gap-10 animated sm:max-w-2xl
             `}
              >
                <li>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor dark:text-textDark font-[600]"
                    href="#about"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor dark:text-textDark font-[600]"
                    href="#services"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className="text-smallTextColor dark:text-textDark font-[600]"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    className="dark:text-textDark text-smallTextColor font-[600]"
                    href="#contact"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* ======= menu end ======== */}
          {/* ======= menu right ======= */}
          <div className=" flex justify-end md:hidden">
            <button className="mr-14" onClick={handleTheme}>
              {theme === "dark" ? (
                <MdDarkMode size={20} />
              ) : (
                <BsSun size={20} />
              )}
            </button>
            <div className="flex items-center justify-center gap-4 md:hidden">
              <button
                className="absolute flex flex-col h-12 w-15 rounded justify-center items-center group mr-8"
                onClick={toggleMenu}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "dark:text-textDark rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
                      : "opacity-100 group-hover:opacity-100 dark:text-textDark"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                      : "opacity-100 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
