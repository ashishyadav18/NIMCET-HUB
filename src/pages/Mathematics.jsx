function Mathematics({ setPage }) {
  const subjects = [
    {
      icon: "📐",
      title: "Trigonometry",
      desc: "Functions, Identities, Inverse Trigonometry, Triangles and Heights & Distances.",
      page: "trig",
    },
    {
      icon: "📊",
      title: "Algebra",
      desc: "Quadratics, Progressions, Logarithms, Matrices, Binomial Theorem and P&C.",
      page: "algebra",
    },
    {
      icon: "📍",
      title: "Coordinate Geometry",
      desc: "Lines, Circles, Parabola, Ellipse, Hyperbola and Conic Sections.",
      page: "coord",
    },
    {
      icon: "🎲",
      title: "Probability & Statistics",
      desc: "Probability, Bayes Theorem, Mean, Median, Variance and Distributions.",
      page: "prob",
    },
    {
      icon: "📚",
      title: "Set Theory & Logic",
      desc: "Sets, Relations, Functions, Logic, Venn Diagrams and Propositions.",
      page: "set",
    },
    {
      icon: "📈",
      title: "Calculus",
      desc: "Limits, Continuity, Differentiation, Integration and Applications.",
      page: "calc",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1300px",
        margin: "auto",
        padding: "40px 20px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg,#152037,#1d3258)",
          color: "white",
          borderRadius: "22px",
          padding: "55px",
          textAlign: "center",
          marginBottom: "40px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#c8950a",
            color: "#152037",
            padding: "8px 18px",
            borderRadius: "999px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          NIMCET MATHEMATICS
        </div>

        <h1
          style={{
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          📐 Mathematics Dashboard
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            fontSize: "18px",
            lineHeight: "1.8",
            opacity: 0.9,
          }}
        >
          Master all mathematical topics required for NIMCET.
          Access formulas, concepts, solved examples,
          tricks and exam-oriented notes.
        </p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#c8950a", margin: 0 }}>6</h2>
          <p>Major Modules</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#c8950a", margin: 0 }}>100+</h2>
          <p>Concepts Covered</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#c8950a", margin: 0 }}>500+</h2>
          <p>Formulas & Examples</p>
        </div>
      </div>

      {/* Subject Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {subjects.map((subject) => (
          <div
            key={subject.title}
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "15px",
              }}
            >
              {subject.icon}
            </div>

            <h2
              style={{
                color: "#152037",
                marginBottom: "10px",
              }}
            >
              {subject.title}
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
                flex: 1,
              }}
            >
              {subject.desc}
            </p>

            <button
              onClick={() => setPage(subject.page)}
              style={{
                marginTop: "20px",
                background: "#c8950a",
                color: "#152037",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Open Module →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mathematics;