const MProfile = ({ Profile }) => {
  return (
    <div className="about profile">
      <h2 className="title2">Profile</h2>

      <p>
        {Profile.Para1}
        <br /> <br />
        {Profile.Para2}
      </p>
    </div>
  );
};

export default MProfile;
