const SEducation = ({ Education }) => {
  return (
    <div className="contactInfo education">
      <h3 className="title">Education</h3>
      <ul>
        {Education.map((info) => (
          <li key={info.Years}>
            <h5>{info.Years}</h5>
            <h4>{info.Degree}</h4>
            <h4>{info.Univ}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SEducation;
