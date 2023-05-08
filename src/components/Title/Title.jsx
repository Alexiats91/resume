import React from 'react';
import styles from "./styles.module.css"

const Title = ({text}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.text}>{text}</h3>
        </div>
    );
};

export default Title;