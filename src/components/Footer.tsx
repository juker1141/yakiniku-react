const Footer = () => {
  return (
    <div className="mt-36">
      <div className="flex justify-center flex-col items-start bg-primary rounded-tr-[100px] w-4/5 p-10 pl-[250px]">
        <ul className="flex justify-center items-center text-third font-semibold">
          <li className="pr-4">
            <a href="#">關於我們</a>
          </li>
          <li className="border-r border-third h-5 mx-2"></li>
          <li className="px-4">
            <a href="#">隱私權政策</a>
          </li>
          <li className="border-r border-third h-5 mx-2"></li>
          <li className="px-4">
            <a href="#">使用條款</a>
          </li>
          <li className="border-r border-third h-5 mx-2"></li>
          <li className="pl-4">
            <a href="#">聯絡我們</a>
          </li>
        </ul>
        <img
          src="/footer/footer-slogan.webp"
          alt="footer-slogan"
          className="w-[40%] mt-10"
        />
        <div className="text-black font-semibold text-sm mt-10">
          正修數位媒體應用 - 練習作業 © All right reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
