import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
     
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/myBlog'> My Blog</Link>
        </li>
        <li>
          <Link to='/about'> About moi</Link>
        </li>
        <li>
          <Link to='/favoriteMovie'>The best Movie</Link>
        </li>
        <li>
          <Link to='/favoriteFood'>Favorite Food</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
