const About = () => {
  return (
    <main className="mx-auto container min-h-screen mt-48 xl:mt-[300px]">
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
            <li className="bg-aboutQuality bg-center bg-cover bg-no-repeat rounded-lg font-bold text-center flex justify-center items-center shadow">
              <div className="w-full h-full bg-black/30 text-3xl font-bold text-white py-32 rounded-lg">
                嚴選極品肉質
              </div>
            </li>
            <li className="bg-aboutSauce bg-center bg-cover bg-no-repeat rounded-lg font-bold text-center flex justify-center items-center shadow">
              <div className="w-full h-full bg-black/30 text-3xl font-bold text-white py-32 rounded-lg">
                獨門醬料研發
              </div>
            </li>
            <li className="bg-aboutSkill bg-center bg-cover bg-no-repeat rounded-lg font-bold text-center flex justify-center items-center shadow">
              <div className="w-full h-full bg-black/30 text-3xl font-bold text-white py-32 rounded-lg">
                專業烤肉技藝
              </div>
            </li>
            <li className="bg-aboutService bg-center bg-cover bg-no-repeat rounded-lg font-bold text-center flex justify-center items-center shadow">
              <div className="w-full h-full bg-black/30 text-3xl font-bold text-white py-32 rounded-lg">
                細緻貼心服務
              </div>
            </li>
          </ul>
        </div>

        <p className="leading-loose">
          炙燒大將，不只是一頓餐點，更是一場講究細節與品質的美食饗宴。期待為每位蒞臨的貴賓，獻上最道地的燒肉藝術。
        </p>
      </div>
    </main>
  );
};

export default About;
