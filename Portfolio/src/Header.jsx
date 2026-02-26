function Header() {


const handleMenuClick = (element) =>{
        element.preventDefault();
        console.log("clicked");
        
}


    return (
        <>
            <header className="header-container-mobile">
                <div className="header-content">
                    <h3>SABIR ALIYEV</h3>
                    <a href="#" className="menu-button" onClick={handleMenuClick}><i className="ri-menu-line"></i></a>
                    <a href="#" className="close-button"><i className="ri-close-line"></i></a>
                </div>
                <nav className="menu-section">
                    <a href="#">Home</a>
                    <a href="#">Skills</a>
                    <a href="#">About</a>
                    <a href="#">Active Projects</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
        </>
    )
}

export default Header