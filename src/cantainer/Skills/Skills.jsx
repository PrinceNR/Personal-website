import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { images } from "../../constants";
import "./Skills.scss";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    //Fetching experience
    const datas =[
      {
        year : "2023-2024",
        works: [{
          name : "MERN Stack Developer intern",
          company :"Stackmod  Technopark", 
          description :
           "Build web applications using MongoDB, Express.js, React, and Node.js. Create user interfaces. Develop server-side logic and APIs. Manage databases. Handle authentication. Deploy apps on cloud platforms. Ensure scalability and efficiency." 
        }]
        }  
  ]
  setExperience(datas);

    const data =[
      { icon : images.css, name : "CSS" ,bgColor: "#f7dedc"},
      { icon : images.html, name : "HTML" },
      { icon : images.javascript, name : "JavaScript"},
      { icon : images.node, name : "NODE JS"},
      { icon : images.react, name : "REACT JS"},
      { icon : images.mongodb, name : "MongoDB"},
    
      { icon : images.redux, name : "REDUX JS" },
      { icon : images.bootstrap, name : "Bootstrap" },
      
    
      { icon : images.git, name : "GIT"},
      { icon : images.github, name : "GIT HUB"},
      
      { icon : images.thunderclient, name : "Thunder client"},
      { icon : images.c, name : "C" },
      { icon : images.cpp, name : "C ++"},
    
    ]

    setSkills(data);

  }, []);


  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: "#f5f0f0"}}
                >
                  <img src={skill.icon} alt={skill.name} />
                </div>

                <p className="p-text">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((experience, index) => {
            return (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>

                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => {
                    return (
                      <div key={work.name}>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className={`app__skills-exp-work`}
                          id={`tool${index}`}
                          data-tip
                          data-for={work.name}
                          key={work.name}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>
                        <Tooltip
                          id={work.name}
                          anchorSelect={`#tool${index}`}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        >
                          {work.desc}
                        </Tooltip>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
