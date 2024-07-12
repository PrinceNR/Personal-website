import { links } from "../constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {links.map((link, index) => {
        return (
          <a
            href={`#${link}`}
            key={link + index}
            className="app__navigation-dot"
            style={active === link ? { backgroundColor: "#313BAC" } : {}}
          ></a>
        );
      })}
    </div>
  );
};

export default NavigationDots;
