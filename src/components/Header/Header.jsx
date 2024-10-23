import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="container flex justify-between mx-auto border-b-2 py-2 mb-9 px-3">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
