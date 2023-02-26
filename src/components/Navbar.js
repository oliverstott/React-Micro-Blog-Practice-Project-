import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/create" className="navbar__link">Create</Link>
      </div>
    </div>
  );
};

export default Navbar;
