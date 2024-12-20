import { Link, useParams } from "react-router-dom";
import { getAssetPath } from "../utils/path";
import { eventList } from "../utils/event";

const EventDetail = () => {
  const { id } = useParams(); // 獲取 URL 參數中的 id
  const event = eventList.find((event) => event.id === Number(id));

  return (
    <div className="container mx-auto min-h-screen mt-48 xl:mt-[300px] p-4 xl:px-0 z-10">
      <div className="flex items-start mb-8">
        <h2 className="w-full text-4xl text-center font-bold text-gray-700">
          最新消息
        </h2>
      </div>

      {event ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start w-full mb-10">
              <p className="text-red-600 font-extrabold mb-4">{event.date}</p>
              <h3 className="text-3xl font-extrabold mb-4">{event.title}</h3>
              <div className="prose max-w-none"></div>
              {event.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            {event.image && (
              <img
                src={getAssetPath(event.image)}
                alt={event.title}
                className="mt-4 max-w-full h-auto rounded-lg mb-12"
              />
            )}
            <hr className="w-full border border-t-gray-500 mx-2 mb-4" />
            <Link
              to="/events"
              className="inline-flex items-center bg-yellow-400 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-700 hover:text-yellow-400 transition-colors mb-4 font-extrabold"
            >
              <svg
                className="w-4 h-4 mr-1 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              所有消息
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">找不到該活動內容</div>
      )}
    </div>
  );
};

export default EventDetail;
