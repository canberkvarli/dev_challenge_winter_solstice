import "./Header.css";

const Header: React.FC = () => {
  return (
    <header id="main-header">
      <h1>Celebrating the Winter Solstice</h1>
      <nav id="main-nav">
        <ul>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#science">The Science</a>
          </li>
          <li>
            <a href="#hemispheres">Solstice Across Hemispheres</a>
          </li>
          <li>
            <a href="#celebrations">Global Celebrations</a>
          </li>
          <li>
            <a href="#traditions">Solstice Traditions</a>
          </li>
          <li>
            <a href="#conclusion">Conclusion</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
