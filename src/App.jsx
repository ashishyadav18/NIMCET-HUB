import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Mathematics from "./pages/Mathematics";
import Reasoning from "./pages/Reasoning";
import Computer from "./pages/Computer";
import EnglishPage from "./pages/English";

import SetTheoryLogic from "./data/nimcet_set_theory_logic";
import Probability from "./data/nimcet_prob_stats";
import Algebra from "./data/nimcet_algebra";
import CoordinateGeometry from "./data/nimcet_coord_geometry";
import Calculus from "./data/nimcet_calculus";
import Trigonometry from "./data/nimcet_trigonometry";

import Reasoning_Part_1 from "./data/nimcet_reasoning_part1";
import Reasoning_Part_2 from "./data/nimcet_reasoning_part2";

import Computer_Part_1 from "./data/nimcet_computer_part1";
import Computer_Part_2 from "./data/nimcet_computer_part2";

import EnglishNotes from "./data/nimcet_english";

function App() {
  const [page, setPage] = useState("home");

  return (
  <div style={{ minHeight: "100vh" }}>
      <Navbar
        page={page}
        setPage={setPage}
      />

      {page === "home" && <Home setPage={setPage} />}

      {page === "math" && <Mathematics setPage={setPage} />}
      {page === "reasoning" && <Reasoning setPage={setPage} />}
      {page === "computer" && <Computer setPage={setPage} />}
      {page === "english" && <EnglishPage setPage={setPage} />}

      {page === "set" && <SetTheoryLogic />}
      {page === "prob" && <Probability />}
      {page === "algebra" && <Algebra />}
      {page === "coord" && <CoordinateGeometry />}
      {page === "calc" && <Calculus />}
      {page === "trig" && <Trigonometry />}

      {page === "reasoning1" && <Reasoning_Part_1 />}
      {page === "reasoning2" && <Reasoning_Part_2 />}

      {page === "computer1" && <Computer_Part_1 />}
      {page === "computer2" && <Computer_Part_2 />}

      {page === "eng" && <EnglishNotes />}


    </div>
  );
}

export default App;

