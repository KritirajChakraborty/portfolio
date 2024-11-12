import { PROJECTS } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="mt-10 flex flex-col items-center justify-between gap-2 border-b-2 border-neutral-900"
    >
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-4xl lg:text-6xl tracking-tight font-thin text-neutral-300"
      >
        Projects
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center max-w-4xl w-full h-auto"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          {PROJECTS.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group relative rounded-3xl overflow-hidden bottom-2 border-neutral-900/30 p-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain rounded-3xl transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  whileHover={{ y: 0, opacity: 1 }}
                  initial={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col gap-1 items-center justify-center text-neutral-300 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
                >
                  <h3 className="text-xl lg:text-2xl text-center font-semibold text-neutral-800">
                    {project.title}
                  </h3>
                  <p className="text-sm lg:text-md text-center text-neutral-800 p-10">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between gap-10">
                    <a
                      href={project.link}
                      target="_blank"
                      className="rounded-full bg-neutral-900 text-neutral-100 px-4 py-2 hover:bg-neutral-700"
                    >
                      <div className="flex gap-2">
                        <span>View Project</span>
                        <MdArrowOutward />
                      </div>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="rounded-full bg-neutral-900 text-neutral-100 px-4 py-2 hover:bg-neutral-700"
                    >
                      <div className="flex gap-2">
                        <span>See Github</span>
                        <MdArrowOutward />
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Projects;
