const SLanguage = ({ Language }) => {
  return (
    <div className="contactInfo language">
      <h3 className="title">Languages</h3>

      <ul>
        {Language.map((info) => (
          <li>
            <span className="text">{info.Name}</span>
            <span className="percent">
              <div style={{ width: info.proficiency + "%" }}></div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SLanguage;
