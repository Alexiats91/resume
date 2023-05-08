import React from "react";
import styles from "./styles.module.css";
import Title from "../../Title/Title";

const Skills = () => {
    return (
        <div>
            <Title text="skills" />
            <ul className={styles.skillsList}>
                <li>HTML5</li>
                <li>CCS3</li>
                <li>Java Script</li>
                <li>React(Hooks, Router)</li>
                <li>Redux(Redux ToolKit)</li>
                <li>Bootstrap</li>
                <li>Styled Components</li>
                <li>Git</li>
                <li>Figma</li>
                <li>Photoshop</li>
            </ul>
        </div>
    );
};

export default Skills;