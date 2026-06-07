function Reasoning({ setPage }) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "40px 20px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #152037, #1d3258)",
          color: "white",
          borderRadius: "20px",
          padding: "50px",
          textAlign: "center",
          marginBottom: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
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
          NIMCET REASONING
        </div>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          🧠 Logical & Analytical Reasoning
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.9,
            maxWidth: "750px",
            margin: "auto",
            lineHeight: "1.7",
          }}
        >
          Strengthen logical thinking, analytical ability,
          pattern recognition, data interpretation,
          problem solving and decision-making skills
          required for NIMCET.
        </p>
      </div>

      {/* Highlights */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>🔍 Analytical Thinking</h3>
          <p>
            Learn to break complex problems into
            logical and manageable parts.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>🧩 Pattern Recognition</h3>
          <p>
            Number series, coding-decoding,
            arrangements and logical patterns.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>📊 Data Interpretation</h3>
          <p>
            Tables, charts, graphs and reasoning-based
            quantitative analysis.
          </p>
        </div>
      </div>

      {/* Notes Sections */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontSize: "50px",
              marginBottom: "15px",
            }}
          >
            🧠
          </div>

          <h2 style={{ color: "#152037" }}>
            Reasoning Notes – Part 1
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Covers verbal reasoning, logical sequences,
            coding-decoding, blood relations,
            direction sense and fundamental reasoning concepts.
          </p>

          <button
            onClick={() => setPage("reasoning1")}
            style={{
              background: "#c8950a",
              color: "#152037",
              border: "none",
              padding: "12px 24px",
              borderRadius: "10px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Open Part 1 →
          </button>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              fontSize: "50px",
              marginBottom: "15px",
            }}
          >
            🎯
          </div>

          <h2 style={{ color: "#152037" }}>
            Reasoning Notes – Part 2
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Covers advanced reasoning topics,
            puzzles, analytical reasoning,
            data interpretation and higher-level problem solving.
          </p>

          <button
            onClick={() => setPage("reasoning2")}
            style={{
              background: "#c8950a",
              color: "#152037",
              border: "none",
              padding: "12px 24px",
              borderRadius: "10px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Open Part 2 →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reasoning;