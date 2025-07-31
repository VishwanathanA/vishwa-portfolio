export const Bio = {
  name: "Vishwanathan A",
  roles: [
    "Java Developer",
    "Full Stack Developer",
    "Software Developer",
    "Programmer",
  ],
  description:
    "Motivated Java developer with demonstrated skills in Core Java and MySQL, seeking to leverage technical expertise in software development. Through projects like the AI Research Assistant Chrome extension and AgroConnect e-commerce platform, I've developed strong capabilities in building efficient, user-focused applications.",
  github: "https://github.com/VishwanathanA",
  resume: "https://drive.google.com/file/d/1-lC5oEF2CXkn89hkNc1WgugFiOb3DCsX/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/vishwanathan-a-84bb8a249/",
  email: "vishwanathan25112003@gmail.com",
  phone: "+91 9342979550",
  location: "Tiruvannamalai, Tamil Nadu, India"
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS3",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        image: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      },
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Flask",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Eclipse",
        image: "https://cdn.freebiesupply.com/logos/large/2x/eclipse-11-logo-png-transparent.png",
      },
      {
        name: "VS Code",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: "https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp",
      },
      {
        name: "Git",
        image: "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://novitechrd.com/wp-content/uploads/2023/05/novitech-fav-icon.png", // Replace with actual company logo
    role: "Java Development Intern",
    company: "Novitech R and D Private Limited",
    date: "June 2023 - July 2023",
    desc: "Developed a comprehensive Employee Management System using Core Java and MySQL that handled all basic CRUD operations along with advanced features like search filters and data export functionality. Gained practical experience with Object-Oriented Programming concepts by implementing inheritance in employee hierarchies and polymorphism in system operations.",
    skills: [
      "Java",
      "MySQL",
      "JDBC",
      "OOP",
      "Collections Framework",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://images.shiksha.com/mediadata/images/1646029936phpqIzdJk.jpeg", // Replace with actual college logo
    school: "Hindusthan College of Engineering and Technology",
    date: "October 2021 - April 2025",
    grade: "CGPA: 8.58/10.00",
    desc: "Bachelor of Technology in Information Technology",
    degree: "B.Tech Information Technology",
  },
  {
    id: 1,
    img: "https://www.stjosephacademy.edu.in/images/ST.%20JOSEPH%20ACADEMY%20MATRIC%20(6).png", // Replace with actual school logo
    school: "St. Joseph Academy Matric Higher Secondary School",
    date: "June 2020 - March 2021",
    grade: "Percentage: 86%",
    desc: "Higher Secondary Education in Computer Science",
    degree: "Higher Secondary Education (Computer Science)",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Research Assistant - Chrome Extension",
    date: "Apr 2023 - May 2023",
    description: "Created an innovative Chrome extension that helps researchers by providing AI-powered summaries of selected text content using Google's Gemini API, achieving over 90% accuracy in maintaining original meaning. Developed the Spring Boot backend to handle API requests efficiently, implementing proper error handling and response parsing to ensure reliable operation.",
    image: "https://www.cubeo.ai/wp-content/uploads/2024/04/AI-research-agent-AI-Assistant-for-business.jpg.webp", // Replace with actual project image
    tags: ["Spring Boot", "Gemini API", "JavaScript", "Chrome Extension APIs"],
    category: "web app",
    github: "https://github.com/VishwanathanA/AI-Research-Assistant",
  },
  {
    id: 1,
    title: "AgroConnect – E-commerce Platform for Farmers",
    date: "Jan 2023 - Mar 2023",
    description: "Developed a full-stack agricultural marketplace platform that connects farmers directly with buyers, eliminating middlemen and improving profit margins for agricultural producers. Implemented a bilingual interface (Tamil/English) with careful attention to user experience design principles to accommodate rural users with varying levels of digital literacy.",
    image: "https://user-images.githubusercontent.com/94702837/201917022-568fef25-f47d-49e4-b216-6373418e588f.png", // Replace with actual project image
    tags: ["HTML/CSS", "JavaScript", "Flask", "MongoDB"],
    category: "web app",
    github: "https://github.com/VishwanathanA/AgroConnect",
  },
  {
    id: 2,
    title: "Employee Management System",
    date: "Jun 2023 - Jul 2023",
    description: "Built a console-based employee management system using Core Java. Established database connectivity with JDBC and MySQL. Implemented all CRUD operations with prepared statements and designed efficient database schema with proper table relationships.",
    image: "https://user-images.githubusercontent.com/93054633/212612156-571af1dc-a5c0-45c5-a91c-61a4318340fd.png", // Replace with actual project image
    tags: ["Core Java", "JDBC", "MySQL"],
    category: "desktop app",
    github: "https://github.com/VishwanathanA/Employee-Management-System",
  },
];

export const TimeLineData = [
  { year: 2021, text: "Started B.Tech in Information Technology" },
  { year: 2023, text: "Completed Java Development Internship at Novitech R&D" },
  { year: 2023, text: "Developed AgroConnect e-commerce platform" },
  { year: 2023, text: "Created AI Research Assistant Chrome Extension" },
  { year: "Present", text: "Seeking software developer opportunities" },
];