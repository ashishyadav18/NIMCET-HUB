import { useState } from "react";

const TABS = [
  { id: "quad",   label: "📐 Quadratics" },
  { id: "logs",   label: "🔢 Indices & Logs" },
  { id: "prog",   label: "📈 Progressions" },
  { id: "sums",   label: "Σ Power Sums" },
  { id: "matrix", label: "🔲 Matrices" },
  { id: "pnc",    label: "🔀 P & C" },
  { id: "binom",  label: "📊 Binomial" },
];

const DATA = {
  quad: {
    title: "Quadratic Equations, Roots & Symmetric Functions",
    formulas: [
      ["Standard form",             "ax² + bx + c = 0   (a ≠ 0)"],
      ["Quadratic formula",         "x = (−b ± √D) / 2a"],
      ["Discriminant",              "D = b² − 4ac"],
      ["Sum of roots",              "α + β = −b/a"],
      ["Product of roots",          "αβ = c/a"],
      ["Difference of roots",       "α − β = √D / a   (a > 0)"],
      ["Form equation from roots",  "x² − (α+β)x + αβ = 0"],
      ["α² + β²",                   "(α+β)² − 2αβ"],
      ["α³ + β³",                   "(α+β)³ − 3αβ(α+β)  =  (α+β)[(α+β)²−3αβ]"],
      ["(α−β)²",                    "(α+β)² − 4αβ"],
      ["α⁴ + β⁴",                   "(α²+β²)² − 2(αβ)²"],
      ["Key algebraic identities",  "(a±b)²=a²±2ab+b²,  (a±b)³=a³±3a²b±3ab²±b³"],
      ["a²−b²  |  a³±b³",          "(a+b)(a−b)  |  (a±b)(a²∓ab+b²)"],
    ],
    concepts: [
      ["Nature of roots via D",         "D > 0: two distinct real roots. D = 0: two equal (repeated) real roots. D < 0: two complex conjugate roots (no real solution). D is a perfect square AND a,b,c are rational → rational roots."],
      ["Both roots positive",           "Need BOTH: sum α+β > 0 (i.e. −b/a > 0) AND product αβ > 0 (i.e. c/a > 0). One condition alone is not sufficient. Roots have opposite signs ↔ αβ < 0."],
      ["Symmetric functions principle", "Any symmetric function (one where swapping α and β leaves the expression unchanged) can always be written using only e₁=α+β and e₂=αβ. Reduce every target expression to these two quantities."],
      ["Root transformations",          "Equation with roots 1/α, 1/β: replace x with 1/x, then multiply through. Roots α+k, β+k: replace x with x−k. Roots kα, kβ: replace x with x/k. These substitutions are faster than computing new sum/product."],
      ["Equal roots condition",         "D=0. Then both roots equal −b/2a. One root is 0 ↔ c=0. Roots equal in magnitude, opposite in sign ↔ b=0 ↔ α+β=0. One root is reciprocal of other ↔ αβ=1 ↔ c=a."],
    ],
    examples: [
      {
        q: "Roots of 2x² − 5x + 3 = 0 are α,β. Find α²+β² and α³+β³.",
        steps: [
          "α+β = 5/2,   αβ = 3/2",
          "α²+β² = (5/2)² − 2(3/2) = 25/4 − 3 = 13/4",
          "α³+β³ = (5/2)[(5/2)²−3(3/2)] = (5/2)[25/4−9/2] = (5/2)(7/4) = 35/8",
        ],
      },
      {
        q: "One root of 3x² − kx + 12 = 0 is double the other. Find k.",
        steps: [
          "Let roots be α and 2α.",
          "Sum: 3α = k/3   →   α = k/9",
          "Product: 2α² = 12/3 = 4   →   α² = 2   →   α = √2",
          "k = 9α = 9√2",
        ],
      },
      {
        q: "α,β are roots of x² − 3x + 5 = 0. Form equation with roots α², β².",
        steps: [
          "α+β = 3,   αβ = 5",
          "New sum: α²+β² = 9 − 10 = −1",
          "New product: (αβ)² = 25",
          "New equation: x² − (−1)x + 25 = 0   →   x² + x + 25 = 0",
        ],
      },
      {
        q: "Find k if x² + kx + 16 = 0 has equal roots.",
        steps: [
          "For equal roots: D = 0",
          "k² − 4(16) = 0   →   k² = 64",
          "k = ±8",
        ],
      },
    ],
    tips: [
      "α²+β² = (α+β)²−2αβ is the #1 most tested formula. Write α+β and αβ immediately for every quadratic problem.",
      "One root double the other: let roots be α, 2α. One root triple: α, 3α. Sum gives α; product gives another equation for α.",
      "NIMCET loves: 'find k given a condition on roots.' Write sum and product of roots, express condition, solve for k.",
      "For equation with roots 1/α and 1/β: new sum=1/α+1/β=(α+β)/αβ, new product=1/αβ. Form x²−(new sum)x+(new product)=0.",
      "Symmetric function shortcut: if target expression is symmetric, it's always expressible using only (α+β) and αβ — no need for individual roots.",
    ],
  },

  logs: {
    title: "Indices, Logarithms & Exponentials",
    formulas: [
      ["Product of powers",    "aᵐ · aⁿ = aᵐ⁺ⁿ"],
      ["Quotient of powers",   "aᵐ / aⁿ = aᵐ⁻ⁿ"],
      ["Power of power",       "(aᵐ)ⁿ = aᵐⁿ"],
      ["Zero / negative / fraction", "a⁰=1,  a⁻ⁿ=1/aⁿ,  a^(p/q)= q-th root of aᵖ"],
      ["Log product rule",     "logₐ(mn) = logₐ(m) + logₐ(n)"],
      ["Log quotient rule",    "logₐ(m/n) = logₐ(m) − logₐ(n)"],
      ["Log power rule",       "logₐ(mⁿ) = n · logₐ(m)"],
      ["Special values",       "logₐ(a)=1,   logₐ(1)=0,   log₁(x)=undefined"],
      ["Change of base",       "log_b(a) = logₓ(a) / logₓ(b)  for any valid base x"],
      ["Reciprocal law",       "log_b(a) = 1 / logₐ(b)"],
      ["Chain rule",           "logₐ(b) · log_b(c) · log_c(d) = logₐ(d)"],
      ["Exponential ↔ Log",   "aˣ = b   ⟺   x = logₐ(b)"],
    ],
    concepts: [
      ["Domain of log",              "logₐ(x) is defined ONLY when x > 0 and a > 0, a ≠ 1. In MCQs check: log of zero or negative is undefined. Inequality problems involving logs need case analysis on the base."],
      ["Base conversion strategy",   "When a problem has multiple different bases, convert all to the same base using change-of-base before operating. Converting to base 10 (log) or base e (ln) is usually cleanest."],
      ["Key values to memorize",     "log₁₀(2)≈0.3010,  log₁₀(3)≈0.4771,  log₁₀(7)≈0.8451. Derived: log(4)=0.602, log(5)=0.699, log(6)=0.778, log(8)=0.903, log(9)=0.954. Used in 'number of digits' problems."],
      ["Characteristic and mantissa","For log₁₀(N): integer part = characteristic, decimal part = mantissa (always ≥ 0). Number of digits in N (when N≥1) = characteristic + 1. Leading zeros after decimal point = |characteristic| − 1 when N<1."],
    ],
    examples: [
      {
        q: "Solve: log₂(x) + log₄(x) + log₈(x) = 11",
        steps: [
          "Convert all to base 2: log₄(x)=log₂(x)/2,  log₈(x)=log₂(x)/3",
          "Let t=log₂(x):  t + t/2 + t/3 = 11",
          "t · (6+3+2)/6 = 11   →   11t/6 = 11   →   t = 6",
          "x = 2⁶ = 64",
        ],
      },
      {
        q: "Prove: log₂(3) · log₃(4) · log₄(2) = 1",
        steps: [
          "Apply chain rule: logₐ(b)·log_b(c)=logₐ(c)",
          "log₂(3)·log₃(4) = log₂(4) = log₂(2²) = 2",
          "2 · log₄(2) = 2 · (1/2) = 1   ✓",
          "Alternatively: entire chain = log₂(2) = 1 directly",
        ],
      },
      {
        q: "Simplify: log₅(25) + log₅(√5) − log₅(125)",
        steps: [
          "log₅(25)=2,   log₅(√5)=1/2,   log₅(125)=3",
          "Result = 2 + 1/2 − 3 = −1/2",
        ],
      },
      {
        q: "log₁₀(2)=0.3010. Find number of digits in 2²⁰.",
        steps: [
          "log₁₀(2²⁰) = 20 × 0.3010 = 6.020",
          "Characteristic = 6",
          "Number of digits = 6 + 1 = 7",
        ],
      },
    ],
    tips: [
      "Convert all logs to the SAME base first. Never add logs of different bases directly.",
      "log_b(a) · logₐ(b) = 1 always. So log₂(3)·log₃(2)=1. Fast MCQ pick.",
      "Chain telescopes: logₐ(b)·log_b(c)·log_c(d) = logₐ(d). The intermediate bases cancel.",
      "Number of digits in N = ⌊log₁₀(N)⌋ + 1. This is a NIMCET staple — given log(2)=0.3010, find digits in 2ⁿ.",
      "Inequality with log: if base a > 1, logₐ is increasing (larger input → larger log). If 0 < a < 1, logₐ is decreasing (flip inequality when taking log).",
    ],
  },

  prog: {
    title: "Arithmetic, Geometric & Harmonic Progressions",
    formulas: [
      ["AP — nth term",               "aₙ = a + (n−1)d"],
      ["AP — sum of n terms",         "Sₙ = n/2·[2a+(n−1)d]  =  n(a+l)/2  (l = last term)"],
      ["AP — 3 consecutive terms",    "Take (a−d), a, (a+d). Their SUM = 3a."],
      ["AP — 4 consecutive terms",    "Take (a−3d),(a−d),(a+d),(a+3d). Sum=4a, no d in sum."],
      ["GP — nth term",               "aₙ = arⁿ⁻¹"],
      ["GP — sum of n terms",         "Sₙ = a(rⁿ−1)/(r−1)  [r≠1],   Sₙ=na  [r=1]"],
      ["GP — sum to infinity",        "S∞ = a/(1−r),   valid only when |r| < 1"],
      ["GP — 3 consecutive terms",    "Take a/r, a, ar. Their PRODUCT = a³."],
      ["HP — nth term",               "Tₙ = 1 / (a+(n−1)d)   (reciprocals form an AP)"],
      ["HM of a and b",               "H = 2ab/(a+b)"],
      ["AM ≥ GM ≥ HM",               "Equality holds iff all values are equal"],
      ["AM · HM = GM² (two terms)",   "Always true for any two positive a, b"],
    ],
    concepts: [
      ["3-term AP trick",     "Assume (a−d), a, (a+d) for ANY problem with 3 consecutive AP terms. Sum = 3a → solve for a immediately. Then use product or other conditions to find d. This halves the work."],
      ["3-term GP trick",     "Assume a/r, a, ar for 3 consecutive GP terms. Product = a³ → solve for a immediately. Ratio between consecutive terms = r. Most GP problems become one-step."],
      ["Infinite GP condition","S∞ = a/(1−r) ONLY when |r|<1. If r≥1 or r≤−1, the sum diverges. Always state or check this condition when using S∞."],
      ["Inserting n means",   "n AM's between a and b: d=(b−a)/(n+1). n GM's: r=(b/a)^(1/(n+1)). n HM's: insert n terms in AP between 1/a and 1/b, then take reciprocals."],
    ],
    examples: [
      {
        q: "Three numbers in AP: sum=15, product=80. Find them.",
        steps: [
          "Let (a−d), a, (a+d). Sum=3a=15 → a=5.",
          "Product: (5−d)·5·(5+d) = 80 → 5(25−d²)=80",
          "25−d²=16 → d²=9 → d=±3",
          "Numbers: 2, 5, 8  (or 8, 5, 2)",
        ],
      },
      {
        q: "GP: t₂=6, t₅=162. Find a and r.",
        steps: [
          "ar = 6,   ar⁴ = 162",
          "Divide: r³ = 27   →   r = 3",
          "a = 6/3 = 2",
          "Check: 2,6,18,54,162 ✓",
        ],
      },
      {
        q: "Sum to ∞ of GP = 12 and first term = 4. Find r.",
        steps: [
          "S∞ = a/(1−r) → 12 = 4/(1−r)",
          "1−r = 1/3   →   r = 2/3",
          "|r| = 2/3 < 1 ✓ (convergence confirmed)",
        ],
      },
      {
        q: "AP: 3rd term = 7, 7th term = 15. Find sum of first 20 terms.",
        steps: [
          "a+2d=7 and a+6d=15 → subtract: 4d=8 → d=2",
          "a = 7−4 = 3",
          "S₂₀ = 20/2·[2(3)+19(2)] = 10·[6+38] = 440",
        ],
      },
    ],
    tips: [
      "3-term AP: (a−d, a, a+d). Sum=3a → get a instantly. NIMCET gives sum + product of three AP terms constantly.",
      "3-term GP: (a/r, a, ar). Product=a³ → get a instantly. Ratio of adjacent = r.",
      "'AP if a,b,c then 2b=a+c.' 'GP if a,b,c then b²=ac.' Quick check formulas.",
      "For HP: take reciprocals, work in AP, convert back. Never try to work directly in HP.",
      "Insert n means between a and b: there are n+1 equal gaps. d=(b−a)/(n+1) for AP. Memorize this.",
    ],
  },

  sums: {
    title: "Finite Sums of Powers of Natural Numbers",
    formulas: [
      ["Sum of first n naturals",    "Σk = n(n+1)/2"],
      ["Sum of squares",             "Σk² = n(n+1)(2n+1)/6"],
      ["Sum of cubes",               "Σk³ = [n(n+1)/2]²  =  (Σk)²"],
      ["Sum of 1's",                 "Σ1 = n"],
      ["Sum of n ODD numbers",       "1+3+5+…+(2n−1) = n²"],
      ["Sum of n EVEN numbers",      "2+4+6+…+2n = n(n+1)"],
      ["Σk(k+1)",                    "= Σk²+Σk = n(n+1)(n+2)/3"],
      ["Σk(k+1)(k+2)",               "= n(n+1)(n+2)(n+3)/4"],
      ["General rising factorial",   "Σr(r+1)…(r+m−1) = n(n+1)…(n+m)/(m+1)"],
    ],
    concepts: [
      ["The cube-sum identity",    "Σk³ = (Σk)² — the sum of the first n cubes equals the SQUARE of the sum of the first n naturals. Both formula sides can verify each other. This is tested as a direct MCQ: 'Which expression equals 1³+2³+…+n³?'"],
      ["Splitting strategy",       "Always decompose complex sums: Σ(2k²+3k+1) = 2Σk² + 3Σk + Σ1. Each piece uses a standard formula. This is the only technique needed — never sum a general term directly without splitting."],
      ["Method of differences",    "If Tₙ = f(n)−f(n−1), then Σ Tₖ (k=1 to n) = f(n)−f(0). The sum telescopes. Useful when the general term can be written as a difference of a recognizable function."],
      ["Spot-check values",        "n=1: Σk=1, Σk²=1, Σk³=1. n=2: Σk=3, Σk²=5, Σk³=9. n=3: Σk=6, Σk²=14, Σk³=36. These check your formula substitutions in MCQs."],
    ],
    examples: [
      {
        q: "Find 1² + 2² + 3² + ... + 20².",
        steps: [
          "Σk² (k=1 to 20) = 20·21·41 / 6",
          "= 20×21×41/6 = 420×41/6 = 70×41 = 2870",
        ],
      },
      {
        q: "Find 1³ + 2³ + ... + 10³ using the cube-sum identity.",
        steps: [
          "Σk (k=1 to 10) = 10×11/2 = 55",
          "Σk³ = (Σk)² = 55² = 3025",
          "Also: [10×11/2]² = 55² = 3025 ✓",
        ],
      },
      {
        q: "Find 1·2 + 2·3 + 3·4 + ... + n(n+1).",
        steps: [
          "Σk(k+1) = Σk² + Σk",
          "= n(n+1)(2n+1)/6 + n(n+1)/2",
          "= n(n+1)/6 · [(2n+1) + 3]",
          "= n(n+1)(n+2)/3",
        ],
      },
      {
        q: "Find sum: 1 + 3 + 5 + ... + 99.",
        steps: [
          "Number of terms: (99+1)/2 = 50",
          "Sum of n odd numbers = n² = 50² = 2500",
          "Cross-check with AP: Sₙ=50/2·(1+99)=50×50=2500 ✓",
        ],
      },
    ],
    tips: [
      "Σk³ = (Σk)² is a beautiful identity tested directly. Know both forms.",
      "Σk² = n(n+1)(2n+1)/6. Memorize: 10 terms = 385, 20 terms = 2870.",
      "Sum of first n ODD numbers = n². Sum of first n EVEN numbers = n(n+1). Both MCQ-direct.",
      "If sum starts from m instead of 1: compute S(n) − S(m−1). Don't derive a new formula.",
      "For Σf(k)g(k): expand the product first, collect powers of k, apply standard formulas to each part.",
    ],
  },

  matrix: {
    title: "Matrices, Determinants & Simultaneous Equations",
    formulas: [
      ["2×2 determinant",          "|a b; c d| = ad − bc"],
      ["3×3 det sign pattern",     "Expand along row 1: a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃, signs: + − +"],
      ["Product rule",             "|AB| = |A| · |B|"],
      ["Transpose rule",           "|Aᵀ| = |A|"],
      ["Scalar multiple (n×n)",    "|kA| = kⁿ · |A|   (for 3×3: k³|A|)"],
      ["Adjoint identity",         "A · adj(A) = |A| · I"],
      ["Determinant of adjoint",   "|adj A| = |A|^(n−1)   (for 3×3: |A|²)"],
      ["Inverse formula",          "A⁻¹ = adj(A) / |A|   (only when |A| ≠ 0)"],
      ["2×2 inverse shortcut",     "A=[[a,b],[c,d]]: A⁻¹ = (1/(ad−bc))·[[d,−b],[−c,a]]"],
      ["Cramer's rule",            "x = Dₓ/D,  y = Dᵧ/D,  z = D_z/D"],
      ["Unique solution",          "|A| ≠ 0   (non-singular system)"],
      ["Infinite/no solution",     "|A| = 0; check rank of augmented matrix"],
    ],
    concepts: [
      ["Types of matrices",         "Symmetric: A=Aᵀ (mirror across diagonal). Skew-Symmetric: A=−Aᵀ (diagonal elements MUST be 0). Orthogonal: AAᵀ=I (columns form orthonormal basis). Idempotent: A²=A. Involutory: A²=I."],
      ["Cofactor sign rule (3×3)",  "Sign of cofactor at position (i,j) = (−1)^(i+j). Row 1: +,−,+. Row 2: −,+,−. Row 3: +,−,+. Mistake in signs is the #1 source of errors in determinant expansion."],
      ["Key adjoint/inverse facts", "|adj A|=|A|^(n−1). adj(adj A)=|A|^(n−2)·A. adj(kA)=k^(n−1)·adj(A). For 3×3: |adj A|=|A|². These four results are tested as standalone MCQs."],
      ["Consistency of 3 equations","If |A|≠0: unique solution (Cramer's rule applies). If |A|=0: system is either inconsistent (no solution) or consistent with infinite solutions. Distinguish by checking if rank(A)=rank(augmented matrix)."],
    ],
    examples: [
      {
        q: "Find det A where A = [[1,2,3],[0,4,5],[1,0,6]].",
        steps: [
          "Expand along row 1:",
          "= 1·|4,5; 0,6| − 2·|0,5; 1,6| + 3·|0,4; 1,0|",
          "= 1(24−0) − 2(0−5) + 3(0−4)",
          "= 24 + 10 − 12 = 22",
        ],
      },
      {
        q: "A = [[2,1],[3,4]]. Find A⁻¹.",
        steps: [
          "|A| = 8−3 = 5",
          "A⁻¹ = (1/5)·[[4,−1],[−3,2]]",
          "Verify: (1/5)·[[2,1],[3,4]]·[[4,−1],[−3,2]] = (1/5)·[[5,0],[0,5]] = I ✓",
        ],
      },
      {
        q: "Solve using Cramer's rule: x+2y=5,  3x+y=10.",
        steps: [
          "D = |1,2; 3,1| = 1−6 = −5",
          "Dₓ = |5,2; 10,1| = 5−20 = −15",
          "Dᵧ = |1,5; 3,10| = 10−15 = −5",
          "x = −15/−5 = 3,   y = −5/−5 = 1",
        ],
      },
      {
        q: "A is 3×3, |A|=4. Find |3A|, |adj A|, |adj(adj A)|.",
        steps: [
          "|3A| = 3³·|A| = 27×4 = 108",
          "|adj A| = |A|^(n−1) = 4² = 16",
          "|adj(adj A)| = (|adj A|)^(n−1) = 16² = 256",
        ],
      },
    ],
    tips: [
      "|kA|=kⁿ|A|. For 3×3: |2A|=8|A|. Most tested matrix MCQ in NIMCET — don't multiply det by k once, multiply by k³.",
      "|adj A|=|A|^(n−1). For 3×3: |adj A|=|A|². Direct MCQ: 'if |A|=3, |adj A|=9.'",
      "A·adj(A)=|A|·I. If given A·B=5I, then B=5A⁻¹. Track the scalar multiplier carefully.",
      "Cramer's rule: Dₓ = replace x-column with constants. Same structure for y,z. D=0 means no unique solution.",
      "2×2 inverse: swap main diagonal (d,a), negate off-diagonal (−b,−c), divide by det. Do this in one step.",
    ],
  },

  pnc: {
    title: "Permutations & Combinations",
    formulas: [
      ["Factorial",                "n! = n·(n−1)···2·1,   0! = 1"],
      ["Permutations nPr",         "nPr = n!/(n−r)!   ← ORDER matters"],
      ["Combinations nCr",         "nCr = n! / [r!(n−r)!]   ← order does NOT matter"],
      ["Symmetry",                 "nCr = nCn−r"],
      ["Pascal's identity",        "nCr + nCr−1 = (n+1)Cr"],
      ["P and C relation",         "nPr = r! · nCr"],
      ["Circular arrangements",    "(n−1)!   (fix 1 person, arrange rest)"],
      ["Necklace / bracelet",      "(n−1)!/2   (both directions equivalent)"],
      ["Identical items",          "n! / (p!·q!·r!…)  for p alike of one, q of another…"],
      ["All subsets of n items",   "2ⁿ   (include or exclude each item independently)"],
      ["At least one item",        "2ⁿ − 1   (all subsets minus empty set)"],
      ["Sum of all nCr",           "ΣnCr (r=0 to n) = 2ⁿ"],
    ],
    concepts: [
      ["Permutation vs Combination", "The key question: does ORDER matter? Words/arrangements/sequences → P. Committees/groups/selections → C. If you both select AND arrange: C × (arrangements per selection)."],
      ["No two alike objects adjacent", "Step 1: arrange the OTHER objects first (say k people, k! ways). Step 2: n−k objects create (n−k+1) gaps. Step 3: fill the k 'restricted' objects into those gaps: C(n−k+1, k) × k! ways. Multiply both steps."],
      ["Complementary counting",   "When direct counting is hard, use: desired = total − unwanted. 'At least 1 woman' = total − no woman. 'At most 2 failures' = sum from 0 to 2 cases. This is NIMCET's most-used P&C strategy."],
      ["Distributing items",       "n distinct items into r distinct groups (any size): rⁿ. n distinct into groups of fixed sizes n₁,n₂,…: n!/(n₁!n₂!…). Identical items into distinct groups: stars-and-bars = C(n+r−1, r−1)."],
    ],
    examples: [
      {
        q: "How many 3-digit even numbers from {1,2,3,4,5} without repetition?",
        steps: [
          "Units digit must be even: 2 or 4 → 2 choices",
          "Remaining 2 positions: choose 2 from remaining 4 digits, in order",
          "= P(4,2) = 12 ways",
          "Total = 2 × 12 = 24",
        ],
      },
      {
        q: "4 boys, 3 girls in a row. No two girls adjacent. Count arrangements.",
        steps: [
          "Arrange 4 boys first: 4! = 24",
          "5 gaps created: _B_B_B_B_",
          "Place 3 girls in 3 of the 5 gaps (ordered): P(5,3) = 60",
          "Total = 24 × 60 = 1440",
        ],
      },
      {
        q: "Committee of 5 from 6 men, 4 women. At least 2 women required.",
        steps: [
          "Exactly 2W: C(4,2)·C(6,3) = 6×20 = 120",
          "Exactly 3W: C(4,3)·C(6,2) = 4×15 = 60",
          "Exactly 4W: C(4,4)·C(6,1) = 1×6 = 6",
          "Total = 120+60+6 = 186",
        ],
      },
      {
        q: "How many distinct words from MISSISSIPPI?",
        steps: [
          "Letters: M×1, I×4, S×4, P×2 → total=11",
          "= 11! / (1!·4!·4!·2!)",
          "= 39916800 / (1·24·24·2) = 39916800/1152 = 34650",
        ],
      },
    ],
    tips: [
      "'No two X together': arrange others first, create gaps, insert X in gaps. NEVER place X first.",
      "'At least' → complement: total − none. Faster than summing each case separately.",
      "Circular: fix one person, (n−1)! for remaining. Don't divide n! by n separately — that's the same but conceptually cleaner to fix-and-arrange.",
      "Repeated letters: divide by factorial of COUNT of each repeated letter type. MISSISSIPPI: /4!/4!/2!.",
      "nCr=nCn−r symmetry: nC7=nC(n−7). Use whichever is smaller for easier calculation.",
    ],
  },

  binom: {
    title: "Binomial Theorem",
    formulas: [
      ["Expansion",                "(a+b)ⁿ = Σ nCr · aⁿ⁻ʳ · bʳ   (r = 0,1,2,…,n)"],
      ["General term",             "T(r+1) = nCr · aⁿ⁻ʳ · bʳ   ← r starts at 0"],
      ["Middle term (n even)",     "Single middle term: T(n/2+1),  at r=n/2"],
      ["Middle terms (n odd)",     "Two middle terms: T((n+1)/2)  and  T((n+3)/2)"],
      ["Sum of all coefficients",  "Put a=1, b=1:  2ⁿ"],
      ["Alternating sum",          "Put a=1, b=−1:  nC0−nC1+nC2−…=0   (n>0)"],
      ["Even-index coeff sum",     "nC0+nC2+nC4+… = 2^(n−1)"],
      ["Odd-index coeff sum",      "nC1+nC3+nC5+… = 2^(n−1)"],
      ["Consecutive term ratio",   "T(r+1)/T(r) = [(n−r+1)/r]·(b/a)"],
      ["Numerically greatest",     "Set |T(r+1)/T(r)|≥1, solve for r. Boundary r = greatest term"],
      ["nCr recurrence",           "nCr = nCr−1 · (n−r+1)/r"],
    ],
    concepts: [
      ["Finding a specific term",     "Step 1: Write T(r+1)=nCr·aⁿ⁻ʳ·bʳ. Step 2: Simplify power of x. Step 3: Set equal to target power. Step 4: Solve for r. Step 5: Check r is a non-negative integer. If not integer → no such term exists."],
      ["Term independent of x",       "Set the TOTAL power of x in T(r+1) equal to 0. Solve for r. This is the most common Binomial MCQ type. In (xᵃ + x⁻ᵇ)ⁿ: power of x = a(n−r)−br; set =0 → r = an/(a+b)."],
      ["Sum of coefficients shortcut","Replace the variable with 1 in the whole expression. For (1+3x)^10, sum of coefficients = (1+3)^10 = 4^10. Do NOT expand. This substitution is always valid and instant."],
      ["Numerically greatest term",   "Compute |T(r+1)/T(r)| = [(n−r+1)/r]·|b/a|. Set this expression ≥ 1 and solve for r. If solution is an integer k: both T(k) and T(k+1) are equal and greatest. If non-integer: take ⌊r⌋ for the largest T index."],
    ],
    examples: [
      {
        q: "In (2x − 1/x)^9, find the term containing x³.",
        steps: [
          "T(r+1) = 9Cr·(2x)^(9−r)·(−1/x)^r = 9Cr·2^(9−r)·(−1)^r·x^(9−2r)",
          "Set power: 9−2r=3 → r=3",
          "T₄ = 9C3·2⁶·(−1)³ = 84·64·(−1) = −5376",
        ],
      },
      {
        q: "Find the middle term of (x + 1/x)^6.",
        steps: [
          "n=6 (even) → single middle term at r=n/2=3: T₄",
          "T₄ = 6C3·x³·(1/x)³ = 20·x⁰ = 20",
          "(It is also the term independent of x here!)",
        ],
      },
      {
        q: "Find term independent of x in (x² + 1/x)^9.",
        steps: [
          "T(r+1) = 9Cr·(x²)^(9−r)·(1/x)^r = 9Cr·x^(18−3r)",
          "Set 18−3r=0 → r=6",
          "T₇ = 9C6 = 9C3 = 84",
        ],
      },
      {
        q: "Find sum of coefficients of (1 + 3x − 2x²)^5.",
        steps: [
          "Put x=1: (1+3−2)^5 = 2^5 = 32",
          "(No expansion needed — direct substitution)",
        ],
      },
    ],
    tips: [
      "T(r+1): r starts at 0. T₁ is r=0, T₂ is r=1. Off-by-one index errors are very common — stay careful.",
      "Term independent of x: power of x = 0. If r is not an integer, the term does not exist — state that.",
      "Sum of coefficients = substitute variable=1 in the full expression. Fastest possible MCQ answer.",
      "n even → 1 middle term. n odd → 2 middle terms. Memorize both cases and their indices.",
      "NIMCET repeats three questions: find T containing xᵏ, find term independent of x, find middle term. All use the same T(r+1) setup.",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("quad");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* ── Header ── */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>Algebra</div>
        <div style={{ color: "#7a9ab8", fontSize: "11px", margin: "0 0 12px" }}>
          Formulas · Concepts · Solved Examples · Exam Tips — Full Syllabus Coverage
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

      {/* ── Body ── */}
      <div style={{ padding: "16px 14px", maxWidth: "820px", margin: "0 auto" }}>

        <h2 style={{ fontSize: "17px", color: navy, margin: "0 0 10px", fontWeight: "bold" }}>{d.title}</h2>
        <div style={{ height: "2px", background: `linear-gradient(90deg,${gold} 30%,transparent)`, marginBottom: "20px" }} />

        {/* Formulas */}
        <div style={{ fontSize: "10px", color: "#b07a00", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>📐 Key Formulas</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "7px", marginBottom: "22px" }}>
          {d.formulas.map(([name, formula], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${gold}`, borderRadius: "3px", padding: "9px 11px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", color: "#999", marginBottom: "5px" }}>{name}</div>
              <div style={{ fontSize: "12.5px", fontFamily: "'Courier New',monospace", color: navy, fontWeight: "700", lineHeight: "1.5" }}>{formula}</div>
            </div>
          ))}
        </div>

        {/* Concepts */}
        <div style={{ fontSize: "10px", color: "#1a365d", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>📖 Concepts</div>
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
                Q{i + 1}: {ex.q}
              </div>
              <div style={{ background: white, border: "1px solid #d1fae5", borderRadius: "4px", padding: "9px 11px" }}>
                <div style={{ fontSize: "9px", color: "#16a34a", letterSpacing: "1.5px", fontWeight: "700", marginBottom: "7px" }}>SOLUTION</div>
                {ex.steps.map((step, j) => (
                  <div key={j} style={{
                    fontFamily: "'Courier New',monospace", fontSize: "12.5px", color: "#166534",
                    padding: "3px 0", lineHeight: "1.55",
                    borderBottom: j < ex.steps.length - 1 ? "1px dashed #d1fae5" : "none",
                  }}>
                    <span style={{ color: "#86efac", marginRight: "8px" }}>{j + 1}.</span>{step}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div style={{ fontSize: "10px", color: "#9f1239", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>⚡ NIMCET Exam Patterns & Tips</div>
        <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "5px", padding: "13px 15px", marginBottom: "20px" }}>
          {d.tips.map((tip, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: i < d.tips.length - 1 ? "11px" : "0" }}>
              <div style={{
                background: "#ea580c", color: white, borderRadius: "50%",
                width: "17px", height: "17px", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "9px", fontWeight: "700",
                flexShrink: 0, marginTop: "2px",
              }}>{i + 1}</div>
              <div style={{ color: "#7c2d12", fontSize: "13px", lineHeight: "1.55" }}>{tip}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", color: "#bbb", fontSize: "10px", paddingTop: "12px", borderTop: "1px solid #e8e4da", fontStyle: "italic" }}>
          NIMCET Official Syllabus · Algebra · Study smart, then grind PYQs 🎯
        </div>
      </div>
    </div>
  );
}
