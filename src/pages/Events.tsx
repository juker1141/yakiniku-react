import { Link } from "react-router-dom";

import { eventList } from "../utils/event";

const EventCard = ({ image, title, date, description, link }: any) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        {/* 圖片容器 */}
        <div className="relative aspect-[16/9]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* 內容區 */}
        <div className="p-4">
          {/* 標題 */}
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>

          {/* 日期 */}
          <p className="text-red-600 text-sm mb-2">{date}</p>

          {/* 描述 */}
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

          {/* 詳細內容按鈕 */}
          <div className="text-right">
            <Link
              to={`/public${link}`}
              className="inline-flex items-center bg-yellow-400 text-sm px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors"
            >
              詳細內容
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="container mx-auto min-h-screen mt-48 xl:mt-[300px] p-4 xl:px-0">
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
