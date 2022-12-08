import React from "react";
import styles from "../../styles/Footer.module.css"
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { CgPhone } from "react-icons/cg"
import { IconContext } from "react-icons";
import Link from "next/link";


const Footer = () => {
    return (
        <div className={styles.body} id="#Contacto">
            <div className={styles.hecho}>
        <h6>Proyecto realizado para</h6>
        <h4>No Country</h4>

            </div>
        <IconContext.Provider value={{ size: "4vh" }}>
            <div className={styles.tel}>
        <CgPhone/>
        <p> +54 9 11 3458 6585</p>
            </div>
        </IconContext.Provider>
        <div className={styles.redes}>

        <h5>REDES SOCIALES</h5>
        <div className={styles.contenedorIconos}>
        <IconContext.Provider value={{ size: "4vh" }}>
        <div className={styles.iconos}>
            <Link href="/">
        <FaInstagram/>
            </Link>
        </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "4vh" }}>
        <div className={styles.iconos}>
            <Link href="/">
        <FaFacebookSquare/>
            </Link>
        </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "4vh" }}>
        <div className={styles.iconos}>
        <Link href="/">
        <FaTwitterSquare/>
        </Link>
        </div>
        </IconContext.Provider>
        </div>

        </div>


        </div>

    );
};

export default Footer;