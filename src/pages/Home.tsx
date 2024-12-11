import Rope from "../components/Rope";
import Card from "../components/Card";

const Home = () => {
  return (
    <main className="mx-auto">
      <div className="w-full h-screen xl:pl-52 xl:pb-12 mb-36 xl:mb-0">
        <div className="relative w-full h-full">
          <div className="bg-center bg-cover bg-no-repeat bg-banner w-full h-full rounded-bl-[180px]"></div>
          <img
            src="/banner/more-meat.webp"
            alt="more-meat"
            className="hidden xl:block absolute top-2/3 -left-8"
          />
          <div className="absolute -left-0 -bottom-24 xl:-bottom-12 flex flex-col items-center z-20 drop-shadow-lg">
            <div className="w-[12rem] h-[12rem] xl:w-[17rem] xl:h-[17rem]">
              <div className="relative flex items-center justify-center w-full h-full">
                <img
                  className="absolute z-10 drop-shadow-lg"
                  src="/banner/circle-inside.webp"
                  alt="circle-inside"
                />
                <img
                  className="absolute animate-spin-slow"
                  src="/banner/circle-outside.webp"
                  alt="circle-outside"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="container mx-auto flex justify-center relative pb-20">
        <div className="flex flex-col items-center w-full xl:w-3/4 max-w-[1200px] z-10">
          <div className="w-full flex xl:justify-end mb-4 px-8 xl:px-0">
            <h3 className="text-4xl xl:text-5xl text-left xl:text-right font-bold text-ry-yellow">
              Information
            </h3>
          </div>
          <div className="flex w-full relative">
            <img className="hidden xl:block" src="/info/meat.webp" alt="meat" />
            <div className="bg-white w-full flex items-center justify-center rounded-[15px] xl:rounded-[30px] xl:p-8 p-4 mx-8 overflow-hidden relative">
              <div className="flex items-center animate-slide-right">
                <div className="flex items-center w-[800px]">
                  <img
                    className="h-2/3"
                    src="/info/dec-notice.webp"
                    alt="dec-notice"
                  />
                  <p className="text-xl font-semibold px-4">
                    原燒｜500元商品卡，送禮自用兩相宜，單次訂購30張(含)以上享優惠
                    單張$475!
                  </p>
                </div>
                <div className="flex items-center w-[800px]">
                  <img
                    className="h-2/3"
                    src="/info/dec-notice.webp"
                    alt="dec-notice"
                  />
                  <p className="text-xl font-semibold px-4">
                    原燒｜500元商品卡，送禮自用兩相宜，單次訂購30張(含)以上享優惠
                    單張$475!
                  </p>
                </div>
              </div>
            </div>
            <img className="hidden xl:block" src="/info/meat.webp" alt="meat" />
          </div>
        </div>
        <img
          src="/info/meat-you.png"
          alt="meat-you"
          className="absolute top-0 -right-8 -z-0"
        />
      </div>

      <Rope />

      {/* Events */}
      <div className="flex justify-center relative pb-20">
        <div className="flex flex-col items-center justify-end z-10">
          <div className="flex xl:ml-[400px] justify-between gap-10">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <img
          src="/events/meat.png"
          alt="meat"
          className="absolute -bottom-24 left-24 xl:left-48 -z-0"
        />
      </div>
    </main>
  );
};

export default Home;
