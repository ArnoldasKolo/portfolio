import Image from "next/image";
import Header from "@/Components/Header/Header";
import styles from "@/styles/Home.module.css";
import myPhoto from "../Images/me.png";
import reactImg from "../Images/Heroicons/react.png";
import node from "../Images/Heroicons/node.png";
import facebook from "../Images/Socials/facebook 1.png";
import linkedin from "../Images/Socials/linkedin 1.png";
import MySkills from "@/Components/MySkills/MySkills";
import MyWork from "@/Components/MyWork/MyWork";
import Link from "next/link";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.heroWrapper} id="main">
        <div className={styles.hero}>
          <h1 className={styles.introduction}>Hi , I’m Arnoldas</h1>
          <p className={styles.about}>
            React & Node Developer | 1 Year Experience
          </p>
          <Image className={styles.myPhoto} src={myPhoto} alt="myPhoto" />
        </div>
        <div className={styles.heroIconsWrapper}>
          <Image className={styles.reactIcon} src={reactImg} alt="myPhoto" />
          <Image className={styles.reactIcon} src={node} alt="myPhoto" />
        </div>
      </div>
      <div className={styles.skillsSection} id="skills">
        <h1 className={styles.introduction}>My Skills</h1>
        <div className={styles.mySkills}>
          <MySkills />
        </div>
      </div>
      <div className={styles.workSection} id="work">
        <h1 className={styles.introduction}>My Work</h1>
        <div className={styles.myWork}>
          <MyWork />
        </div>
      </div>
      <div className={styles.contactsSection} id="contacts">
        <h1 className={styles.introduction}>Contacts</h1>
        <div className={styles.contactsWrapper}>
          <div className={styles.contacts}>
            <p className={styles.contact}>Name : Arnoldas Kološevskis</p>
            <p className={styles.contact}>Phone : +37067902624</p>
            <p className={styles.contact}>Email : kolocoding@gmail.com</p>
          </div>
          <div className={styles.socialsWrapper}>
            <Link href="https://www.facebook.com/arnoldas.kolosevskis/">
              <Image className={styles.Socials} src={facebook} alt="facebook" />
            </Link>
            <Link href="https://www.linkedin.com/in/arnoldas-kolo%C5%A1evskis-50894b234/">
              <Image className={styles.Socials} src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
