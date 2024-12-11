import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 創建視窗大小變化的監聽函數
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        // 修改為小於等於 1280px
        setIsOpen(false);
      }
    };

    // 添加事件監聽器
    window.addEventListener("resize", handleResize);

    // 組件卸載時清理事件監聽器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={` fixed flex justify-end items-center xl:px-12 top-0 w-full z-50`}
    >
      {/* Logo */}
      <div className="flex justify-between items-center">
        <div id="logo" className="fixed top-8 left-8 z-[120]">
          <h1 className="">
            <a href="/">
              <img
                src="/logo-n.svg"
                alt="logo"
                className={`w-24 md:w-48 xl:w-[320px] ${
                  isOpen || "drop-shadow-lg"
                }`}
              />
            </a>
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
            src="/menu-btn-mobile.webp"
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
              <div className="w-8 h-1 bg-third -rotate-45 "></div>
            </div>
          </button>
          {/* Navigation Links */}
          <div className="flex justify-center w-full xl:space-x-8">
            <ul className="flex flex-col xl:flex-row justify-center items-center">
              <li>
                <a
                  href="#"
                  className="text-third hover:text-ry-orange font-semibold"
                >
                  最新消息
                </a>
              </li>
              <li className="border-b xl:border-r border-white xl:border-ry-blue h-1 xl:h-5 my-8 xl:mx-8 w-[200%] xl:w-auto"></li>
              <li>
                <a
                  href="#"
                  className="text-third hover:text-ry-orange font-semibold"
                >
                  美味故事
                </a>
              </li>
              <li className="border-b xl:border-r border-white xl:border-ry-blue h-1 xl:h-5 my-8 xl:mx-8 w-[200%] xl:w-auto"></li>
              <li>
                <a
                  href="#"
                  className="text-third hover:text-ry-orange font-semibold"
                >
                  門市據點
                </a>
              </li>
              <li className="border-b xl:border-r border-white xl:border-ry-blue h-1 xl:h-5 my-8 xl:mx-8 w-[200%] xl:w-auto"></li>
              <li>
                <a
                  href="#"
                  className="text-third hover:text-ry-orange font-semibold"
                >
                  線上訂位
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
