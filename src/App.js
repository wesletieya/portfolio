import React, { useState } from "react";
import "./App.css";
import insat from "./insat_logo.png";
import person from "./eya3.jpg";
import me from "./me.png";
import projectImg from "./web-design-3411373_1280.webp";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const projects = [
        {
            id: 1,
            title: 'Project One',
            image: 'path/to/image1.jpg',
            description: 'Description for project one.',
        },
        {
            id: 2,
            title: 'Project Two',
            image: 'path/to/image2.jpg',
            description: 'Description for project two.',
        },
        {
            id: 3,
            title: 'Project Three',
            image: 'path/to/image2.jpg',
            description: 'Description for project two.',
        },
        {
            id: 4,
            title: 'Project Four',
            image: 'path/to/image2.jpg',
            description: 'Description for project two.',
        },
        {
            id: 5,
            title: 'Project Five',
            image: 'path/to/image2.jpg',
            description: 'Description for project two.',
        },
        // Add more projects as needed
    ];

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false); // Close menu on link click
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src={insat} alt="Insat"/>
                </div>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#home" onClick={() => handleLinkClick("Home")}
                       className={activeLink === "Home" ? "active" : ""}>Home</a>
                    <a href="#about" onClick={() => handleLinkClick("About Me")}
                       className={activeLink === "About Me" ? "active" : ""}>About Me</a>
                    {/*<a href="#home" onClick={() => handleLinkClick("Studies")}*/}
                    {/*   className={activeLink === "Studies" ? "active" : ""}>Studies</a>*/}
                    <a href="#experience" onClick={() => handleLinkClick("Experience")}
                       className={activeLink === "Experience" ? "active" : ""}>Experience</a>
                    <a href="#projects" onClick={() => handleLinkClick("Projects")}
                       className={activeLink === "Projects" ? "active" : ""}>Projects</a>
                    <a href="#home" onClick={() => handleLinkClick("Contacts")}
                       className={activeLink === "Contacts" ? "active" : ""}>Contacts</a>
                </ul>
                {/*<div className="theme-switch">*/}
                {/*    <input type="checkbox" className="theme-toggle" style={{display: "none"}} />*/}
                {/*</div>*/}
                <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
            <div className="App">


                <header className="hero-section" id="home">
                    <div className="image-container">
                        <img src={person} alt="Person"/>
                    </div>
                    <div className="content">
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            gap: "10px"
                        }}>
                            <h1>Hello Tech</h1>
                            <h1 style={{color: "var(--color-neutral)", font: "3.5em"}}>Enthusiasts</h1>,
                        </div>
                        <p>I’m Eya Oueslati, a developer passionate about AI and machine learning.</p>
                        <button><a className="about-me-btn" href="#about">About Me</a></button>
                    </div>
                </header>
                <secrion className="about-section" id="about">
                    <div className="image-container-about">
                        <img src={me} alt="Person"/>
                    </div>
                    <div className="content-about">

                        <p>I’m Eya Oueslati, a 24-year-old student at INSAT, specializing in AI, deep learning, and data
                            science. Passionate about leveraging data to solve real-world problems, I thrive on building
                            intelligent systems that drive innovation. My focus is on creating scalable, data-driven
                            solutions, with a keen interest in exploring the endless possibilities of AI
                            technologies.</p>
                    </div>
                </secrion>
                <section className="projects-container" id="projects">
                        {projects.map((project) => (
                            <div className="project-container" key={project.id}>
                                <div className="project-image-container">
                                    <img src={projectImg} alt={project.title}/>
                                </div>
                                <div className="project">
                                    <div className="project-title">
                                        <h4>{project.title}</h4>
                                    </div>
                                    <div className="project-content">
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </section>
            </div>
        </>
    );
}

export default App;
