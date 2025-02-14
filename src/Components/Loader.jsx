import { Bot } from "lucide-react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-md">
      <div className="text-center">

        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: 360, scale: 1.1 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          <Bot className="mx-auto h-14 w-14 text-blue-500 drop-shadow-lg" />
        </motion.div>


        <div className="mt-4 flex items-center justify-center gap-2">
          {[0, 0.2, 0.4].map((delay, index) => (
            <motion.div
              key={index}
              className="h-3 w-3 rounded-full bg-blue-500 shadow-md"
              initial={{ y: 0, opacity: 0.5 }}
              animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
              transition={{
                repeat: Infinity,
                duration: 1,
                delay: delay,
                ease: "easeInOut",
              }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
