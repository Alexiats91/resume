import React from 'react';
import Title from "../../Title/Title";
import styles from "./styles.module.css";
import certificate1 from "../../../files/Oleksandr Yatsenko.pdf";
import certificate2 from "../../../files/HTML5CSS3Starter.pdf";
import certificate3 from "../../../files/JavaScriptStarter.pdf";

const Courses = () => {
    return (
        <div>
            <Title text="Additional qualification courses" />
            <div className={styles.coursesList}>
                <div>
                    <h4>Training course “ Front End” from Main Academy</h4>
                    <p>09.2021 – 08.2022</p>
                    <p>
                        Certificate of successful course completion: <a className={styles.link} target="_blank" rel="noreferrer"
                                                                        href={certificate1}>Certificate</a>.
                    </p>
                    <p>
                        The process of education: <a className={styles.link} target="_blank" rel="noreferrer"
                                                     href="https://github.com/Alexiats91/Iatsenko">GitHub</a>.
                    </p>
                </div>
                <div>
                    <h4>Training course “HTML5 & CCS3 Starter” from ITVDN</h4>
                    <p>25.04.2022</p>
                    <p>
                        Certificate of successful course completion: <a className={styles.link} target="_blank" rel="noreferrer"
                                                                        href={certificate2}>Certificate</a>.
                    </p>
                </div>
                <div>
                    <h4>Training course “Java Script Starter” from ITVDN</h4>
                    <p>14.04.2022</p>
                    <p>
                        Certificate of successful course completion: <a className={styles.link} target="_blank" rel="noreferrer"
                                                                        href={certificate3}>Certificate</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Courses;