export interface Event {
  id: number;
  name: string;
  img: string;
  date: string;
  location: string;
  format: string;
  description: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    name: "Alumni Meetup",
    img: "../assets/images/event1.png",
    date: "2024-07-15",
    location: "Barcelona Activa",
    format: "In-person",
    description: "Join us for an evening of networking and knowledge sharing with fellow alumni. Enjoy guest speakers, panel discussions, and opportunities to connect with industry professionals."
  },
  {
    id: 2,
    name: "Tech Talk: Future of Web Development",
    img: "../assets/images/event2.png",
    date: "2024-08-20",
    location: "Online",
    format: "Virtual",
    description: "Explore the latest trends and innovations in web development. Learn about new frameworks, tools, and best practices that are shaping the future of the web."
  },
  {
    id: 3,
    name: "Career Workshop: Navigating the Job Market",
    img: "../assets/images/event3.png",
    date: "2024-09-10",
    location: "Barcelona Activa",
    format: "In-person",
    description: "Learn practical strategies for navigating the job market and advancing your career. Get insights from industry professionals and participate in interactive workshops."
  }
];