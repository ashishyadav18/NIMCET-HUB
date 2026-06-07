import "./../styles/home.css";

function Home({ setPage }) {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-badge">
          NIMCET PREPARATION HUB
        </div>

        <h1>
          Master Every Section of NIMCET
        </h1>

        <p>
          Mathematics • Reasoning • Computer Awareness • English
        </p>

      </section>

      {/* Statistics */}
      <section className="stats">

        <div className="stat-card">
          <h2>11</h2>
          <p>Study Modules</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Topics Covered</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Formulas & Examples</p>
        </div>

      </section>

      {/* Main Sections */}
      <h2 className="section-title">
        Preparation Sections
      </h2>

      <section className="subjects">

        <div className="subject-card"
        onClick={() => setPage("math")}
        style={{ cursor: "pointer" }}
        >
          <div className="icon">📐</div>
          <h3>Mathematics</h3>
          <p>
            Trigonometry, Algebra,
            Coordinate Geometry,
            Probability, Set Theory
            and Calculus.
          </p>

            <button
              style={{
                marginTop: "15px",
                background: "#c8950a",
                color: "#152037",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Open Mathematics →
            </button>

        </div>

        <div className="subject-card"
         onClick={() => setPage("reasoning")}
         style={{ cursor: "pointer" }}
        >
          <div className="icon">🧠</div>
          <h3>Reasoning</h3>
          <p>
            Logical Reasoning,
            Analytical Thinking,
            Patterns, Arrangements,
            Data Interpretation and more.
          </p>

            <button
              style={{
                marginTop: "15px",
                background: "#c8950a",
                color: "#152037",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Open Reasoning →
            </button>

        </div>

        <div className="subject-card"
          onClick={() => setPage("computer")}
          style={{ cursor: "pointer" }}
        >
          <div className="icon">💻</div>
          <h3>Computer Awareness</h3>
          <p>
            Hardware, Software,
            Operating Systems,
            Networking, Internet
            and Computer Fundamentals.
          </p>

            <button
              style={{
                marginTop: "15px",
                background: "#c8950a",
                color: "#152037",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Open Computer →
            </button>

        </div>

        <div className="subject-card"
          onClick={() => setPage("english")}
          style={{ cursor: "pointer" }}
        >
          <div className="icon">📚</div>
          <h3>English</h3>
          <p>
            Vocabulary, Grammar,
            Reading Comprehension,
            Idioms, Technical Writing
            and Language Skills.
          </p>

            <button
              style={{
                marginTop: "15px",
                background: "#c8950a",
                color: "#152037",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Open English →
            </button>

        </div>

      </section>

      {/* Motivation Section */}
      <section
        style={{
          marginTop: "60px",
          background: "white",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#152037",
            marginBottom: "15px",
          }}
        >
          🎯 Study Smart. Revise Fast.
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            color: "#666",
            lineHeight: "1.8",
          }}
        >
          This platform is designed specifically
          for NIMCET preparation with concise
          formulas, important concepts,
          solved examples and exam-oriented
          revision material.
        </p>
      </section>

    </div>
  );
}

export default Home;

