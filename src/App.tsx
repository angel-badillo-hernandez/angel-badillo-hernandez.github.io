import { BrowserRouter as Router } from "react-router";
import { useState, useEffect, JSX } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Timeline from './components/Timeline';
import TimelineItem from './components/TimelineItem';
import ProjectCard from './components/ProjectCard';
import SkillBubble from './components/SkillBubble';
import './App.css';
import './components/ProjectCard.css';
import profilePic from './assets/profile.jpg';
import logo from './assets/icon.png';
import clrViaLogo from './assets/clr_via.jpg';
import scholarlyLogo from './assets/scholarly.jpg';
import eCommerceLogo from './assets/e_commerce.gif';
import forkKnifeLogo from './assets/fork_knife.jpg';
import virtualFileSystemLogo from './assets/virtual_filesystem.png';
import songSphereLogo from './assets/song_sphere.svg';
import gitHubLogo from './assets/github.jpg';

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
        <Footer />
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

  useEffect(() => {
    if (!isMobile) {
      setIsNavOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className="navbar">
      {isMobile && (
        <div className={`hamburger ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <div className={`navbar-nav ${isNavOpen ? 'active' : ''}`}>
        <a href="#about" className="nav-link" onClick={toggleNav}>About</a>
        <a href="#education" className="nav-link" onClick={toggleNav}>Education</a>
        <a href="#experience" className="nav-link" onClick={toggleNav}>Experience</a>
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
      <h1 className="section-title">About Me</h1>
      <img src={profilePic} alt="Angel Badillo Hernandez" className="profile-pic" />

      <p className="section-text">
        Hello, my name is <strong style={{ color: "red" }}>Angel Badillo Hernandez</strong>. I am a Computer Science graduate with both a Master of Science and Bachelor of Science in Computer Science from Midwestern State University.
      </p>

      <p className="section-text">
        My background includes software development, enterprise platform support, ServiceNow development and administration, workflow automation, REST API integrations, reporting, dashboards, and data-focused technical problem solving. In my most recent role at United Regional Health Care System, I worked on ServiceNow solutions involving requirements gathering, system design, development, testing, deployment, technical documentation, integrations, data validation, operational reporting, and stakeholder collaboration.
      </p>

      <p className="section-text">
        After joining United Regional in March 2025, I quickly developed hands-on ServiceNow experience and earned my ServiceNow Certified System Administrator certification in June 2025. I have also completed ServiceNow Certified Application Developer training and continue to build my expertise in enterprise platform development, scripting, automation, and system administration.
      </p>

      <p className="section-text">
        I have experience with programming languages and technologies including Python, SQL, JavaScript, TypeScript, C/C++, Dart, HTML, CSS, React, FastAPI, PostgreSQL, SQLite, MongoDB, ServiceNow, REST APIs, Git, Linux, Docker, and Google Cloud Platform. I have also worked on projects involving AI-assisted applications, data processing, desktop applications, and full-stack web development.
      </p>

      <p className="section-text">
        I am especially interested in roles involving software development, ServiceNow development, business intelligence, reporting, data analysis, automation, and AI-enabled solutions. I enjoy working at the intersection of technology, business needs, and process improvement, where technical solutions can create measurable operational value.
      </p>

      <p className="section-text">
        I am motivated by opportunities to learn quickly, collaborate with strong technical teams, and build solutions that improve how people work. I value clear communication, attention to detail, continuous learning, and practical problem solving.
      </p>
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
          location="Wichita Falls, TX, USA"
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
          location="Wichita Falls, TX, USA"
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
          duration="March 2025 - April 2026"
          title="Service Desk Analyst (ServiceNow Developer / System Administrator)"
          subtitle="United Regional Healthcare System"
          location="Wichita Falls, TX, USA"
          description={
            <div style={{ textAlign: "left" }}>
              <p>Owned end-to-end delivery of ServiceNow solutions, including requirements gathering, system design, development, testing, and deployment</p>
              <p>Supported 3+ REST API integrations between ServiceNow and backend systems</p>
              <p>Built automation workflows reducing manual effort by ~30-50%, improving operational efficiency</p>
              <p>Collaborated with cross-functional teams including developers, architects, project managers, and other stakeholders</p>
              <p>Contributed to onboarding automation supporting dozens of employee provisioning requests monthly</p>
              <p>Helped achieve a 100% Customer Satisfaction (CSAT) score over a 2-week period</p>
            </div>
          }
        />
        <TimelineItem
          position="right"
          duration="December 2024 - March 2025"
          title="Order Fulfillment / Web Developer"
          subtitle="Rapco Parts Company"
          location="Bowie, TX, USA"
          description={
            <div style={{ textAlign: "left" }}>
              <p>Packaged and processed an average of 20 orders per day through Turbify and FedEx Shipping Manager</p>
              <p>Developed and migrated the company's e-commerce website to Wix, utilizing JavaScript, HTML, and Wix Velo API</p>
              <p>Developed and designed over 10 webpages on Wix, utilizing JavaScript and Wix Velo API</p>
            </div>
          }
        />
        <TimelineItem
          position="left"
          duration="August 2023 - May 2024"
          title="Student Support Services Tutor"
          subtitle="Midwestern State University"
          location="Wichita Falls, TX, USA"
          description={
            <div style={{ textAlign: "left" }}>
              <p>Delivered instructional support and tutelage to students enrolled in STEM courses</p>
              <p>Participated in monthly tutor meetings led by program coordinator to discuss performance and program improvements</p>
              <p>Participated in organization-led events involving staff, tutors, and students</p>
            </div>
          }
        />
        <TimelineItem
          position="right"
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
        <TimelineItem
          position="left"
          duration="May 2020 - August 2020"
          title="Assembly Line Worker"
          subtitle="Rapco Parts Company"
          location="Bowie, TX, USA"
          description={
            <div style={{ textAlign: "left" }}>
              <p>Assembled components in collaboration with other team members, exceeding daily quotas by about 10-25%</p>
              <p>Performed calibration and maintenance of equipment with team members to ensure safe, optimal performance</p>
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
          description="ReactJS web application that allows users to easily build resumes, cover letters, curriculum vitae, or portfolio website content with the help of Google Gemini AI."
          link="https://github.com/CLR-VIA"
        />
        <ProjectCard
          image={scholarlyLogo}
          title="Scholarly App"
          description="A scholarship and academic award management app. A Windows 11 desktop app developed with Python, SQLite, PyQt, and Google Cloud APIs."
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
          description="A virtual Bash shell and file system. A console app developed with Python and SQLite."
          link="https://github.com/angel-badillo-hernandez/Virtual-Filesystem"
        />
        <ProjectCard
          image={songSphereLogo}
          title="SongSphere App"
          description="A Spotify song recommendation app for the 2024 TikTok TechJam. A ReactJS app developed with JavaScript, Spotify API, Google Gemini API, and a Python backend."
          link="https://github.com/ozgurttufekci/SongSphere"
        />
        <ProjectCard
          image={gitHubLogo}
          title="More on My GitHub!"
          description="Check out my GitHub profile for more projects, technical work, and contributions."
          link="https://github.com/angel-badillo-hernandez"
        />
      </div>
    </div>
  );
}

/**
 * Skills section component.
 * @returns {JSX.Element} The rendered component.
 */
function Skills(): JSX.Element {
  return (
    <div id="skills" className="section">
      <h1 className="section-title">Skills</h1>
      <div className="skills-container">
        <h2 className="skills-heading">Programming Languages</h2>
        <SkillBubble skill="C/C++" />
        <SkillBubble skill="Python" />
        <SkillBubble skill="JavaScript" />
        <SkillBubble skill="TypeScript" />
        <SkillBubble skill="Dart" />
        <SkillBubble skill="C#" />
        <SkillBubble skill="Java" />
        <SkillBubble skill="SQL" />

        <h2 className="skills-heading">Technical Skills</h2>
        <SkillBubble skill="ServiceNow" />
        <SkillBubble skill="ServiceNow Flow Designer" />
        <SkillBubble skill="REST APIs" />
        <SkillBubble skill="PostgreSQL" />
        <SkillBubble skill="SQLite" />
        <SkillBubble skill="MongoDB" />
        <SkillBubble skill="SQLAlchemy" />
        <SkillBubble skill="React Native" />
        <SkillBubble skill="ReactJS" />
        <SkillBubble skill="HTML/CSS" />
        <SkillBubble skill="NodeJS" />
        <SkillBubble skill="Flutter" />
        <SkillBubble skill="FastAPI" />
        <SkillBubble skill="Digital Ocean" />
        <SkillBubble skill="Docker" />
        <SkillBubble skill="Linux/Unix" />
        <SkillBubble skill="Git" />
        <SkillBubble skill="GitHub" />
        <SkillBubble skill="Firebase" />
        <SkillBubble skill="Google Cloud Platform" />
        <SkillBubble skill="CUDA" />
        <SkillBubble skill="MATLAB" />
        <SkillBubble skill="PyQt6" />
        <SkillBubble skill="Software Quality Assurance" />
        <SkillBubble skill="Android Studio" />
        <SkillBubble skill="Google Gemini API" />
        <SkillBubble skill="MPI" />
        <SkillBubble skill="Parallel Programming" />
        <SkillBubble skill="Visual Studio" />
        <SkillBubble skill="Visual Studio Code" />

        <h2 className="skills-heading">Reporting, Data, and Productivity</h2>
        <SkillBubble skill="ServiceNow Reporting" />
        <SkillBubble skill="Dashboards" />
        <SkillBubble skill="Data Validation" />
        <SkillBubble skill="Data Mapping" />
        <SkillBubble skill="Operational Reporting" />
        <SkillBubble skill="Microsoft Office" />
        <SkillBubble skill="Microsoft Excel" />
        <SkillBubble skill="Google Sheets" />
        <SkillBubble skill="Google Docs" />
        <SkillBubble skill="Google Slides" />

        <h2 className="skills-heading">Soft Skills</h2>
        <SkillBubble skill="Problem Solving" />
        <SkillBubble skill="Team Collaboration" />
        <SkillBubble skill="Adaptability" />
        <SkillBubble skill="Strong Communication" />
        <SkillBubble skill="Critical Thinking" />
        <SkillBubble skill="Time Management" />
        <SkillBubble skill="Self-Motivation" />
        <SkillBubble skill="Attention to Detail" />
        <SkillBubble skill="Continuous Learning" />

        <h2 className="skills-heading">Languages</h2>
        <SkillBubble skill="Spanish" />
        <SkillBubble skill="English" />
      </div>
    </div>
  );
}

/**
 * Contact section component.
 * @returns {JSX.Element} The rendered component.
 */
function Contact(): JSX.Element {
  return (
    <div id="contact" className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-text" style={{ textAlign: "center" }}>Thanks for visiting. Let's connect.</p>

      <div className="contact-icons">
        <a href="https://linkedin.com/in/angel-badillo-hernandez" className="contact-icon"><FaLinkedin size={35} /></a>
        <a href="mailto:badilloa022402@gmail.com" className="contact-icon"><FaEnvelope size={35} /></a>
        <a href="https://github.com/angel-badillo-hernandez" className="contact-icon"><FaGithub size={35} /></a>
      </div>
    </div>
  );
}

/**
 * Footer component.
 * @returns {JSX.Element} The rendered component.
 */
function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright &copy; {currentYear} Angel Badillo Hernandez</p>
    </footer>
  );
}

export default App;