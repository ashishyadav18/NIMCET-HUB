function Computer({ setPage }) {
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
          NIMCET COMPUTER AWARENESS
        </div>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          💻 Computer Awareness
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
          Build a strong foundation in Computer Fundamentals,
          Hardware, Software, Operating Systems, Networks,
          Internet, Databases and Modern Computing Concepts.
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
          <h3>🖥 Hardware</h3>
          <p>
            CPU, Memory, Storage Devices, Input &
            Output Components.
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
          <h3>⚙ Software</h3>
          <p>
            Operating Systems, Applications,
            Programming & Utilities.
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
          <h3>🌐 Internet</h3>
          <p>
            Networking, Web Technologies,
            Security and Communication.
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
            💻
          </div>

          <h2 style={{ color: "#152037" }}>
            Computer Notes – Part 1
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Covers computer fundamentals, hardware,
            software basics, memory, storage,
            operating systems and essential concepts.
          </p>

          <button
            onClick={() => setPage("computer1")}
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
            🌐
          </div>

          <h2 style={{ color: "#152037" }}>
            Computer Notes – Part 2
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Covers networking, internet,
            databases, security concepts,
            communication technologies and advanced topics.
          </p>

          <button
            onClick={() => setPage("computer2")}
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

export default Computer;