import React, { useState } from "react";
import logo from "../../images/logoYellow.png";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import burger from "../../images/burger-menu-right 1.png";

function scrollToSkills(): void {
  const section: HTMLElement | null = document.getElementById("skills");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToWork(): void {
  const section: HTMLElement | null = document.getElementById("work");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToContacts(): void {
  const section: HTMLElement | null = document.getElementById("contacts");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToMain(): void {
  const section: HTMLElement | null = document.getElementById("main");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const DekstopMenu = () => {
  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <li>
            <button className={styles.meniuButton} onClick={scrollToSkills}>
              My skills
            </button>
          </li>
          <li>
            <button className={styles.meniuButton} onClick={scrollToWork}>
              My Work
            </button>
          </li>
          <li>
            <button className={styles.meniuButton} onClick={scrollToContacts}>
              Contact me
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

type MobileNavProps = {
  active: boolean;
};
const MobileNav: React.FC<MobileNavProps> = (props) => {
  console.log(props.active);
  return (
    <>
      <div
        className={`${props.active ? styles.mobileMenu : styles.menuClosed}`}
      >
        <ul className={styles.mobnav}>
          <li>
            <button className={styles.meniuButton} onClick={scrollToSkills}>
              My skills
            </button>
          </li>
          <li>
            <button className={styles.meniuButton} onClick={scrollToWork}>
              My Work
            </button>
          </li>
          <li>
            <button className={styles.meniuButton} onClick={scrollToContacts}>
              Contacts
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={styles.headerWrapper}>
        <button className={styles.logoButton} onClick={scrollToMain}>
          <Image className={styles.navLogo} src={logo} alt="logo" />
        </button>
        {/* <DekstopMenu /> */}
        {/* <button
          className={styles.burgerButton}
          onClick={() => {
            setActive((prevState) => !prevState);
          }}
        >
          <Image className={styles.burger} src={burger} alt="" />
        </button> */}
      </div>
      {/* <div className={styles.mobileMenuWrapper}>
        <MobileNav active={active} />
      </div> */}
    </>
  );
};

export default Header;
