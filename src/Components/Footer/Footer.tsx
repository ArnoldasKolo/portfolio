import React from 'react'
import Image from "next/image";
import logo from "../../Images/logoBlack.png"
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <>
        <div className={styles.wrapper}>
            <Image src={logo} alt="" />
        </div>
    </>
  )
}

export default Footer