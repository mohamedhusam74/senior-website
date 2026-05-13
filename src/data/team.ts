export interface TeamMember {
  name: string;
  phone: string;
  email: string;
  linkedin: string | null;
  role: string;
  bio: string;
  skills: string[];
  certifications: string[];
  activities: string[];
  experience: string[];
  cvFile: string | null;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Mohamed Husam Mohamed Darwish",
    phone: "+97338236611",
    email: "mohamedhusam2003@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohamed-husam-0a70a6247",
    role: "Cybersecurity enthusiastecurity @ UoB",
    bio: "Cybersecurity practitioner with hands-on experience in ethical hacking, penetration testing, system hardening, and risk management. Skilled in building secure applications using Python, Go, and JavaScript, with a strong foundation in client-server architecture, real-time systems, and network security. Actively pursuing advanced credentials in cloud architecture and penetration testing.",
    skills: [
      "Python", "Go", "Java", "JavaScript",
      "HTML", "CSS", "RESTful APIs", "SQLite",
      "Git", "Docker", "Real-Time Systems", "Penetration Testing",
      "Network Security", "System Hardening",
    ],
    certifications: [
      "AWS Cloud Practitioner (2025)",
      "Pursuing AWS Solutions Architect",
      "Pursuing eJPTv2 (eLearnSecurity)",
    ],
    activities: [
      "Real-Time News Aggregation System — Python, Sockets, SSL",
      "Artist Events Dashboard — Go, REST APIs",
      "Real-Time Forum — Go, JavaScript, SQLite, WebSockets",
      "Ant Colony Pathfinding Simulator — Go",
      "Browser-Based Arcade Game Engine — JavaScript, DOM",
    ],
    experience: [
      "Hub Administrator — D11 Gaming Hub, Dana Mall (2024)",
      "IT Volunteer — Bahrain Asian Youth Games 2025",
      "Volunteer — Arab International Cybersecurity Conference (AICS) 2025",
      "Volunteer — First Cyber Security Youth Forum, UoB",
    ],
    cvFile: "mohamed_cv.pdf",
  },
  {
    name: "Kaltham Abdulla Mohamed Basalar",
    phone: "+97335348069",
    email: "kaltham.abdulla22@gmail.com",
    linkedin: "https://www.linkedin.com/in/kaltham-basalar-268b05348",
    role: "Cybersecurity Student",
    bio: "Responsible and detail-oriented cybersecurity student looking forward to making an impact in the field.",
    skills: ["Microsoft 365", "Wireshark", "Packet Tracer", "Python", "Java"],
    certifications: [
      "AWS Certified Cloud Practitioner (2025)",
      "Essentials of Career Development — ThinkSmart (2025)",
      "INJAZ for Innovation (Digital Entrepreneurship)",
    ],
    activities: [
      "Internship at D11 Gaming Hub (2025)",
      "Arab International Cybersecurity Conference & Exhibition (ICS) 2023",
    ],
    experience: [],
    cvFile: "kaltham_cv.pdf",
  },
];
