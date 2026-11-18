export const PERSONAL_INFO = {
  name: 'Pallavi',
  role: 'Software Engineer | Full Stack Developer',
  heroSubtitle: 'Software Engineer | Full Stack Developer',
  headlineBadge: 'SOFTWARE ENGINEER',
  degree: 'B.Tech in Computer Science and Engineering',
  year: 'Final Year Student',
  college: 'Institute of Engineering and Technology (IET), Lucknow',
  collegeShort: 'IET Lucknow',
  cgpa: '8.7/10',
  location: 'Lucknow, India',
  email: 'pallavi8455037@gmail.com',
  github: 'https://github.com/Pallavi0340',
  linkedin: 'https://www.linkedin.com/in/pallavi-2495b5368',
  resumeUrl: '/assets/aistudio/full_stack_bad2cfb9.pdf',
  resumeFileName: 'Pallavi_Resume.pdf',
  intro:
    "I'm a final-year Computer Science Engineering student at IET Lucknow, passionate about building scalable web applications and solving real-world problems through technology. I enjoy developing intuitive user interfaces, working with backend systems, and continuously exploring new technologies.",
  aboutHeading: "I'm passionate about creating digital solutions.",
  aboutParagraphs: [
    "I'm a final-year B.Tech Computer Science and Engineering student at the Institute of Engineering and Technology (IET), Lucknow, with a CGPA of 8.7/10. I enjoy solving real-world problems, building web applications, and continuously exploring new technologies to bridge the gap between clean architecture and intuitive design.",
    "From crafting responsive React interfaces to developing RESTful APIs using Node.js and Express, I focus on writing clean, maintainable code and building applications that deliver reliable performance. I'm also comfortable working with both relational and NoSQL databases.",
    'Alongside full-stack development, I continuously strengthen my problem-solving and algorithmic thinking skills through C++ and Data Structures & Algorithms.'
  ]
};

export const HERO_TECH_STACK = [
  { id: 'cpp', name: 'C++' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'react', name: 'React' },
  { id: 'nodejs', name: 'Node.js' },
  { id: 'express', name: 'Express' },
  { id: 'mongodb', name: 'MongoDB' },
  { id: 'mysql', name: 'MySQL' }
];

export const ABOUT_PILLARS = [
  {
    id: 'fullstack',
    title: 'Full-Stack Architecture',
    description:
      'Designing end-to-end web applications with React frontends, modular Express & Node.js services, and structured MongoDB or MySQL schemas.'
  },
  {
    id: 'algorithms',
    title: 'Core CS & Problem Solving',
    description:
      'Strong foundation in C++, Data Structures, Algorithms, DBMS, and Operating Systems applied to write efficient, predictable software.'
  },
  {
    id: 'ui-craft',
    title: 'Responsive Interface Craft',
    description:
      'Translating complex workflows into accessible, fast-loading layouts with clean CSS architecture across desktop, tablet, and mobile screens.'
  }
];

export const SKILL_CATEGORIES = [
  'All',
  'Frontend',
  'Backend',
  'Languages & Databases',
  'Tools & Core CS'
];

export const SKILLS_DATA = [
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    focus: 'Component architecture, custom hooks, state management & SPA routing',
    iconKey: 'react'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Languages & Databases',
    focus: 'Asynchronous patterns, DOM APIs, closures & modular browser code',
    iconKey: 'javascript'
  },
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    focus: 'Semantic markup, Flexbox, CSS Grid, custom properties & animations',
    iconKey: 'css'
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Languages & Databases',
    focus: 'Competitive programming, STL, OOP & memory-conscious problem solving',
    iconKey: 'cpp'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Languages & Databases',
    focus: 'Object-oriented programming, Collections Framework & strong core fundamentals',
    iconKey: 'java'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    focus: 'Event-driven services, async I/O, streams & scalable server runtimes',
    iconKey: 'nodejs'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    focus: 'RESTful API design, middleware pipelines, validation & JWT auth',
    iconKey: 'express'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Languages & Databases',
    focus: 'Schema modeling, aggregation pipelines & indexed document queries',
    iconKey: 'mongodb'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Languages & Databases',
    focus: 'Normalized relational schemas, joins, transactions & query tuning',
    iconKey: 'mysql'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools & Core CS',
    focus: 'Pull request reviews, issue tracking & collaborative project hosting',
    iconKey: 'github'
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'Tools & Core CS',
    focus: 'Graphs, dynamic programming, trees & time-space complexity analysis',
    iconKey: 'dsa'
  },
  {
    id: 'cs-core',
    name: 'DBMS, OS & OOP',
    category: 'Tools & Core CS',
    focus: 'ACID transactions, concurrency concepts & modular object design',
    iconKey: 'core'
  }
];

