import React from 'react';
import Title from "../../Title/Title";
import styles from "./styles.module.css";

const Languages = () => {
    return (
        <div>
            <Title text="languages" />
            <ul className={styles.languageList}>
                <li>Ukrainian – native</li>
                <li>Russian – fluent</li>
                <li>English – B1</li>
            </ul>
        </div>
    );
};

export default Languages;