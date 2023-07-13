import React from "react";
import reactImg from "../../Images/SkillsIcons/Vector.png";
import node from "../../Images/SkillsIcons/node-js 1.png";
import javascript from "../../Images/SkillsIcons/javascript 1.png";
import typescript from "../../Images/SkillsIcons/typescript-icon 1.png";
import html from "../../Images/SkillsIcons/html-5 1.png";
import css from "../../Images/SkillsIcons/css-3 1.png";
import express from "../../Images/SkillsIcons/Vector-1.png";
import next from "../../Images/SkillsIcons/Vector-2.png";
import figma from "../../Images/SkillsIcons/figma 1.png";
import tailwind from "../../Images/SkillsIcons/tailwind 1.png";
import Image from "next/image";
import styles from "./Skills.module.css"

const skills = [
  {
    img: reactImg,
    name: "React",
  },
  {
    img: node,
    name: "Node",
  },
  {
    img: javascript,
    name: "JavaScript",
  },
  {
    img: typescript,
    name: "TypeScript",
  },
  {
    img: html,
    name: "HTML",
  },
  {
    img: css,
    name: "CSS",
  },
  {
    img: express,
    name: "Express.js",
  },
  {
    img: next,
    name: "Next.js",
  },
  {
    img: figma,
    name: "Figma",
  },
  {
    img: tailwind,
    name: "Tailwind",
  },
];

const Skills = () => {
  return (
    <>
      {skills.map((skill, index) => (
        <div className={styles.skillWrapper} key={index}>
          <Image className={styles.skillIcon} src={skill.img} alt={skill.name} />
          <span className={styles.skillName}>{skill.name}</span>
        </div>
      ))}
    </>
  );
};

export default Skills;
