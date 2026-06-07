import { useState } from "react";

const TABS = [
  { id: "sets",    label: "📚 Set Operations" },
  { id: "card",    label: "🔢 Cardinality & Product" },
  { id: "rel",     label: "🔗 Relations" },
  { id: "func",    label: "📊 Functions" },
  { id: "venn",    label: "🔵 Venn Diagrams" },
  { id: "logic",   label: "⚡ Logic & Truth Tables" },
  { id: "taut",    label: "🔄 Tautology & Contradiction" },
];

const DATA = {
  sets: {
    title: "Set Operations — Union, Intersection, Difference & Symmetric Difference",
    formulas: [
      ["Union  A∪B", "All elements in A OR B (or both). |A∪B| = |A|+|B|−|A∩B|"],
      ["Intersection  A∩B", "Elements in BOTH A AND B simultaneously."],
      ["Difference  A−B  (or A\\B)", "Elements in A but NOT in B. A−B = A∩B'"],
      ["Symmetric Difference  A△B", "Elements in A or B but NOT in both. A△B = (A−B)∪(B−A) = (A∪B)−(A∩B)"],
      ["|A△B|", "|A|+|B|−2|A∩B|"],
      ["Complement  A' (or Aᶜ)", "All elements in Universal set U NOT in A. A' = U−A"],
      ["De Morgan's Law 1", "(A∪B)' = A'∩B'"],
      ["De Morgan's Law 2", "(A∩B)' = A'∪B'"],
      ["Absorption law", "A∪(A∩B) = A   |   A∩(A∪B) = A"],
      ["Distributive law", "A∩(B∪C) = (A∩B)∪(A∩C)   |   A∪(B∩C) = (A∪B)∩(A∪C)"],
      ["Complement law", "A∪A' = U   |   A∩A' = ∅   |   (A')' = A"],
      ["Identity law", "A∪∅ = A   |   A∩U = A   |   A∪U = U   |   A∩∅ = ∅"],
    ],
    concepts: [
      ["Set notation and types", "Roster: list elements {1,2,3}. Set-builder: {x | condition}. Empty set: ∅ or {}. Subset: A⊆B (every element of A is in B). Proper subset: A⊂B (A⊆B and A≠B). Power set P(A): set of ALL subsets. |P(A)| = 2ⁿ where n=|A|. Universal set U: the overall context set. Equal sets: same elements (A=B ⟺ A⊆B AND B⊆A). Disjoint: A∩B=∅."],
      ["Symmetric difference — key properties", "A△B = B△A (commutative). (A△B)△C = A△(B△C) (associative). A△∅ = A (identity). A△A = ∅ (self-inverse — most important). A△B = A∪B when A∩B=∅. NIMCET tests: A△B expressed other ways: A△B = (A∪B)−(A∩B) = (A∩B')∪(B∩A'). Also: A△B = (A∪B)∩(A∩B)' — union minus intersection."],
      ["De Morgan's laws — extended and applied", "(A∪B∪C)' = A'∩B'∩C'. (A∩B∩C)' = A'∪B'∪C'. These extend naturally: complement distributes and swaps ∪↔∩. Application: If you're asked for elements NOT in A and NOT in B → A'∩B' = (A∪B)'. If NOT in A OR NOT in B → A'∪B' = (A∩B)'. De Morgan's is the key tool to rewrite complement of complex expressions. Memorize both forms."],
      ["Algebra of sets — identities to use in MCQ", "Idempotent: A∪A=A, A∩A=A. Commutativity: A∪B=B∪A. Associativity: (A∪B)∪C=A∪(B∪C). Distributivity (crucial for simplification): A∩(B∪C)=(A∩B)∪(A∩C). Most NIMCET Set Algebra MCQs require one application of distributivity + complement laws. Work one step at a time — don't skip steps."],
    ],
    examples: [
      {
        q: "If A={1,2,3,4,5}, B={3,4,5,6,7}, U={1,...,10}. Find A∪B, A∩B, A−B, B−A, A△B, A'.",
        steps: [
          "A∪B = {1,2,3,4,5,6,7}  (all elements of both)",
          "A∩B = {3,4,5}  (common elements)",
          "A−B = {1,2}  (in A, not in B)",
          "B−A = {6,7}  (in B, not in A)",
          "A△B = (A−B)∪(B−A) = {1,2}∪{6,7} = {1,2,6,7}",
          "OR: A△B = (A∪B)−(A∩B) = {1,2,3,4,5,6,7}−{3,4,5} = {1,2,6,7} ✓",
          "A' = U−A = {6,7,8,9,10}",
        ],
      },
      {
        q: "Prove: A−B = A∩B'  and  A△B = (A∪B)∩(A∩B)'",
        steps: [
          "A−B by definition: elements in A that are NOT in B.",
          "NOT in B = B' (complement). So A−B = {x: x∈A and x∉B} = A∩B' ✓",
          "A△B = (A−B)∪(B−A) = (A∩B')∪(B∩A')",
          "Also: A△B = elements in A∪B but NOT in A∩B",
          "= (A∪B) − (A∩B) = (A∪B)∩(A∩B)'  ✓",
          "Both forms are equivalent and used in different MCQ contexts.",
        ],
      },
      {
        q: "Simplify: (A∪B)∩(A∪B')",
        steps: [
          "Use distributive law: (A∪B)∩(A∪B') = A∪(B∩B')",
          "B∩B' = ∅  (complement law)",
          "= A∪∅ = A",
          "Answer: (A∪B)∩(A∪B') = A",
        ],
      },
      {
        q: "Simplify using De Morgan's: [(A'∪B')∩(A'∪C')]'",
        steps: [
          "Apply outer complement (De Morgan's):  [(A'∪B')∩(A'∪C')]' = (A'∪B')'∪(A'∪C')'",
          "(A'∪B')' = A∩B  (De Morgan's: complement of union = intersection of complements)",
          "(A'∪C')' = A∩C",
          "Result = (A∩B)∪(A∩C) = A∩(B∪C)  (distributive law)",
        ],
      },
    ],
    tips: [
      "A△B self-inverse: A△A=∅ and A△∅=A. These appear in 'simplify A△B△A' type problems — answer is B.",
      "De Morgan's: flip ∪↔∩ AND complement each set. Works for any number of sets. (A∪B∪C)'=A'∩B'∩C'.",
      "A−B ≠ B−A (order matters). But A△B = B△A (symmetric/commutative). This distinction is tested.",
      "Symmetric difference double formula: A△B=(A∪B)−(A∩B)=(A∪B)∩(A∩B)'. Both forms give the same set — use whichever is easier in context.",
      "Power set: |P(A)|=2ⁿ. If A has 4 elements, P(A) has 2⁴=16 subsets. The empty set ∅ and A itself are ALWAYS in P(A).",
    ],
  },

  card: {
    title: "Cardinality & Cartesian Product",
    formulas: [
      ["Cardinality (size)", "|A| = number of elements in set A (also written n(A))"],
      ["Inclusion-exclusion (2 sets)", "|A∪B| = |A| + |B| − |A∩B|"],
      ["Inclusion-exclusion (3 sets)", "|A∪B∪C| = |A|+|B|+|C|−|A∩B|−|B∩C|−|A∩C|+|A∩B∩C|"],
      ["Only A (in 2-set)", "|A only| = |A|−|A∩B|"],
      ["Only A (in 3-set)", "|A only| = |A|−|A∩B|−|A∩C|+|A∩B∩C|"],
      ["Exactly 2 of 3 sets", "|A∩B only|+|B∩C only|+|A∩C only| (each pair minus triple)"],
      ["Cartesian product A×B", "{(a,b) : a∈A, b∈B}  — set of ALL ordered pairs"],
      ["|A×B|", "|A| × |B|"],
      ["|A×B×C|", "|A| × |B| × |C|"],
      ["A×(B∪C)", "= (A×B) ∪ (A×C)"],
      ["A×(B∩C)", "= (A×B) ∩ (A×C)"],
      ["A×(B−C)", "= (A×B) − (A×C)"],
    ],
    concepts: [
      ["Inclusion-exclusion — filling order for 3 sets", "NEVER fill from outside-in. Start from the INNERMOST region (A∩B∩C). Step 1: Fill A∩B∩C directly (innermost). Step 2: Pair-only: |A∩B only| = |A∩B|−|A∩B∩C|. Similarly for B∩C only, A∩C only. Step 3: Only A = |A|−|A∩B only|−|A∩C only|−|A∩B∩C|. Step 4: Neither = |U|−|A∪B∪C|. Verify: all 8 regions sum to |U|."],
      ["Cardinality MCQ strategy — common problem types", "Type 1: Given |A|, |B|, |A∩B| → find |A∪B|. Type 2: Given |A∪B|, |A|, |B| → find |A∩B| (rearrange formula). Type 3: Given ALL pairwise intersections + triple → find only-A, only-B, only-C, and none. Type 4: 'At least one', 'exactly two', 'none' → translate into set notation then use inclusion-exclusion. NIMCET word problems always translate to these four types."],
      ["Cartesian product — key properties", "A×B ≠ B×A in general (ordered pairs — order matters). |A×B|=|A||B|. A×∅=∅×A=∅. A×(B∪C)=(A×B)∪(A×C) and A×(B∩C)=(A×B)∩(A×C) — Cartesian product distributes over union and intersection. If A×B=A×C and A≠∅, then B=C. Key: Cartesian product of n finite sets = all n-tuples. For A={1,2}, B={a,b}: A×B={(1,a),(1,b),(2,a),(2,b)} — 4 ordered pairs."],
      ["Subsets and power set counting", "Number of subsets of A of size r = C(n,r). Total subsets of n-element set = Σ C(n,r) = 2ⁿ. Number of proper subsets = 2ⁿ−1 (excluding A itself). Number of non-empty subsets = 2ⁿ−1 (excluding ∅). Number of non-empty proper subsets = 2ⁿ−2. NIMCET frequently asks: 'how many subsets of A have exactly 3 elements?' → C(n,3)."],
    ],
    examples: [
      {
        q: "In a class: 40 study Maths (M), 30 study Physics (P), 15 study both. Find |M∪P| and those studying neither if class = 60.",
        steps: [
          "|M∪P| = |M|+|P|−|M∩P| = 40+30−15 = 55",
          "Neither = Total − |M∪P| = 60−55 = 5",
          "Only M = 40−15 = 25.  Only P = 30−15 = 15.  Both = 15.",
          "Verify: 25+15+15 = 55 = |M∪P| ✓.  55+5 = 60 ✓",
        ],
      },
      {
        q: "In a survey of 100: |A|=60, |B|=50, |C|=40, |A∩B|=25, |B∩C|=20, |A∩C|=15, |A∩B∩C|=10. Find |A∪B∪C| and 'none'.",
        steps: [
          "|A∪B∪C| = 60+50+40−25−20−15+10 = 150−60+10 = 100",
          "None = 100−100 = 0 (every person is in at least one group)",
          "Only A = 60−25−15+10 = 30. Only B = 50−25−20+10 = 15. Only C = 40−20−15+10 = 15.",
          "A∩B only = 25−10=15. B∩C only = 20−10=10. A∩C only = 15−10=5.",
          "Verify: 30+15+15+15+10+5+10+0 = 100 ✓",
        ],
      },
      {
        q: "If A={1,2,3} and B={a,b}, list A×B and find |A×B|. Is (2,a) ∈ A×B?",
        steps: [
          "A×B = {(1,a),(1,b),(2,a),(2,b),(3,a),(3,b)}",
          "|A×B| = |A|×|B| = 3×2 = 6 ✓",
          "(2,a): first element 2∈A ✓, second element a∈B ✓ → (2,a)∈A×B ✓",
          "Note: (a,2) would NOT be in A×B (order matters in ordered pairs).",
        ],
      },
      {
        q: "A has n elements. Its power set has 256 elements. Find n and number of proper subsets.",
        steps: [
          "|P(A)| = 2ⁿ = 256 = 2⁸  →  n = 8",
          "Number of proper subsets = 2ⁿ−1 = 256−1 = 255",
          "Number of non-empty proper subsets = 2ⁿ−2 = 256−2 = 254",
          "Number of subsets with exactly 3 elements = C(8,3) = 56",
        ],
      },
    ],
    tips: [
      "Inclusion-exclusion 3-set sign pattern: +A, +B, +C (single sets) then −AB, −BC, −AC (pairs) then +ABC (triple). Alternating signs.",
      "Fill 3-set Venn from INSIDE OUT: fill A∩B∩C first, then pair-only regions, then single-only, then none. Never work outside-in.",
      "|A×B|=|A|×|B|. If |A×B|=12 and |A|=3, then |B|=4. Simple multiplication/division.",
      "Exactly two of three sets = sum of pair-only regions = (|A∩B|−|A∩B∩C|) + (|B∩C|−|A∩B∩C|) + (|A∩C|−|A∩B∩C|) = |A∩B|+|B∩C|+|A∩C|−3|A∩B∩C|.",
      "Power set size: n=0→1, n=1→2, n=2→4, n=3→8, n=4→16, n=5→32. Memorize up to n=5 for instant MCQ answers.",
    ],
  },

  rel: {
    title: "Relations",
    formulas: [
      ["Relation R on A", "R ⊆ A×A. Set of ordered pairs (a,b) with a related to b."],
      ["Domain of R", "{a : (a,b)∈R for some b}"],
      ["Range of R", "{b : (a,b)∈R for some a}"],
      ["Number of relations on A (|A|=n)", "Total = 2^(n²)  (each of n² pairs may or may not be in R)"],
      ["Reflexive condition", "∀a∈A: (a,a)∈R.  All n diagonal pairs must be in R."],
      ["Symmetric condition", "(a,b)∈R ⟹ (b,a)∈R  for all a,b."],
      ["Antisymmetric condition", "(a,b)∈R AND (b,a)∈R ⟹ a=b"],
      ["Transitive condition", "(a,b)∈R AND (b,c)∈R ⟹ (a,c)∈R"],
      ["Equivalence relation", "Must be: Reflexive + Symmetric + Transitive (RST)"],
      ["Partial order relation", "Reflexive + Antisymmetric + Transitive"],
      ["Inverse relation R⁻¹", "{(b,a) : (a,b)∈R}  — swap each pair"],
      ["Composition R∘S", "(a,c)∈R∘S iff ∃b: (a,b)∈S and (b,c)∈R"],
    ],
    concepts: [
      ["Reflexive, Symmetric, Transitive — precise checks", "Reflexive: does R contain (1,1),(2,2),(3,3),... for EVERY element? Missing even ONE diagonal pair → NOT reflexive. Symmetric: for every (a,b) in R, is (b,a) also in R? Check ALL non-diagonal pairs. Transitive: for every (a,b) and (b,c) in R, is (a,c) in R? Check all pairs of pairs that 'chain'. Tip: empty relation ∅ is symmetric and transitive (vacuously true) but NOT reflexive (if |A|>0). Universal relation A×A is reflexive, symmetric, and transitive."],
      ["Equivalence classes and partitions", "An equivalence relation R on A partitions A into equivalence classes [a] = {b∈A : (a,b)∈R}. Key properties: every element belongs to exactly one class. Different classes are disjoint. Their union = A. Number of equivalence classes = number of distinct partitions. NIMCET asks: 'Is R an equivalence relation?' — verify RST. Also: 'Find the equivalence class of element a.'"],
      ["Counting reflexive, symmetric relations", "All relations on n elements: 2^(n²). Reflexive relations: n diagonal pairs FORCED IN. Remaining n²−n pairs free: 2^(n²−n). Symmetric relations: n diagonal pairs free (0 or 1), off-diagonal pairs come in symmetric pairs (only need to choose UPPER triangle): 2^(n(n+1)/2). Equivalence relations: count Bell numbers B(n) — B(1)=1, B(2)=2, B(3)=5, B(4)=15. These counting results appear as MCQ options."],
      ["Types of relations — examples and non-examples", "Equivalence: 'a≡b (mod n)' on integers (RST ✓). 'Same age as' (RST ✓). 'Is perpendicular to' — NOT transitive (A⊥B, B⊥C does NOT mean A⊥C). Partial order: '≤' on ℝ (reflexive, antisymmetric, transitive ✓). 'Divisibility' on ℕ (a|b: reflexive, antisymmetric, transitive ✓). 'Is a subset of' on P(A) (⊆: RST but with antisymmetric — partial order). Strict total order: '<' on ℝ (irreflexive, antisymmetric, transitive)."],
    ],
    examples: [
      {
        q: "A={1,2,3}. R={(1,1),(2,2),(3,3),(1,2),(2,1),(2,3),(3,2),(1,3),(3,1)}. Is R an equivalence relation?",
        steps: [
          "Reflexive: (1,1),(2,2),(3,3) all present ✓",
          "Symmetric: (1,2)∈R → (2,1)∈R ✓. (2,3)→(3,2)✓. (1,3)→(3,1)✓. ALL symmetric pairs present ✓",
          "Transitive: (1,2)&(2,3)→(1,3)✓. (2,1)&(1,2)→(2,2)✓. (1,2)&(2,1)→(1,1)✓. Check all chains... All satisfied ✓",
          "R is the complete relation A×A → RST all hold ✓",
          "R IS an equivalence relation. Single equivalence class: {1,2,3}.",
        ],
      },
      {
        q: "R = {(a,b) : a,b∈ℤ, a−b is divisible by 3}. Show R is an equivalence relation.",
        steps: [
          "Reflexive: a−a=0, divisible by 3 ✓. So (a,a)∈R for all a ✓",
          "Symmetric: if a−b = 3k, then b−a = −3k = 3(−k), also divisible by 3 ✓",
          "Transitive: if a−b=3k₁ and b−c=3k₂, then a−c=(a−b)+(b−c)=3k₁+3k₂=3(k₁+k₂) ✓",
          "All three conditions hold → R is an equivalence relation.",
          "Equivalence classes: [0]={...−6,−3,0,3,6,...}, [1]={...−5,−2,1,4,7,...}, [2]={...−4,−1,2,5,8,...}",
        ],
      },
      {
        q: "R = {(1,2),(2,3),(1,3)} on A={1,2,3}. Check each property.",
        steps: [
          "Reflexive: (1,1),(2,2),(3,3) all MISSING → NOT reflexive.",
          "Symmetric: (1,2)∈R but (2,1)∉R → NOT symmetric.",
          "Transitive: (1,2)&(2,3)→need(1,3)∈R ✓. (1,3) has no chain to check further. All chains satisfied → IS transitive.",
          "R is ONLY transitive. Neither reflexive nor symmetric.",
        ],
      },
    ],
    tips: [
      "Equivalence = RST. Remember: Reflexive + Symmetric + Transitive. Missing ANY one → not equivalence.",
      "Reflexive check: must have (a,a) for EVERY element in the set. If even one diagonal pair is missing → not reflexive.",
      "Empty relation: vacuously symmetric and transitive (no pairs to violate). Not reflexive if |A|>0.",
      "Transitive trap: only check chains that exist. (a,b) and (b,c) must BOTH be in R to require (a,c). Don't create new chains from non-existent pairs.",
      "Congruence mod n (a≡b mod n) is always an equivalence relation. Know this instantly for MCQ.",
    ],
  },

  func: {
    title: "Functions — Types, Composition & Inverse",
    formulas: [
      ["Function definition", "f: A→B is a function if every element of A has EXACTLY ONE image in B."],
      ["Injective (one-one)", "f(a₁)=f(a₂) ⟹ a₁=a₂  ⟺  a₁≠a₂ ⟹ f(a₁)≠f(a₂)"],
      ["Surjective (onto)", "∀b∈B, ∃a∈A: f(a)=b.  Range of f = Codomain B."],
      ["Bijective", "Both injective AND surjective. Has unique inverse f⁻¹."],
      ["Number of functions A→B", "|B|^|A|   (each of |A| elements has |B| choices)"],
      ["Number of injections A→B", "P(|B|,|A|) = |B|!/(|B|−|A|)!   (requires |A|≤|B|)"],
      ["Number of surjections A→B", "Σ(−1)ᵏ C(n,k)(n−k)^m  where n=|B|, m=|A|"],
      ["Number of bijections A→B", "|A|!   (only when |A|=|B|)"],
      ["Composition (f∘g)(x)", "f(g(x)).  First apply g, then f."],
      ["Inverse f⁻¹", "Exists iff f is bijective. f(f⁻¹(b))=b and f⁻¹(f(a))=a."],
      ["(f∘g)⁻¹", "= g⁻¹ ∘ f⁻¹   (ORDER REVERSES — same as matrix inverse)"],
    ],
    concepts: [
      ["Injective — testing methods", "Algebraic test: solve f(a₁)=f(a₂), show it forces a₁=a₂. Graphical test: every horizontal line meets the graph at most once (horizontal line test). For polynomials: strictly monotone (always increasing or always decreasing) → injective. f(x)=x² on ℝ: NOT injective (f(2)=f(−2)=4). f(x)=x² on [0,∞): IS injective (monotone increasing). Domain restriction can make a non-injective function injective."],
      ["Surjective — testing methods", "Range = Codomain must hold. Algebraic: given any b in codomain, can you always solve f(a)=b for some a in domain? For f: ℝ→ℝ, f(x)=2x+3: solve 2a+3=b → a=(b−3)/2, always exists → surjective. f(x)=x² as f: ℝ→ℝ: can't solve for b=−1 → NOT surjective. f(x)=x² as f: ℝ→[0,∞): every non-negative b has a=(√b) → surjective. CODOMAIN MATTERS."],
      ["Composition — order is crucial", "(f∘g)(x) = f(g(x)): apply g FIRST, then f. (g∘f)(x) = g(f(x)): apply f first, then g. In general f∘g ≠ g∘f. Domain of f∘g = {x ∈ domain(g) : g(x) ∈ domain(f)}. For inverse of composition: (f∘g)⁻¹ = g⁻¹∘f⁻¹ — the order reverses. This is the most tested fact about composition."],
      ["Number of functions — counting", "Total functions from A to B: |B|^|A| — each of |A| elements independently maps to any of |B| elements. Injections (one-one): |B|×(|B|−1)×(|B|−2)×...×(|B|−|A|+1) = P(|B|,|A|) — first element has |B| choices, second has |B|−1, etc. (no repeats). Bijections: only when |A|=|B|=n, count = n!. Surjections: use inclusion-exclusion. For |A|=3, |B|=2: surjections = 2³−2 = 6."],
    ],
    examples: [
      {
        q: "f: ℝ→ℝ, f(x) = 3x+5. Is f one-one? Onto? Find f⁻¹(x).",
        steps: [
          "One-one: f(a)=f(b) → 3a+5=3b+5 → 3a=3b → a=b. Yes, f is one-one ✓",
          "Onto: given any y∈ℝ, solve 3a+5=y → a=(y−5)/3 ∈ ℝ. Always exists. Yes, f is onto ✓",
          "f is bijective → inverse exists.",
          "Find f⁻¹: y=3x+5 → x=(y−5)/3. So f⁻¹(x) = (x−5)/3",
          "Verify: f(f⁻¹(x)) = 3·(x−5)/3+5 = x−5+5 = x ✓",
        ],
      },
      {
        q: "f(x)=x², g(x)=x+1. Find (f∘g)(x), (g∘f)(x), and show they differ.",
        steps: [
          "(f∘g)(x) = f(g(x)) = f(x+1) = (x+1)² = x²+2x+1",
          "(g∘f)(x) = g(f(x)) = g(x²) = x²+1",
          "At x=2: (f∘g)(2) = 9,  (g∘f)(2) = 5.  Clearly different.",
          "f∘g ≠ g∘f  (composition is NOT commutative in general)",
        ],
      },
      {
        q: "How many functions, one-one functions, and onto functions are there from A={1,2,3} to B={a,b}?",
        steps: [
          "Total functions: |B|^|A| = 2³ = 8",
          "One-one (injections): require |A|≤|B|. Here |A|=3 > |B|=2 → IMPOSSIBLE. 0 injections.",
          "Onto (surjections) from |A|=3, |B|=2: Σ(−1)ᵏC(2,k)(2−k)³ = C(2,0)·2³−C(2,1)·1³+C(2,2)·0³ = 8−2+0 = 6",
          "Bijections: |A|≠|B| → 0 bijections.",
          "Verify: 6 surjections out of 8 total. The other 2 are functions mapping everything to {a} or everything to {b}.",
        ],
      },
    ],
    tips: [
      "Injective test: set f(a₁)=f(a₂), simplify algebraically, if forced a₁=a₂ → injective. For monotone functions, if f'(x)>0 always → one-one.",
      "Surjective depends on the codomain. f(x)=x² is NOT onto f:ℝ→ℝ but IS onto f:ℝ→[0,∞). Always check the stated codomain.",
      "Composition: (f∘g)(x) = f(g(x)) — inner function g applies FIRST. Many students apply f first — wrong.",
      "(f∘g)⁻¹ = g⁻¹∘f⁻¹. Order reverses for both inverse and transpose. Same pattern as (AB)⁻¹=B⁻¹A⁻¹.",
      "Bijection count = n! only when both sets have exactly n elements. Otherwise 0 bijections possible.",
    ],
  },

  venn: {
    title: "Venn Diagrams — Representation and Problem Solving",
    formulas: [
      ["Two-set regions", "Only A | Only B | Both (A∩B) | Neither = 4 regions"],
      ["Three-set regions", "Only A | Only B | Only C | A∩B only | B∩C only | A∩C only | A∩B∩C | None = 8 regions"],
      ["Only A (2-set)", "|A|−|A∩B|"],
      ["A∩B only (3-set)", "|A∩B|−|A∩B∩C|"],
      ["Only A (3-set)", "|A|−|A∩B|−|A∩C|+|A∩B∩C|"],
      ["At least one of 3", "|A∪B∪C| (use I-E formula)"],
      ["At least two of 3", "Σ pair-only + |A∩B∩C| = |A∩B|+|B∩C|+|A∩C|−2|A∩B∩C|"],
      ["Exactly one of 3", "|A only|+|B only|+|C only|"],
      ["Exactly two of 3", "|A∩B only|+|B∩C only|+|A∩C only| = |A∩B|+|B∩C|+|A∩C|−3|A∩B∩C|"],
      ["Exactly all three", "|A∩B∩C|"],
    ],
    concepts: [
      ["Reading Venn diagrams — common question types", "NIMCET provides a Venn diagram (usually 3 sets) with numbers in each region. Questions ask: |A∪B∪C|: sum ALL inside regions. |A only|: read the region inside A but outside B and C. |A∩B| (total): region A∩B only + region A∩B∩C. |A but not B|: A only + A∩C only + A∩B∩C that excludes B... careful — it's (A−B) = A only + (A∩C only). Strategy: label each region with its letter combination, then sum the right ones."],
      ["Venn diagram for set properties", "A⊆B: A's circle is ENTIRELY inside B's circle. A∩B=∅: circles do NOT touch. A=B: both circles are identical. A∩B=A: A's circle is inside B (same as A⊆B). A∪B=B: A⊆B (A's area already inside B, union doesn't add). Universal set U: rectangle around all circles. Complement A': the region OUTSIDE A's circle (inside the rectangle). These visual representations are tested in 'which diagram represents...' MCQ questions."],
      ["Translating word problems to Venn", "'Exactly two skills': a+b+c region in diagram where a,b,c are the pair-only regions. 'Both A and B but not C': the A∩B only region. 'At least one': everything inside A∪B∪C. 'None': region outside all circles. 'At most one': only-A + only-B + only-C + none. 'Exactly one or none': only-A + only-B + only-C + none. Practice translating the English phrase into the correct diagram region(s)."],
      ["Using Venn for logical reasoning", "Venn diagrams are also used in syllogism and categorical logic. 'All A are B': A-circle completely inside B-circle. 'No A is B': circles don't overlap. 'Some A are B': circles partially overlap. 'Some A are not B': part of A is outside B. These connect Set Theory to the Logic/Syllogism topic. In NIMCET, Venn diagrams appear in both the Set Theory section and as a tool for logical reasoning questions."],
    ],
    examples: [
      {
        q: "Venn diagram has 3 circles A, B, C with numbers: Only A=12, Only B=8, Only C=15, A∩B only=5, B∩C only=6, A∩C only=7, A∩B∩C=3, None=4. Answer: (i) |A∪B∪C| (ii) |A| (iii) exactly two sets (iv) at least one set.",
        steps: [
          "(i) |A∪B∪C| = sum of all inside regions = 12+8+15+5+6+7+3 = 56",
          "(ii) |A| = Only A + A∩B only + A∩C only + A∩B∩C = 12+5+7+3 = 27",
          "(iii) Exactly two = A∩B only + B∩C only + A∩C only = 5+6+7 = 18",
          "(iv) At least one = |A∪B∪C| = 56.  Total = 56+4 = 60 (with none) ✓",
        ],
      },
      {
        q: "In a group of 50: 30 like Tea (T), 25 like Coffee (C), 15 like both. Draw Venn and find: only Tea, only Coffee, neither.",
        steps: [
          "T∩C = 15 (innermost). T only = 30−15 = 15. C only = 25−15 = 10.",
          "T∪C = 30+25−15 = 40. Neither = 50−40 = 10.",
          "Venn regions: [T only=15][T∩C=15][C only=10][None=10]. Total: 15+15+10+10=50 ✓",
        ],
      },
      {
        q: "Which set relation does each Venn diagram represent? (a) A's circle inside B's circle. (b) No overlap. (c) Partial overlap.",
        steps: [
          "(a) A's circle entirely inside B: A⊆B (A is a subset of B). Also: A∩B=A and A∪B=B.",
          "(b) No overlap between A and B: A∩B=∅ (disjoint sets). A−B=A and B−A=B.",
          "(c) Partial overlap: A∩B≠∅ and A≠B. Typical representation of two sets with some common elements.",
        ],
      },
    ],
    tips: [
      "In a 3-set Venn: |A∩B| total = A∩B-only region + A∩B∩C region. Don't just read the pair region — add the triple too.",
      "Exactly two: sum of the three pair-only regions (NOT including the triple region). At least two: pair-only regions + triple region.",
      "Region count check: all 8 regions must sum to |U| (total). If not → arithmetic error somewhere. Always verify.",
      "Venn for syllogism: 'All A are B' = A-circle inside B. 'No A are B' = circles don't touch. 'Some A are B' = circles overlap. These visual rules match syllogism solving from the Reasoning section.",
      "'A but not C' on a Venn = A-only + A∩B-only (the parts of A that don't include C). List all relevant sub-regions carefully.",
    ],
  },

  logic: {
    title: "Propositional Logic — Connectives & Truth Tables",
    formulas: [
      ["Negation ¬p (NOT p)", "True when p is False. False when p is True."],
      ["Conjunction p∧q (AND)", "True ONLY when BOTH p and q are True."],
      ["Disjunction p∨q (OR)", "True when AT LEAST ONE of p, q is True. False only when both False."],
      ["Implication p→q (IF-THEN)", "False ONLY when p is True and q is False. (True premise, false conclusion)"],
      ["Biconditional p↔q (IFF)", "True when p and q have the SAME truth value. Equivalent to (p→q)∧(q→p)."],
      ["NAND p|q", "(¬(p∧q)) — False only when both True"],
      ["NOR p↓q", "(¬(p∨q)) — True only when both False"],
      ["XOR p⊕q", "True when p and q have DIFFERENT truth values"],
      ["Implication equivalences", "p→q ≡ ¬p∨q ≡ ¬q→¬p (contrapositive)"],
      ["Converse / Inverse / Contrapositive", "p→q: Converse: q→p | Inverse: ¬p→¬q | Contrapositive: ¬q→¬p (≡ p→q)"],
    ],
    concepts: [
      ["Implication — the trickiest connective", "p→q is FALSE only when p=T and q=F. In all other cases TRUE (including p=F, q=anything). Memory: 'A promise is broken only when I make it (p=T) and then break it (q=F).' When p is false, the implication is vacuously true — you can't hold someone to a promise they never made. This means: F→T=T, F→F=T, T→T=T, T→F=F only. NIMCET tests: 'when is p→q false?' → only when p=T, q=F."],
      ["Logical equivalences — the toolkit", "p→q ≡ ¬p∨q (most useful equivalence). Double negation: ¬(¬p)≡p. De Morgan's for logic: ¬(p∧q)≡¬p∨¬q and ¬(p∨q)≡¬p∧¬q. Contrapositive: p→q ≡ ¬q→¬p (same truth table). Biconditional: p↔q ≡ (p→q)∧(q→p) ≡ (p∧q)∨(¬p∧¬q). Exportation: (p∧q)→r ≡ p→(q→r). Simplification: p∧T≡p, p∨F≡p, p∧F≡F, p∨T≡T."],
      ["Truth table construction — systematic method", "For n variables: truth table has 2ⁿ rows. Variables alternate: last variable alternates T/F every row (period 2). Second-last alternates every 2 rows (period 4). Continue doubling. Evaluate compound expression column by column — fill each connective left to right (following precedence: ¬ first, then ∧, then ∨, then →, then ↔). Precedence (highest first): ¬ > ∧ > ∨ > → > ↔. Use parentheses to override."],
      ["Converse, Inverse, Contrapositive — relationships", "Given p→q: Contrapositive ¬q→¬p is LOGICALLY EQUIVALENT (same truth table). Converse q→p is NOT equivalent (independent). Inverse ¬p→¬q is EQUIVALENT TO THE CONVERSE (not to the original). Practical: 'If it rains, the ground is wet.' Contrapositive: 'If the ground is not wet, it did not rain.' (equivalent). Converse: 'If the ground is wet, it rained.' (not equivalent — other causes possible). NIMCET tests which forms are equivalent."],
    ],
    examples: [
      {
        q: "Build the full truth table for (p→q) ↔ (¬p∨q).",
        steps: [
          "p=T,q=T: p→q=T (T→T=T). ¬p∨q=F∨T=T. T↔T = T.",
          "p=T,q=F: p→q=F (T→F=F). ¬p∨q=F∨F=F. F↔F = T.",
          "p=F,q=T: p→q=T (F→T=T). ¬p∨q=T∨T=T. T↔T = T.",
          "p=F,q=F: p→q=T (F→F=T). ¬p∨q=T∨F=T. T↔T = T.",
          "Result: ALL rows give T → (p→q) ↔ (¬p∨q) is a TAUTOLOGY (p→q ≡ ¬p∨q confirmed).",
        ],
      },
      {
        q: "Given: 'If the algorithm is efficient, it runs in polynomial time.' (p→q). Write converse, inverse, contrapositive.",
        steps: [
          "p: 'The algorithm is efficient.' q: 'It runs in polynomial time.'",
          "Original p→q: 'If the algorithm is efficient, it runs in polynomial time.'",
          "Converse q→p: 'If it runs in polynomial time, the algorithm is efficient.' (NOT logically equivalent)",
          "Inverse ¬p→¬q: 'If the algorithm is not efficient, it does not run in polynomial time.'",
          "Contrapositive ¬q→¬p: 'If it does not run in polynomial time, the algorithm is not efficient.' (EQUIVALENT to original)",
        ],
      },
      {
        q: "Evaluate: ¬(p∨¬q) ∧ (¬p→q) for p=F, q=T.",
        steps: [
          "Step 1: ¬q = F (since q=T).",
          "Step 2: p∨¬q = F∨F = F.",
          "Step 3: ¬(p∨¬q) = ¬F = T.",
          "Step 4: ¬p = T (since p=F). ¬p→q = T→T = T.",
          "Step 5: T ∧ T = T.",
          "Answer: True.",
        ],
      },
    ],
    tips: [
      "Implication p→q is FALSE only when p=TRUE and q=FALSE. For all other rows it's TRUE. This is the most counterintuitive rule — memorize with an example.",
      "Contrapositive ≡ original. Converse ≡ Inverse (but NOT ≡ original). This means: if p→q is given as true, you can immediately state ¬q→¬p is also true.",
      "Precedence: ¬ (NOT) binds tightest, then ∧ (AND), then ∨ (OR), then → (IF-THEN), then ↔ (IFF). Evaluate in this order without parentheses.",
      "p↔q is TRUE when both same, FALSE when different — it's the XNOR gate in digital logic. Can also remember: biconditional = 'if and only if' = both directions hold.",
      "For truth table MCQ: with 2 variables → 4 rows. With 3 variables → 8 rows. Build the variable columns first (p alternates every row, q alternates every 2 rows, r every 4 rows).",
    ],
  },

  taut: {
    title: "Tautology, Contradiction & Logical Equivalence",
    formulas: [
      ["Tautology", "Compound proposition TRUE for ALL possible truth values of variables. Final truth table column: ALL T."],
      ["Contradiction (Fallacy)", "Compound proposition FALSE for ALL possible truth values. Final column: ALL F."],
      ["Contingency", "Neither tautology nor contradiction. Has at least one T and one F."],
      ["Logical equivalence p≡q", "p and q have IDENTICAL truth table columns. Equivalently: p↔q is a tautology."],
      ["Key tautologies", "p∨¬p (Law of excluded middle)  |  ¬(p∧¬p) (Law of non-contradiction)"],
      ["Key contradictions", "p∧¬p  |  ¬(p∨¬p)"],
      ["p→(p∨q) — Tautology", "Adding more options to conclusion → always true"],
      ["(p∧q)→p — Tautology", "True conclusion from stronger premise"],
      ["Modus Ponens", "[(p→q)∧p] → q  ← Tautology (fundamental argument form)"],
      ["Modus Tollens", "[(p→q)∧¬q] → ¬p  ← Tautology"],
      ["Hypothetical Syllogism", "[(p→q)∧(q→r)] → (p→r)  ← Tautology"],
      ["Disjunctive Syllogism", "[(p∨q)∧¬p] → q  ← Tautology"],
    ],
    concepts: [
      ["Checking tautology without full truth table", "Method 1: Full truth table — laborious but definitive. Method 2: Assume the formula is FALSE and derive contradiction — if contradiction follows → tautology. Method 3: Logical simplification — use equivalences to reduce to T. For p∨¬p: always T by law of excluded middle. For ¬(p∧¬p): always T by law of non-contradiction. For complex formulas: use the equivalence p→q ≡ ¬p∨q to convert, then simplify."],
      ["Valid arguments and tautologies", "An argument form P₁∧P₂∧...∧Pₙ→C is VALID iff the implication is a tautology. Key valid argument forms: Modus Ponens: (p→q)∧p ⊢ q. Modus Tollens: (p→q)∧¬q ⊢ ¬p. Hypothetical Syllogism: (p→q)∧(q→r) ⊢ p→r. Disjunctive Syllogism: (p∨q)∧¬p ⊢ q. Constructive Dilemma: (p→q)∧(r→s)∧(p∨r) ⊢ q∨s. NIMCET tests: 'which argument is valid?' → check which is a tautology."],
      ["Logical equivalences — complete list for NIMCET", "Identity: p∧T≡p, p∨F≡p. Domination: p∧F≡F, p∨T≡T. Idempotent: p∧p≡p, p∨p≡p. Double neg: ¬¬p≡p. De Morgan's: ¬(p∧q)≡¬p∨¬q, ¬(p∨q)≡¬p∧¬q. Absorption: p∨(p∧q)≡p, p∧(p∨q)≡p. Implication: p→q≡¬p∨q. Biconditional: p↔q≡(p→q)∧(q→p). Contrapositive: p→q≡¬q→¬p. Export: (p∧q)→r≡p→(q→r). These 15 equivalences unlock all simplification problems."],
      ["Formal proof and argument structure in NIMCET", "NIMCET may give: 'Which of the following is a tautology?' Options are 4 formulas. Strategy: (1) Try to find a row where each option might be false. If you find one → not a tautology → eliminate. (2) The remaining option must be checked. For checking validity of an argument: (a) Assume premises all true. (b) Check if conclusion MUST be true. If it could be false even with all premises true → invalid. This is faster than building the full 8-row table."],
    ],
    examples: [
      {
        q: "Show (p→q) ∧ (q→r) → (p→r) is a tautology.",
        steps: [
          "Assume the whole formula is False → the conclusion (p→r) = False AND premises = True.",
          "p→r = False → p=T and r=F.",
          "Now check premises: q→r=T with r=F means q=F.",
          "p→q: p=T, q=F → p→q=F.",
          "But we assumed BOTH premises are True. Contradiction!",
          "Assumption (formula is False) leads to contradiction → formula is always True → TAUTOLOGY. ✓",
        ],
      },
      {
        q: "Is the following argument valid? 'If it is hot, I sweat. It is not hot. Therefore, I do not sweat.'",
        steps: [
          "Form: (p→q), ¬p ⊢ ¬q",
          "This is the INVERSE fallacy (denying the antecedent).",
          "Counterexample: p=F (not hot), q=T (I sweat from exercise).",
          "Premises: p→q: F→T=T ✓. ¬p: T ✓. Both premises true.",
          "Conclusion ¬q: T→F=F. Conclusion is FALSE despite true premises.",
          "Argument is INVALID. (Just because it's not hot doesn't mean I can't sweat.)",
        ],
      },
      {
        q: "Use truth table to verify p∨¬p is a tautology and p∧¬p is a contradiction.",
        steps: [
          "p=T: p∨¬p = T∨F = T.   p∧¬p = T∧F = F.",
          "p=F: p∨¬p = F∨T = T.   p∧¬p = F∧T = F.",
          "p∨¬p: all rows give T → TAUTOLOGY (Law of Excluded Middle).",
          "p∧¬p: all rows give F → CONTRADICTION (Law of Non-Contradiction).",
          "These are the two simplest and most fundamental examples.",
        ],
      },
      {
        q: "Simplify: ¬(p→q) using logical equivalences.",
        steps: [
          "p→q ≡ ¬p∨q  (implication equivalence)",
          "¬(p→q) ≡ ¬(¬p∨q)",
          "Apply De Morgan's: ≡ ¬(¬p) ∧ ¬q",
          "Apply double negation: ≡ p ∧ ¬q",
          "Answer: ¬(p→q) ≡ p∧¬q",
          "Interpretation: the negation of 'if p then q' is 'p is true AND q is false'.",
        ],
      },
    ],
    tips: [
      "Tautology detection shortcut: assume the formula = F, derive if it leads to a contradiction. If yes → it's a tautology. Faster than building full truth table for complex formulas.",
      "p→q is FALSE iff p∧¬q is TRUE. So ¬(p→q) ≡ p∧¬q. This conversion appears in simplification MCQs.",
      "Modus Ponens (p→q, p, therefore q) and Modus Tollens (p→q, ¬q, therefore ¬p) are VALID. Converse (p→q, q, therefore p) and Inverse (p→q, ¬p, therefore ¬q) are INVALID fallacies.",
      "Law of excluded middle p∨¬p: ALWAYS TRUE. Law of non-contradiction p∧¬p: ALWAYS FALSE. These are the two simplest tautology and contradiction.",
      "De Morgan's in logic: ¬(p∧q)≡¬p∨¬q and ¬(p∨q)≡¬p∧¬q. Same pattern as set theory (∩↔∧, ∪↔∨, complement↔negation). Use this connection to remember both.",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("sets");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* Header */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP — MATHEMATICS
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>Set Theory &amp; Logic</div>
        <div style={{ color: "#7a9ab8", fontSize: "11px", margin: "0 0 12px" }}>
          Formulas · Concepts · Solved Examples · Exam Tips
        </div>
        <div style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none", gap: "1px" }}>
          {TABS.map(t => {
            const active = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                background: active ? cream : "transparent",
                color: active ? navy : "#7a9ab8",
                border: "none",
                borderTop: active ? `3px solid ${gold}` : "3px solid transparent",
                padding: "8px 13px",
                fontSize: "11.5px",
                cursor: "pointer",
                fontFamily: "Georgia,serif",
                fontWeight: active ? "700" : "normal",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>{t.label}</button>
            );
          })}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 14px", maxWidth: "820px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "17px", color: navy, margin: "0 0 10px", fontWeight: "bold" }}>{d.title}</h2>
        <div style={{ height: "2px", background: `linear-gradient(90deg,${gold} 30%,transparent)`, marginBottom: "20px" }} />

        {/* Formulas */}
        <div style={{ fontSize: "10px", color: "#b07a00", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>📐 Key Formulas &amp; Definitions</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "7px", marginBottom: "22px" }}>
          {d.formulas.map(([name, formula], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${gold}`, borderRadius: "3px", padding: "9px 11px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", color: "#999", marginBottom: "5px" }}>{name}</div>
              <div style={{ fontSize: "13px", fontFamily: "'Courier New',monospace", color: navy, fontWeight: "700", lineHeight: "1.5" }}>{formula}</div>
            </div>
          ))}
        </div>

        {/* Concepts */}
        <div style={{ fontSize: "10px", color: "#1a365d", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>📖 Concepts &amp; Explanations</div>
        <div style={{ marginBottom: "22px", display: "grid", gap: "7px" }}>
          {d.concepts.map(([h, b], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${navy}`, borderRadius: "3px", padding: "10px 13px", fontSize: "13px", lineHeight: "1.65" }}>
              <span style={{ fontWeight: "700", color: navy }}>{h}: </span>
              <span style={{ color: "#444" }}>{b}</span>
            </div>
          ))}
        </div>

        {/* Examples */}
        <div style={{ fontSize: "10px", color: "#14532d", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>✏️ NIMCET-style Solved Examples</div>
        <div style={{ marginBottom: "22px", display: "grid", gap: "10px" }}>
          {d.examples.map((ex, i) => (
            <div key={i} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "5px", padding: "13px" }}>
              <div style={{ fontWeight: "700", color: "#14532d", marginBottom: "10px", fontSize: "13px", lineHeight: "1.5" }}>
                Q{i+1}: {ex.q}
              </div>
              <div style={{ background: white, border: "1px solid #d1fae5", borderRadius: "4px", padding: "9px 11px" }}>
                <div style={{ fontSize: "9px", color: "#16a34a", letterSpacing: "1.5px", fontWeight: "700", marginBottom: "7px" }}>SOLUTION</div>
                {ex.steps.map((step, j) => (
                  <div key={j} style={{
                    fontFamily: "'Courier New',monospace", fontSize: "12.5px", color: "#166534",
                    padding: "3px 0", lineHeight: "1.55",
                    borderBottom: j < ex.steps.length - 1 ? "1px dashed #d1fae5" : "none",
                  }}>
                    <span style={{ color: "#86efac", marginRight: "8px", fontWeight: "700" }}>{j+1}.</span>{step}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div style={{ fontSize: "10px", color: "#9f1239", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>⚡ NIMCET Exam Patterns &amp; Tips</div>
        <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "5px", padding: "13px 15px", marginBottom: "20px" }}>
          {d.tips.map((tip, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: i < d.tips.length - 1 ? "11px" : "0" }}>
              <div style={{
                background: "#ea580c", color: white, borderRadius: "50%",
                width: "17px", height: "17px", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "9px", fontWeight: "700",
                flexShrink: 0, marginTop: "2px",
              }}>{i+1}</div>
              <div style={{ color: "#7c2d12", fontSize: "13px", lineHeight: "1.55" }}>{tip}</div>
            </div>
          ))}
        </div>

        {/* Connection box */}
        <div style={{ background: "#f0f4ff", border: "1px solid #c7d7f7", borderRadius: "5px", padding: "12px 15px", marginBottom: "20px" }}>
          <div style={{ fontSize: "10px", color: "#3b5bdb", fontWeight: "700", letterSpacing: "1px", marginBottom: "8px" }}>🔗 SET THEORY ↔ LOGIC CONNECTION</div>
          <div style={{ fontSize: "12.5px", color: "#364fc7", lineHeight: "1.6" }}>
            Sets and Logic are two sides of the same coin: A∩B ↔ p∧q (AND) · A∪B ↔ p∨q (OR) · A' ↔ ¬p (NOT) · A⊆B ↔ p→q (IMPLIES) · A=B ↔ p↔q (IFF) · De Morgan's (A∩B)'=A'∪B' ↔ ¬(p∧q)=¬p∨¬q. Knowing one deeply reinforces the other.
          </div>
        </div>

        <div style={{ textAlign: "center", color: "#bbb", fontSize: "10px", paddingTop: "12px", borderTop: "1px solid #e8e4da", fontStyle: "italic" }}>
          NIMCET Official Syllabus · Set Theory &amp; Logic · Study smart, then grind PYQs 🎯
        </div>
      </div>
    </div>
  );
}
