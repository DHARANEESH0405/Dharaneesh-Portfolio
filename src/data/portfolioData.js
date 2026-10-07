export const personalInfo = {
  name: "Dharaneesh M",
  initials: "DM",
  tagline: "Building practical software solutions with code, curiosity, and continuous learning.",
  role: "Aspiring Software Engineer | Full Stack Developer | AI/ML Enthusiast",
  subRole: "Aspiring Software Engineer • Full Stack Developer • AI/ML Enthusiast",
  heroHeading: "Hi, I'm Dharaneesh.",
  heroHeadingAccent: "I build practical software solutions.",
  heroDescription: "Computer Science and Engineering student passionate about software development, artificial intelligence, problem solving, and building practical technology solutions.",
  objective: "Aspiring Engineer graduate seeking an opportunity to apply my programming, problem-solving, and technical skills to develop practical software solutions while continuously learning and contributing to organizational growth.",
  contact: {
    phone: "+91-9842072615",
    email: "dharaneeshms456@gmail.com",
    github: "https://github.com/DHARANEESH0405",
    linkedin: "https://linkedin.com/in/dharaneesh-ms/",
    location: "Tamil Nadu, India"
  },
  statusCard: {
    title: "Currently",
    items: [
      "🎓 B.E. Computer Science & Engineering",
      "💻 Building software & AI projects",
      "🚀 Open to opportunities"
    ]
  },
  quickFacts: [
    {
      icon: "GraduationCap",
      label: "Degree",
      value: "B.E. Computer Science & Engineering"
    },
    {
      icon: "Building2",
      label: "Institution",
      value: "Er. Perumal Manimekalai College of Engineering, Hosur"
    },
    {
      icon: "Award",
      label: "Academic Score",
      value: "CGPA: 7.55"
    },
    {
      icon: "Compass",
      label: "Core Focus",
      value: "Software Development, UI/UX Designing"
    }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Languages used for system building, data analysis, and web applications",
    skills: [
      { name: "Python", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Java (Basic)", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ]
  },
  {
    category: "Database",
    icon: "Database",
    description: "Relational and NoSQL database management systems",
    skills: [
      { name: "MySQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    description: "Development environments, version control, and productivity tools",
    skills: [
      { name: "VS Code", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Jupyter Notebook", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Git", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", level: "Proficient", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ]
  },
  {
    category: "Core Concepts",
    icon: "Brain",
    description: "Foundational Computer Science paradigms & methodologies",
    skills: [
      { name: "Data Structures", level: "Core", icon: "Layers" },
      { name: "Object-Oriented Programming", level: "Core", icon: "Box" },
      { name: "Machine Learning", level: "Applied", icon: "Cpu" },
    ]
  }
];

export const projectsData = [
  {
    id: "biometric-atm-authentication",
    number: "PROJECT 01",
    title: "Multi-Layered Biometric ATM Authentication & Transaction System",
    shortDescription: "Developed a multi-layered authentication system using card verification, facial recognition, and encrypted PIN authentication.",
    fullDescription: "An advanced security-first banking application concept that addresses traditional ATM vulnerabilities by enforcing a three-tier identity verification workflow: RFID/Card validation, real-time Computer Vision facial matching, and AES-encrypted PIN entry before releasing transaction access.",
    problemStatement: "Traditional ATM transactions relying solely on physical cards and 4-digit PINs are vulnerable to card cloning, shoulder surfing, and identity theft. This system introduces multi-factor biometric verification to safeguard financial access.",
    keyFeatures: [
      "RFID / Card Verification module for initial identity match",
      "Real-time Facial Recognition using OpenCV & Machine Learning",
      "AES Encrypted PIN Authentication layer",
      "Secure ledger transaction processing simulation",
      "Comprehensive system audit and activity logging dashboard"
    ],
    technologies: ["Python", "OpenCV", "Flask", "Tkinter", "Scikit-learn", "Pandas"],
    githubPlaceholder: "GitHub Repository",
    liveDemoPlaceholder: "View Demo (Local / Stage)",
    category: "Security & Computer Vision",
    highlights: ["Multi-Factor Security", "Real-Time Face Match", "Encrypted Transactions"],
    visualType: "security"
  },
  {
    id: "log-anomaly-detection",
    number: "PROJECT 02",
    title: "Log Anomaly Detection",
    shortDescription: "Developed an AI-based system to detect abnormal patterns in system and application logs.",
    fullDescription: "A full-stack intelligent monitoring system that parses complex application log streams in real-time, trains machine learning anomaly classifiers, and presents system health diagnostics via an intuitive web dashboard.",
    problemStatement: "Modern microservices produce gigabytes of log data every minute. Manual error detection is impractical. This system automates log analysis using unsupervised machine learning models to detect operational anomalies before system downtime occurs.",
    keyFeatures: [
      "Automated log ingestion and parsing engine",
      "AI-driven anomaly detection model (Isolation Forest / Autoencoder logic)",
      "Real-time stream monitoring & alert thresholds",
      "Interactive data visualization dashboard with metric graphs",
      "Historical error pattern breakdown & trend reports"
    ],
    technologies: ["Python", "Machine Learning", "React.js", "Node.js", "MongoDB"],
    githubPlaceholder: "GitHub Repository",
    liveDemoPlaceholder: "View Dashboard Demo",
    category: "AI/ML & Full Stack",
    highlights: ["AI Anomaly Engine", "Real-time Monitoring", "Full-Stack Dashboard"],
    visualType: "dashboard"
  }
];

export const experienceData = [
  {
    role: "Full Stack Development Intern",
    company: "Cognizant",
    location: "Chennai",
    period: "2026",
    badge: "Upcoming / Recent",
    responsibilities: [
      "Completed hands-on training in Python programming and full-stack software development workflows.",
      "Developed mini projects demonstrating modern web engineering and component architectures.",
      "Improved analytical problem-solving and systematic code debugging skills under industry mentorship.",
      "Acquired practical knowledge in industry-level software development practices and version control.",
      "Developed effective teamwork and exposure to emerging technology stack paradigms."
    ],
    skills: ["Python", "Full Stack Development", "Problem Solving", "Software Architecture"]
  },
  {
    role: "Web Development Intern",
    company: "BSS Computer Academy",
    location: "On-site / Hybrid",
    period: "2025",
    badge: "Completed",
    responsibilities: [
      "Worked on hands-on Python-based development tasks and web script integrations.",
      "Strengthened foundational coding skills and algorithmic problem execution.",
      "Gained practical exposure to real-world software development practices and project lifecycles.",
      "Gained hands-on experience in Python programming, web development, and database management.",
      "Participated in database schema creation and query optimization exercises."
    ],
    skills: ["Python", "Web Development", "Database Management", "HTML/CSS"]
  }
];

export const educationData = [
  {
    degree: "B.E. — Computer Science and Engineering",
    institution: "Er. Perumal Manimekalai College of Engineering, Hosur",
    period: "2023 – 2027",
    year: "2027",
    score: "CGPA: 7.55",
    status: "Currently Pursuing",
    details: "Focusing on Software Engineering, Data Structures, Web Development, Object-Oriented Programming, and Machine Learning."
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Government Higher Secondary School, Athani",
    period: "2021 – 2023",
    year: "2023",
    score: "Percentage: 61%",
    status: "Completed",
    details: "Mathematics and Computer Science stream."
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Government Boys Higher Secondary School, Polavakalipalayam",
    period: "2020 – 2021",
    year: "2021",
    score: "Percentage: All Pass",
    status: "Completed",
    details: "General Secondary Curriculum."
  }
];

export const certificationData = {
  title: "Full Stack Development Certification",
  issuer: "GUVI",
  placeholderLink: "Certificate Link",
  description: "Comprehensive certification covering modern full-stack web architectures, frontend & backend engineering, and database management.",
  date: "2025/2026",
  topics: ["Full Stack Engineering", "Frontend Frameworks", "Backend APIs", "Database Systems"]
};

export const softSkillsData = [
  {
    title: "Adaptability",
    description: "Quickly adjusting to new technology stacks, team workflows, and evolving project demands.",
    icon: "RefreshCw"
  },
  {
    title: "Quick Learner",
    description: "Rapidly mastering new programming languages, frameworks, and engineering concepts.",
    icon: "Zap"
  },
  {
    title: "Communication Skills",
    description: "Articulating technical ideas clearly, collaborating smoothly with team members and stakeholders.",
    icon: "MessageSquare"
  }
];

export const areasOfInterest = [
  {
    title: "Software Development",
    description: "Building scalable, efficient, clean-code applications across desktop, web, and microservice architectures.",
    icon: "Code",
    tags: ["Full Stack", "Clean Architecture", "API Design", "Python/JS"]
  },
  {
    title: "UI/UX Designing",
    description: "Crafting intuitive, accessible, and visually stunning digital user experiences with modern design systems.",
    icon: "Palette",
    tags: ["User Experience", "Responsive UI", "Component Systems", "Design Aesthetics"]
  }
];
