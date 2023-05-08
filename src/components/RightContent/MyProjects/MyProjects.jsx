import React from 'react';
import Title from "../../Title/Title";
import styles from "./styles.module.css";

const MyProjects = () => {
    return (
        <div>
            <Title text="Projects"/>
            <div className={styles.projectsList}>
                <div>
                    <h4>Restaurant </h4>
                    <p>Graduation work of MainAcademy courses.
                        Development of responsive React SPA using React-Router, Styled Components, Bootstrap, Ant Design and Flex technologies.</p>
                    <p>
                        GitHub: <a className={styles.link} target="_blank" rel="noreferrer"
                                   href="https://github.com/Alexiats91/Restaurant">Restaurant</a>.
                    </p>
                    <p>
                        GitPage: <a className={styles.link} target="_blank" rel="noreferrer"
                                    href="https://alexiats91.github.io/Restaurant/">Restaurant</a>.
                    </p>
                </div>
                <div>
                    <h4>Simple messenger</h4>
                    <p>Graduation work of MainAcademy courses.
                        Development of a simple messenger in React
                        (create-react-app, functional components, Hooks, Axios, module.css, gh-pages).
                        The application has a static list of contacts and a history of communication with users.
                        When you select a contact from the contact list, the history of communication between
                        users is automatically displayed. After sending a message to the chat,
                        the user will receive an automatic response in 3-8 seconds.
                        The Chuck Norris API https://api.chucknorris.io is used to generate an automatic response.
                        Search among contacts has been realized. Message histories are saved in 'LocalStorage'
                        after the page reloads. The history can be reset using the 'clear saved data' button.
                        Contacts with new messages are automatically moved up.</p>
                    <p>
                        GitHub: <a className={styles.link} target="_blank" rel="noreferrer"
                                   href="https://github.com/Alexiats91/simple-messenger">Simple messenger</a>.
                    </p>
                    <p>
                        GitPage: <a className={styles.link} target="_blank" rel="noreferrer"
                                    href="https://alexiats91.github.io/simple-messenger/">Simple messenger</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;