const MSkills = ({ Skills }) => {
  return (
    <div className="about skills">
      <h2 className="title2">Tools and Technologies</h2>
      {Skills.map((info) => (
        <div className="box" key={info.skill}>
          <h4>{info.Skill}</h4>
          <div className="percent">
            <div style={{ width: info.Proficiency + "%" }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MSkills;
