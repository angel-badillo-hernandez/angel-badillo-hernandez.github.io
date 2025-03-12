import { BrowserRouter as Router } from "react-router";
import { useState, useEffect, JSX } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Timeline from './components/Timeline';
import TimelineItem from './components/TimelineItem';
import ProjectCard from './components/ProjectCard'; // Import ProjectCard component
import './App.css';
import './components/ProjectCard.css'; // Import ProjectCard styles
import profilePic from './assets/profile.jpg';
import logo from './assets/icon.png'; // Import your logo
import clrViaLogo from './assets/clr_via.jpg'; // Import CLR VIA logo
import scholarlyLogo from './assets/scholarly.jpg'; // Import Scholarly logo
import eCommerceLogo from './assets/e_commerce.gif'; // Import E-Commerce logo
import forkKnifeLogo from './assets/fork_knife.jpg'; // Import Fork & Knife logo
import virtualFileSystemLogo from './assets/virtual_filesystem.png'; // Import Virtual Shell logo
import songSphereLogo from './assets/song_sphere.svg'; // Import SongSphere logo
import gitHubLogo from './assets/github.jpg'; // Import GitHub logo

/**
 * Main application component.
 * @returns {JSX.Element} The rendered component.
 */
function App(): JSX.Element {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Router>
  );
}

/**
 * Navigation bar component.
 * @returns {JSX.Element} The rendered component.
 */
