import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import ssTNQ from "./ss-the-noble-quran.png";
import ssReVMinder from "./ss-revminder.png";
import ssGithubUS from "./ss-github-user-search.png";

export const NavLinks = [
  {
    link: "Home",
    href: "/",
  },
  {
    link: "About",
    href: "/about",
  },
  {
    link: "Skills",
    href: "/skills",
  },
  {
    link: "Projects",
    href: "/projects",
  },
  {
    link: "Contact",
    href: "/contact",
  },
];

export const ProjectsContent = [
  {
    id: 1,
    title: "The Noble Qur'an",
    tech: ["React", "TypeScript", "Tailwind", "ShadCn"],
    img: ssTNQ,
    desc: "An easy-to-use Al-Qur'an App with EQuran API, featuring an audio player, light and dark modes, and handy bookmarks.",
    link: "https://the-noble-quran.vercel.app/",
    linktitle: "The Noble Qur'an",
  },
  {
    id: 2,
    title: "ReVMinder",
    tech: ["React", "JavaScript", "Tailwind", "DaisyUI"],
    img: ssReVMinder,
    desc: "A comprehensive online platform offering maintenance support for your vehicle, complete with note-taking capabilities and helpful reminders.",
    link: "#",
    linktitle: "-",
  },
  {
    id: 3,
    title: "Github User Search App",
    tech: ["React", "Tailwind"],
    img: ssGithubUS,
    desc: "Tinkering with a straightforward Github user search app. My playground to grasp data fetching from the Github API.",
    link: "https://gihub-api-react.vercel.app/",
    linktitle: "Github User Search App",
  },
];

export const SkillsItem = [
  {
    id: 1,
    tech: "HTML",
    icon: <FaHtml5 size={25} />,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <FaCss3Alt size={25} />,
  },
  {
    id: 3,
    tech: "JavaScript",
    icon: <IoLogoJavascript size={25} />,
  },
  {
    id: 4,
    tech: "TypeScript (Learn)",
    icon: <BiLogoTypescript size={25} />,
  },
  {
    id: 5,
    tech: "React",
    icon: <FaReact size={25} />,
  },
  {
    id: 6,
    tech: "Tailwind",
    icon: <SiTailwindcss size={25} />,
  },
  {
    id: 7,
    tech: "Bootstrap",
    icon: <FaBootstrap size={25} />,
  },
  {
    id: 8,
    tech: "Git",
    icon: <FaGitAlt size={25} />,
  },
];
