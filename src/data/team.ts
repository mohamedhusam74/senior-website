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
  cvFile: string | null; // drop file into /public/cvs/ with this filename
}

export const teamMembers: TeamMember[] = [
  {
    name: "Mohamed Husam Mohamed Darwish",
    phone: "+97338236611",
    email: "mohamedhusam2003@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohamed-husam-0a70a6247",
    role: "Cybersecurity Enthusiast | 4th Year CY student",
    bio: "4th year Cybersecurity student at University of Bahrain, also enrolled at Reboot Coding Institute. Passionate about ethical hacking, penetration testing, protecting systems, and managing risks.",
    skills: ["Java", "Go", "Python", "JavaScript", "HTML", "CSS", "SQLite", "Docker", "Git", "RESTful APIs", "Client-Server Architecture"],
    certifications: [
      "AWS Cloud Practitioner (2025)",
      "Pursuing AWS Solutions Architect",
      "Pursuing eJPTv2",
    ],
    activities: [
      "Real-Time News Aggregation System",
      "Artist Events Dashboard",
      "Real-time Forum",
      "Ant Colony Pathfinding Simulator",
      "Browser-Based Arcade Game Engine",
    ],
    cvFile: "mohamed_cv.pdf", // drop file at /public/cvs/mohamed_cv.pdf
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
    cvFile: "kaltham_cv.pdf", // drop file at /public/cvs/kaltham_cv.pdf
  },
];
