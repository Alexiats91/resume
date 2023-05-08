import React from 'react';
import styles from "./styles.module.css";
import Intro from "./Intro/Intro";
import Experience from "./Experience/Experience";
import Courses from "./Courses/Courses";
import MyProjects from "./MyProjects/MyProjects";

const RightContent = () => {
    return (
        <div className={styles.rightContent}>
            <Intro />
            <Experience />
            <Courses />
            <MyProjects />
        </div>
    );
};

export default RightContent;