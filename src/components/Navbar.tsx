import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"; // 引入 React Router 組件
import { getAssetPath } from "../utils/path";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed flex justify-end items-center xl:px-12 top-0 w-full z-50">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <div id="logo" className="fixed top-8 left-8 z-[120]">
          <h1>
            <Link to="/" onClick={() => setIsOpen(false)}>
              {" "}
              {/* 改用 Link */}
              <img
                src={getAssetPath("/logo.png")}
                alt="logo"
                className={`w-24 md:w-48 xl:w-[320px] ${
                  isOpen || "drop-shadow-lg"
                }`}
              />
            </Link>
          </h1>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`xl:hidden fixed top-10 md:top-16 right-0  ${
            isOpen ? "z-0" : "z-[120]"
          }`}
        >
          <img
            src={getAssetPath("/menu-btn-mobile.webp")}
            alt="menu"
            className="w-16 md:w-24 drop-shadow-lg"
          />
        </button>
      </div>
      <div>
        <div
          className={`fixed top-0 right-0 xl:static flex justify-between items-center h-screen w-screen xl:w-auto xl:h-16 bg-primary xl:px-20 xl:py-10 xl:rounded-b-[45px] transition-all xl:transition-none duration-500 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } xl:translate-x-0 z-[110]`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="absolute top-14 md:top-24 right-6 md:right-10 z-[120] xl:hidden"
          >
            <div className="w-12 h-12 flex flex-col items-center">
              <div className="w-8 h-1 bg-third rotate-45 translate-y-1"></div>
              <div className="w-8 h-1 bg-third -rotate-45"></div>
            </div>
          </button>
          {/* Navigation Links */}
          <div className="flex justify-center w-full xl:space-x-8">
            <ul className="flex flex-col xl:flex-row justify-center items-center">
              <li>
                <NavLink
                  to="/events"
                  className="text-third hover:text-ry-orange font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  最新消息
                </NavLink>
              </li>
              <li className="border-b xl:border-r border-white xl:border-ry-blue h-1 xl:h-5 my-8 xl:mx-8 w-[200%] xl:w-auto"></li>
              <li>
                <NavLink
                  to="/about"
                  className="text-third hover:text-ry-orange font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  美味故事
                </NavLink>
              </li>
              <li className="border-b xl:border-r border-white xl:border-ry-blue h-1 xl:h-5 my-8 xl:mx-8 w-[200%] xl:w-auto"></li>
              <li>
                <NavLink
                  to="/menu"
                  className="text-third hover:text-ry-orange font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  美味菜單
                </NavLink>
              </li>
              <li className="border-b xl:border-r border-white xl:border-ry-blue h-1 xl:h-5 my-8 xl:mx-8 w-[200%] xl:w-auto"></li>
              <li>
                <NavLink
                  to="/reservation"
                  className="text-third hover:text-ry-orange font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  線上訂位
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
