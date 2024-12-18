import { getAssetPath } from "../utils/path";

const Footer = () => {
  return (
    <div className="mt-48">
      <div className="flex justify-center flex-col items-start bg-primary rounded-tr-[100px] w-5/6 xl:w-4/5 p-5 py-10 xl:p-10 xl:pl-[250px]">
        <ul className="grid grid-cols-2 gap-4 xl:flex xl:flex-nowrap justify-center items-center text-xs xl:text-base text-third font-semibold">
          <li className="text-center">
            <a href="#">關於我們</a>
          </li>
          <li className="border-r border-third h-5 mx-2 hidden xl:block"></li>
          <li className="text-center">
            <a href="#">隱私權政策</a>
          </li>
          <li className="border-r border-third h-5 mx-2 hidden xl:block"></li>
          <li className="text-center">
            <a href="#">使用條款</a>
          </li>
          <li className="border-r border-third h-5 mx-2 hidden xl:block"></li>
          <li className="text-center">
            <a href="#">聯絡我們</a>
          </li>
        </ul>
        <img
          src={getAssetPath("/footer/footer-slogan.webp")}
          alt="footer-slogan"
          className="w-[80%] xl:w-[40%] mt-10"
        />
        <div className="text-black font-semibold text-sm mt-10">
          正修數位媒體應用 - 練習作業{" "}
          <br className="block xl:hidden" />
          Ryu © All right reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
