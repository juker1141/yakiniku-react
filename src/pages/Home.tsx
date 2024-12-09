import Rope from "../components/Rope";
import Card from "../components/Card";

const Home = () => {
  return (
    <main className="mx-auto">
      <div className="w-full h-screen pl-52 pb-12">
        <div className="relative w-full h-full">
          <div className="bg-center bg-cover bg-no-repeat bg-banner w-full h-full rounded-bl-[180px]"></div>
          <img
            src="/banner/more-meat.webp"
            alt="more-meat"
            className="absolute top-2/3 -left-8"
          />
          <div className="absolute -left-0 -bottom-12 flex flex-col items-center">
            <div className="w-[17rem] h-[17rem]">
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
        <div className="flex flex-col items-center w-3/4 max-w-[1200px]">
          <div className="w-full flex justify-end mb-4">
            <h3 className="text-5xl text-right font-bold text-ry-yellow">
              Information
            </h3>
          </div>
          <div className="flex w-full relative">
            <img src="/info/meat.webp" alt="meat" />
            <div className="bg-white w-full flex items-center justify-center rounded-[30px] p-8 mx-8 overflow-hidden relative">
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
            <img src="/info/meat.webp" alt="meat" />
          </div>
        </div>
        <img
          src="/info/meat-you.png"
          alt="meat-you"
          className="absolute top-0 -right-8"
        />
      </div>

      <Rope />

      {/* Events */}
      <div className="flex justify-center relative pb-20">
        <div className="flex flex-col items-center justify-end">
          <div className="flex ml-[400px] justify-between gap-10">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
