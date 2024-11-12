import { HERO_CONTENT } from "../constants";
import dp from "../assets/dp.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

function Hero({ mobileMenu }) {
  const text = "Frontend Developer.";
  const splitText = text.split("");
  return (
    <div
      id="about"
      className={`${
        mobileMenu ? "mt-56" : "mt-20"
      } pb-4 border-b border-neutral-900 lg:px-28 lg:mb-20`}
    >
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-5xl text-neutral-300 tracking-tight font-thin lg:mt-16 lg:text-6xl"
            >
              Kritiraj Chakrborty
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                staggerChildren: 0.05,
                duration: 2,
              }}
              exit={{ opacity: 0 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {splitText.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl my-2 py-6 text-neutral-300 font-thin tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
              src={dp}
              alt="Profile Picture"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
