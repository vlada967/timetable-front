import { Link } from 'react-router-dom';
import headerLogoPath from '../../images/header-logo.png';

function Header() {
    return (
        <header className="header">
            <Link to="/"><img src={headerLogoPath} alt="Timtetable" className="header__title" /></Link>
        </header>
    );
}

export default Header;