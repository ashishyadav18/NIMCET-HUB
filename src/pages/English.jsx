function EnglishPage({ setPage }) {
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
          NIMCET ENGLISH
        </div>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          📚 English Preparation
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.9,
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.7",
          }}
        >
          Master Reading Comprehension, Vocabulary,
          Grammar, Sentence Structure, Word Formation,
          Idioms and Technical Writing for NIMCET.
        </p>
      </div>

      {/* Features */}
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
          <h3>📖 Vocabulary</h3>
          <p>Important words, synonyms, antonyms and usage.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>✍ Grammar</h3>
          <p>Rules, sentence correction and common errors.</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>📄 Comprehension</h3>
          <p>Reading passages and answer techniques.</p>
        </div>
      </div>

      {/* Main Notes Card */}
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "55px",
            marginBottom: "15px",
          }}
        >
          📚
        </div>

        <h2
          style={{
            color: "#152037",
            marginBottom: "15px",
          }}
        >
          Complete English Notes
        </h2>

        <p
          style={{
            color: "#666",
            maxWidth: "700px",
            margin: "0 auto 25px auto",
            lineHeight: "1.7",
          }}
        >
          Access the complete NIMCET English handbook
          containing concepts, examples, exam patterns,
          shortcuts and revision material.
        </p>

        <button
          onClick={() => setPage("eng")}
          style={{
            background: "#c8950a",
            color: "#152037",
            border: "none",
            padding: "14px 30px",
            fontSize: "16px",
            fontWeight: "700",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Open Notes →
        </button>
      </div>
    </div>
  );
}

export default EnglishPage;