function NavBar(): JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  /**
   * Toggles the navigation menu.
   */
  const toggleNav = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  /**
   * Handles window resize events.
   */
  const handleResize = (): void => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav className="navbar">
          {isMobile && (
            <div className="hamburger" onClick={toggleNav}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          <div className={`navbar-nav ${isNavOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={toggleNav}>About</a>
            <a href="#education" className="nav-link" onClick={toggleNav}>Education</a>
            <a href="#experience" className="nav-link" onClick={toggleNav}>Work</a>
            <a href="#projects" className="nav-link" onClick={toggleNav}>Projects</a>
            <a href="#skills" className="nav-link" onClick={toggleNav}>Skills</a>
            <a href="#contact" className="nav-link" onClick={toggleNav}>Contact</a>
            <a href="/resume.pdf" className="nav-link" onClick={toggleNav}>Resume</a>
          </div>
        </nav>

  );
}

/**
 * About section component.
 * @returns {JSX.Element} The rendered component.
 */
function About(): JSX.Element {
  return (
    <div id="about" className="section">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="section-title">Welcome to Angel Badillo Hernandez's Portfolio Website!</h1>
      <img src={profilePic} alt="Angel Badillo Hernandez" className="profile-pic" />
      <p className="section-text">Hello and welcome! Thanks for stopping by—my name is <strong style={{ color: "red" }}>Angel Badillo Hernandez</strong>, and I'm excited to share a bit about myself with you.</p>
      <p className="section-text">I am a dedicated and passionate Software Engineer with a Master's and Bachelor's degree in Computer Science from Midwestern State University. I have experience in software development, including building RESTful APIs, mobile applications with Flutter & Dart, and Windows desktop applications. My technical foundation spans C/C++, Python, JavaScript, TypeScript, C#, and SQL. I also have a strong background in numerical analysis and mathematics, particularly in algebra and calculus, as well as a working knowledge of system design and computer architecture.</p>


      <p className="section-text">While my primary passion is in software engineering, I am also interested in roles focused on data analysis or high-performance computing, and I am always eager to grow in these areas. Currently, I'm expanding my expertise in cloud computing while working toward my AWS Certified Developer - Associate certification.</p>


      <p className="section-text">I'm motivated by the opportunity to work on projects that make a real impact on the world. I believe technology has the power to solve critical challenges and drive meaningful change, and I strive to contribute to that mission by creating innovative solutions in fast-paced, growth-oriented environments.</p>


      <p className="section-text">When I'm not coding, you can find me playing video games like Fortnite, Splatoon 3, Marvel Rivals, and Super Smash Bros. Ultimate, watching Marvel movies, or enjoying anime (Bleach is a favorite!). I also love hitting the gym, learning new things, and exploring new places—experiencing different cultures always excites me!</p>

      <p className="section-text">To you current computer science students, and recent computer science graduates: studying a field such as ours is no easy task, so remember that when times are rough. Graduating with your degree is a major milestone, so pat yourself on the back, but keep on striving to learn more about technology and our field. Most importantly, even when it feels like this career is difficult to get started in—whether it's landing that first internship or your first full-time role—keep on pushing. Most things worth having don't come easy, and one day, as long as you keep working for it, you will achieve it.</p>


      <p className="section-text">I'm always looking for new opportunities to grow, innovate, and make a difference. Let's build something amazing together!</p>


      <p className="section-text"><em style={{ color: "red" }}>Science is Elegant! 🚀</em> - From Dr. Stone</p>


    </div>
  );
}

/**
 * Education section component.
 * @returns {JSX.Element} The rendered component.
 */
function Education(): JSX.Element {
  return (
    <div id="education" className="section">
      <h1 className="section-title">Education</h1>
      <Timeline>
        <TimelineItem
          position="left"
          duration="May 2024"
          title="Master of Science in Computer Science"
          subtitle="Midwestern State University"
          location="Wichita Falls, TX"
          description={
            <div style={{ textAlign: "left" }}>
              <p><strong>GPA:</strong> 4.0</p>
              <p><strong>Relevant coursework:</strong> Software Engineering, Mobile App Development, Computer Networking and Security, Parallel Programming, Computer Architecture</p>
              <p><strong>Activities:</strong> Member of UPE Honor Society, Academic Merit Scholarship Recipient, Presented at North Texas Area Student Conference</p>
            </div>
          }
        />
        <TimelineItem
          position="right"
          duration="December 2023"
          title="Bachelor of Science in Computer Science"
          subtitle="Midwestern State University"
          location="Wichita Falls, TX"
          description={
            <div style={{ textAlign: "left" }}>
              <p><strong>GPA:</strong> 3.8</p>
              <p><strong>Relevant coursework:</strong> Software Quality Assurance, Object-Oriented Programming, Operating Systems, Advanced Data Structures and Algorithms, GPU Programming</p>
              <p><strong>Activities:</strong> Member of UPE Honor Society, Academic Merit Scholarship Recipient, Four-time Recipient of President's Honor Roll, Member of ACM, Presented at North Texas Area Student Conference</p>
            </div>
          }
        />
      </Timeline>
    </div>
  );
}

/**
 * Experience section component.
 * @returns {JSX.Element} The rendered component.
 */
function Experience(): JSX.Element {
  return (
    <div id="experience" className="section">
      <h1 className="section-title">Work Experience</h1>
      <Timeline>
        <TimelineItem
          position="left"
          duration="December 2024 - Present"
          title="Order Fulfillment / Web Developer"
          subtitle="Rapco Parts Company"
          location="Bowie, TX, USA"
          description={
            <div style={{ textAlign: "left" }}>
              <p>Package and process an average of 20 orders per day through Turbify and FedEx Shipping Manager</p>
              <p>Developed and migrated the company's e-commerce website to Wix, utilizing JavaScript, HTML, and Wix Velo API</p>
              <p>Designed and developed over 10 webpages on Wix, integrating JavaScript and Wix Velo API</p>
            </div>
          }
        />
        <TimelineItem
          position="right"
          duration="August 2023 - May 2024"
          title="Student Support Services Tutor"
          subtitle="Midwestern State University"
          location="Wichita Falls, TX, USA"
          description={
            <div style={{ textAlign: "left" }}>
              <p>Delivered instructional support and tutelage to students enrolled in STEM courses</p>
              <p>Participated in monthly tutor meetings led by program coordinator to discuss performance and program improvements</p>
              <p>Engaged in organization-led events involving staff, tutors, and students</p>
            </div>
          }
        />
        <TimelineItem
          position="left"
          duration="January 2023 - May 2023"
          title="Student Assistant"
          subtitle="Midwestern State University"
          location="Wichita Falls, TX, USA"
          description={
            <div style={{ textAlign: "left" }}>
              <p>Coached concepts such as abstraction, object-oriented programming, GPU programming, and networking using C, C++, C#, and Python</p>
              <p>Assisted students with setting up and utilizing coding environments, such as Windows Subsystem for Linux and Visual Studio Code</p>
              <p>Aided students in developing C++ and Python applications by providing debugging support</p>
            </div>
          }
        />
      </Timeline>
    </div>
  );
}

/**
 * Projects section component.
 * @returns {JSX.Element} The rendered component.
 */
function Projects(): JSX.Element {
  return (
    <div id="projects" className="section">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        <ProjectCard
          image={clrViaLogo}
          title="CLR VIA - React Web App"
          description="ReactJS web application that allows the users to easily build their resumes, cover letters, curriculum vitae, or portfolio website with the help of Google Gemini AI."
          link="https://github.com/CLR-VIA"
        />
        <ProjectCard
          image={scholarlyLogo}
          title="Scholarly App"
          description="A scholarship and academic award management app. A Windows 11 Desktop app developed with Python, SQLite, PyQt, and Google Cloud APIs."
          link="https://github.com/angel-badillo-hernandez/scholarly_app"
        />
        <ProjectCard
          image={eCommerceLogo}
          title="E-Commerce App"
          description="An e-commerce mobile app. A React Native app developed with JavaScript, Expo SDK, MongoDB, and Python with FastAPI for the backend."
          link="https://github.com/angel-badillo-hernandez/E-Commerce-App"
        />
        <ProjectCard
          image={forkKnifeLogo}
          title="ForkKnife FoodTruck Locator App"
          description="A food truck locator app. A Flutter app developed with Dart, Google Maps API, and Firebase."
          link="https://github.com/angel-badillo-hernandez/food_truck_app"
        />
        <ProjectCard
          image={virtualFileSystemLogo}
          title="Linux-like Shell & Virtual File System"
          description="A virtual bash shell and file system. A console app developed with Python and SQLite."
          link="https://github.com/angel-badillo-hernandez/Virtual-Filesystem"
        />
        <ProjectCard
          image={songSphereLogo}
          title="SongSphere App"
          description="A Spotify song recommendation app for the 2024 Tiktok TechJam. A ReactJS app developed with JavaScript, Spotify API, Google Gemini API, and a Python backend."
          link="https://github.com/ozgurttufekci/SongSphere"
        />
        <ProjectCard
          image={gitHubLogo}
          title="More on My GitHub!"
          description="And many, many, more on my GitHub! Check out my GitHub profile for more projects and contributions."
          link="https://github.com/angel-badillo-hernandez"
        />
      </div>
    </div>
  );
}

function Skills(): JSX.Element {
  return (
    <div id="skills" className="section">
      <h1 className="section-title">Skills</h1>
      <p className="section-text">Skills details go here.</p>
    </div>
  );
}

function Contact(): JSX.Element {
  return (
    <div id="contact" className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-text">Let's connect!</p>
      <div className="contact-icons">
        <a href="https://linkedin.com/in/angel-badillo-hernandez" className="contact-icon"><FaLinkedin size={35} /></a> {/* Increased size */}
        <a href="mailto:badilloa022402@gmail.com" className="contact-icon"><FaEnvelope size={35} /></a> {/* Increased size */}
        <a href="https://github.com/angel-badillo-hernandez" className="contact-icon"><FaGithub size={35} /></a> {/* Increased size */}
      </div>
    </div>
  );
}

export default App;
