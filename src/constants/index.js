import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

export const HERO_CONTENT = `A frontend developer proficient in building dynamic, user-centric web applications using React, with expertise in backend technologies like MongoDB, Express, Node.js, and authentication tools such as JWT and Firebase. Passionate about creating seamless, high-performance interfaces while optimizing backend efficiency, with a strong commitment to clean, maintainable code.`;

export const ABOUT_TEXT = `As a frontend developer, I specialize in creating responsive, interactive user interfaces with React, while also leveraging my full-stack knowledge to develop robust backends with Node.js, Express, and MongoDB. I combine a user-first design philosophy with scalable, secure backend solutions, ensuring high performance and smooth workflows. With expertise in frontend design and backend integration (including Firebase and JWT for authentication), I deliver modern, efficient, and high-performing applications tailored to user needs`;

export const PROJECTS = [
  {
    id: 1,
    title: "RealEstatePRO",
    image: project1,
    description:
      "RealEstatePRO is a full-stack real estate platform built with the MERN stack for efficient property listing management. It enables users to list, browse, and manage properties seamlessly. The app uses JWT for secure authentication, Redux Toolkit for state management, and Firebase for enhanced login. With REST APIs for user and listing operations, RealEstatePRO offers a comprehensive and scalable solution for property management.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    link: "https://realestateapp-b8hgceye8-kritirajs-projects.vercel.app/",
    github: "https://github.com/KritirajChakraborty/realestate-client",
  },
  {
    id: 2,
    title: "Impressio",
    image: project2,
    description:
      "Impressio simplifies image processing by securely storing modified images for easy access and download. Built with the MERN stack and Cloudinary, it supports uploads, editing, format conversion, quality adjustments, and DPI scaling. JWT authentication ensures privacy, creating a seamless and organized environment for managing images efficiently.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    link: "https://impressioclient.vercel.app/",
    github: "https://github.com/KritirajChakraborty/Impressio",
  },
  {
    id: 3,
    title: "RentExchange",
    image: project3,
    description:
      "RentExchange is a sleek and interactive renting frontend application developed with React, utilizing Context API for state management and React Router DOM for seamless navigation. The app offers users the ability to sort rental listings based on various criteria, enhancing their search experience. Tt features a user-friendly payment modal for alerting the user in the browser, making the entire rental process more efficient and enjoyable.",
    technologies: ["React", "React-Router", "Content API", "TailwindCSS"],
    link: "https://rental-e-commerce.vercel.app/",
    github: "https://github.com/KritirajChakraborty/RentalECommerce",
  },
];

export const CONTACT = {
  address: "Bangalore, Karnataka, India ",
  phoneNo: +917002142964,
  email: "kritirajchakraborty@gmail.com",
};
