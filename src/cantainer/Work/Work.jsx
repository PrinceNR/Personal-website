import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap ,MotionWrap } from "../../wrapper";
import "./Work.scss";
import { useState, useEffect } from "react";

const Work = () => {
  const [activeFilter, setactiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const data = [
      {
        image : images.medical,
        name : "Medical web",
        tags :["Front end", "React Js", "All"],
        description : "UI/UX HTML||CSS",
        title : "Medical web",
        codeLink : "https://github.com/PrinceNR/Responsive_flex_project/tree/master",
        projectLink : "https://princenr.github.io/Responsive_flex_project/"
      },
      
      {
      image : images.blogging,
      name : "Bloging Page",
      tags :["React Js","Front end","Node Js", "All"],
      description : "A Simple Bloging platform using React. Database connected to mongoDB",
      title : "Bloging Page",
      codeLink : "https://github.com/PrinceNR/Blog-Platform",
      projectLink : "https://blogmon.netlify.app/"
    },
    {
      image : images.portfolio,
      name : "my portfolio",
      tags :["Front end","React Js", "All"],
      description : "My responsive portfolio Using React",
      title : "Portfolio",
      codeLink : "https://github.com/PrinceNR/Personal-website",
      projectLink : "https://princenr.netlify.app/"
    },
    {
      image : images.emp,
      name : "Employe Management system",
      tags :["Node JS","Front end", "All"],
      description : "Employe management system using node. Using JWT , Node mailer....",
      title : "Employe Management",
      codeLink : "https://github.com/PrinceNR/Employ-Management-Node",
      projectLink : "https://github.com/PrinceNR/Employ-Management-Node"
    }
   ]
    setWorks(data);
    setFilterWork(data);
  }, []);



  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setanimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }]);

      if (item == "All") {
        setFilterWork(works);
      } else {
        // console.log(works.filter((work) => work.tags.includes(item)))
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        My creative<span> Portfolio</span> section
      </h2>
      <div className="app__work-filter">
        {["Front end","Node Js", "React Js", "All"].map(
          (item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            );
          }
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => {
          return (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.image} alt={work.name} />
                <motion.div
                  // whileHover={{ opacity: [1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="norefferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target="_blank" rel="norefferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="app__flex icon-div">
                <a href={work.projectLink} target="_blank" rel="norefferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="norefferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>



                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
