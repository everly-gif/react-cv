import MExperience from "./MExperience";
import MInterests from "./MInterests";
import MProfile from "./MProfile";
import MProjects from "./MProjects";
import MSkills from "./MSkills";

const main = ({ Data }) => {
  const { Bio, Experience, Skills, Projects, Interests } = Data;
  return (
    <div className="right_Side">
      <MProfile Profile={Bio} />
      <hr/>
      <br/>
      <MExperience Experience={Experience} />
      <MSkills Skills={Skills} />
      <MProjects Projects={Projects} />
      <MInterests Interests={Interests} />
    </div>
  );
};
export default main;
