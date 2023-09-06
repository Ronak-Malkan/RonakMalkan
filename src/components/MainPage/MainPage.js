import Section from "../section/section";
import Card from "../card/card";

import "./MainPage.css";

const MainPage = () => {
   return (
      <div>
         <h1 className="title">hey, Ronak here.</h1>
         <p className="sectionInformation">
            I am a Frontend Web Developer from Porbandar, Gujarat. I have a
            Bachelor's degree in Computer Science from Symbiosis Institue of
            Technology. What drives me is the resolution and passion to be
            better at everything I do.
            <br />
            <br />
            My Skill Set: Languages: HTML, CSS, JavaScript, Apex, React, LWC,
            Visualforce Software & Tools: Git, GitHub, SOQL
         </p>
         <h1 className="title">What makes me "me"</h1>
         <div className="sectionInformation">
            While I do love Frontend, I also believe that it is just 1 aspect of
            my life. So here are the other things I love doing:
            <ul>
               <li>Listening to Music</li>
               <li>Watching TV Series/ Anime</li>
               <li>Working out</li>
               <li>Playing sports</li>
               <li>Going on a trek, or doing something adventurous</li>
            </ul>
         </div>
         <Section>
            <h1 className="title">Experience</h1>
            <div className="sectionInformation">
               <h4>Ardidra Technologies Pvt Ltd</h4>
               <p>
                  I worked here as a Project Trainee for 4 months, from Jan 2023
                  to May 2023. In this time I learned about Salesforce and it's
                  various tools, such as: Apex, LWC, Visualforce, SOQL, etc. I
                  created a URL Shortener for the company. And created an
                  Salesforce application to "Streamline and Automate Sales Order
                  & Pricing Process" along side fellow interns.
               </p>
            </div>
            <h1 className="title">Projects</h1>
            <div className="sectionInformation" id="projectsContainer">
               <Card
                  title="JavaScriptGames"
                  intro="This repository contains all the games I made using JavaScript."
                  GithubLink="https://github.com/Ronak-Malkan/JavaScriptGames"
               />
               <Card
                  title="Portfolio Site"
                  intro="Personal terminal-based portfolio site created for fun."
                  GithubLink="https://github.com/Ronak-Malkan/Ronak-Malkan.github.io"
               />
               <Card
                  title="Blog Site"
                  intro="Blog site created, using React, for Practise purpose."
                  GithubLink="https://github.com/Ronak-Malkan/blog-site"
               />
               <Card
                  title="AssignExpert"
                  intro="For hosting and grading programming assignments in college."
                  GithubLink="https://github.com/assignexpert/assignexpert"
               />
            </div>
         </Section>
         <h1 className="title">Info</h1>
         <div className="sectionInformation" id="InfoSection">
            If you like resumes here is&nbsp;
            <a href="https://drive.google.com/file/d/1AAOtgHZRAEr40un3J3isTxiUYFBC7KqE/view?usp=sharing">
               mine
            </a>
            <br />
            Cell: +91 9106899768 <br />
            Email:{" "}
            <a href="mailto:ronakmalkan2062001@gmail.com">
               ronakmalkan2062001@gmail.com
            </a>
            <br />
            GitHub:{" "}
            <a href="https://github.com/Ronak-Malkan">
               https://github.com/Ronak-Malkan
            </a>
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/ronak-malkan/">
               https://www.linkedin.com/in/ronak-malkan/
            </a>
         </div>
      </div>
   );
};

export default MainPage;
