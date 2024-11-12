import { motion } from "framer-motion";
const Education = () => {
  const educationData = [
    {
      institution: "Techno India University",
      degree: "Bachelor of Computer Application",
      duration: "2018 - 2021",
      location: "Kolkata, India",
    },
    {
      institution: "M.H.C H.S School",
      degree: "High Secondary",
      duration: "2015 - 2017",
      location: "Silchar, India",
    },
  ];

  return (
    <motion.section
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="education"
      className="mt-20 p-10 bg-neutral-900 text-neutral-100"
    >
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 mb-20 text-4xl sm:text-6xl text-neutral-300 tracking-tight font-thin text-center"
      >
        Education
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between bg-neutral-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-col mb-4 md:mb-0 md:mr-8">
              <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                {edu.degree}
              </h3>
              <p className="text-xl font-semibold">{edu.institution}</p>
              <p className="text-md text-neutral-400">{edu.location}</p>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-md text-neutral-400">{edu.duration}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;
