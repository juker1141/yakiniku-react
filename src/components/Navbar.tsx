const Navbar = () => {
  return (
    <nav className="absolute flex justify-end items-center px-12 top-0 w-full z-50">
      {/* Logo */}
      <div id="logo" className="absolute top-8 left-8 z-50">
        <h1 className="">
          <a href="/">
            <img src="/logo-n.svg" alt="logo" width={320} />
          </a>
        </h1>
      </div>
      <div className="">
        <div className="flex justify-between items-center h-16 bg-primary px-20 py-10 rounded-b-[45px]">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex items-center">
              <li>
                <a
                  href="#"
                  className="text-third hover:text-ry-orange font-semibold"
                >
                  最新消息
                </a>
              </li>
              <li className="border-r border-ry-blue h-5 mx-8"></li>
              <li>
                <a
                  href="#"
                  className="text-third hover:text-ry-orange font-semibold"
                >
                  美味故事
                </a>
              </li>
              <li className="border-r border-ry-blue h-5 mx-8"></li>
              <li>
                <a
                  href="#"
                  className="text-third hover:text-ry-orange font-semibold"
                >
                  門市據點
                </a>
              </li>
              <li className="border-r border-ry-blue h-5 mx-8"></li>
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
