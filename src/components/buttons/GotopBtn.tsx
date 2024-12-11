const GotopBtn = () => {
  // 處理點擊事件
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動效果
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 drop-shadow-lg z-[30]"
    >
      <img src="/gototop.webp" alt="gotop" width={75} />
    </button>
  );
};

export default GotopBtn;
