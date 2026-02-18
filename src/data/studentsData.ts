export interface Student {
  id: number;
  name: string;
  promotion: string;
  role: string;
}

export const studentsData: Student[] = [
  {
    id: 1,
    name: "Anna Garcia",
    promotion: "2020",
    role: "Frontend Developer"
  },
  {
    id: 2,
    name: "John Doe",
    promotion: "2021",
    role: "Backend Developer"
  },
  {
    id: 3,
    name: "Emily Smith",
    promotion: "2020",
    role: "Full Stack Developer"
  },
  {
    id: 4,
    name: "Michael Brown",
    promotion: "2021",
    role: "Data Scientist"
  },
  {
    id: 5,
    name: "Sarah Johnson",
    promotion: "2020",
    role: "UX Designer"
  }
];