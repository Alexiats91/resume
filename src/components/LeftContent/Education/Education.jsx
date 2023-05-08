import React from 'react';
import Title from "../../Title/Title";
import styles from "./styles.module.css";

const Education = () => {
    return (
        <div>
            <Title text="education" />
            <div className={styles.educationList}>
                <div>
                    <h4 className={styles.itemTitle}>National University of Life and Environmental Sciences of Ukraine</h4>
                    <p>01.09.2012 – 20.12.2013</p>
                    <p className={styles.itemText}>Education and Research Institute of Energetics and Automation.</p>
                    <p className={styles.itemText}>Master's degree in the qualification of a research engineer in the energy sector of agriculture.</p>
                </div>
                <div>
                    <h4 className={styles.itemTitle}>National University of Life and Environmental Sciences of Ukraine</h4>
                    <p>01.09.2008 – 31.05.2012</p>
                    <p className={styles.itemText}>Education and Research Institute of Energetics and Automation.</p>
                    <p className={styles.itemText}>Bachelor's degree with honors in the qualification "Technician-electrician".</p>
                </div>
            </div>
        </div>
    );
};

export default Education;