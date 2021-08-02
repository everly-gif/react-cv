const MInterests = ({ Interests }) => {
  return (
    <div className="about interest">
      <h2 className="title2">Interests</h2>
      <ul>
        {Interests.map((info) => (
          <li>
            <i className={"fa fa-" + info.Icon} aria-hidden="true"></i>
            {info.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MInterests;
