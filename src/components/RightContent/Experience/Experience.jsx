import React from 'react';
import Title from "../../Title/Title";
import styles from "./styles.module.css";

const Experience = () => {
    return (
        <div>
            <Title text="Experience" />
            <div className={styles.experienceList}>
                <div>
                    <h4>"Kralann Building Design". Electricity, ventilation, air conditioning.</h4>
                    <p>2018 – 2022</p>
                    <p>
                        Carrying out of works according to the design project.
                        Laying and connection electric networks up to 0.4 kV and low-voltage networks.
                        Cabling for “Smart House” systems.
                        Installation of ventilation and air conditioning systems, installation of air conditioners.
                    </p>
                </div>
                <div>
                    <h4>"Building Evolution" LLC.
                        Electrician for lighting and lighting networks.
                    </h4>
                    <p>2017 – 2018</p>
                    <p>
                        Laying of electric and low-voltage networks, also laying and
                        connection security alarm systems and video surveillance systems.
                    </p>
                </div>
                <div>
                    <h4>Electrician.</h4>
                    <p>2013 – 2017</p>
                    <p>
                        Laying of electric and low-voltage networks in apartments, cottages, offices.
                        Assembly and connection of electrical control panels.
                        Connection of lighting devices, sockets, switches.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;