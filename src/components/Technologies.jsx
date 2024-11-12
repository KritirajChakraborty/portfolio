import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initital: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function Technologies() {
  return (
    <div id="techstack" className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-4xl sm:text-6xl text-neutral-300 tracking-tight font-thin text-center"
      >
        TechStack
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariant(2.5)}
          initital="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-4xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initital="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <SiMongodb className="text-4xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariant(4)}
          initital="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-4xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initital="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <RiTailwindCssLine className="text-4xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initital="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-4"
        >
          <SiExpress className="text-4xl text-gray-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
