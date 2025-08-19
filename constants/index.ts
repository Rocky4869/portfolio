import { StaticImageData } from "next/image";
import github from "@/public/icons/github.png";
import instagram from "@/public/icons/instagram.png";
import facebook from "@/public/icons/facebook.png";
import youtube from "@/public/icons/youtube.png";
import linkedin from "@/public/icons/linkedin.png";
import X from "@/public/icons/X.png";

import myphoto1 from "@/public/images/myphoto1.jpg";
import myphoto2 from "@/public/images/myphoto2.jpg";
import snoppy from "@/public/images/snoppy.png";

import html from "@/public/images/skills/html.png";
import css from "@/public/images/skills/css.png";
import js from "@/public/images/skills/js.png";
import tailwind from "@/public/images/skills/tailwind.png";
import react from "@/public/images/skills/react.png";
import redux from "@/public/images/skills/redux.png";
import ts from "@/public/images/skills/ts.png";
import next from "@/public/images/skills/next.png";
import node from "@/public/images/skills/node-js.png";
import mongodb from "@/public/images/skills/mongodb.png";
import express from "@/public/images/skills/express.png";
import mysql from "@/public/images/skills/mysql.png";
import graphql from "@/public/images/skills/graphql.png";
import docker from "@/public/images/skills/docker.webp";
import figma from "@/public/images/skills/figma.png";
import mui from "@/public/images/skills/mui.png";
import firebase from "@/public/images/skills/Firebase.png";
import reactnative from "@/public/images/skills/reactnative.png";
import framer from "@/public/images/skills/framer.png";
import git from "@/public/images/skills/git.png";
import python from "@/public/images/skills/python.png";
import java from "@/public/images/skills/java.png";

import cyss from "@/public/images/education/cyss.jpg";
import cuhk from "@/public/images/education/cuhk.png";
import asta from "@/public/images/work/asta.png";
import pwc from "@/public/images/work/pwc.png";
import ch from "@/public/images/work/ch.png";
import hase from "@/public/images/work/hase.png";
import ppc from "@/public/images/work/ppc.png";
import una from "@/public/images/work/una.png";
import coxana from "@/public/images/work/coxana.avif";

import cultural_scope from "@/public/images/projects/cultural_scope.png";
import simplified_twitter from "@/public/images/projects/twitter.png";
import choculate from "@/public/images/projects/choculate.png";

interface SocialLink {
  name: string;
  src: StaticImageData;
  href: string;
}

interface Skill {
  skill_name: string;
  Image: StaticImageData;
  width: number;
  height: number;
}

interface Education {
  name: string;
  subtitle: string;
  period: string;
  logo: StaticImageData;
}

interface Work {
  company: string;
  role: string;
  period: string;
  logo: StaticImageData;
} 

type Project = {
  key: string;
  title: string;
  subtitle: string;
  bullets: string[];
  image: StaticImageData;
  demo?: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    src: linkedin,
    href: "https://www.linkedin.com/in/rocky-lok-ki-tam/",
  },
  {
    name: "GitHub",
    src: github,
    href: "https://github.com/rocky4869",
  },
  {
    name: "Instagram",
    src: instagram,
    href: "https://www.instagram.com/loki_1009/",
  },
  {
    name: "Facebook",
    src: facebook,
    href: "https://www.facebook.com/profile.php?id=100007671552746",
  },
  {
    name: "X",
    src: X,
    href: "https://x.com/TamKi13059439",
  },
  {
    name: "YouTube",
    src: youtube,
    href: "https://www.youtube.com/channel/UCxq4ZUStvhnKmQHPOyXGZEw",
  },
];

export const frontend_skill: Skill[] = [
  {
    skill_name: "HTML5",
    Image: html,
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    Image: css,
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    Image: js,
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    Image: tailwind,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: mui,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: framer,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: react,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: redux,
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    Image: ts,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
        Image: next,
    width: 80,
    height: 80,
  },
];

