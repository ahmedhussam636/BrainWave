import { useState } from "react";
import { motion } from "framer-motion";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import BenefitsModel from "../Components/BenefitsModel";



const Benefits = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <motion.div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] transition-all duration-300 ease-in-out"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto pointer-events-auto">
                  <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                  <p
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer"
                    onClick={() => setSelectedBenefit(item)}
                  >
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 transition-opacity duration-300 hover:opacity-80"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedBenefit && (
        <BenefitsModel item={selectedBenefit} onClose={() => setSelectedBenefit(null)} />
      )}
    </Section>
  );
};

export default Benefits;
