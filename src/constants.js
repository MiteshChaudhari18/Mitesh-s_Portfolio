// =======================
// Skills Section Logo's
// =======================
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
import celebalLogo from './assets/company_logo/celebal.jpeg';
import internpeLogo from './assets/company_logo/internpe.jpeg';
import AccentureLogo from './assets/company_logo/Accenture.png';
import datapolarisLogo from './assets/company_logo/datapolaris.png';

// Education Section Logo's
import rcLogo from './assets/education_logo/rc.png';
import neriLogo from './assets/education_logo/neri.png';
import schoolLogo from './assets/education_logo/school.jpg';

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
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
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
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: celebalLogo,
    role: "Celebal Intern",
    company: "Celebal Technology",
    date: "May 2025 - July 2025",
    desc: "Summer Intern in the Node JS department",
    skills: [
      "HTML", "CSS", "JavaScript", "React JS", "TypeScript",
      "Node JS", "Tailwind CSS", "MongoDb", "Redux", "Next Js"
    ],
    certificate: "https://drive.google.com/file/d/18r4tcZC05TdDzqONnFZ6c-5hGEGNIhnX/view?usp=drive_link",
  },
  {
    id: 1,
    img: internpeLogo,
    role: "INTERNSHIP At INTERNPE",
    company: "INTERNPE",
    date: "September 2024 - October 2024",
    desc: "Completed an internship at Internpe where I worked on Java programming...",
    skills: [
      "Java", "OOP", "Data Structures", "Algorithms", "SQL",
      "JDBC", "Git", "Basic Debugging"
    ],
    certificate: "https://drive.google.com/file/d/1Y5uYI90UViVImdYHy8V7IXKIfLSuGZle/view?usp=drive_link",
  },
  {
    id: 2,
    img: AccentureLogo,
    role: "Project Management Job Simulation",
    company: "Accenture",
    date: "May 2024",
    desc: "Completed a project management job simulation...",
    skills: [
      "Project Management", "Communication", "Leadership",
      "Team Collaboration", "Proposal Writing", "Problem Solving"
    ],
    certificate: "https://drive.google.com/file/d/14uH5iq9rSsSZkk_395vmq2wHZCkbNH5t/view?usp=sharing",
  },
  {
    id: 3,
    img: datapolarisLogo,
    role: "Developer | Management Member",
    company: "Data polaris",
    date: "September 2024 - Present",
    desc: "Contributed to multiple projects and managed tasks during club-led events.",
    skills: [
      "Problem Solving", "Project Planning", "Project Coordination",
      "Event Management", "Leadership", "Team Collaboration", "Communication"
    ],
    // certificate: "https://drive.google.com/your-certificate-link",
  },
];

export const education = [
  {
    id: 0,
    img: rcLogo,
    school: "R C Patel Institute of Technology, Shirpur",
    date: "Sept 2022 - present",
    desc: "I completed my Bachelor's degree in Computer Science (B.Tech) from R C Patel Institute of Technology. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at R C Patel Institute of Technology allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "B-TECH (Computer Engineering)",
  },
  {
    id: 1,
    img: neriLogo,
    school: "Janta High School , Neri",
    date: "Apr 2020 - March 2022",
    desc: "I completed my class 12 education from Janta High School , Neri, under the State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "StateBord(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Jain International School, Jamner",
    date: "Apr 2010 - March 2020",
    desc: "I completed my class 10 education from Jain International School, Jamner  under the CBSE board ",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "De-anonymizing Entities on Onion Sites Operating on the TOR Network",
    description:
      "A method focused on identifying real-world identities behind TOR onion sites using traffic and metadata.",
    image: imagesearchLogo,
    tags: ["Python", "Tkinter", "Requests", "BeautifulSoup", "Pygame", "Threading", "Tor"],
    github: "https://github.com/MiteshChaudhari18/De-anonymizing-Entities-on-Onion-Sites-Operating-on-the-TOR-Network.git",
  },
  {
    id: 1,
    title: "Crop Prediction Using Machine Learning",
    description:
      "ML system that recommends suitable crops based on soil, weather, and environmental conditions.",
    image: csprepLogo,
    tags: ["HTML", "CSS", "JavaScript", "Machine Learning", "React JS", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/MiteshChaudhari18/Crop_Management_System.git",
  },
  {
    id: 2,
    title: "Boolean Expression Solver",
    description:
      "Simplifies Boolean expressions and evaluates logic circuits for educational and technical use.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/MiteshChaudhari18/boolean-expression-solver.git",
    webapp: "https://boolean-expression-solver.vercel.app/",
  },
  {
    id: 3,
    title: "Password Strength Checker",
    description: "Checks the complexity and strength of user-entered passwords.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/MiteshChaudhari18/Password_Strength_Checker.git",
    webapp: "https://password-strength-checker-ashen.vercel.app/",
  },
  {
    id: 4,
    title: "QR Generator",
    description: "Chrome extension for creating QR codes from user input.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/MiteshChaudhari18/QR_CodeGenrator.git",
    webapp: "https://qr-code-genrator-ten.vercel.app/",
  },
  {
    id: 5,
    title: "Explore-The-World",
    description: "An interactive travel website showcasing destinations visually.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/MiteshChaudhari18/Explore-The-World.git",
    webapp: "https://explore-the-world-delta.vercel.app/",
  },
];
