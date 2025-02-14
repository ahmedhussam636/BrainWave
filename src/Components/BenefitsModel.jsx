import { motion } from "framer-motion";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";


const BenefitsModel = ({ item, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-n-8/90 backdrop-blur-sm flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-n-8 border border-n-6 rounded-xl max-w-lg p-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="absolute top-4 right-4 text-n-1 hover:text-color-1 transition-colors"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex flex-col">
          <h5 className="h5 mb-6 text-n-1">{item.title}</h5>
          <p className="body-2 mb-8 text-n-3">{item.text}</p>

          {item.imageUrl && (
            <img
              src={item.imageUrl}
              width={380}
              height={362}
              alt={item.title}
              className="w-full h-auto mb-8 rounded-lg"
            />
          )}


          <div className="flex items-center mt-auto">
            <img src={item.iconUrl} width={48} height={48} alt={item.title} />
            <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
              Explore more
            </p>
            <Arrow className="ml-2" />
          </div>
        </div>
        <ClipPath />
      </motion.div>
    </motion.div>
  );
};

export default BenefitsModel;