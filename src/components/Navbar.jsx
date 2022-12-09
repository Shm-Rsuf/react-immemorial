import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStager } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);

  const febRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const fabArr = [febRef];
  const logoArr = [logoRef];

  useGsapDownStager(liArr, 0.9);
  useGsapDownStager(logoArr, 1.5);
  useGsapDownStager(fabArr, 1.8);

  return (
    <nav className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <Link to="/featured">Featured</Link>
        </li>
        <li ref={li2}>
          <Link to="/about">About</Link>
        </li>
        <li ref={li3}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link to="/">
          <h2>Immemorial</h2>
        </Link>
      </div>
      <div className="favourite-link" ref={febRef}>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
};

export default Navbar;