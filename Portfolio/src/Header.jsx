import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (element) => {
    element.preventDefault();
    console.log("clicked");
    setIsOpen(true);
  };

  const handleCloseClick = (element) => {
    element.preventDefault();
    console.log("clicked close button");
    setIsOpen(false);
  };

  return (
    <>
      <header className="header-container-mobile">
        <div className="header-content">
          <h3>SABIR ALIYEV</h3>

          {!isOpen && (
            <a href="#" className="menu-button" onClick={handleMenuClick}>
              <i className="ri-menu-line"></i>
            </a>
          )}

          {isOpen && (
            <a href="#" className="close-button" onClick={handleCloseClick}>
              <i className="ri-close-line"></i>
            </a>
          )}
        </div>
        <nav className={`menu-section ${isOpen ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
