"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Summarizer Web App",
    description: " Developed an app to summarize any blog or text content of a website. this will help to gain or understand about any website quickly. Technologies used: React.js, Redux toolkit, Tailwind, Node.JS",
    image: "/images/projects/summarizer_App_Photo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhishek-jha-96/rough/tree/main",
    previewUrl: "https://drive.google.com/file/d/1SVYHR6IC7iXHK9WpBCtsGHPAVUcSaE5y/view?usp=sharing",
  },
  {
    id: 2,
    title: "CarBook Web Application",
    description: " Created an Web application using Next.js and Node to create a interface where user can browse, compare and rest cars and services. Technologies used:  Next.js, headlessUI, Tailwind CSS, React-Hooks, Server-Side-Rendering, Node.JS",
    image: "/images/projects/carbook_App_Photo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhishek-jha-96/rough/tree/carbook",
    previewUrl: "https://drive.google.com/file/d/1p_4ePD6h5pInA3u9KVRTG_fW0K5UVBSr/view?usp=sharing",
  },
  {
    id: 3,
    title: "Object Identifier Web App",
    description: " Created a full-stack Web app to detect or predict the object present in the given Image. Used Kears for ML models and django-rest framework to create APIs provided with CRUD functionality. Technologies used:  Python, Django, DRF, React.js, Tailwind CSS, Axios, redux, Keras, Pandas",
    image: "/images/projects/object_identifier.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhishek-jha-96/AI-ML/tree/master",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Job Posting App",
    description:"Create a React native application for posting and Searching Jobs with functionality like filters and nearby Jobs recommendations",
    image: "/images/projects/job_app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Abhishek-jha-96/Job_app_react_native",
    previewUrl: "https://drive.google.com/file/d/1kGiS-9ezJs6qSH23PwDvMWYSADoAT8CD/view?usp=sharing",
  },
  {
    id: 5,
    title: "Musica: Your Ultimate Music Experience",
    description:"Musica is a sleek and intuitive music player that brings you the hottest tracks of the week. Discover and enjoy the top hits, and make your voice heard by voting up your favorite songs. Experience the best of current music with Musica!",
    image: "/images/projects/Musica.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhishek-jha-96/Musica",
    previewUrl: "#",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
