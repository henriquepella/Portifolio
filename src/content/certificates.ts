import { FaAws, FaJava } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { SiGit, SiPython, SiScrumalliance } from "react-icons/si";
import type { Certificate } from "@/types/content";

/**
 * Certifications currently being pursued. Switch `status` to "completed"
 * (and add credential links here) as they are earned.
 */
export const certificates: Certificate[] = [
  { id: "oracle", name: "Oracle Database", issuer: "Oracle", icon: GrOracle, status: "in-progress" },
  { id: "java", name: "Java SE", issuer: "Oracle", icon: FaJava, status: "in-progress" },
  { id: "python", name: "Python", issuer: "Python Institute", icon: SiPython, status: "in-progress" },
  { id: "scrum", name: "Scrum Foundations", issuer: "Scrum Alliance", icon: SiScrumalliance, status: "in-progress" },
  { id: "git", name: "Git & GitHub", issuer: "GitHub", icon: SiGit, status: "in-progress" },
  { id: "aws", name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", icon: FaAws, status: "in-progress" },
];
