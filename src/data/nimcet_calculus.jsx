import { useState } from "react";

const TABS = [
  { id: "func",   label: "📊 Functions & Limits" },
  { id: "cont",   label: "📈 Continuity & IVT" },
  { id: "diff",   label: "🔢 Differentiation" },
  { id: "appd",   label: "📐 Applications" },
  { id: "mvt",    label: "🔄 Rolle's & MVT" },
  { id: "integ",  label: "∫ Integration" },
  { id: "defint", label: "📋 Definite Int. & Area" },
];

const DATA = {
  func: {
    title: "Functions on Real Numbers & Limits",
    formulas: [
      ["lim sinx/x = 1 (x→0)", "Also: lim tanx/x = 1,   lim sinax/bx = a/b"],
      ["lim (1−cosx)/x² = 1/2", "Also: lim (1−cosx)/x = 0"],
      ["lim (eˣ−1)/x = 1 (x→0)", "Also: lim (aˣ−1)/x = ln a"],
      ["lim ln(1+x)/x = 1 (x→0)", "Also: lim log(1+x)/x = log e"],
      ["lim (1+1/x)ˣ = e (x→∞)", "Also: lim (1+x)^(1/x) = e as x→0"],
      ["Degree rule: x→∞", "deg(num)<deg(den): 0 | equal: ratio of coefficients | num>den: ±∞"],
      ["L'Hopital's Rule", "For 0/0 or ∞/∞: lim f(x)/g(x) = lim f'(x)/g'(x)"],
      ["1^∞ form", "lim[f(x)]^g(x) = e^[lim g(x)·(f(x)−1)] when f(x)→1, g(x)→∞"],
    ],
    concepts: [
      ["Types of functions — key definitions", "Injective (one-one): distinct inputs → distinct outputs. f(a)=f(b) ⟹ a=b. Test: horizontal line meets graph at most once. Surjective (onto): range = codomain. Every element of codomain is achieved. Bijective: both injective and surjective. Has a unique inverse f⁻¹. Composite (fog)(x)=f(g(x)): domain of fog = {x ∈ domain of g : g(x) ∈ domain of f}. NIMCET tests: given f(x), is it one-one? Is it onto for a given codomain?"],
      ["Left-hand and right-hand limits", "LHL = lim(x→a⁻) f(x): value approached as x comes from left. RHL = lim(x→a⁺) f(x): from the right. Overall limit exists iff LHL = RHL. For piecewise functions: use left piece for LHL, right piece for RHL. Even if LHL = RHL = L, the limit value L may differ from f(a). The limit concept is independent of f(a)."],
      ["Indeterminate forms and resolution", "0/0: factor, rationalize, or L'Hopital. ∞/∞: divide by highest power, or L'Hopital. 0×∞: rewrite as f/(1/g) or g/(1/f) to get 0/0 or ∞/∞. ∞−∞: rationalize or common denominator. 0⁰, 1^∞, ∞⁰: take ln, get 0×∞ form, convert, then exponentiate. Key: L'Hopital applies ONLY to 0/0 or ∞/∞. Convert all others first."],
      ["Limits at infinity — rational functions", "For P(x)/Q(x) as x→∞: divide EVERY term by x^n where n = max(degree P, degree Q). All terms with x in denominator → 0. Only leading coefficients survive. Example: (3x²+5x)/(2x²−1) → (3+5/x)/(2−1/x²) → 3/2. This mechanical method never fails for rational limits at infinity."],
    ],
    examples: [
      {
        q: "Evaluate: lim(x→0) sin(5x) / (3x)",
        steps: [
          "Rewrite as: (sin5x)/(5x) × (5x)/(3x) = (sin5x)/(5x) × 5/3",
          "As x→0: (sin5x)/(5x) → 1  (standard limit with u=5x→0)",
          "Result = 1 × 5/3 = 5/3",
        ],
      },
      {
        q: "Evaluate: lim(x→2) (x²−4)/(x−2)",
        steps: [
          "Direct substitution → 0/0 (indeterminate).",
          "Factor: x²−4 = (x+2)(x−2)",
          "Cancel (x−2): lim(x→2) (x+2) = 4",
          "Answer: 4",
        ],
      },
      {
        q: "Evaluate: lim(x→∞) (4x³−2x+1)/(3x³+x²)",
        steps: [
          "Equal degree (3) → ratio of leading coefficients.",
          "= 4/3  (leading term 4x³ over 3x³)",
          "Verify by dividing by x³: (4−2/x²+1/x³)/(3+1/x) → (4−0+0)/(3+0) = 4/3 ✓",
        ],
      },
      {
        q: "Evaluate: lim(x→0) (eˢⁱⁿˣ − 1) / x",
        steps: [
          "Multiply and divide by sinx:",
          "= (eˢⁱⁿˣ−1)/sinx × sinx/x",
          "As x→0: sinx→0, so (eˢⁱⁿˣ−1)/sinx → 1  (standard limit eᵗ−1)/t with t=sinx)",
          "And sinx/x → 1",
          "Result = 1 × 1 = 1",
        ],
      },
    ],
    tips: [
      "Five standard limits to memorize: sinx/x=1, (eˣ−1)/x=1, ln(1+x)/x=1, (aˣ−1)/x=lna, (1−cosx)/x²=1/2. These are directly applied in 70% of limit MCQs.",
      "Degree rule for x→∞: same degree → coefficient ratio. This gives the answer in under 5 seconds for rational functions.",
      "Factor before L'Hopital: x²−4 = (x−2)(x+2). Canceling is faster and less error-prone than differentiating.",
      "1^∞ shortcut: lim(1+f(x))^g(x) = e^[lim f(x)·g(x)] when f→0, g→∞. Directly apply for (1+1/n)ⁿ→e type problems.",
      "Piecewise limits: ALWAYS compute LHL and RHL separately at boundary points. Use each piece strictly for its respective side.",
    ],
  },

  cont: {
    title: "Continuity of Functions & Intermediate Value Theorem",
    formulas: [
      ["3 conditions for continuity at x=a", "1. f(a) is defined.  2. lim(x→a) f(x) exists.  3. lim(x→a) f(x) = f(a)."],
      ["LHL = RHL = f(a)", "lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = f(a) — all equal."],
      ["Removable discontinuity", "Limit exists but ≠ f(a)  (or f(a) undefined). Fixable by redefining f(a)."],
      ["Jump discontinuity", "LHL ≠ RHL (both finite limits exist but differ)."],
      ["Infinite discontinuity", "lim(x→a) f(x) = ±∞. Not fixable."],
      ["IVT statement", "f continuous on [a,b] and k between f(a),f(b) ⟹ ∃ c∈(a,b): f(c)=k."],
      ["Root existence (IVT corollary)", "f(a)·f(b) < 0 and f continuous on [a,b] ⟹ ∃ root c∈(a,b)."],
      ["Algebra of continuous functions", "f,g continuous at a ⟹ f+g, f−g, fg, f/g (g(a)≠0), f∘g all continuous at a."],
    ],
    concepts: [
      ["The 3-condition continuity check — exam procedure", "NIMCET pattern: 'Find k so that f(x) is continuous at x=a.' Procedure: (1) Compute LHL using the piece for x<a. (2) Compute RHL using the piece for x>a. (3) Set LHL=RHL=f(a). (4) Solve for k. Warning: don't skip checking all three equal each other — a common trap is LHL=RHL but ≠ f(a)."],
      ["Types of discontinuity — identification", "Removable: the LIMIT exists but equals something different from f(a) (or f(a) is undefined). The graph has a hole. Fix: redefine f(a)=limit value. Jump: LHL and RHL both exist but differ. Graph has a gap/step at x=a. Non-fixable. Infinite: limit = ±∞. Vertical asymptote. Oscillatory: function oscillates infinitely near x=a (e.g., sin(1/x) at x=0). Limit doesn't exist due to oscillation."],
      ["Intermediate Value Theorem — proof structure", "IVT doesn't find c — it guarantees existence. Classic exam proof format: (1) Define f(x) = (expression from equation). (2) State f is continuous on [a,b] and WHY (polynomial, rational with no singularity, etc.). (3) Compute f(a) and f(b). (4) Verify they have opposite signs. (5) Conclude by IVT: ∃ c∈(a,b) with f(c)=0. Always write 'by the Intermediate Value Theorem' explicitly."],
      ["Continuity vs differentiability", "Differentiable at a ⟹ Continuous at a. The CONVERSE IS FALSE. Counterexample: f(x)=|x| is continuous everywhere but NOT differentiable at x=0 (corner). Differentiability requires the derivative to exist: lim(h→0)[f(a+h)−f(a)]/h must exist AND be the same from both sides. This distinction is directly tested."],
    ],
    examples: [
      {
        q: "Find k so that f(x) = {kx²+1, x≤2; 3x−1, x>2} is continuous at x=2.",
        steps: [
          "LHL: lim(x→2⁻) f(x) = k(2²)+1 = 4k+1",
          "RHL: lim(x→2⁺) f(x) = 3(2)−1 = 5",
          "f(2) = k(4)+1 = 4k+1  (using x≤2 piece)",
          "Continuity: LHL = RHL = f(2)  →  4k+1 = 5",
          "4k = 4  →  k = 1",
        ],
      },
      {
        q: "Identify the type of discontinuity of f(x) = (x²−9)/(x−3) at x=3.",
        steps: [
          "f(3): denominator = 0, numerator = 9−9 = 0 → f(3) is UNDEFINED.",
          "Compute limit: lim(x→3) (x²−9)/(x−3) = lim(x→3) (x+3)(x−3)/(x−3) = lim(x→3)(x+3) = 6.",
          "Limit exists (=6) but f(3) is undefined.",
          "Type: REMOVABLE discontinuity.",
          "Fix: define f(3) = 6 to make continuous.",
        ],
      },
      {
        q: "Prove that 3x³ − x − 5 = 0 has at least one real root in (1,2).",
        steps: [
          "Let f(x) = 3x³−x−5. Polynomial → continuous on [1,2] ✓",
          "f(1) = 3−1−5 = −3 < 0",
          "f(2) = 24−2−5 = 17 > 0",
          "f(1)·f(2) = (−3)(17) < 0 → opposite signs.",
          "By IVT, ∃ c∈(1,2) such that f(c)=0. ✓",
        ],
      },
    ],
    tips: [
      "Piecewise continuity at boundary: compute LHL (using left piece), RHL (using right piece), f(a) (using appropriate piece for equality). All three must match.",
      "IVT proof: state continuity reason → compute f(a) and f(b) → note opposite signs → invoke IVT → conclude. Don't skip any step.",
      "Removable discontinuity: limit exists. Jump: LHL≠RHL (both finite). Infinite: limit=∞. These are the three main types tested.",
      "Differentiability ⟹ continuity. Continuity ⟹/ differentiability. |x| at x=0 is the canonical example of continuous but not differentiable.",
      "For piecewise f: f is differentiable at boundary a only if f is continuous there AND LHL of f'(a) = RHL of f'(a).",
    ],
  },

  diff: {
    title: "Differentiation — Formulas & Rules",
    formulas: [
      ["Power & constants", "d/dx(xⁿ) = nxⁿ⁻¹  |  d/dx(c) = 0  |  d/dx(cx) = c"],
      ["Exponential & logarithm", "d/dx(eˣ)=eˣ  |  d/dx(aˣ)=aˣlna  |  d/dx(lnx)=1/x  |  d/dx(logₐx)=1/(xlna)"],
      ["Trigonometric", "sinx→cosx  |  cosx→−sinx  |  tanx→sec²x  |  cotx→−cosec²x  |  secx→secx tanx  |  cosecx→−cosecx cotx"],
      ["Inverse trig", "sin⁻¹x → 1/√(1−x²)  |  cos⁻¹x → −1/√(1−x²)  |  tan⁻¹x → 1/(1+x²)  |  cot⁻¹x → −1/(1+x²)"],
      ["Product rule", "(fg)' = f'g + fg'"],
      ["Quotient rule", "(f/g)' = (f'g − fg') / g²"],
      ["Chain rule", "d/dx[f(g(x))] = f'(g(x)) · g'(x)   — differentiate outer × derivative of inner"],
      ["Parametric: x=f(t), y=g(t)", "dy/dx = (dy/dt) / (dx/dt)   |   d²y/dx² = (d/dt(dy/dx)) / (dx/dt)"],
      ["Implicit differentiation", "Differentiate both sides w.r.t. x; every y gets multiplied by dy/dx."],
      ["Log differentiation (y=f(x)^g(x))", "ln y = g(x)ln f(x).  Then differentiate implicitly and multiply by y."],
    ],
    concepts: [
      ["Chain rule — worked approach", "d/dx[f(g(x))] = f'(g(x)) × g'(x). Work OUTSIDE IN: differentiate the outer function (keeping inner intact), then multiply by derivative of the inner. Nested example: d/dx[sin(e^(x²))] = cos(e^(x²)) × e^(x²) × 2x. Three layers: outer=sin, middle=exp, inner=x². Apply from outside to inside, multiply each step."],
      ["Implicit differentiation — step-by-step", "When y is not explicitly solved: (1) Differentiate every term w.r.t. x. (2) Every occurrence of y gets multiplied by dy/dx (chain rule, since y is a function of x). (3) Collect all dy/dx terms on one side. (4) Factor out dy/dx. (5) Divide to isolate dy/dx. Example: for x²+y²=25 → 2x+2y(dy/dx)=0 → dy/dx = −x/y."],
      ["Logarithmic differentiation — when and how", "Use for: (a) y=[f(x)]^g(x) where both base and exponent contain x. (b) Products/quotients of many factors (log converts × to +, ÷ to −). Procedure: take ln both sides, differentiate, multiply by y. Classic: y=xˣ → lny=xlnx → (1/y)y'=lnx+1 → y'=xˣ(lnx+1). For y=(sinx)^(tanx): lny=tanx·ln(sinx) → differentiate the right side using product rule."],
      ["Second and higher derivatives", "Second derivative f''(x) = d²y/dx² measures concavity. f''(x)>0 → curve concave UP (∪ shape). f''(x)<0 → concave DOWN (∩ shape). Standard second derivatives: d²/dx²(sinx)=−sinx. d²/dx²(eˣ)=eˣ. d²/dx²(xⁿ)=n(n−1)xⁿ⁻². nth derivative of eˣ = eˣ. nth derivative of sin x = sin(x+nπ/2). nth derivative of xⁿ = n! (then zero)."],
    ],
    examples: [
      {
        q: "Differentiate: y = ln(sin x + cos x)",
        steps: [
          "Use chain rule: d/dx[ln(u)] = (1/u) × u'",
          "u = sinx + cosx,   u' = cosx − sinx",
          "dy/dx = (cosx − sinx)/(sinx + cosx)",
        ],
      },
      {
        q: "Differentiate: y = (x²+1)·eˣ·sinx",
        steps: [
          "Three-factor product: use (uvw)' = u'vw + uv'w + uvw'",
          "u=x²+1, v=eˣ, w=sinx",
          "u'=2x, v'=eˣ, w'=cosx",
          "dy/dx = 2x·eˣ·sinx + (x²+1)·eˣ·sinx + (x²+1)·eˣ·cosx",
          "= eˣ[2x sinx + (x²+1)sinx + (x²+1)cosx]",
        ],
      },
      {
        q: "Find dy/dx: x²+xy+y²=7 (implicit)",
        steps: [
          "Differentiate both sides w.r.t. x:",
          "2x + (1·y + x·dy/dx) + 2y·dy/dx = 0",
          "2x + y + x(dy/dx) + 2y(dy/dx) = 0",
          "(dy/dx)(x+2y) = −(2x+y)",
          "dy/dx = −(2x+y)/(x+2y)",
        ],
      },
      {
        q: "Differentiate using log differentiation: y = (cos x)^(sin x)",
        steps: [
          "ln y = sinx · ln(cosx)",
          "Differentiate: (1/y)·dy/dx = cosx·ln(cosx) + sinx·(−sinx/cosx)",
          "= cosx·ln(cosx) − sin²x/cosx",
          "dy/dx = y·[cosx·ln(cosx) − sin²x/cosx]",
          "= (cosx)^(sinx) · [cosx·ln(cosx) − sin²x/cosx]",
        ],
      },
    ],
    tips: [
      "Chain rule: 'derivative of outside × derivative of inside'. Never change the inside function until you explicitly differentiate it.",
      "Product rule mnemonic: 'd(uv) = v·du + u·dv'. Say aloud: 'second×d-first plus first×d-second'. Works for 3 factors too: (uvw)'=u'vw+uv'w+uvw'.",
      "Quotient rule: (LOW·dHIGH − HIGH·dLOW) / LOW². Lower function on top, minus, upper function × derivative of lower.",
      "d/dx(tan⁻¹x) = 1/(1+x²) and d/dx(sin⁻¹x) = 1/√(1−x²). These are the two most commonly tested inverse trig derivatives in NIMCET.",
      "For implicit: every y-term gets dy/dx. Clear example: d/dx(y³) = 3y²·dy/dx. Then collect dy/dx on left side.",
    ],
  },

  appd: {
    title: "Applications — Tangent, Normal, Maxima & Minima",
    formulas: [
      ["Slope of tangent at (x₁,y₁)", "m_t = (dy/dx) evaluated at (x₁,y₁)"],
      ["Equation of tangent", "y − y₁ = m_t (x − x₁)"],
      ["Slope of normal", "m_n = −1/m_t   (perpendicular → negative reciprocal)"],
      ["Equation of normal", "y − y₁ = (−1/m_t)(x − x₁)"],
      ["Tangent parallel to x-axis", "dy/dx = 0  (horizontal tangent)"],
      ["Tangent perpendicular to x-axis", "dy/dx → ∞  (vertical tangent, dx/dy = 0)"],
      ["Critical points", "f'(x) = 0  OR  f'(x) does not exist"],
      ["First derivative test", "f'(+→−) at c → max.   f'(−→+) at c → min.   No change → neither."],
      ["Second derivative test", "f'(c)=0 AND f''(c)<0 → local max.   f''(c)>0 → local min.   f''(c)=0 → inconclusive."],
      ["Increasing/Decreasing", "f'(x)>0 → increasing.   f'(x)<0 → decreasing."],
    ],
    concepts: [
      ["Tangent and normal — full procedure", "Step 1: Differentiate y=f(x) to get dy/dx. Step 2: Substitute (x₁,y₁) to get slope m=f'(x₁). Step 3: Tangent: y−y₁=m(x−x₁) → simplify to y=mx+c form. Step 4: Normal: slope=−1/m, same point: y−y₁=−(1/m)(x−x₁). Special: if m=0 (horizontal tangent): tangent is y=y₁, normal is x=x₁. If m=∞ (vertical tangent): tangent is x=x₁, normal is y=y₁."],
      ["Finding maxima/minima — 5-step method", "Step 1: Find f'(x). Step 2: Solve f'(x)=0 (and find where f'(x) undefined). Step 3: These are critical points. Step 4a (First derivative test): check sign of f'(x) to left and right of each critical point. Step 4b (Second derivative test): compute f''(c). If negative → max; positive → min; zero → use first derivative test. Step 5: Compute f(c) to get the maximum/minimum VALUE. NIMCET usually asks for the VALUE, not just where it occurs."],
      ["Absolute extrema on a closed interval [a,b]", "Method: (1) Find all critical points in the OPEN interval (a,b). (2) Evaluate f at critical points. (3) Evaluate f at BOTH endpoints a and b. (4) The largest value = absolute maximum. The smallest = absolute minimum. Students most commonly err by forgetting to check endpoint values. Critical points give local extrema; global extrema could be at endpoints."],
      ["Monotonicity — intervals of increase/decrease", "Step 1: Compute f'(x). Step 2: Find all critical points (f'=0 or undefined). Step 3: These divide the number line into intervals. Step 4: Test the sign of f'(x) in each interval using any test point. Step 5: f'>0 → increasing, f'<0 → decreasing. NIMCET format: 'Find the interval(s) where f(x)=x³−6x²+9x+1 is increasing' → find f'>0."],
    ],
    examples: [
      {
        q: "Find equations of tangent and normal to y = x³ − x at (1, 0).",
        steps: [
          "dy/dx = 3x²−1. At x=1: m_t = 3(1)²−1 = 2.",
          "Tangent: y−0 = 2(x−1) → y = 2x−2.",
          "Normal slope: m_n = −1/2.",
          "Normal: y−0 = −(1/2)(x−1) → 2y = −x+1 → x+2y=1.",
        ],
      },
      {
        q: "Find local maxima and minima of f(x) = 2x³−9x²+12x+3.",
        steps: [
          "f'(x) = 6x²−18x+12 = 6(x²−3x+2) = 6(x−1)(x−2)",
          "Critical points: x=1 and x=2",
          "f''(x) = 12x−18",
          "At x=1: f''(1)=12−18=−6<0 → LOCAL MAXIMUM. f(1)=2−9+12+3=8",
          "At x=2: f''(2)=24−18=6>0 → LOCAL MINIMUM. f(2)=16−36+24+3=7",
        ],
      },
      {
        q: "Find intervals where f(x) = 2x³+3x²−12x+1 is increasing.",
        steps: [
          "f'(x) = 6x²+6x−12 = 6(x²+x−2) = 6(x+2)(x−1)",
          "Critical points: x=−2, x=1",
          "Sign of f'(x): x<−2: (+)(−)→negative. −2<x<1: (+)(−) ... (x+2>0,x−1<0)→negative.",
          "Wait: for x<−2: (x+2)<0 and (x−1)<0 → product positive → f'>0 (increasing).",
          "−2<x<1: (x+2)>0, (x−1)<0 → product negative → f'<0 (decreasing).",
          "x>1: both positive → f'>0 (increasing).",
          "Increasing on (−∞,−2) ∪ (1,∞).",
        ],
      },
      {
        q: "A rectangle has perimeter 40. Find dimensions that maximize area.",
        steps: [
          "Let width=x. Then 2x+2l=40 → l=20−x.",
          "Area A = x(20−x) = 20x−x²",
          "dA/dx = 20−2x. Set to 0: x=10.",
          "d²A/dx² = −2 < 0 → maximum at x=10.",
          "Dimensions: x=10, l=10 (square gives maximum area).",
          "Maximum area = 10×10 = 100 sq units.",
        ],
      },
    ],
    tips: [
      "Normal slope = −1/m_t (negative reciprocal of tangent). Tangent and normal are always perpendicular to each other.",
      "Absolute max/min: ALWAYS evaluate f at critical points AND at both endpoints. Never skip endpoints — the global extremum may be there.",
      "f''(c)<0 → 'frowning' curve → maximum. f''(c)>0 → 'smiling' curve → minimum. Visual: concave down = max, concave up = min.",
      "Sign change of f': if f' changes from + to − → maximum. − to + → minimum. No sign change → saddle point (neither).",
      "Optimization problems: define variables clearly, write objective function (area, volume, etc.), write constraint, substitute constraint, differentiate, set to zero.",
    ],
  },

  mvt: {
    title: "Rolle's Theorem & Mean Value Theorem",
    formulas: [
      ["Rolle's Theorem — 3 conditions", "1. f continuous on [a,b].  2. f differentiable on (a,b).  3. f(a) = f(b)."],
      ["Rolle's — conclusion", "∃ c ∈ (a,b) such that f'(c) = 0   (horizontal tangent exists inside)"],
      ["MVT (Lagrange's) — conditions", "1. f continuous on [a,b].  2. f differentiable on (a,b)."],
      ["MVT — conclusion", "∃ c ∈ (a,b) such that f'(c) = [f(b)−f(a)] / (b−a)"],
      ["MVT geometric interpretation", "Tangent slope at c = slope of secant line through (a,f(a)) and (b,f(b))."],
      ["Rolle's from MVT", "When f(a)=f(b): average rate = 0 → f'(c)=0. Rolle's is a special case of MVT."],
      ["MVT consequence 1", "f'(x)=0 for all x ∈ [a,b] ⟹ f is constant on [a,b]."],
      ["MVT consequence 2", "f'(x)>0 on (a,b) ⟹ f is strictly increasing on [a,b]."],
    ],
    concepts: [
      ["Rolle's theorem — applying it and finding c", "Verification steps: (1) State f is continuous on [a,b] with justification (polynomial, trig, etc.). (2) State f is differentiable on (a,b) with justification. (3) Verify f(a)=f(b) by direct computation. (4) Conclude: ∃ c∈(a,b) with f'(c)=0. Finding c: Compute f'(x), set f'(x)=0, solve, verify the solution lies inside (a,b). If solution not in (a,b), you've made an error — recheck."],
      ["MVT — finding c and using it", "MVT gives the equation f'(c)=[f(b)−f(a)]/(b−a). To find c: (1) Compute the right side (average rate of change). (2) Set f'(x) = that value. (3) Solve for x = c. (4) Verify c ∈ (a,b). Key uses: proving inequalities (|sin b − sin a| ≤ |b−a|), estimating function values, comparing f(b) and f(a) when f' is bounded."],
      ["Proving inequalities using MVT", "Step 1: Apply MVT on [a,b] to get f(b)−f(a) = f'(c)(b−a) for some c∈(a,b). Step 2: Bound f'(c) using known constraints. Step 3: Derive the inequality. Example: Prove |sin a − sin b| ≤ |a−b|. MVT on sin: cos(c)(a−b) = sin a − sin b. Take absolute value: |sin a − sin b| = |cos c||a−b| ≤ |a−b| since |cos c| ≤ 1. ✓"],
      ["When theorems CANNOT be applied", "Conditions are NECESSARY, not just stated. If any condition fails, the theorem is inapplicable (but the conclusion MIGHT still be true by coincidence). Failed condition examples: f(x)=|x| on [−1,1] — not differentiable at x=0 (Rolle's fails condition 2). f(x)=1/x on [−1,1] — not continuous at x=0 (both theorems fail condition 1). NIMCET asks: 'Which condition of Rolle's theorem fails?' → identify the violated condition."],
    ],
    examples: [
      {
        q: "Verify Rolle's theorem for f(x) = sin x on [0, π] and find c.",
        steps: [
          "1. sin x is continuous on [0,π] ✓ (trig function, continuous everywhere)",
          "2. sin x is differentiable on (0,π) ✓",
          "3. f(0) = sin 0 = 0.   f(π) = sin π = 0.   f(0) = f(π) ✓",
          "All conditions met → ∃ c∈(0,π) with f'(c)=0.",
          "f'(x) = cos x. Set cos c = 0: c = π/2.",
          "π/2 ∈ (0,π) ✓. Verified with c = π/2.",
        ],
      },
      {
        q: "Apply MVT to f(x) = x² − 4x + 1 on [1, 4] and find c.",
        steps: [
          "Polynomial → continuous on [1,4], differentiable on (1,4) ✓",
          "Average rate = [f(4)−f(1)]/(4−1) = [(16−16+1)−(1−4+1)]/3 = [1−(−2)]/3 = 3/3 = 1",
          "f'(x) = 2x−4. Set f'(c)=1: 2c−4=1 → c=5/2=2.5",
          "c=2.5 ∈ (1,4) ✓. MVT satisfied with c=5/2.",
        ],
      },
      {
        q: "Can Rolle's theorem be applied to f(x)=x^(2/3) on [−1,1]?",
        steps: [
          "Check condition 1: x^(2/3) is continuous on [−1,1] ✓",
          "Check condition 2: f'(x) = (2/3)x^(−1/3) = 2/(3x^(1/3)). At x=0: f'(0) = 2/0 = undefined.",
          "f is NOT differentiable at x=0 ∈ (−1,1) → Condition 2 FAILS.",
          "Check condition 3: f(−1) = 1 = f(1) ✓ (condition 3 holds)",
          "Rolle's theorem CANNOT be applied — condition 2 (differentiability) fails.",
          "Note: Even though f(−1)=f(1), there may not be a point with f'=0 (and indeed f'≠0 anywhere in (−1,1) except it's undefined at 0).",
        ],
      },
    ],
    tips: [
      "Rolle's three conditions: continuous on [a,b] (closed), differentiable on (a,b) (open), f(a)=f(b). Check ALL three before applying.",
      "MVT finding c: compute [f(b)−f(a)]/(b−a) first, then set f'(c) equal to this value and solve. Always confirm c∈(a,b).",
      "Rolle's is just MVT with f(a)=f(b), making the average rate=0, so f'(c)=0. Remember this connection.",
      "Inequality proofs with MVT: the key step is bounding f'(c) using known properties of f'. |cos c|≤1, |sin c|≤1 are standard bounds.",
      "Rolle's fails if: (1) f is not continuous (removable/jump/infinite discontinuity). (2) f is not differentiable (corner, cusp, vertical tangent). (3) f(a)≠f(b). Find which fails!",
    ],
  },

  integ: {
    title: "Integration Techniques — By Parts, Substitution, Partial Fractions",
    formulas: [
      ["Standard: polynomial & log", "∫xⁿ dx = xⁿ⁺¹/(n+1)+C (n≠−1)  |  ∫1/x dx = ln|x|+C"],
      ["Standard: exponential", "∫eˣ dx = eˣ+C  |  ∫aˣ dx = aˣ/lna+C"],
      ["Standard: trig", "∫sinx dx=−cosx+C  |  ∫cosx dx=sinx+C  |  ∫sec²x dx=tanx+C  |  ∫cosec²x dx=−cotx+C"],
      ["Standard: trig (sec,cosec)", "∫secx tanx dx=secx+C  |  ∫cosecx cotx dx=−cosecx+C  |  ∫tanx dx=ln|secx|+C  |  ∫cotx dx=ln|sinx|+C"],
      ["Standard: inverse trig", "∫1/√(a²−x²) dx = sin⁻¹(x/a)+C  |  ∫1/(a²+x²) dx = (1/a)tan⁻¹(x/a)+C"],
      ["Standard: log forms", "∫1/(x²−a²) dx = (1/2a)ln|(x−a)/(x+a)|+C  |  ∫1/√(x²±a²) dx = ln|x+√(x²±a²)|+C"],
      ["Integration by parts (ILATE)", "∫u·v dx = u∫v dx − ∫[u'·∫v dx] dx.  u chosen by ILATE: Inverse trig > Log > Algebraic > Trig > Exponential"],
      ["Special: eˣ·f formula", "∫eˣ[f(x)+f'(x)] dx = eˣ·f(x) + C  (memorize directly)"],
      ["Substitution", "∫f(g(x))·g'(x) dx = ∫f(u) du,  u=g(x),  du=g'(x)dx"],
      ["Log-substitution shortcut", "∫f'(x)/f(x) dx = ln|f(x)|+C   (numerator = derivative of denominator)"],
    ],
    concepts: [
      ["Integration by parts — choosing u and v", "ILATE gives the priority for choosing u (the function to differentiate). The other function is v (to integrate). Higher in ILATE → u. Examples: ∫x sinx dx: x=Algebraic, sinx=Trig → u=x, v=sinx. ∫x ln x dx: ln x=Logarithmic, x=Algebraic → u=ln x, v=x. ∫ln x dx: treat as ln x × 1 → u=ln x, v=1. Special case ∫eˣsinx dx: apply by parts TWICE, get I on both sides, solve algebraically."],
      ["Integration by substitution — identifying the substitution", "Look for the pattern: the integrand contains f(g(x)) × g'(x). Then u=g(x), du=g'(x)dx. Common patterns: ∫sin(x²)·2x dx → u=x². ∫√(1+eˣ)·eˣ dx → u=1+eˣ. ∫f'(x)/f(x) dx → u=f(x). For √(a²−x²): x=a sinθ. For √(a²+x²): x=a tanθ. For 1/(1+e^(f(x))): multiply top and bottom by e^(−f(x)). After substituting, integrate in u, then back-substitute."],
      ["Partial fractions — when and how", "Use when integrand is a rational function P(x)/Q(x). Prerequisite: deg(P) < deg(Q). If not, do LONG DIVISION first. Then factor Q(x): (1) Linear distinct factors (x−a)(x−b): A/(x−a)+B/(x−b). (2) Repeated linear (x−a)²: A/(x−a)+B/(x−a)². (3) Irreducible quadratic (x²+bx+c): (Bx+C)/(x²+bx+c). After writing, clear denominators, substitute convenient x-values to find A,B,C quickly. Then integrate each simple fraction."],
      ["Trig substitution — when to use and which", "Integrate when the integrand contains: √(a²−x²) → substitute x=a sinθ (uses 1−sin²=cos²). √(a²+x²) → x=a tanθ (uses 1+tan²=sec²). √(x²−a²) → x=a secθ (uses sec²−1=tan²). After substitution: simplify using the appropriate Pythagorean identity, integrate in θ, then back-substitute using the triangle: if x=a sinθ → sinθ=x/a, cosθ=√(a²−x²)/a."],
    ],
    examples: [
      {
        q: "Evaluate: ∫x²·eˣ dx  (by parts, twice)",
        steps: [
          "First application: u=x², v=eˣ. du=2x dx, ∫v=eˣ",
          "= x²eˣ − ∫2x·eˣ dx",
          "Second application on ∫2x·eˣ dx: u=2x, v=eˣ. du=2dx, ∫v=eˣ",
          "= x²eˣ − [2xeˣ − ∫2eˣ dx]",
          "= x²eˣ − 2xeˣ + 2eˣ + C = eˣ(x²−2x+2) + C",
        ],
      },
      {
        q: "Evaluate: ∫tan x / (1 + cos²x) dx  (substitution)",
        steps: [
          "∫sinx/(cosx·(1+cos²x)) dx. Let u=cosx, du=−sinx dx.",
          "= ∫(−1)/(u(1+u²)) du",
          "Partial fractions: 1/(u(1+u²)) = 1/u − u/(1+u²)",
          "= −[ln|u| − (1/2)ln(1+u²)] + C",
          "= −ln|cosx| + (1/2)ln(1+cos²x) + C",
        ],
      },
      {
        q: "Evaluate: ∫(2x+1)/[(x+1)(x+2)] dx  (partial fractions)",
        steps: [
          "(2x+1)/[(x+1)(x+2)] = A/(x+1) + B/(x+2)",
          "Multiply: 2x+1 = A(x+2) + B(x+1)",
          "x=−1: −1 = A(1) → A = −1",
          "x=−2: −3 = B(−1) → B = 3",
          "∫dx = ∫[−1/(x+1) + 3/(x+2)]dx = −ln|x+1| + 3ln|x+2| + C",
        ],
      },
      {
        q: "Evaluate: ∫eˣ(sin x + cos x) dx",
        steps: [
          "Recognize the pattern: ∫eˣ[f(x)+f'(x)] dx = eˣ·f(x)+C",
          "Here: if f(x)=sinx, then f'(x)=cosx.",
          "So ∫eˣ(sinx+cosx) dx = eˣ·sinx + C",
          "Direct application of the memorized formula.",
        ],
      },
    ],
    tips: [
      "ILATE for by-parts: the first function mentioned in ILATE is u (differentiate it). The last one is v (integrate it). Never integrate ln x or inverse trig directly — always make them u.",
      "∫eˣ[f(x)+f'(x)]dx = eˣf(x)+C — memorize this directly. Recognize the pattern instantly. Common question type.",
      "∫f'(x)/f(x) dx = ln|f(x)|+C — whenever numerator is the derivative of denominator, answer is ln of denominator.",
      "Partial fractions: substitute x = root of each factor to find constants. x=a gives A instantly. x=b gives B instantly. Much faster than comparing coefficients.",
      "Trig substitution: √(a²−x²)→x=asinθ. √(a²+x²)→x=atanθ. √(x²−a²)→x=asecθ. The pattern: whichever identity eliminates the square root.",
    ],
  },

  defint: {
    title: "Definite Integrals, Odd/Even/Periodic Functions & Area",
    formulas: [
      ["Fundamental theorem", "∫ₐᵇ f(x) dx = F(b)−F(a)  where F'(x)=f(x)"],
      ["P1: Reversal", "∫ₐᵇ f(x) dx = −∫ᵦᵃ f(x) dx"],
      ["P2: Splitting", "∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫ᶜᵇ f(x) dx   (any c, even outside [a,b])"],
      ["P3: Reflection", "∫₀ᵃ f(x) dx = ∫₀ᵃ f(a−x) dx"],
      ["P4: King's rule ★", "∫ₐᵇ f(x) dx = ∫ₐᵇ f(a+b−x) dx"],
      ["Even function (f(−x)=f(x))", "∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx"],
      ["Odd function (f(−x)=−f(x))", "∫₋ₐᵃ f(x) dx = 0"],
      ["Periodic function (period T)", "∫₀ⁿᵀ f(x) dx = n·∫₀ᵀ f(x) dx   |   ∫ₐᵃ⁺ᵀ f(x) dx = ∫₀ᵀ f(x) dx"],
      ["Area under curve", "A = ∫ₐᵇ |f(x)| dx   (absolute value ensures positive area)"],
      ["Area between two curves", "A = ∫ₐᵇ [f(x)−g(x)] dx   where f(x)≥g(x) on [a,b]"],
    ],
    concepts: [
      ["King's rule — the most powerful property", "∫ₐᵇ f(x)dx = ∫ₐᵇ f(a+b−x)dx (replacing x by a+b−x). Add both versions: 2I = ∫ₐᵇ [f(x)+f(a+b−x)]dx. If the sum f(x)+f(a+b−x) simplifies to a constant k: 2I = k(b−a) → I = k(b−a)/2. NIMCET application: ∫₀^π x·sinx dx: use King's (x→π−x), add: 2I=π∫₀^π sinx dx=π[−cosx]₀^π=2π → I=π. Also: ∫₀^(π/2) ln(sinx)dx = ∫₀^(π/2) ln(cosx)dx by reflection property."],
      ["Even and odd functions — quick identification", "Even: f(−x)=f(x). Graph is symmetric about y-axis. Examples: x², x⁴, cosx, |x|, cosh x. ∫₋ₐᵃ even dx = 2∫₀ᵃ. Odd: f(−x)=−f(x). Graph is symmetric about origin. Examples: x, x³, sinx, tanx, sinh x. ∫₋ₐᵃ odd dx = 0 ALWAYS. Sum/product rules: even+even=even, odd+odd=odd, even+odd=neither, even×even=even, odd×odd=EVEN, even×odd=odd."],
      ["Area computation — systematic approach", "Step 1: SKETCH the region (even rough sketch identifies which curve is above). Step 2: Find intersection points (set curves equal and solve). Step 3: Determine which function is greater on the interval. Step 4: Integrate (upper−lower) from a to b. If curves cross: split at the crossing point and integrate each sub-region separately. For areas bounded by y-axis (in terms of y): A=∫_c^d [x_right(y)−x_left(y)] dy."],
      ["Definite integrals of trig functions", "Standard results: ∫₀^(π/2) sinx dx = 1. ∫₀^π sinx dx = 2. ∫₀^(π/2) sin²x dx = π/4. ∫₀^(π/2) cos²x dx = π/4. Key: ∫₀^(π/2) sinⁿx dx = ∫₀^(π/2) cosⁿx dx (both equal — use this to swap sin and cos in definite integrals). ∫₀^(2π) sinx dx = 0 (full period of odd-symmetric function). Wallis: for n even, this equals (n−1)!!/n!! × π/2. Know the result for n=2: π/4."],
    ],
    examples: [
      {
        q: "Evaluate: ∫₋₂² (x⁴ + sinx + x³cosx) dx",
        steps: [
          "Check parity of each term: x⁴ is EVEN (f(−x)=x⁴=f(x)).",
          "sin x is ODD.  x³cosx: f(−x)=(−x)³cos(−x)=−x³cosx=−f(x) → ODD.",
          "∫₋₂² (even)dx = 2∫₀² (even)dx. ∫₋₂² (odd)dx = 0.",
          "Answer = 2∫₀² x⁴ dx = 2[x⁵/5]₀² = 2·32/5 = 64/5.",
        ],
      },
      {
        q: "Evaluate: I = ∫₀^π x/(1+sinx) dx using King's rule.",
        steps: [
          "I = ∫₀^π x/(1+sinx) dx",
          "King's (a+b−x = π−x): I = ∫₀^π (π−x)/(1+sin(π−x)) dx = ∫₀^π (π−x)/(1+sinx) dx",
          "[since sin(π−x)=sinx]",
          "Add: 2I = ∫₀^π [x+(π−x)]/(1+sinx) dx = π∫₀^π 1/(1+sinx) dx",
          "∫1/(1+sinx)dx = ∫(1−sinx)/cos²x dx = tanx−secx. Evaluate from 0 to π: (−∞...).",
          "This is an improper integral; requires careful handling. 2I = π·[2] = 2π → I = π.",
        ],
      },
      {
        q: "Find area enclosed by y = x² and y = 2x.",
        steps: [
          "Intersections: x²=2x → x(x−2)=0 → x=0 and x=2.",
          "On [0,2]: check x=1: y=2x=2 > y=x²=1. So 2x ≥ x² on [0,2] ✓",
          "Area = ∫₀² (2x−x²) dx = [x²−x³/3]₀²",
          "= (4−8/3)−0 = 12/3−8/3 = 4/3",
        ],
      },
      {
        q: "Find the area between y = sinx and the x-axis from x=0 to x=2π.",
        steps: [
          "sinx changes sign at x=π. Cannot directly integrate from 0 to 2π.",
          "A = ∫₀^π sinx dx + |∫^(2π)_π sinx dx|",
          "∫₀^π sinx dx = [−cosx]₀^π = −cosπ+cos0 = 1+1 = 2",
          "|∫_π^(2π) sinx dx| = |[−cosx]_π^(2π)| = |−cos2π+cosπ| = |−1−1| = 2",
          "Total area = 2+2 = 4",
        ],
      },
    ],
    tips: [
      "King's rule: ∫ₐᵇ f(x)dx = ∫ₐᵇ f(a+b−x)dx. Add both: 2I = ∫[f(x)+f(a+b−x)]dx. When the sum is constant or integrable easily → done. Practice recognizing when to use it.",
      "Odd function over symmetric interval = 0. ALWAYS check parity FIRST — saves 90% of the computation for problems like ∫₋ₐᵃ (polynomial with odd powers + odd trig) dx.",
      "Area when curve crosses x-axis: SPLIT at zeros, integrate each piece with |f(x)|, add absolute values. Never just blindly integrate — you'll get net area (which cancels).",
      "∫₀^(π/2) sinⁿx dx = ∫₀^(π/2) cosⁿx dx for ALL n. This allows you to swap sin for cos in definite integrals over [0, π/2] freely.",
      "Periodic functions: ∫₀^(nT) = n×∫₀^T. If asked for ∫₀^(10π) sin x dx: period T=2π, n=5, so = 5×∫₀^(2π) sinx dx = 5×0 = 0.",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("func");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* Header */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP — MATHEMATICS
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>Calculus</div>
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

        <div style={{ textAlign: "center", color: "#bbb", fontSize: "10px", paddingTop: "12px", borderTop: "1px solid #e8e4da", fontStyle: "italic" }}>
          NIMCET Official Syllabus · Calculus · Study smart, then grind PYQs 🎯
        </div>
      </div>
    </div>
  );
}
