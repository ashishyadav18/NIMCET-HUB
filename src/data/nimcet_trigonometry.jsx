{/* cat > /mnt/user-data/outputs/nimcet_trigonometry.jsx << 'ENDOFFILE' */}
import { useState } from "react";

const TABS = [
  { id: "funcs",    label: "📐 Trig Functions" },
  { id: "ident",    label: "🔁 Identities" },
  { id: "inverse",  label: "🔄 Inverse Trig" },
  { id: "triangle", label: "📏 Triangle Props" },
  { id: "solution", label: "🔺 Solving Triangles" },
  { id: "heights",  label: "🏔️ Heights & Dist." },
  { id: "equations",label: "⚙️ Trig Equations" },
];

const DATA = {
  funcs: {
    title: "Trigonometric Functions, Values & Allied Angles",
    formulas: [
      ["sin θ, cos θ (unit circle)", "sin θ = y/r,   cos θ = x/r,   tan θ = y/x"],
      ["Reciprocals", "cosec θ = 1/sin θ,   sec θ = 1/cos θ,   cot θ = 1/tan θ"],
      ["Exact values: 0°,30°,45°,60°,90°", "sin: 0, ½, 1/√2, √3/2, 1  |  cos: reverse of sin"],
      ["tan exact values", "tan 0°=0, tan 30°=1/√3, tan 45°=1, tan 60°=√3, tan 90°=∞"],
      ["Allied: (90°−θ)", "sin→cos, cos→sin, tan→cot  (co-function swap)"],
      ["Allied: (90°+θ)", "sin→cos, cos→−sin, tan→−cot"],
      ["Allied: (180°−θ)", "sin→sin, cos→−cos, tan→−tan"],
      ["Allied: (180°+θ)", "sin→−sin, cos→−cos, tan→tan"],
      ["Allied: (270°−θ)", "sin→−cos, cos→−sin, tan→cot"],
      ["Allied: (270°+θ)", "sin→−cos, cos→sin, tan→−cot"],
      ["Allied: (360°−θ)", "sin→−sin, cos→cos, tan→−tan"],
      ["Radian ↔ Degree", "π rad = 180°,   1° = π/180 rad,   1 rad ≈ 57.3°"],
    ],
    concepts: [
      ["ASTC rule (All Silver Tea Cups)", "Quadrant I: ALL ratios positive. Quadrant II: only SINE (and cosec) positive. Quadrant III: only TAN (and cot) positive. Quadrant IV: only COS (and sec) positive. Use this BEFORE evaluating any allied angle — sign comes from ASTC, function name comes from the odd/even rule."],
      ["Odd/Even multiple rule for allied angles", "For multiples of 90° (odd multiple: 90°, 270°): function CHANGES to co-function (sin↔cos, tan↔cot, sec↔cosec). For multiples of 180° (even: 180°, 360°): function STAYS the same. Then apply ASTC sign. E.g., sin(270°+θ): 270° is odd multiple → sin→cos, in QIII (sin negative but this goes to QIV) → cos(θ) is positive → −cos θ. Wait, check ASTC for 270°+θ (lies in QIV) → cos positive → −cosθ is WRONG — result is −cosθ... let me just give the table."],
      ["Reference angle method (fastest for MCQ)", "To find any trig ratio of angle A > 90°: (1) Express as nearest 90°-multiple ± θ. (2) Use odd/even rule for function change. (3) Apply ASTC for sign in the resultant quadrant. Example: cos(210°) = cos(180°+30°) → function stays cos (180° even), sign in QIII → cos negative → −cos30° = −√3/2."],
      ["Domain and Range of trig functions", "sin,cos: domain ℝ, range [−1,1]. tan: domain ℝ−{(2n+1)π/2}, range ℝ. cosec: domain ℝ−{nπ}, range (−∞,−1]∪[1,∞). sec: domain ℝ−{(2n+1)π/2}, range (−∞,−1]∪[1,∞). cot: domain ℝ−{nπ}, range ℝ."],
      ["Periodicity", "sin, cos, cosec, sec have period 2π. tan, cot have period π. |sin|, |cos|, |tan| have period π. sin², cos² have period π. These are tested directly in MCQ as 'find the period of...'"],
    ],
    examples: [
      {
        q: "Evaluate: sin 210° + cos 300° + tan 135°",
        steps: [
          "sin 210° = sin(180°+30°) = −sin30° = −½  (QIII, sin−ve)",
          "cos 300° = cos(360°−60°) = cos60° = ½  (QIV, cos+ve)",
          "tan 135° = tan(180°−45°) = −tan45° = −1  (QII, tan−ve)",
          "Total = −½ + ½ + (−1) = −1",
        ],
      },
      {
        q: "Simplify: sin(−θ)·cos(90°+θ)·tan(180°−θ) / cos(−θ)·sin(180°+θ)",
        steps: [
          "sin(−θ) = −sinθ",
          "cos(90°+θ) = −sinθ  (odd multiple, QII→cos negative → sin negative)",
          "tan(180°−θ) = −tanθ  (even multiple, QII, tan−ve)",
          "cos(−θ) = cosθ  (cosine is even function)",
          "sin(180°+θ) = −sinθ  (even, QIII, sin−ve)",
          "Numerator: (−sinθ)(−sinθ)(−tanθ) = −sin²θ·tanθ",
          "Denominator: cosθ·(−sinθ) = −sinθcosθ",
          "Result = (−sin²θ·tanθ)/(−sinθcosθ) = sinθ·tanθ/cosθ = sinθ·sinθ/cos²θ = tan²θ",
        ],
      },
      {
        q: "If sinθ = 5/13 and θ is in QII, find all other trig ratios.",
        steps: [
          "sinθ = 5/13,  QII → cosθ < 0",
          "cosθ = −√(1−25/169) = −12/13",
          "tanθ = sinθ/cosθ = (5/13)/(−12/13) = −5/12",
          "cosecθ = 13/5,   secθ = −13/12,   cotθ = −12/5",
        ],
      },
    ],
    tips: [
      "ASTC + odd/even rule: master this combo once and allied angles are trivial. Never memorize individual allied angle values.",
      "sin(−θ)=−sinθ (odd), cos(−θ)=cosθ (even), tan(−θ)=−tanθ (odd). Negative angle → only cosine survives with same sign.",
      "Periodicity MCQ shortcut: period of sin(nx) or cos(nx) = 2π/n. Period of tan(nx) = π/n.",
      "For exact value MCQs: build a 3-row table — 0°,30°,45°,60°,90° — with sin row 0,½,1/√2,√3/2,1. cos is the reverse. tan = sin/cos.",
      "sin²θ + cos²θ = 1 is the parent identity. ALL other Pythagorean identities follow from it — divide by cos²θ or sin²θ.",
    ],
  },

  ident: {
    title: "Trigonometric Identities",
    formulas: [
      ["Pythagorean set 1", "sin²θ + cos²θ = 1"],
      ["Pythagorean set 2", "1 + tan²θ = sec²θ   →   sec²θ − tan²θ = 1"],
      ["Pythagorean set 3", "1 + cot²θ = cosec²θ   →   cosec²θ − cot²θ = 1"],
      ["sin(A±B)", "sinA cosB ± cosA sinB"],
      ["cos(A±B)", "cosA cosB ∓ sinA sinB"],
      ["tan(A±B)", "(tanA ± tanB) / (1 ∓ tanA tanB)"],
      ["sin 2A", "2 sinA cosA  =  2tanA/(1+tan²A)"],
      ["cos 2A", "cos²A−sin²A = 1−2sin²A = 2cos²A−1 = (1−tan²A)/(1+tan²A)"],
      ["tan 2A", "2tanA / (1−tan²A)"],
      ["sin 3A", "3sinA − 4sin³A"],
      ["cos 3A", "4cos³A − 3cosA"],
      ["tan 3A", "(3tanA−tan³A)/(1−3tan²A)"],
      ["sin C + sin D", "2 sin[(C+D)/2] cos[(C−D)/2]"],
      ["sin C − sin D", "2 cos[(C+D)/2] sin[(C−D)/2]"],
      ["cos C + cos D", "2 cos[(C+D)/2] cos[(C−D)/2]"],
      ["cos C − cos D", "−2 sin[(C+D)/2] sin[(C−D)/2]"],
      ["2 sinA cosB", "sin(A+B) + sin(A−B)"],
      ["2 cosA cosB", "cos(A+B) + cos(A−B)"],
      ["2 sinA sinB", "cos(A−B) − cos(A+B)"],
    ],
    concepts: [
      ["cos 2A — three forms and when to use each", "cos2A = 1−2sin²A → when you want sin²A alone. cos2A = 2cos²A−1 → when you want cos²A alone. cos2A = cos²A−sin²A → when both appear and will cancel. The (1−tan²A)/(1+tan²A) form is used when everything is in tan. Know all four — exam questions rotate among them."],
      ["Sum-to-Product vs Product-to-Sum — direction matters", "Sum-to-Product (sinC+sinD → 2sin·cos): used when ADDING two sines/cosines and want factors for simplification or to find zeros. Product-to-Sum (2sinAcosB → sin(A+B)+sin(A−B)): used when MULTIPLYING trig functions and want a sum for integration or series evaluation. NIMCET tests both directions."],
      ["Proving identities — strategy", "Step 1: Always work on the more complex side. Step 2: Convert all to sin and cos if stuck. Step 3: Use Pythagorean identities (sin²+cos²=1, sec²−tan²=1) to replace 1 or squared terms. Step 4: Factor, cancel. Step 5: Use sum-to-product or double angle as bridge. Never 'cross the equal sign' — work one side at a time."],
      ["sec²−tan² and cosec²−cot² factoring", "(secθ−tanθ)(secθ+tanθ)=1 → very useful: if secθ+tanθ=k, then secθ−tanθ=1/k. Similarly for cosec and cot. NIMCET frequently gives one combination and asks for the other or for sin/cos individually."],
    ],
    examples: [
      {
        q: "Prove: (sin3A + sinA)/(cos3A + cosA) = tan2A",
        steps: [
          "Numerator: sin3A+sinA = 2sin2A·cosA  (sum-to-product, C=3A, D=A)",
          "Denominator: cos3A+cosA = 2cos2A·cosA",
          "Result = (2sin2A·cosA)/(2cos2A·cosA) = sin2A/cos2A = tan2A  ✓",
        ],
      },
      {
        q: "If sinθ + cosθ = √2, find sinθ·cosθ and sin³θ + cos³θ.",
        steps: [
          "Square both sides: sin²θ+2sinθcosθ+cos²θ = 2",
          "1 + 2sinθcosθ = 2  →  sinθcosθ = 1/2",
          "sin³θ+cos³θ = (sinθ+cosθ)(1−sinθcosθ) = √2·(1−½) = √2/2",
        ],
      },
      {
        q: "Simplify: (1 + tan²A)/(1 + cot²A)",
        steps: [
          "= sec²A / cosec²A",
          "= (1/cos²A) / (1/sin²A)",
          "= sin²A/cos²A = tan²A",
        ],
      },
      {
        q: "If tanA + cotA = 4, find tan²A + cot²A and tan⁴A + cot⁴A.",
        steps: [
          "Let S = tanA+cotA = 4,   P = tanA·cotA = 1 (always)",
          "tan²A+cot²A = S²−2P = 16−2 = 14",
          "tan⁴A+cot⁴A = (tan²A+cot²A)²−2(tanA·cotA)² = 196−2 = 194",
        ],
      },
    ],
    tips: [
      "sinC+sinD = 2sin[(C+D)/2]cos[(C−D)/2]. Mnemonic: 'Sum → sin average × cos half-diff'. The order sin/cos in sum vs cos/cos in product-of-cosines is the most common error.",
      "cosC−cosD = −2sin[(C+D)/2]sin[(C−D)/2]. The NEGATIVE sign out front is tested directly. Don't forget it.",
      "(secθ+tanθ) × (secθ−tanθ) = 1. If sum is given as k, difference = 1/k. Then sec = (k+1/k)/2, tan = (k−1/k)/2.",
      "tan(A+B+C) = (tanA+tanB+tanC−tanAtanBtanC) / (1−tanAtanB−tanBtanC−tanCtanA). For A+B+C=180°: tanA+tanB+tanC = tanAtanBtanC.",
      "Double angle trick: write sin²θ = (1−cos2θ)/2 and cos²θ = (1+cos2θ)/2. Essential for reducing power before summing series.",
    ],
  },

  inverse: {
    title: "Inverse Trigonometric Functions — Principal Values & Identities",
    formulas: [
      ["arcsin domain & range", "Domain: [−1,1],   Range: [−π/2, π/2]"],
      ["arccos domain & range", "Domain: [−1,1],   Range: [0, π]"],
      ["arctan domain & range", "Domain: ℝ,   Range: (−π/2, π/2)"],
      ["arccot domain & range", "Domain: ℝ,   Range: (0, π)"],
      ["arcsec domain & range", "Domain: |x|≥1,   Range: [0,π]−{π/2}"],
      ["arccosec domain & range", "Domain: |x|≥1,   Range: [−π/2,π/2]−{0}"],
      ["sin(arcsin x) = x", "|x| ≤ 1.   arcsin(sinθ) = θ only if θ ∈ [−π/2,π/2]"],
      ["arcsin(−x) = −arcsin(x)", "Odd function"],
      ["arccos(−x) = π − arccos(x)", "Reflection identity"],
      ["arctan(−x) = −arctan(x)", "Odd function"],
      ["arcsin x + arccos x = π/2", "Complementary identity (|x|≤1)"],
      ["arctan x + arccot x = π/2", "Complementary identity (x∈ℝ)"],
      ["arcsec x + arccosec x = π/2", "Complementary identity (|x|≥1)"],
      ["arctan x + arctan y", "arctan[(x+y)/(1−xy)]  if xy<1"],
      ["arctan x − arctan y", "arctan[(x−y)/(1+xy)]"],
      ["2 arctan x", "arctan[2x/(1−x²)] if |x|<1"],
      ["arcsin x + arcsin y", "arcsin[x√(1−y²)+y√(1−x²)]  (when x²+y²≤1 or when appropriate)"],
    ],
    concepts: [
      ["Principal value — the core concept", "Inverse trig functions are MANY-to-one going forward, so the inverse must be restricted to a single branch (the principal branch). arcsin gives the angle in [−π/2,π/2]. arccos gives the angle in [0,π]. arctan gives the angle in (−π/2,π/2). The principal value is the UNIQUE answer in these ranges. NIMCET always expects the answer in the principal branch."],
      ["arcsin(sinθ) ≠ θ always — the reduction rule", "arcsin(sinθ) = θ ONLY if θ ∈ [−π/2,π/2]. Outside this: arcsin(sin(2π/3)) = arcsin(sin(π−π/3)) = arcsin(sin(π/3)) = π/3 (NOT 2π/3). Reduction method: express as sin(π−θ) or sin(−θ) to bring angle into [−π/2,π/2]. Same logic for arccos (bring into [0,π]) and arctan (bring into (−π/2,π/2))."],
      ["arctan(x)+arctan(y) — three cases", "If xy < 1: result = arctan[(x+y)/(1−xy)]. If xy > 1 and x > 0: result = π + arctan[(x+y)/(1−xy)]. If xy > 1 and x < 0: result = −π + arctan[(x+y)/(1−xy)]. The xy < 1 case covers most NIMCET problems. Always check xy vs 1 first."],
      ["Converting between inverse functions", "arcsin x = arctan(x/√(1−x²)) for |x|<1. arccos x = arctan(√(1−x²)/x) for 0<x≤1. arcsin x = arccos(√(1−x²)). These conversions let you handle any expression in a unified way by converting everything to arctan."],
    ],
    examples: [
      {
        q: "Find the principal value of arccos(−1/2).",
        steps: [
          "arccos range is [0,π]",
          "cos(2π/3) = −1/2   and   2π/3 ∈ [0,π]",
          "Principal value = 2π/3  (= 120°)",
          "Note: arccos(1/2) = π/3,  so arccos(−½) = π − π/3 = 2π/3  ✓ (by reflection identity)",
        ],
      },
      {
        q: "Evaluate arcsin(sin 5π/6).",
        steps: [
          "5π/6 is NOT in [−π/2, π/2], so we cannot directly say the answer is 5π/6",
          "sin(5π/6) = sin(π − π/6) = sin(π/6) = ½",
          "arcsin(½) = π/6   (which IS in [−π/2, π/2])",
          "Answer = π/6",
        ],
      },
      {
        q: "Prove: arctan(1/2) + arctan(1/3) = π/4.",
        steps: [
          "xy = (1/2)(1/3) = 1/6 < 1  → use standard formula",
          "arctan(1/2)+arctan(1/3) = arctan[(½+⅓)/(1−⅙)]",
          "= arctan[(5/6)/(5/6)] = arctan(1) = π/4  ✓",
        ],
      },
      {
        q: "Find arctan(1) + arctan(2) + arctan(3).",
        steps: [
          "arctan(2)+arctan(3): xy=6>1 and x=2>0 → π + arctan[(5)/(1−6)] = π+arctan(−1) = π−π/4 = 3π/4",
          "arctan(1) + 3π/4 = π/4 + 3π/4 = π",
        ],
      },
    ],
    tips: [
      "arcsin+arccos=π/2, arctan+arccot=π/2, arcsec+arccosec=π/2. Three complementary identities — one line each — memorize all three.",
      "arcsin(sin θ): if θ outside [−π/2,π/2], rewrite sinθ as sin(π−θ) or sin(−θ) to land inside the range. Do NOT skip this step.",
      "arccos(−x) = π − arccos(x). This is the most tested single identity. Appears in MCQ directly.",
      "When evaluating arctan(x)+arctan(y): ALWAYS check xy vs 1 first. If xy > 1, the adjustment term of ±π is mandatory.",
      "NIMCET Principal value questions: just find which quadrant the answer falls in, check it lies in the principal range, and write it. No long working needed.",
    ],
  },

  triangle: {
    title: "Properties of Triangles",
    formulas: [
      ["Sine rule", "a/sinA = b/sinB = c/sinC = 2R"],
      ["Cosine rule (find angle)", "cos A = (b²+c²−a²) / 2bc"],
      ["Cosine rule (find side)", "a² = b² + c² − 2bc cosA"],
      ["Projection formula", "a = b cosC + c cosB"],
      ["Area of triangle Δ", "Δ = ½ab sinC  =  ½bc sinA  =  ½ca sinB"],
      ["Area via Heron's formula", "Δ = √[s(s−a)(s−b)(s−c)],   s=(a+b+c)/2"],
      ["Circumradius R", "R = a/(2sinA) = b/(2sinB) = c/(2sinC) = abc/(4Δ)"],
      ["Inradius r", "r = Δ/s = (s−a)tanA/2 = 4R sinA/2 sinB/2 sinC/2"],
      ["r = (s−a) tan(A/2)", "Also: r₁=(s−b)tan(B/2)=(s−c)tan(C/2)... etc."],
      ["Exradii r₁, r₂, r₃", "r₁=Δ/(s−a),   r₂=Δ/(s−b),   r₃=Δ/(s−c)"],
      ["Half-angle — sin(A/2)", "√[(s−b)(s−c)/bc]"],
      ["Half-angle — cos(A/2)", "√[s(s−a)/bc]"],
      ["Half-angle — tan(A/2)", "√[(s−b)(s−c)/s(s−a)]  =  Δ/[s(s−a)]... = r/(s−a)"],
      ["1/r = 1/r₁+1/r₂+1/r₃", "Reciprocal relation of exradii"],
    ],
    concepts: [
      ["Sine rule — two uses in MCQ", "(1) Given two angles and one side → find any other side instantly using a/sinA = b/sinB. (2) Circumradius: 2R = a/sinA gives R immediately. Always note: the side a is OPPOSITE to angle A — don't swap them."],
      ["Cosine rule — when to use", "Use when: (a) two sides and included angle known → find third side. (b) all three sides known → find any angle. It replaces the need for two separate rules. cos A = (b²+c²−a²)/2bc: the denominator is ALWAYS the product of the OTHER two sides (not the side opposite A)."],
      ["s (semi-perimeter) in Heron's formula", "s = (a+b+c)/2 is the semi-perimeter. Then s−a, s−b, s−c appear in half-angle and exradii formulas. Build a quick table: compute s, s−a, s−b, s−c before applying any formula. Error here propagates through the entire problem."],
      ["r, R, r₁ relations — common MCQ identities", "r·R = abc/4s (link all three). Also: r₁+r₂+r₃−r = 4R. r₁r₂+r₂r₃+r₃r₁ = s². r₁r₂r₃ = s²r. r₁+r₂+r₃ = 4R+r. These appear as direct substitution MCQs — memorize as a group."],
    ],
    examples: [
      {
        q: "In △ABC, a=7, b=8, c=9. Find cos A and area Δ.",
        steps: [
          "cos A = (b²+c²−a²)/2bc = (64+81−49)/(2×8×9) = 96/144 = 2/3",
          "s = (7+8+9)/2 = 12",
          "Δ = √[12×5×4×3] = √720 = 12√5",
        ],
      },
      {
        q: "In △ABC, a=5, B=60°, C=75°. Find b (using sine rule).",
        steps: [
          "A = 180°−60°−75° = 45°",
          "a/sinA = b/sinB",
          "5/sin45° = b/sin60°",
          "b = 5·sin60°/sin45° = 5·(√3/2)/(1/√2) = 5√6/2",
        ],
      },
      {
        q: "Find inradius r for triangle with sides 5, 12, 13.",
        steps: [
          "Check: 5²+12²=169=13²  →  right triangle (C=90°)",
          "s = (5+12+13)/2 = 15",
          "Δ = ½×5×12 = 30",
          "r = Δ/s = 30/15 = 2",
          "Also R = c/2 = 13/2 (hypotenuse/2 for right triangle) ✓",
        ],
      },
      {
        q: "Prove: r₁ + r₂ + r₃ − r = 4R using the exradii formulas.",
        steps: [
          "r₁+r₂+r₃ = Δ/(s−a)+Δ/(s−b)+Δ/(s−c)",
          "= Δ·[(s−b)(s−c)+(s−a)(s−c)+(s−a)(s−b)] / [(s−a)(s−b)(s−c)]",
          "Numerator simplifies to Δ·s² (standard algebra)",
          "Denominator = Δ²/s (since Δ²=s(s−a)(s−b)(s−c))",
          "r₁+r₂+r₃ = s²·Δ/(Δ²/s) = s³/Δ.  r = Δ/s",
          "r₁+r₂+r₃−r = s³/Δ − Δ/s = (s⁴−Δ²)/(sΔ) = 4R  [via abc=4RΔ]  ✓",
        ],
      },
    ],
    tips: [
      "Right triangle shortcut: R = hypotenuse/2. Fastest R computation when the triangle is right-angled.",
      "Exradii: r₁=Δ/(s−a). The exradius opposite to vertex A uses (s−a) in denominator. Don't mix subscripts.",
      "For Heron's formula: always compute s, s−a, s−b, s−c in a small table first. Arithmetic errors here are the #1 mistake.",
      "Half-angle sin(A/2), cos(A/2), tan(A/2): all involve s, s−a, s−b, s−c over the product bc. Keep this pattern in memory.",
      "Sine rule gives ambiguous case: given a, b, A (SSA) — check if there are 0, 1, or 2 possible triangles using sinB=b sinA/a. If sinB>1 → no triangle.",
    ],
  },

  solution: {
    title: "Solution of Triangles — Finding Unknown Parts",
    formulas: [
      ["Given: two sides + included angle (SAS)", "Use cosine rule → find third side. Then sine rule for angles."],
      ["Given: two angles + one side (AAS)", "Find third angle (A+B+C=180°). Use sine rule throughout."],
      ["Given: three sides (SSS)", "Use cosine rule for each angle: cosA=(b²+c²−a²)/2bc"],
      ["Ambiguous case (SSA)", "Given a, b, A: sinB = b sinA/a. Check sinB vs 1 for number of solutions."],
      ["Half-angle formula approach", "tan(A/2) = r/(s−a),  tan(B/2) = r/(s−b),  tan(C/2) = r/(s−c)"],
      ["Napier's analogies", "tan[(B−C)/2] = [(b−c)/(b+c)] cot(A/2)"],
      ["Mollweide's equation", "(b+c)/a = cos[(B−C)/2] / sin(A/2)"],
    ],
    concepts: [
      ["SSA — the ambiguous case (most misunderstood)", "Given sides a, b and angle A (not the included angle): compute sinB = b sinA/a. Case 1: sinB > 1 → no triangle possible. Case 2: sinB = 1 → exactly one right triangle. Case 3: sinB < 1 → two possible triangles if a < b (B can be acute or obtuse). Only one triangle if a ≥ b (obtuse B would make A+B > 180°). NIMCET tests: 'how many triangles are possible?' directly."],
      ["Step-by-step for SAS solution", "(1) Label the triangle clearly. (2) Apply cosine rule to find unknown side. (3) Use sine rule (or cosine again) for remaining angles. (4) Find third angle from A+B+C=180°. (5) Compute area = ½ab sinC. Do these in fixed order — skipping steps causes angle-side confusion."],
      ["When to use Napier's analogies", "Napier's analogy is best when given: two sides and the included angle (SAS). It directly finds angle difference without needing the third side first. More efficient than cosine-then-sine for some configurations. Commonly tested in theory-type questions: 'which formula applies to find angle difference?'"],
      ["Check of solution", "After solving, verify: (1) all angles positive and sum = 180°. (2) larger side opposite larger angle. (3) sine rule ratios are equal: a/sinA = b/sinB = c/sinC (all equal to 2R). Quick cross-check catches arithmetic errors."],
    ],
    examples: [
      {
        q: "Solve △ABC given a=5, b=7, C=60°. (SAS)",
        steps: [
          "c² = a²+b²−2ab cosC = 25+49−2(35)(½) = 74−35 = 39",
          "c = √39",
          "sinA/a = sinC/c → sinA = 5sin60°/√39 = 5√3/(2√39)",
          "A = arcsin[5√3/(2√39)] ≈ arcsin(0.693) ≈ 43.8°",
          "B = 180°−60°−43.8° = 76.2°",
        ],
      },
      {
        q: "In △ABC, a=2, b=√6, A=30°. Find all possible triangles.",
        steps: [
          "sinB = b sinA/a = √6·(½)/2 = √6/4 ≈ 0.612",
          "B₁ = arcsin(0.612) ≈ 37.8° → C₁ = 112.2°, c₁ via sine rule",
          "B₂ = 180°−37.8° = 142.2° → A+B₂ = 172.2° < 180° ✓ (second triangle exists)",
          "C₂ = 180°−30°−142.2° = 7.8°",
          "Two triangles exist (SSA ambiguous case)",
        ],
      },
      {
        q: "Find all angles if a=6, b=8, c=10.",
        steps: [
          "Check: 6²+8²=36+64=100=10²  → RIGHT triangle (C=90°)",
          "cosA = (64+100−36)/(2×8×10) = 128/160 = 4/5 → A ≈ 36.87° ≈ 37°",
          "B = 180°−90°−37° = 53°",
          "Triangle angles: 37°, 53°, 90°",
        ],
      },
    ],
    tips: [
      "Always check if it's a right triangle first (a²+b²=c²?). If yes, shortcuts apply: R=c/2, area=½ab, angles from tan ratios.",
      "SSA ambiguous case rule: if a ≥ b, only one triangle. If a < b, use sinB to determine 0, 1, or 2 triangles.",
      "After finding one angle via sine rule, always check whether the obtuse version is also valid before discarding.",
      "Napier's analogy: tan[(B−C)/2] = [(b−c)/(b+c)]cot(A/2). Use for SAS when you want angle difference directly.",
      "The constraint A+B+C=180° is your most powerful tool — use it to reduce unknowns immediately at the start.",
    ],
  },

  heights: {
    title: "Heights & Distances",
    formulas: [
      ["Angle of elevation", "α = angle from horizontal UPWARD to object"],
      ["Angle of depression", "β = angle from horizontal DOWNWARD to object"],
      ["Basic: height h, dist d", "tan α = h/d  →  h = d·tan α"],
      ["tan 30°", "1/√3"],
      ["tan 45°", "1"],
      ["tan 60°", "√3"],
      ["Object between two observers", "h = d·tan α₁·tan α₂ / (tan α₁ + tan α₂)"],
      ["Two elevations from same point", "Use cot formula: d = h(cot α − cot β) for two angles of elevation"],
      ["Bearing N θ E", "Angle θ measured from North toward East"],
    ],
    concepts: [
      ["Standard setup — always draw first", "Every heights & distances problem MUST begin with a clear diagram. Label: observer point, object top (T), object base (B), horizontal line, angles. Once drawn, the right triangle(s) are obvious and you just apply tan. 80% of errors come from not drawing the diagram."],
      ["Depression = elevation at the other end", "Angle of depression from A looking down to B = angle of elevation from B looking up to A (alternate interior angles with horizontal line). This symmetry is tested directly: 'angle of depression from lighthouse top = 30° → angle of elevation from ship = 30°.'"],
      ["Two-angle problems — use two equations", "When two angles of elevation/depression are given from two different positions: set up two tan equations with the same h. Solve the system — typically by dividing the equations or using h from each and equating. The horizontal distance d between observer positions is usually given."],
      ["Pole on top of a building", "Total height = building height + pole height. Let building height = H, pole height = p. From a point at distance d: tan α = H/d (to top of building), tan β = (H+p)/d (to top of pole). Two equations, two unknowns (H and p given d), or find d given angles and heights."],
    ],
    examples: [
      {
        q: "A tower stands on a cliff of height 50m. From a point on the ground, angles of elevation of top and bottom of tower are 75° and 45°. Height of tower?",
        steps: [
          "Let distance from base of cliff = d, cliff height = 50m, tower height = h",
          "Angle to cliff bottom = 45°: tan45° = 50/d → d = 50m",
          "Angle to tower top = 75°: tan75° = (50+h)/50",
          "tan75° = tan(45°+30°) = (1+1/√3)/(1−1/√3) = (√3+1)/(√3−1) = (√3+1)²/2 = 2+√3",
          "50+h = 50(2+√3)  →  h = 50(1+√3) = 50+50√3 m",
        ],
      },
      {
        q: "From the top of a hill 200m high, angles of depression of two stones on opposite sides are 30° and 45°. Horizontal distance between stones?",
        steps: [
          "Height = 200m. Stone A (30° depression): d₁ = 200/tan30° = 200√3 m",
          "Stone B (45° depression): d₂ = 200/tan45° = 200 m",
          "Total distance = d₁+d₂ = 200√3+200 = 200(√3+1) m",
        ],
      },
      {
        q: "A man 1.8m tall sees the top of a building at 45° elevation. He walks 20m closer and now sees at 60°. Find building height.",
        steps: [
          "Let building height above man's eye level = h, initial distance = d",
          "First: tan45° = h/d → h = d   ...(i)",
          "After walking 20m: tan60° = h/(d−20) → h = √3(d−20)  ...(ii)",
          "From (i): d = h. Sub in (ii): h = √3(h−20)",
          "h = √3h−20√3  → h(√3−1) = 20√3",
          "h = 20√3/(√3−1) = 20√3(√3+1)/2 = 10√3(√3+1) = 30+10√3 m",
          "Actual building height = h + 1.8 = 31.8+10√3 m",
        ],
      },
    ],
    tips: [
      "DRAW THE DIAGRAM FIRST. Every single time. No exceptions. The right triangles become visible immediately.",
      "Angle of depression from top = angle of elevation from bottom (alternate interior angles). Use this to avoid setting up from awkward positions.",
      "tan30°=1/√3, tan45°=1, tan60°=√3. These three cover 95% of all Heights & Distances MCQs.",
      "Two positions, same object: set up two equations with h and d. Divide to eliminate h OR equate the d from both. Systematic — never guess.",
      "Man's height: when the problem says 'man 1.8m tall observes', the angle is measured from his EYE level (height 1.8m). Add 1.8m to the building height at the end for total height above ground.",
    ],
  },

  equations: {
    title: "Trigonometric Equations & General Solutions",
    formulas: [
      ["General solution: sinθ = sinα", "θ = nπ + (−1)ⁿ α,   n ∈ ℤ"],
      ["General solution: cosθ = cosα", "θ = 2nπ ± α,   n ∈ ℤ"],
      ["General solution: tanθ = tanα", "θ = nπ + α,   n ∈ ℤ"],
      ["sinθ = 0", "θ = nπ"],
      ["cosθ = 0", "θ = (2n+1)π/2"],
      ["tanθ = 0", "θ = nπ"],
      ["sin²θ = sin²α", "θ = nπ ± α"],
      ["cos²θ = cos²α", "θ = nπ ± α"],
      ["tan²θ = tan²α", "θ = nπ ± α"],
      ["sinθ = 1", "θ = (4n+1)π/2"],
      ["cosθ = 1", "θ = 2nπ"],
      ["sinθ = −1", "θ = (4n−1)π/2  = (4n+3)π/2"],
      ["cosθ = −1", "θ = (2n+1)π"],
    ],
    concepts: [
      ["The three master formulas — and when to use each", "sinθ=sinα → nπ+(−1)ⁿα (the (−1)ⁿ flips sign for odd n). cosθ=cosα → 2nπ±α (always ±, always 2n). tanθ=tanα → nπ+α (simplest, period π). The most common MCQ error: using the cos formula for sin or vice versa. Associate: sin has the (−1)ⁿ oscillation. cos has the 2n."],
      ["Squaring — introduces extraneous roots", "If the equation has both sin and cos, you may square to get a solvable form. BUT squaring can double the roots (introducing solutions of the negative). ALWAYS verify each solution found after squaring by substituting into the ORIGINAL equation. Discard values that don't satisfy it."],
      ["Method for equations of type a sinθ + b cosθ = c", "Divide through: write as R sin(θ+φ) = c, where R=√(a²+b²) and tanφ=b/a. Then sinθ+φ) = c/R. Solution exists only when |c/R| ≤ 1 i.e. |c| ≤ √(a²+b²). Convert to sin=sinα form. NIMCET tests 'find R' and 'find condition for solution to exist' directly."],
      ["Solutions in a given interval [0, 2π]", "After writing general solution, substitute n=...−1,0,1,2,... and select values that fall in the given interval. Don't just write the general solution — list every particular solution in the interval. Sort them in increasing order if asked."],
    ],
    examples: [
      {
        q: "Solve: 2sin²θ − sinθ − 1 = 0 for θ ∈ [0, 2π].",
        steps: [
          "Factor: (2sinθ+1)(sinθ−1) = 0",
          "sinθ = −½  OR  sinθ = 1",
          "sinθ=1: θ = π/2",
          "sinθ=−½: principal α = −π/6 (or 7π/6 in [0,2π])",
          "sinθ=−½ in [0,2π]: θ = 7π/6 and θ = 11π/6",
          "Solutions: {π/2, 7π/6, 11π/6}",
        ],
      },
      {
        q: "Find general solution of: cosθ = cos(π/3).",
        steps: [
          "Formula: cosθ = cosα → θ = 2nπ ± α",
          "θ = 2nπ ± π/3,   n ∈ ℤ",
          "Specific: ..., −π/3, π/3, 5π/3, 7π/3, ... (taking +π/3)",
          "...and: ..., −5π/3, 5π/3, 7π/3... (taking −π/3 with various n)",
        ],
      },
      {
        q: "Solve: √3 cosθ + sinθ = √2.",
        steps: [
          "Write as R sin(θ+φ) = √2,  where a=1(sinθ), b=√3(cosθ)",
          "R = √(1+3) = 2.  tanφ = b/a = √3 → φ = π/3",
          "2sin(θ+π/3) = √2 → sin(θ+π/3) = 1/√2 = sin(π/4)",
          "θ+π/3 = nπ+(−1)ⁿ(π/4)",
          "n even: θ = 2kπ+π/4−π/3 = 2kπ−π/12",
          "n odd: θ = (2k+1)π−π/4−π/3 = (2k+1)π−7π/12",
        ],
      },
      {
        q: "Find number of solutions of sinθ = x²−4x+5 (x is real).",
        steps: [
          "For sinθ to have a solution: −1 ≤ sinθ ≤ 1",
          "Need: −1 ≤ x²−4x+5 ≤ 1",
          "x²−4x+5 = (x−2)²+1 ≥ 1 for all real x",
          "So x²−4x+5 ≥ 1.  For ≤ 1: (x−2)²+1 ≤ 1 → (x−2)²≤0 → x=2 only",
          "At x=2: sinθ = 1 → θ = π/2+2nπ (infinite solutions in θ, but unique x)",
          "Exactly one real value of x makes this consistent",
        ],
      },
    ],
    tips: [
      "Three master formulas — sinθ=sinα gives nπ+(−1)ⁿα; cosθ=cosα gives 2nπ±α; tanθ=tanα gives nπ+α. The (−1)ⁿ in sin formula is the one everyone mixes up.",
      "sin²θ=sin²α, cos²θ=cos²α, tan²θ=tan²α — ALL give θ=nπ±α. Squared equations give ± regardless of which function.",
      "asinθ+bcosθ=c: R=√(a²+b²). Solution exists iff |c|≤R. This condition is tested as a standalone MCQ.",
      "After squaring: always verify solutions. sinθ+cosθ=1 when squared gives sin2θ=0 which gives extra solutions like θ=π (doesn't satisfy original). Reject those.",
      "For interval [0,2π]: always test n=0,1,2 in your general solution and keep only those in range. Don't leave it as a general formula when interval is specified.",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("funcs");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* Header */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>Trigonometry</div>
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
        <div style={{ fontSize: "10px", color: "#b07a00", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>📐 Key Formulas</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "7px", marginBottom: "22px" }}>
          {d.formulas.map(([name, formula], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${gold}`, borderRadius: "3px", padding: "9px 11px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", color: "#999", marginBottom: "5px" }}>{name}</div>
              <div style={{ fontSize: "13px", fontFamily: "'Courier New',monospace", color: navy, fontWeight: "700", lineHeight: "1.5" }}>{formula}</div>
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
                    <span style={{ color: "#86efac", marginRight: "8px" }}>{j+1}.</span>{step}
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

        <div style={{ textAlign: "center", color: "#bbb", fontSize: "10px", paddingTop: "12px", borderTop: "1px solid #e8e4da", fontStyle: "italic" }}>
          NIMCET Official Syllabus · Trigonometry · Study smart, then grind PYQs 🎯
        </div>
      </div>
    </div>
  );
}

{/*
ENDOFFILE
echo "done"
*/}

