import NavBar from "../NavBar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <img src="/logoMaedre.png" alt="logo" className="logo" />
            <Link to="/"><h1 className="titulo">Maedre</h1></Link>
            <NavBar type="header" />
        </header>
    )
}

export default Header;