import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (element) => {
    element.preventDefault();
    setIsOpen(true);
  };

  const handleCloseClick = (element) => {
    element.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      <header className="w-full flex flex-col justify-center items-center gap-5 relative z-50">
        <div className="w-4/5 flex justify-between items-center py-5">
          <h3 className="text-2xl font-bold text-blue-600">SABIR ALIYEV</h3>

          {!isOpen && (
            <a href="#" className="text-2xl font-bold text-blue-600" onClick={handleMenuClick}>
              <i className="ri-menu-line"></i>
            </a>
          )}

          {isOpen && (
            <a href="#" className="text-2xl font-bold text-blue-600" onClick={handleCloseClick}>
              <i className="ri-close-line"></i>
            </a>
          )}
        </div>
        <nav className={` w-4/5 py-5 border border-[#1870aa34] flex flex-col items-center text-center gap-5 
     rounded-[18px] absolute top-20 z-[100]
            ${isOpen ? "flex" : "hidden"}`}
          style={{
            background: `
                radial-gradient(at 0% 0%, #2d2fbd 0%, transparent 60%),
                radial-gradient(at 100% 100%, #0a2a88 0%, transparent 60%),
                #0f1535
            `
          }}>
          <a href="#" className="text-1xl font-bold">Home</a>
          <a href="#" className="text-1xl font-bold">About</a>
          <a href="#" className="text-1xl font-bold">Skills</a>
          <a href="#" className="text-1xl font-bold">Projects</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
