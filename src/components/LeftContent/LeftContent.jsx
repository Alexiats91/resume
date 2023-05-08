import React from "react";
import styles from "./styles.module.css";
import userPhoto from "../../userPhoto/20230115_162529.jpg"
import Contacts from "./Contacts/Contacts";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Languages from "../RightContent/Languages/Languages";

const LeftContent = () => {
    return (
        <div className={styles.leftContent}>
            <img className={styles.userPhoto} src={userPhoto} alt="userPhoto"/>
            <Contacts />
            <Education />
            <Skills />
            <Languages />
        </div>
    );
};

export default LeftContent;