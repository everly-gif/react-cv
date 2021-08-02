const SProfileText = ({ ProfileInfo }) => {
  return (
    <div className="profileText">
      <div className="imgBx">
        <img className="photo" alt="pic" src={ProfileInfo.Image} />
      </div>
      <br />
      <h2>
        {ProfileInfo.Name} <br />
        <span> {ProfileInfo.Role}</span>{" "}
      </h2>
    </div>
  );
};

export default SProfileText;
