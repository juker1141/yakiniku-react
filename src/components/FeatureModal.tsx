interface FeatureModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  content: string;
}

export const FeatureModal = ({ isOpen, closeModal, title, content }: FeatureModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto w-full">
      {/* 背景遮罩 */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
        onClick={closeModal}
      />
      
      {/* 模态框内容 */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all mx-4 xl:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            {title}
          </h3>
          <div className="mt-2">
            <p className="text-gray-700 leading-relaxed">
              {content}
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="inline-flex items-center bg-yellow-400 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-700 hover:text-yellow-400 transition-colors shrink-0 font-extrabold"
              onClick={closeModal}
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 