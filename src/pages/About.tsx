import { useState } from "react";
import { FeatureModal } from "../components/FeatureModal";

const About = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "嚴選極品肉質",
      bg: "bg-aboutQuality",
      content:
        "我們嚴格把關每一片肉品的品質，從台灣本地優質黑毛和牛到日本A5和牛，堅持選用最頂級的食材。每週由專業採購團隊親自挑選，確保肉質的新鮮度、油花分布及口感，只為了讓顧客能享受到最極致的美味。",
    },
    {
      id: 2,
      title: "獨門醬料研發",
      bg: "bg-aboutSauce",
      content:
        "融合台日兩地的烤肉文化，我們的主廚團隊耗時研發出獨特的醬料配方。從經典的蒜蓉醬到特製的秘傳醬汁，每一種醬料都經過反覆調整，完美襯托出各式肉品的原味，為饕客帶來層次豐富的味蕾享受。",
    },
    {
      id: 3,
      title: "專業烤肉技藝",
      bg: "bg-aboutSkill",
      content:
        "每位主廚都經過嚴格的專業訓練，精通不同肉品的最佳烤製手法。從火候的掌控、醃製的時間到切片的角度，都展現出專業的烤肉工藝。我們的烤肉技術不僅確保食材的完美熟度，更能突顯出每種肉品的獨特風味。",
    },
    {
      id: 4,
      title: "細緻貼心服務",
      bg: "bg-aboutService",
      content:
        "我們深信優質的用餐體驗不僅來自於美食，更來自於貼心的服務。從入座到用餐結束，我們的服務團隊都會細心關注每位顧客的需求，提供專業的烤肉建議與即時的服務，讓您能全心享受美食饗宴。",
    },
  ];

  return (
    <main className="mx-auto container min-h-screen mt-48 xl:mt-[300px] z-10">
      <h2 className="w-full text-center text-4xl mb-8 font-bold">美味故事</h2>
      <div className="max-w-3xl mx-auto space-y-6 px-4 xl:px-0">
        <p className="text-2xl font-bold">炙燒大將 傳承美味</p>
        <p className="leading-loose">
          源起於2015年，「炙燒大將」由主廚張大川懷著對燒肉的熱情與執著創立。從小在父親經營的燒肉店長大的張大川，深知唯有最優質的食材與純熟的烤肉技藝，才能呈現出最完美的燒肉風味。
        </p>
        <p className="leading-loose">
          為求極致品質，張大川親赴日本拜師學藝三年，鑽研傳統燒肉技術。回台後，他堅持選用台灣在地優質黑毛和牛，以及來自日本的A5和牛，為顧客提供最頂級的燒肉饗宴。
        </p>
        <p className="leading-loose">
          七年耕耘，「炙燒大將」已在全台展店8間，包括台北信義、台中七期、高雄漢神等精華地段。每間分店皆由經驗豐富的主廚坐鎮，傳承匠心獨特的調味與烤製技法。
        </p>

        <div className="my-8">
          <p className="font-bold text-xl mb-4">我們的堅持：</p>
          <ul className="grid xl:grid-cols-2 gap-4">
            {features.map((feature) => (
              <li
                key={feature.id}
                className={`${feature.bg} bg-center bg-cover bg-no-repeat rounded-lg font-bold text-center flex justify-center items-center shadow cursor-pointer overflow-hidden group`}
                onClick={() => setSelectedFeature(feature.id)}
              >
                <div className="w-full h-full bg-black/30 text-3xl font-bold text-white py-32 rounded-lg group-hover:bg-black/40 transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.title}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="leading-loose">
          炙燒大將，不只是一頓餐點，更是一場講究細節與品質的美食饗宴。期待為每位蒞臨的貴賓，獻上最道地的燒肉藝術。
        </p>
      </div>

      <FeatureModal
        isOpen={selectedFeature !== null}
        closeModal={() => setSelectedFeature(null)}
        title={features.find((f) => f.id === selectedFeature)?.title || ""}
        content={features.find((f) => f.id === selectedFeature)?.content || ""}
      />
    </main>
  );
};

export default About;
