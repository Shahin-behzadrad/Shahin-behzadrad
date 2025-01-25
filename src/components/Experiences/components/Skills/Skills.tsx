import Image from "next/image";
import classes from "./Skills.module.scss";
import * as skillIcons from "@public/svg/skills";

const skills = [
  { name: "React", icon: skillIcons.reactIcon },
  { name: "Next.js", icon: skillIcons.nextjsIcon },
  { name: "JavaScript", icon: skillIcons.javascriptIcon },
  { name: "TypeScript", icon: skillIcons.typescriptIcon },
  { name: "HTML", icon: skillIcons.htmlIcon },
  { name: "CSS", icon: skillIcons.cssIcon },
  { name: "Sass", icon: skillIcons.sassIcon },
  { name: "React Query", icon: skillIcons.reactqueryIcon },
  { name: "Git", icon: skillIcons.gitIcon },
  { name: "Jira", icon: skillIcons.jiraIcon },
  { name: "Material-UI", icon: skillIcons.muiIcon },
  { name: "Node.js", icon: skillIcons.nodejsIcon },
  { name: "MySQL", icon: skillIcons.mysqlIcon },
  { name: "SQL", icon: skillIcons.sqlIcon },
  { name: "Sequelize", icon: skillIcons.sequelizeIcon },
  { name: "Express.js", icon: skillIcons.expressJsIcon },
  { name: "REST API", icon: skillIcons.restApiIcon },
  { name: "Redux", icon: skillIcons.reduxIcon },
  { name: "Tailwind", icon: skillIcons.tailwingIcon },
];

const Skills = () => {
  const radius = 180; // Radius of the circle
  const iconsPerLayer = 5; // Icons per layer

  const calculatePosition = (index: number, layer: number) => {
    const layerRadius = (layer / 3) * radius; // Divide radius into layers
    const totalIconsInLayer = iconsPerLayer * layer;
    const angle = (index / totalIconsInLayer) * 2 * Math.PI;

    const x = Math.cos(angle) * layerRadius;
    const y = Math.sin(angle) * layerRadius;

    return { x, y };
  };

  return (
    <div className={classes.container}>
      <div className={classes.sphere}>
        {skills.map((skill, index) => {
          const layer = Math.floor(index / iconsPerLayer) + 1;
          const localIndex = index % iconsPerLayer;
          const { x, y } = calculatePosition(localIndex, layer);

          return (
            <div
              key={index}
              className={classes.icon}
              data-tooltip={skill.name + " 2 years"}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <Image fill src={skill.icon} alt={skill.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
