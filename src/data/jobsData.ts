export interface Job {
  id: number;
  name: string;
  company: string;
  minSalary: number;
  maxSalary: number;
  typeContract: string;
  requiredTecnologies: string[];

}

export const jobsData: Job[] = [
  {
    id: 1,
    name: "Front end developer",
    company: "Company",
    minSalary: 30000,
    maxSalary: 40000,
    typeContract: "Full time",
    requiredTecnologies: ["React", "Angular", "JavaScript", "CSS"]
  },
  {
    id: 2,
    name: "Back end developer",
    company: "Company",
    minSalary: 35000,
    maxSalary: 50000,
    typeContract: "Full time",
    requiredTecnologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    id: 3,
    name: "Full stack developer",
    company: "Company",
    minSalary: 40000,
    maxSalary: 60000,
    typeContract: "Full time",
    requiredTecnologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    id: 4,
    name: "Data analyst",
    company: "Company",
    minSalary: 35000,
    maxSalary: 50000,
    typeContract: "Full time",
    requiredTecnologies: ["Python", "SQL", "Tableau", "Power BI"]
  },
  {
    id: 5,
    name: "DevOps engineer",
    company: "Company",
    minSalary: 45000,
    maxSalary: 65000,
    typeContract: "Full time",
    requiredTecnologies: ["Docker", "Kubernetes", "AWS", "Jenkins"]
  },
  {
    id: 6,
    name: "UX/UI designer",
    company: "Company",
    minSalary: 35000,
    maxSalary: 50000,
    typeContract: "Full time",
    requiredTecnologies: ["Figma", "Adobe XD", "Sketch", "Photoshop"]
  },
  {
    id: 7,
    name: "Mobile developer",
    company: "Company",
    minSalary: 35000,
    maxSalary: 50000,
    typeContract: "Full time",
    requiredTecnologies: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    id: 8,
    name: "QA engineer",
    company: "Company",
    minSalary: 35000,
    maxSalary: 50000,
    typeContract: "Full time",
    requiredTecnologies: ["Selenium", "JUnit", "TestNG", "Cucumber"]
  }
];