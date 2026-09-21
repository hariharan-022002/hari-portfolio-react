export const profile = {
  name: 'Hari Haran',
  role: 'AI & Data Science Engineer  //  Full-Stack Web Developer',
  tagline:
    "I build at the intersection of data and interface, creating models that predict and apps that ship.",
  email: 'hariharan.connects@gmail.com',
  phone: '+91 8870379008',
  location: 'Madurai, India',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/CodeHunterHari',
    linkedin: 'https://www.linkedin.com/in/hariharanMuthalagan',
    behance: 'https://behance.com/haridesigns',
    instagram: 'https://instagram.com/haridesigns.jpeg',
    whatsapp: 'https://wa.me/+918870379008',
  },
  about:
    "I'm Hari, an M.Sc. graduate in Artificial Intelligence and Data Science with experience in both machine learning and web development. I enjoy working across the full journey of a project, from cleaning and understanding data to building models, developing APIs, and creating interfaces that make the results useful and accessible.I'm looking for a fresher role where I can apply these skills to real world problems, learn from experienced teams, and grow as a developer and data professional.",
}

export const education = [
  {
    degree: 'M.Sc. Artificial Intelligence & Data Science',
    school: 'Alagappa University, Karaikudi',
    period: '2023 — 2025',
    note: 'Focus: machine learning, NLP, statistical modelling.',
  },
  {
    degree: 'B.Sc. Computer Science',
    school: 'Madurai Kamarajar University, Madurai',
    period: '2020 — 2023',
    note: 'Foundations: data structures, algorithms, databases, web programming.',
  },
]

export const projects = [
  {
    title: 'Flipkart Review Extraction & Sentiment Analyser',
    description:
      'Scrapes live product reviews and classifies sentiment at scale, turning scattered customer feedback into a single read on market perception.',
    tools: ['Python', 'Flask', 'Pandas', 'NumPy', 'NLTK', 'HTML/CSS'],
    image: '/assets/flipkart3.jpg',
    tag: 'Data Science',
    github: 'https://github.com/CodeHunterHari',
    demo: '#',
  },
  {
    title: 'Telecom Churn Prediction Engine',
    description:
      'A supervised ML pipeline that flags customers likely to churn before they leave, giving retention teams a ranked list instead of a guess.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    image: '/assets/churn.png',
    tag: 'Machine Learning',
    github: 'https://github.com/CodeHunterHari',
    demo: '#',
  },
  {
    title: 'Drug Classification',
    description:
      'Streamlit apps that expose trained models through sliders and live charts, so non-technical stakeholders can explore predictions themselves.',
    tools: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
    image: '/assets/ecomm.png',
    tag: 'Data Science',
    github: 'https://github.com/CodeHunterHari',
    demo: '#',
  },
  {
    title: 'This Portfolio — v1',
    description:
      'The Flask + vanilla JS predecessor to this site: server-rendered, hand-animated, and deployed on Vercel. Rebuilt here in React for v2.',
    tools: ['Flask', 'HTML/CSS', 'JavaScript', 'Vercel'],
    image: '/assets/dev.png',
    tag: 'Web Development',
    github: 'https://github.com/CodeHunterHari',
    demo: '#',
  },
]

export const skillGroups = [
  {
    label: 'Data & Machine Learning',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'Pandas / NumPy', level: 80 },
      { name: 'NLTK', level: 65 },
    ],
  },
  {
    label: 'Web Development',
    skills: [
      { name: 'React', level: 70 },
      { name: 'JavaScript', level: 70 },
      { name: 'HTML / CSS / Tailwind', level: 88 },
      { name: 'Flask', level: 72 },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'Streamlit', level: 75 },
      { name: 'SQL', level: 65 },
      { name: 'Vercel', level: 70 },
    ],
  },
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
