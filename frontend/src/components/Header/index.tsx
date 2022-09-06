import Logo from "../../assets/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={Logo} alt="Logo Dsmeta" />
        <h1>DSMeta</h1>
        <p></p>
      </div>
    </header>
  );
}

export default Header;