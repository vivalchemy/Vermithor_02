import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  connect,
  events,
  donate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Alumni Giving Hub",
    icon: web,
    description:
      "A dedicated platform where alumni can give back to their alma mater through financial contributions, volunteering, and offering support for various institutional initiatives. Engage in meaningful ways to contribute to scholarships, programs, and more, while fostering a sense of community and growth.",
    rightIcon: donate,
    flip: false,
  },
  {
    title: "Mentorship Connect",
    icon: mobile,
    description:
      "A networking platform that facilitates direct connections between alumni and current students or fellow alumni seeking guidance. Get career advice, mentorship, and insights from experienced professionals in various fields, and strengthen your professional network through meaningful relationships.",
    rightIcon: connect,
    flip: true,
  },
  {
    title: "Event Calendar",
    icon: backend,
    description:
      "Stay informed and never miss an important event with the alumni event calendar. Track upcoming reunions, networking opportunities, and social gatherings organized by your alma mater, ensuring you're always connected and engaged with your alumni community.",
    rightIcon: creator,
    flip: false,
  },
  {
    title: "EventLink",
    icon: creator,
    description:
      "Easily access and participate in a variety of alumni-organized events through the EventLink platform. From virtual meetups to in-person gatherings, this hub offers a seamless way to stay involved and join events hosted by alumni groups worldwide.",
    rightIcon: events,
    flip: true,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    services: [
      {
        title: "Web Development",
        icon: "path/to/icon1.png", // Update with actual icon path
        description: "Building and maintaining websites and web applications.",
      },
      {
        title: "UI/UX Design",
        icon: "path/to/icon2.png", // Update with actual icon path
        description: "Designing user interfaces and enhancing user experience.",
      },
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    services: [
      {
        title: "Mobile App Development",
        icon: "path/to/icon3.png", // Update with actual icon path
        description: "Creating mobile applications using React Native.",
      },
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    services: [
      {
        title: "E-commerce Solutions",
        icon: "path/to/icon4.png", // Update with actual icon path
        description: "Developing online stores and payment gateways.",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The Alumni Giving Hub made it so easy for me to contribute to my college projects! I love staying connected with fellow alumni and seeing the impact of our donations.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Mentorship Connect has been a game changer! I received invaluable guidance from experienced alumni that helped me navigate my career path. Highly recommend it!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The Event Calendar keeps me updated on all alumni events. I never miss a reunion or networking opportunity, and I love connecting with old friends!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Discover Job Opportunities",
    description:
      "Briefly explain the purpose of the job board where alumni can post job openings and students can find employment opportunities.",
    tags: [
      {
        name: "View All Job Listings",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Support Student Projects",
    description:
      "Outline how students can create crowdfunding campaigns for their initiatives, enabling alumni to contribute.",
    tags: [
      {
        name: "Browse Projects to Support",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Learn and Grow",
    description:
      "Introduce the platform for alumni to create and share online courses and webinars on various topics.",
    tags: [
      {
        name: "Explore Courses and Webinars",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
