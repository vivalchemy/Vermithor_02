import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../lib/styles";
import { github } from "../../assets";
import { SectionWrapper } from "./SectionWrapper";
import { projects } from "../../lib/data";
import { fadeIn, textVariant } from "../../lib/utils";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="project-card">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-secondary p-5 rounded-2xl w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />


        </div>

        <div className='mt-5'>
          <h3 className='text-primary font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-muted-foreground text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-muted-foreground uppercase tracking-wider">Our</p>
        <h2 className="text-foreground font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Features.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-muted-foreground text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>


      <div className='mt-20 grid grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <div className='grid grid-cols-1' key={`project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
