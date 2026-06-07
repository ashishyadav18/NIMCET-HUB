import "../styles/navbar.css";
import logo from "../assets/logo.png";


function Navbar({
  setPage,
  page
}) {
  return (
    <nav className="navbar">

      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        
        <span>NIMCET HUB</span>
      </div>

      <button
        className={`nav-btn ${page === "home" ? "active" : ""}`}
        onClick={() => setPage("home")}
      >
        🏠 Home
      </button>

      <button
        className={`nav-btn ${
          ["math", "trig", "algebra", "coord", "prob", "set", "calc"].includes(page)
          ? "active"
          : ""
        }`}
        onClick={() => setPage("math")}
      >
        📐 Mathematics
      </button>

      <button
        className={`nav-btn ${
          ["reasoning", "reasoning1", "reasoning2"].includes(page)
          ? "active"
          : ""
        }`}
        onClick={() => setPage("reasoning")}
      >
        🧠 Reasoning
      </button>

      <button
        className={`nav-btn ${
          ["computer", "computer1", "computer2"].includes(page)
          ? "active"
          : ""
        }`}
        onClick={() => setPage("computer")}
      >
        💻 Computer
      </button>

      <button
        className={`nav-btn ${
          ["english", "eng"].includes(page)
          ? "active"
          : ""
        }`}
        onClick={() => setPage("english")}
      >
        📚 English
      </button>

    </nav>
  );
}

export default Navbar;