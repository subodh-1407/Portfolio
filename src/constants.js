// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },

      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Intern",
      company: "CODEistic Technologies",
      date: "June 2024 - August 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Redux",
        "Node JS",
        "Express JS",
        "MongoDb",
        "Tailwind CSS",
      ],
    },
    // {
    //   id: 1,
    //   img: agcLogo,
    //   role: "Fullstack Engineer",
    //   company: "Agumentik Group of Companies",
    //   date: "July 2023 - March 2024",
    //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    //   skills: [
    //     "ReactJS",
    //     "Redux",
    //     "JavaScript",
    //     "Tailwind CSS",
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //   ],
    // },
    {
      id: 1,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "March 2024 - May 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "ReactJS",
        "Redux",
        "Bootstrap",
        "Figma",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Harcourt Butler Technical University, Kanpur",
      date: "Dec 2021 - June 2025",
      grade: "7.9 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science & Engineering (B.Tech.) from Harcourt Butler Technical University , Kanpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at HBTU allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - BTech (Computer Science & Engineering)",
    },
    // {
    //   id: 1,
    //   img: bsaLogo,
    //   school: "BSA College, Mathura",
    //   date: "Sept 2018 - Aug 2021",
    //   grade: "73.2%",
    //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    //   degree: "Bachelor of Science - BSC (Computer Science)",
    // },
    {
      id: 1,
      img: vpsLogo,
      school: "Brij Bhushan Lal Public School, Bareilly",
      date: "Apr 2018 - March 2019 (91.8%)",
      grade: "91.8%",
      desc: "I completed my class 12 education from Brij Bhushan Lal Public School, Bareilly, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Brij Bhushan Lal Public School, Bareilly",
      date: "Apr 2016 - March 2017",
      grade: "10 CGPA",
      desc: "I completed my class 10 education from Brij Bhushan Lal Public School, Bareilly, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "NewsTogether",
      description:
        "A multilingual news aggregation platform that provides personalized news content in various languages.",
      image: githubdetLogo,
      tags: ["React JS", "Node.js",  "Express","MongoDB","JavaScript", "API" , "Tailwind CSS"],
      github: "https://github.com/subodh-1407/NEWS_TOGETHER_APP",
      webapp: "https://news-together-app.vercel.app/",
    },
    {
      id: 1,
      title: "IMAGINO App",
      description:
        "An AI-powered image generator web app that creates images from user prompts using a text-to-image API.",
      image: csprepLogo,
      tags: ["React JS", "Node.js",  "Express","MongoDB","JavaScript", "API" , "Tailwind CSS"],
      github: "https://github.com/subodh-1407/AI_IMAGE_GENERATOR",
      webapp: "https://ai-image-generator-nine-eta.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Search App",
      description:
        "A React-based web application that provides movie details based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/subodh-1407/subodh-1407-Movie_Search_APP_",
      webapp: "https://subodh-1407-movie-search-app.vercel.app/",
    },
    {
      id: 3,
      title: "TextSync App",
      description:
        "Real-time collaborative text editor that allows multiple users to edit the same document simultaneously.",
      image: npmLogo,
      tags: ["React JS", "Node.js",  "Express","MongoDB","JavaScript", "API" ,"WebSockets", "Tailwind CSS"],
      github: "https://github.com/subodh-1407/Real_Time_Editor",
      webapp: "https://real-time-editor-delta.vercel.app/",
    },
    {
      id: 4,
      title: "Ranking App",
      description:
        "A full-stack web application that allows users to claim random points and compete on a dynamic leaderboard.",
      image: taskremLogo,
      tags: ["React JS", "Node.js",  "Express","MongoDB","JavaScript", "API" ,"WebSockets", "Tailwind CSS"],
      github: "https://github.com/subodh-1407/ranking-system",
      webapp: "https://ranking-system-ivory.vercel.app/",
    },
    {
       id: 5,
      title: "Collaborative Todo Board App",
      description:
        "A real-time collaborative task management application built with React (frontend) and Node.js/Express (backend).",
      image: webverLogo,
      tags: ["React JS", "Node.js",  "Express","MongoDB","JavaScript", "API" ,"WebSockets", "Tailwind CSS"],
      github: "https://github.com/subodh-1407/collaborative-todo-board",
      webapp: "https://collaborative-todo-board.vercel.app/",
    },
   
  ];  