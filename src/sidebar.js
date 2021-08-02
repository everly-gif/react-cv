import SAccomplishments from "./SAccomplishments";
import SContactInfo from "./SContactInfo";
import SEducation from "./SEducation";
import SLanguage from "./SLanguage";
import SProfileText from "./SProfileText";

const Sidebar = ({ Data }) => {
  const {
    ProfileInfo,
    ContactInfo,
    Education,
    Language,
    Accomplishments
  } = Data;
  return (
    <div className="left_Side">
      <SProfileText ProfileInfo={ProfileInfo} />
      <SContactInfo ContactInfo={ContactInfo} />
      <SEducation Education={Education} />
      <SLanguage Language={Language} />
      <SAccomplishments Accomplishments={Accomplishments} />
    </div>
  );
};
export default Sidebar;