export const backend_skill: Skill[] = [
  {
    skill_name: "Node.js",
    Image: node,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    Image: express,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    Image: mongodb,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    Image: firebase,
    width: 55,
    height: 55,
  },
  {
    skill_name: "MySQL",
    Image: mysql,
    width: 70,
    height: 70,
  },
  {
    skill_name: "GraphQL",
    Image: graphql,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    Image: python,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    Image: java,
    width: 80,
    height: 80,
  },
];

export const full_stack: Skill[] = [
  {
    skill_name: "React Native",
    Image: reactnative,
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    Image: docker,
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    Image: figma,
    width: 50,
    height: 50,
  },
  {
    skill_name: "Git",
    Image: git,
    width: 80,
    height: 80,
  },
];

export const education: Education[] = [
  {
    name: "S.K.H. Chan Young Secondary School",
    subtitle: "Secondary Education",
    period: "2014 - 2020",
    logo: cyss,
  },
  {
    name: "The Chinese University of Hong Kong",
    subtitle: "B.Sc. Computer Science",
    period: "2020 - 2025",
    logo: cuhk,
  },
];

export const work: Work[] = [
  {
    company: "Una Technologies Limited",
    role: "STEM Tutor",
    period: "Jan 2025 - Present",
    logo: una,
  },
  {
    company: "Coxana Limited",
    role: "STEM Tutor",
    period: "Oct 2024 - Present",
    logo: coxana,
  },
  {
    company: "Pet Pet Club Limited",
    role: "Web Developer Intern",
    period: "Mar 2025 - Jul 2025",
    logo: ppc,
  },
  {
    company: "Hang Seng Bank",
    role: "Data Analyst Intern",
    period: "Jun 2023 - Dec 2023",
    logo: hase,
  },
  {
    company: "Career Hackers",
    role: "Frontend Developer Intern",
    period: "Jan 2023 - Jun 2023",
    logo: ch,
  },
  {
    company: "PwC",
    role: "Firmwide Corporate Services - Global Technology Solutions Intern",
    period: "Jan 2023 - Mar 2023",
    logo: pwc,
  },
  {
    company: "Asta Systems Limited",
    role: "Software Engineer Intern",
    period: "Jun 2022 - Aug 2022",
    logo: asta,
  },
];

export const projects: Project[] = [
  {
    key: "cultural-scope",
    title: "Cultural Scope",
    subtitle: "ReactJS/Node.js/Express.js/Git/MongoDB/Figma/Material UI",
    bullets: [
      "Intuitive platform connecting users with cultural locations and events",
      "Detailed location pages integrated with Google Maps for easy navigation.",
      "Event section provides full details: title, location, description, date, time, presenter, and ticket price.",
    ],
    image: cultural_scope,
    demo: "https://github.com/Rocky4869/csci2720_prj",
  },
  {
    key: "simplified-twitter",
    title: "Simplified Twitter",
    subtitle: "ReactJS/Node.js/Express.js/Git/Firebase/MongoDB",
    bullets: [
      "Streamlined and easy-to-use version of Twitter.",
      "Focus on simplicity, user-friendliness, and essential features.",
    ],
    image: simplified_twitter,
    demo: "https://github.com/Rocky4869/twitter-project",
  },
  {
    key: "choculate",
    title: "Choculate",
    subtitle: "React Native/Figma",
    bullets: [
      "AI-driven expense tracking and personalized budgeting mobile app.",
      "Integrating multiple payment gateways for view of expenses.",
      "Including ChocoBot, an AI chatbot offering tailored financial guidance."
    ],
    image: choculate,
  },
];

export const images = {
  myphoto1: myphoto1,
  myphoto2: myphoto2,
  snoppy: snoppy,
  pokemonModel: "/models/pokemon_firered_-_players_room/scene.gltf",
  roomModel: "/models/isometric_rec_room/scene.gltf",
};
