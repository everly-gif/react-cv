const SAccomplishments = ({ Accomplishments }) => {
  return (
    <div className="contactInfo education">
      <h3 className="title">Accomplishments</h3>
      <ul>
        {Accomplishments.map((info) => (
          <div>
            <p className="title-text">{info.title}</p>
            <p className="role">Role : {info.role}</p>
            <p className="org">{info.Org}</p>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SAccomplishments;
