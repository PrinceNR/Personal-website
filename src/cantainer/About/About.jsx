import "./About.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {

  const data = [{
      image: images.fullstack,
      title : "FULL STACK DEVELOPER",
      description : "Design and create websites and applications for various platforms"
    },
  {
    image: images.frontend,
      title : "FRONT-END DEVELOPER",
      description : "I am a frontend developer with passion for building beautiful and functional web"
  },
  {
    image: images.backend,
      title : "BACK-END DEVELOPER",
      description : "Expert in building and maintain the mechanisms that process data and perform actions on websites"
  }
  ]

  setAbouts(data);


  }, []);

  return (
    <>
      <h2 className="head-text">
        I know That<span> Good Design</span> means
        <br />
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.image} alt={about.title} /> 
              {/* ----------- */}
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title} 
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
