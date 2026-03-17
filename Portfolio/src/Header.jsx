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
      <header className="w-full flex flex-col justify-center items-center gap-5">
        <div className="w-4/5 flex justify-between items-center py-5">
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
        <nav className={` w-4/5 py-5 bg-gradient-to-r from-[#2d2fbd] to-[#0a2a88] 
     border border-[#1870aa94] flex flex-col items-center text-center gap-5 
     rounded-[18px] absolute top-20 z-[100]
            ${isOpen ? "flex" : "hidden"}`}>
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
