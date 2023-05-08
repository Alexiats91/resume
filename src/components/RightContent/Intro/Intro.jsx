import React from 'react';
import styles from "./styles.module.css";

const Intro = () => {
    return (
        <div className={styles.intro}>
            <h1 className={styles.name}>Yatsenko Oleksandr</h1>
            <h2 className={styles.position}>Junior Front End Developer (React)</h2>
            <p className={styles.description}>
                After graduation, I worked as an electrician.
                Over time, I additionally gained experience in ventilation and air conditioning.
                I became a chief electrician and managed a team of three employees.
                I always dreamed of mastering the IT field, and I seriously interested in it.
                I took a FrontEnd Developer course and continue to learn new things.
                Now I am looking for a React developer job, junior or intern.
                I am also considering an internship.
                I am responsible, ready for complex tasks and have a great desire to learn new technologies and tools.
            </p>
        </div>
    );
};

export default Intro;