export const PROJECT_CATEGORIES = ['All', 'Full Stack', 'Analytics & AI'];

export const PROJECTS_DATA = [
  {
    id: 'vital-drop',
    title: 'Vital Drop',
    category: 'Full Stack',
    image: '/assets/aistudio/Screenshot_2026-11-18_185642_93815dbb.png',
    summary:
      'A full-stack blood bank management platform that connects donors, hospitals, organisations, and administrators. It supports blood inventory management, role-based access, and secure authentication.',
    stack: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    metrics: '4 user roles · Real-time blood inventory tracking',
    highlights: [
      'Implemented role-based access control separating donor, hospital, organisation, and administrator workflows.',
      'Built blood group stock in/out ledgers with validation to maintain accurate unit availability.',
      'Managed global authentication and inventory state with Redux alongside JWT-protected Express APIs.'
    ],
    architecture:
      'React.js and Redux client communicating with a Node.js and Express.js REST backend. MongoDB persists donor donations, hospital requests, and blood unit transactions with JWT middleware.',
    githubUrl: 'https://github.com/Pallavi0340/blood-bank-management',
    demoUrl: 'https://github.com/Pallavi0340/blood-bank-management'
  },
  {
    id: 'velora',
    title: 'Velora',
    category: 'Full Stack',
    image: '/assets/aistudio/VELORA_cd906af6.png',
    summary:
      'A full-stack e-commerce application featuring product browsing, shopping cart functionality, order management, secure authentication, and an admin dashboard for managing products and orders.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT'],
    metrics: 'Storefront + Admin dashboard · Cloud media uploads',
    highlights: [
      'Developed responsive product catalog browsing, category filtering, and interactive shopping cart management.',
      'Built an admin dashboard for creating products, uploading media via Cloudinary, and updating order statuses.',
      'Secured user accounts, checkout flows, and admin routes with JWT authentication and Express middleware.'
    ],
    architecture:
      'React.js frontend backed by Node.js/Express.js REST endpoints, MongoDB for products, users, and orders, and Cloudinary for optimized product image storage.',
    githubUrl: 'https://github.com/Pallavi0340/ecommerce',
    demoUrl: 'https://github.com/Pallavi0340/ecommerce'
  },
  {
    id: 'shoppulse',
    title: 'ShopPulse',
    category: 'Analytics & AI',
    image: '/src/assets/images/shoppulse-dashboard.png',
    summary:
      'An e-commerce analytics dashboard that explores cart abandonment, shipping trends, and customer reviews. It also integrates AI-assisted insights to help interpret analytics and identify potential areas for improvement.',
    stack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MySQL', 'Ollama'],
    metrics: 'MySQL analytics queries · Local AI insights via Ollama',
    highlights: [
      'Analyzed cart abandonment patterns, carrier shipping timelines, and customer review trends from relational MySQL datasets.',
      'Integrated Ollama to generate concise, actionable AI-assisted summaries directly from store metrics.',
      'Built a fast React.js + Vite dashboard backed by structured Node.js and Express.js aggregation endpoints.'
    ],
    architecture:
      'React.js + Vite analytics UI querying an Express.js API layer connected to MySQL for structured aggregations and a local Ollama runtime for AI insight generation.',
    githubUrl: 'https://github.com/Pallavi0340/shoppulse',
    demoUrl: 'https://github.com/Pallavi0340/shoppulse'
  }
];

export const EDUCATION_DATA = [
  {
    id: 'btech-iet',
    isPrimary: true,
    level: 'Undergraduate Degree',
    institution: 'Institute of Engineering and Technology (IET), Lucknow',
    qualification: 'Bachelor of Technology (B.Tech)',
    branch: 'Computer Science and Engineering',
    period: '2023–2027',
    scoreLabel: 'CGPA',
    scoreValue: '8.7/10'
  },
  {
    id: 'class-xii',
    isPrimary: false,
    level: 'Year of Completion',
    institution: 'St. Thomas School, Mainpuri',
    qualification: 'Senior Secondary (Class XII)',
    period: '2022',
    scoreLabel: 'Percentage',
    scoreValue: '92.4%'
  },
  {
    id: 'class-x',
    isPrimary: false,
    level: 'Year of Completion',
    institution: 'St. Thomas School, Mainpuri',
    qualification: 'Secondary Education (Class X)',
    period: '2020',
    scoreLabel: 'Percentage',
    scoreValue: '94%'
  }
];
