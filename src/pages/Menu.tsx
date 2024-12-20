import { Link } from "react-router-dom";
import { getAssetPath } from "../utils/path";

const Menu = () => {
  return (
    <main className="mx-auto container min-h-screen mt-48 xl:mt-[300px]">
      <h2 className="w-full text-center text-4xl mb-8 font-bold">美味菜單</h2>
      <ul className="w-full flex flex-col xl:flex-row justify-start items-center gap-10">
        <li className="w-2/3 xl:w-1/4 relative">
          <Link to="/menu/inner" className="flex flex-col items-start">
            <img
              src={getAssetPath("/menu/inner/inner-menu.jpg")}
              alt="innerMenu"
              width="100%"
              className="shadow-lg"
            />
            <p className="w-full text-center text-2xl font-bold pt-5">
              內用菜單
            </p>
          </Link>
        </li>
        <li className="w-2/3 xl:w-1/4 relative">
          <Link to="/menu/outer" className="flex flex-col items-start">
            <img
              src={getAssetPath("/menu/outer/outer-menu.jpg")}
              alt="outerMenu"
              width="100%"
              className="shadow-lg"
            />
            <p className="w-full text-center text-2xl font-bold pt-5">
              外帶菜單
            </p>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Menu;
