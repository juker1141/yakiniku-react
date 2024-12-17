import { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto min-h-screen mt-48 xl:mt-[300px] p-4 xl:px-0">
      <h2 className="w-full text-center text-4xl font-bold mb-8">線上訂位</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* 地圖區域 */}
        <div className="w-full md:w-1/2">
          <img
            src="/public/reservation/location.png"
            alt="餐廳位置地圖"
            className="w-full h-[300px] xl:h-[600px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* 表單區域 */}
        <div className="w-full md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 姓名 */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* 電話 */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  電話
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* 日期和時間 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    日期
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    時間
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* 人數 */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  人數
                </label>
                <select
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">請選擇</option>
                  <option value="1">1人</option>
                  <option value="2">2人</option>
                  <option value="3">3人</option>
                  <option value="4">4人</option>
                  <option value="5">5人以上</option>
                </select>
              </div>

              {/* 備註 */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  備註
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                />
              </div>

              {/* 提交按鈕 */}
              <button
                type="submit"
                className="w-full bg-ry-orange hover:backdrop-brightness-90 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
              >
                確認訂位
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
