import { useLocation } from "react-router-dom";

const MenuContent = () => {
  const location = useLocation();

  const innerMenu = [
    "/inner/inner-1.jpg",
    "/inner/inner-2.jpg",
    "/inner/inner-3.jpg",
    "/inner/inner-4.jpg",
  ];
  const outerMenu = ["/outer/outer-1.jpg", "/outer/outer-2.jpg"];

  // 根據路徑決定顯示的標題和圖片列表
  const isInnerMenu = location.pathname === "/menu/inner";
  const title = isInnerMenu ? "內用菜單" : "外帶菜單";
  const images = isInnerMenu ? innerMenu : outerMenu;

  return (
    <main className="mx-auto container min-h-screen mt-48 xl:mt-[300px]">
      <h3 className="w-full text-center text-4xl mb-8 font-bold mb-20">
        {title}
      </h3>

      {/* 圖片列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {images.map((image, index) => (
          <div key={index} className="w-full aspect-[4/3]">
            <img
              src={`/public/menu${image}`}
              alt={`menu-${index + 1}`}
              width="100%"
              className="shadow-lg"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default MenuContent;
