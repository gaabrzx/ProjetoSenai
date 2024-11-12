// Sass Import
import "../Components/SASS/header.sass";

const Header = () => {
  return (
    <header className="main_header">
      <div className="location_div">
        <i className="fa-solid fa-location-dot" id="location_icon"></i>
        <p>Firjan Senai</p>
      </div>
    </header>
  );
};

export default Header;
