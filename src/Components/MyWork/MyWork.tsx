import styles from "./Work.module.css";
import gamePage from "../../Images/PagePhotos/gamePage.png";
import homeWorkPage from "../../Images/PagePhotos/Screenshot 2023-07-12 103051.png";
import cryptoPage from "@/Images/PagePhotos/crypto.png"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import github from "../../Images/PagePhotos/github.png";

const pages = [
  {
    link: "https://gamefe.vercel.app/",
    name: "Marketplace for games",
    description: "Here I created a page where you can sell your games",
    img: gamePage,
  },
  {
    link: "https://cryptofe.vercel.app/",
    name: "Crypto page",
    description: "Here I created a page where you can track crypto daily changes",
    img: cryptoPage,
  },
  {
    link: "https://hwfront.vercel.app/",
    name: "HomeWork Page",
    description: "Here I created a page where you can write all my exams and homework ",
    img: homeWorkPage,
  },
  {
    link: "https://github.com/ArnoldasKolo",
    name: "My GitHub",
    description: "Here you can see all of my work ",
    img: github,
  },

];

const MyWork = () => {
  return (
    <>
      {pages.map((page, index) => (
        <div className={styles.pageWrapper} key={index}>
          <Link className={styles.link} href={page.link}>
                <div  className={styles.imgWrapper}>
                    <Image  className={styles.img} src={page.img} alt="pageimg" />
                </div>
                <div className={styles.descriptionWrapper}>
                    <h3 className={styles.name}>{page.name}</h3>
                    <p className={styles.description}>{page.description}</p>
                </div>
          </Link>
          
        </div>
      ))}
    </>
  );
};

export default MyWork;
