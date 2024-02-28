import React from "react";
import { Link }  from "react-router-dom"
import styles from "./Banners.module.css"

const Header = () => {
  return (
    <header className="header" >
      <h2>Devmountain Eatery</h2>
      <nav >
        <Link to="/" >
          <button className={styles.button}>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
