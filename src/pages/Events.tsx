import { Link } from "react-router-dom";
import { getAssetPath } from "../utils/path";
import { eventList } from "../utils/event";

// 在组件前添加接口定义
interface EventCardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
}

const EventCard = ({ id, image, title, date, description }: EventCardProps) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="overflow-hidden">
        {/* 圖片容器 */}
        <div className="relative aspect-[16/9]">
          <img
            src={getAssetPath(image)}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* 內容區 */}
        <div className="py-4">
          {/* 標題 */}
          <h3 className="text-3xl text-gray-800 font-extrabold mb-2 line-clamp-2">
            {title}
          </h3>

          {/* 日期 */}
          <p className="text-red-600 font-extrabold text-sm mb-2">{date}</p>

          {/* 描述 */}
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

          {/* 詳細內容按鈕 */}
          <div className="flex items-center justify-center">
            <hr className="w-full border border-t-gray-500 mx-4" />
            <Link
              to={`/events/${id}`}
              className="inline-flex items-center bg-yellow-400 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-700 hover:text-yellow-400 transition-colors shrink-0 font-extrabold"
            >
              詳細內容 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="container mx-auto min-h-screen mt-48 xl:mt-[300px] p-4 xl:px-0 z-10">
      <div className="flex items-center mb-8">
        <h2 className="w-full text-4xl text-center font-bold text-gray-700">
          最新消息
        </h2>
      </div>

      <div className="flex flex-wrap -mx-4">
        {eventList.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
