import React from 'react';
import Title from "../../Title/Title";
import styles from "./styles.module.css";

const Contacts = () => {
    return (
        <div>
            <Title text="contacts"/>
            <div className={styles.contactsList}>
                <div className={styles.contactsItem}>
                    <svg className={styles.svg} viewBox="0 0 24 24">
                        <path
                            fill="white"
                            d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z">
                        </path>
                    </svg>
                    <p className={styles.p}>
                        <a target="_blank" rel="noreferrer" href="https://t.me/Alexiats91">
                            @Alexiats91
                        </a>
                    </p>
                </div>
                <div className={styles.contactsItem}>
                    <svg className={styles.svg} viewBox="0 0 24 24">
                        <path
                            fill="white"
                            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z">
                        </path>
                    </svg>
                    <div className={styles.p}>
                        <p>
                            <a href="tel:+380955532559">
                                +38 (095) 553 25 59
                            </a>
                        </p>
                        <p>
                            <a href="tel:+48726704823">
                                +48 726 704 823
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.contactsItem}>
                    <svg className={styles.svg} viewBox="0 0 24 24">
                        <path
                            fill="white"
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z">
                        </path>
                    </svg>
                    <p className={styles.p}>iatsalexo@gmail.com</p>
                </div>
                <div className={styles.contactsItem}>
                    <svg className={styles.svg} viewBox="0 0 24 24">
                        <path
                            fill="white"
                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27">
                        </path>
                    </svg>
                    <p className={styles.p}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Alexiats91/">
                            https://github.com/Alexiats91/
                        </a>
                    </p>
                </div>
                <div className={styles.contactsItem}>
                    <svg className={styles.svg} viewBox="0 0 24 24">
                        <path
                            fill="white"
                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z">
                        </path>
                    </svg>
                    <p className={styles.p}>
                        <a target="_blank" rel="noreferrer"
                           href="https://www.linkedin.com/in/olexandr-yatsenko-168940248/">
                            https://www.linkedin.com/in/olexandr-yatsenko-168940248/
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;