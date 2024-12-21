import { Link } from "react-router-dom";
import { getAssetPath } from "../utils/path";

interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
}

interface CardProps {
  event: Event;
}

const Card = ({ event }: CardProps) => {
  return (
    <div className="bg-white p-6 shadow-lg relative mt-2 w-[320px] xl:w-[400px] mx-4 xl:mx-0">
      <div className="before:content-[''] before:absolute before:-top-8 before:left-0 before:w-8 before:h-12 before:bg-white" />
      <img
        src={getAssetPath(event.image)}
        alt={event.title}
        className="w-full max-h-48 object-contain xl:object-cover rounded-2xl mb-4"
      />
      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
      <p className="text-red-600 mb-2">{event.date}</p>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <Link
        to={`/events/${event.id}`}
        className="bg-yellow-400 text-sm px-4 py-2 rounded-full"
      >
        詳細內容 →
      </Link>
      <div className="after:content-[''] after:absolute after:-top-8 after:right-0 after:w-8 after:h-12 after:bg-white" />
    </div>
  );
};

export default Card;
