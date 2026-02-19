export interface Student {
  id: number;
  name: string;
  promotion: string;
  role: string;
  img: string;
  description: string;
  tags: string[];
}

export const studentsData: Student[] = [
  {
    id: 1,
    name: "Anna Garcia",
    promotion: "2020",
    role: "Frontend Developer",
    img: "https://bootdey.com/img/Content/avatar/avatar1.png",
    description: "Apasionada del desarrollo web con experiencia en React y Angular. Siempre buscando nuevos desafíos y oportunidades para crecer profesionalmente.",
    tags: ["React", "Angular", "JavaScript", "CSS"]
  },
  {
    id: 2,
    name: "John Doe",
    promotion: "2021",
    role: "Backend Developer",
    img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    description: "Experto en desarrollo backend con experiencia en Node.js y Python. Apasionado por la arquitectura de sistemas escalables.",
    tags: ["Node.js", "Python", "Express", "Django"]
  },
  {
    id: 3,
    name: "Emily Smith",
    promotion: "2020",
    role: "Full Stack Developer",
    img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    description: "Desarrolladora full stack con experiencia en tecnologías frontend y backend. Siempre buscando aprender nuevas herramientas y mejorar mis habilidades.",
    tags: ["React", "Node.js", "MongoDB", "GraphQL"]
  },
  {
    id: 4,
    name: "Michael Brown",
    promotion: "2021",
    role: "Data Scientist",
    img: "https://bootdey.com/img/Content/avatar/avatar4.png",
    description: "Apasionado por el análisis de datos y la inteligencia artificial. Experiencia en Python, R y machine learning.",
    tags: ["Python", "R", "Machine Learning", "Data Analysis"]
  },
  {
    id: 5,
    name: "Sarah Johnson",
    promotion: "2020",
    role: "UX Designer",
    img: "https://bootdey.com/img/Content/avatar/avatar5.png",
    description: "Diseñadora UX con experiencia en investigación de usuarios y diseño de interfaces intuitivas. Apasionada por crear experiencias digitales excepcionales.",
    tags: ["UX Design", "User Research", "Figma", "Adobe XD"]
  }
];