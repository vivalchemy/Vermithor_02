import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../../lib/data";
import { SectionWrapper } from "./SectionWrapper";
import { fadeIn, textVariant } from "../../lib/utils";

const ServiceCard = ({ index, title, icon, description, rightIcon, flip }) => ( // Added rightIcon as a prop
  <Tilt className='xs:w-[880px] w-full h-full shadow-glow-white'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full'
    >
      <div className="w-[139px]">

      </div>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary rounded-[20px] py-5 px-12 min-w-[280px] min-h-[280px] flex items-center relative ${flip && "flex-row-reverse"}`} // Ensured min-w and min-h are used correctly
      >
        {/* Vertical line */}
        {/* <div className='absolute inset-y-3 left-1/2 w-0.5 bg-white shadow-glow rounded-full'></div> */}

        <div className={`flex items-center z-10 w-1/2 ${flip && "flex-row-reverse"}`}> {/* Full width for better alignment */}
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain mr-4' // Added margin to the right for spacing
          />

          <div className='flex flex-col items-start flex-grow'> {/* Changed to flex-grow for proper spacing */}
            <h3 className='text-black text-[18px] font-bold text-left'>
              {title}
            </h3>
            <p className='text-black text-[14px] text-left mt-2'>
              {description}
            </p>
          </div>



        </div>
        <div className="w-[139px]">

        </div>
        <div className="w-[139px]">

        </div>
        {/* Right Image */}
        <div className='object-contain w-1/2 h-full'>
          <img
            src={rightIcon} // Use rightIcon prop for the right image
            alt="Right Icon" // Add appropriate alt text
          // Added margin to the left for spacing
          />
        </div>

      </div>
    </motion.div>
  </Tilt>
);




const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-muted-foreground uppercase tracking-wider">Introduction</p>
        <h2 className="text-foreground font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-muted-foreground text-[17px] max-w-3xl leading-[30px]'
      >
        Our platform offers a secure donation system for alumni to
        support college projects and initiatives, alongside tools that foster mentorship,
        professional collaboration, and community engagement. With features like a
        searchable alumni directory, event management tools, job boards, and personalized news feeds,
        alumni can stay connected and contribute meaningfully. The platform also includes mentorship
        programs, alumni-exclusive courses, and a crowdfunding system for student projects, making it
        a hub for lifelong connections and career development.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'> {/* Added justify-center */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
