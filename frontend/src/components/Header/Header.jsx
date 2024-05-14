const Header = () => {
    return (
        <>
            <header id="site_header" className="header mobile-menu-hide">
    <div className="">
        <div className="header-photo">
            <img src="img/main_photo.png" alt="Sazeebul Bashar" />
        </div>
        <div className="header-titles">
            <h2>Sazeebul Bashar</h2>
            <h4>Software Engineer</h4>
        </div>
    </div>

    <ul className="main-menu">
        <li className="active">
            <a href="#home" className="nav-anim">
                <span className="menu-icon lnr lnr-home"></span>
                <span className="link-text">Home</span>
            </a>
        </li>
        <li>
            <a href="#about-me" className="nav-anim">
                <span className="menu-icon lnr lnr-user"></span>
                <span className="link-text">About Me</span>
            </a>
        </li>
        <li>
            <a href="#resume" className="nav-anim">
                <span
                    className="menu-icon lnr lnr-graduation-hat"
                ></span>
                <span className="link-text">Resume</span>
            </a>
        </li>
        <li>
            <a href="#portfolio" className="nav-anim">
                <span
                    className="menu-icon lnr lnr-briefcase"
                ></span>
                <span className="link-text">Portfolio</span>
            </a>
        </li>
        {/* {{-- <li>
            <a href="#blog" className="nav-anim">
                <span className="menu-icon lnr lnr-book"></span>
                <span className="link-text">Blog</span>
            </a>
        </li> --}} */}
        <li>
            <a href="#contact" className="nav-anim">
                <span className="menu-icon lnr lnr-envelope"></span>
                <span className="link-text">Contact</span>
            </a>
        </li>

    </ul>

    <div className="social-links">
        <ul>
            <li>
                <a href="#" target="_blank">
                    <i className="fab fa-linkedin-in"></i></a>
            </li>
            <li>
                <a href='https://leetcode.com/sazeebul/' target="_blank">
                    {/* {{-- <i className="fab fa-facebook-f"></i> --}} */}
                    <img className="leetcode" src="icons/leetcode.png" alt=""/>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <i className="fab fa-kaggle"></i>
                </a>
            </li>
            <li>
                <a href='https://github.com/SazeebulBashar' target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </li>
        </ul>
    </div>

    <div className="header-buttons">
        <a href='https://drive.google.com/file/d/1kkPD_L5Isco8BOgvcw2a1dCYhmK7WVkH/view?usp=sharing' target="_blank" className="btn btn-primary">Download CV</a>
    </div>

</header>
        </>
    );
};

export default Header;