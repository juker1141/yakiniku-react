const BgContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full relative">
      <img
        className="absolute -top-12 xl:-top-24 -right-12 xl:right-36 object-cover w-36 xl:w-36"
        src="/layout/meat-you.png"
        alt="meat-you文字圖"
      />
      <img
        className="absolute -bottom-36 -left-4 xl:left-1/3 2xl:left-1/4 object-cover w-36 xl:w-72"
        src="/layout/meat.png"
        alt="底部肉塊圖案"
      />
      <div className="absolute top-2/3 xl:-right-8 w-24 xl:w-96 hidden xl:block">
        <img
          className="absolute top-0 right-0 object-cover w-full animate-swing-right-top -rotate-15 transition-all duration-1000 ease"
          src="/layout/dec-right-1.png"
          alt="筷子涮肉"
        />
        <img
          className="absolute top-0 right-0 object-cover w-full"
          src="/layout/dec-right-2.webp"
          alt="文字圖"
        />
      </div>
      {children}
    </div>
  );
};

export default BgContainer;
