import { useState } from "react";

const TABS = [
  { id: "prob",    label: "🎲 Probability" },
  { id: "avg",     label: "📊 Averages" },
  { id: "bayes",   label: "🔄 Bayes' theorem" },
  { id: "central", label: "📈 Mean / median / mode" },
  { id: "disp",    label: "📉 Dispersion" },
  { id: "mom",     label: "⚡ Moments" },
  { id: "freq",    label: "📋 Frequency dist." },
];

const DATA = {
  prob: {
    title: "Basic probability theory",
    formulas: [
      ["Classical probability",      "P(A) = n(A) / n(S)"],
      ["Complement rule",            "P(Aᶜ) = 1 − P(A)"],
      ["Addition rule",              "P(A∪B) = P(A) + P(B) − P(A∩B)"],
      ["Mutually exclusive",         "P(A∪B) = P(A) + P(B),  if A∩B = ∅"],
      ["Conditional probability",    "P(A|B) = P(A∩B) / P(B)"],
      ["Multiplication rule",        "P(A∩B) = P(A) · P(B|A)"],
      ["Independent events",         "P(A∩B) = P(A) · P(B)"],
      ["At least one",               "P(at least one) = 1 − P(none)"],
      ["De Morgan's law",            "P((A∪B)ᶜ) = P(Aᶜ∩Bᶜ)"],
    ],
    concepts: [
      ["Sample space",                  "S = set of all possible outcomes. Single die: n(S)=6. Two dice: n(S)=36. Two cards from 52: C(52,2)=1326. Constraints: 0 ≤ P(A) ≤ 1 and P(S)=1."],
      ["Mutually exclusive vs independent", "Mutually exclusive: cannot both occur — P(A∩B)=0. Independent: knowing one doesn't change the probability of the other — P(A|B)=P(A). The two concepts are different and must not be confused."],
      ["Exhaustive events",             "A₁,A₂,...,Aₙ are exhaustive if their union = S. If also mutually exclusive: ΣP(Aᵢ)=1."],
      ["Card facts to memorize",        "52 total. 4 suits × 13 cards. 4 aces, 4 kings, 4 queens, 4 jacks. 12 face cards total. 26 red (hearts + diamonds), 26 black (clubs + spades)."],
      ["Independence preserved",        "If A and B are independent, then Aᶜ & B, A & Bᶜ, and Aᶜ & Bᶜ are all also mutually independent pairs."],
    ],
    examples: [
      {
        q: "Two cards drawn from a 52-card deck without replacement. P(both are kings)?",
        steps: [
          "Total outcomes = C(52,2) = 1326",
          "Favorable = C(4,2) = 6",
          "P = 6/1326 = 1/221 ≈ 0.0045",
        ],
      },
      {
        q: "P(A)=0.6, P(B)=0.4, P(A∩B)=0.2. Find P(A∪B) and P(A|B).",
        steps: [
          "P(A∪B) = 0.6 + 0.4 − 0.2 = 0.8",
          "P(A|B) = P(A∩B)/P(B) = 0.2/0.4 = 0.5",
        ],
      },
      {
        q: "Bag: 3 red, 4 blue. Two drawn without replacement. P(both red)?",
        steps: [
          "Method 1 — counting: C(3,2)/C(7,2) = 3/21 = 1/7",
          "Method 2 — chain rule: (3/7)×(2/6) = 6/42 = 1/7  ✓",
        ],
      },
      {
        q: "P(A)=1/4, P(B)=1/3, A and B are independent. Find P(Aᶜ∩Bᶜ).",
        steps: [
          "P(Aᶜ)=3/4,  P(Bᶜ)=2/3",
          "If A,B independent → Aᶜ,Bᶜ also independent",
          "P(Aᶜ∩Bᶜ) = (3/4)×(2/3) = 1/2",
        ],
      },
    ],
    tips: [
      "'At least one' problems: always use 1−P(none). Far faster than summing individual cases.",
      "Two dice: P(sum=7)=6/36=1/6 (highest). P(sum=2)=P(sum=12)=1/36 (lowest).",
      "'Without replacement' → dependent events. 'With replacement' → independent.",
      "NIMCET loves: given P(A), P(B), P(A|B), find P(A∪B). Find P(A∩B) first, then add.",
      "Verify independence by checking P(A∩B) = P(A)×P(B). Don't assume it.",
    ],
  },

  avg: {
    title: "Averages — AM, GM and HM",
    formulas: [
      ["Arithmetic mean (AM)",   "AM = (a₁ + a₂ + ··· + aₙ) / n"],
      ["Geometric mean (GM)",    "GM = (a₁ × a₂ × ··· × aₙ)^(1/n)"],
      ["Harmonic mean (HM)",     "HM = n / (1/a₁ + 1/a₂ + ··· + 1/aₙ)"],
      ["Two numbers a, b",       "AM=(a+b)/2,   GM=√(ab),   HM=2ab/(a+b)"],
      ["Key relation (2 numbers)","AM × HM = GM²"],
      ["Fundamental inequality", "AM ≥ GM ≥ HM  (equality iff all values are equal)"],
      ["Weighted AM",            "x̄ = (Σwᵢxᵢ) / (Σwᵢ)"],
    ],
    concepts: [
      ["When to use AM", "General-purpose average. Best for values with equal importance. Sensitive to outliers."],
      ["When to use GM", "For ratios, percentages and rates of growth. Example: average annual growth rate over multiple years."],
      ["When to use HM", "For rates (speed, flow rate, work rate). Use when the quantity in the denominator is the one being averaged."],
      ["Average speed rule", "Equal distances at different speeds → HM. Equal time at different speeds → AM. This distinction is very frequently tested in NIMCET."],
      ["Key inequality detail", "AM = GM = HM only when all values are equal. For any two unequal positive numbers: AM > GM > HM strictly."],
    ],
    examples: [
      {
        q: "Find AM, GM and HM of 4 and 16. Verify AM × HM = GM².",
        steps: [
          "AM = (4+16)/2 = 10",
          "GM = √(4×16) = √64 = 8",
          "HM = 2(4)(16)/(4+16) = 128/20 = 6.4",
          "AM × HM = 10 × 6.4 = 64 = 8² = GM²   ✓",
          "Order: 10 ≥ 8 ≥ 6.4   ✓",
        ],
      },
      {
        q: "A car travels 120 km at 40 km/h and 120 km at 60 km/h. Average speed?",
        steps: [
          "Equal distances → use HM of speeds",
          "HM = 2(40)(60)/(40+60) = 4800/100 = 48 km/h",
          "Verify: time₁=3h, time₂=2h, total=240km/5h=48 km/h   ✓",
          "⚠ AM = (40+60)/2 = 50 km/h is WRONG here",
        ],
      },
      {
        q: "AM of two numbers is 10, GM is 8. Find the two numbers.",
        steps: [
          "a + b = 20  (AM = 10)",
          "ab = 64     (GM = 8 → GM² = ab = 64)",
          "x² − 20x + 64 = 0  →  (x−4)(x−16) = 0",
          "Numbers are 4 and 16",
        ],
      },
    ],
    tips: [
      "Equal distance → HM of speeds. Equal time → AM of speeds. This is tested every other year.",
      "AM × HM = GM² is valid ONLY for two numbers, not three or more.",
      "Given AM and GM, find HM instantly: HM = GM²/AM.",
      "Three values given (one for each mean) — use AM≥GM≥HM to identify which is which.",
      "For terms in GP: GM of first and last term = middle term.",
    ],
  },

  bayes: {
    title: "Bayes' theorem",
    formulas: [
      ["Total probability theorem",  "P(B) = Σᵢ P(B|Aᵢ) · P(Aᵢ)"],
      ["Bayes' theorem (general)",   "P(Aᵢ|B) = P(Aᵢ)·P(B|Aᵢ) / Σⱼ P(Aⱼ)·P(B|Aⱼ)"],
      ["Bayes' (two hypotheses)",    "P(A|B) = P(A)P(B|A) / [P(A)P(B|A) + P(Aᶜ)P(B|Aᶜ)]"],
    ],
    concepts: [
      ["Prior vs posterior",     "P(Aᵢ) = prior probability (belief BEFORE observing event B). P(Aᵢ|B) = posterior (updated belief AFTER observing B)."],
      ["Conditions required",    "A₁,A₂,...,Aₙ must be (1) mutually exclusive, (2) exhaustive — their union covers all cases, (3) each has positive prior probability."],
      ["Table method (fastest)", "Columns: Event | Prior P(Aᵢ) | P(B|Aᵢ) | Product P(Aᵢ)×P(B|Aᵢ). Sum of all products = P(B). Each product ÷ P(B) = that event's posterior. Systematic and error-free."],
      ["Sanity check",           "After computing all posteriors, verify they sum to exactly 1. If not, you have a calculation error."],
    ],
    examples: [
      {
        q: "M₁,M₂,M₃ produce 50%,30%,20% of output. Defect rates 2%,3%,4%. A defective item is found — P(it came from M₂)?",
        steps: [
          "M₁: prior=0.5, P(D|M₁)=0.02, product=0.010",
          "M₂: prior=0.3, P(D|M₂)=0.03, product=0.009",
          "M₃: prior=0.2, P(D|M₃)=0.04, product=0.008",
          "P(D) = 0.010+0.009+0.008 = 0.027",
          "P(M₂|D) = 0.009/0.027 = 1/3 ≈ 0.333",
        ],
      },
      {
        q: "Bag 1: 3R,4B. Bag 2: 5R,2B. Bag chosen at random, one red ball drawn. P(it came from Bag 1)?",
        steps: [
          "P(B₁)=P(B₂)=1/2",
          "P(R|B₁)=3/7,  P(R|B₂)=5/7",
          "P(R) = (1/2)(3/7)+(1/2)(5/7) = 3/14+5/14 = 4/7",
          "P(B₁|R) = (1/2)(3/7) ÷ (4/7) = (3/14)×(7/4) = 3/8",
        ],
      },
    ],
    tips: [
      "Always use the table method — it's faster and avoids formula-application mistakes.",
      "NIMCET Bayes questions are almost always: (a) factory machines + defects, (b) bags + colored balls, (c) disease testing.",
      "P(B) from the total probability theorem = denominator for ALL the posteriors in that problem.",
      "Verify: all posteriors must sum to 1. Use this as a quick self-check.",
      "Disease problems: sensitivity = P(+|disease), specificity = P(−|no disease). Apply total probability first.",
    ],
  },

  central: {
    title: "Mean, median and mode",
    formulas: [
      ["Mean — ungrouped",           "x̄ = Σxᵢ / n"],
      ["Mean — grouped",             "x̄ = Σfᵢxᵢ / Σfᵢ    (xᵢ = class midpoint)"],
      ["Median — ungrouped (odd n)", "M = value at position (n+1)/2"],
      ["Median — ungrouped (even n)","M = mean of values at n/2 and (n/2)+1"],
      ["Median — grouped",           "M = L + [(N/2 − cf) / f] × h"],
      ["Mode — grouped",             "Z = L + [(f₁−f₀) / (2f₁−f₀−f₂)] × h"],
      ["Empirical relation",         "Mode = 3 × Median − 2 × Mean"],
    ],
    concepts: [
      ["Median formula terms",  "L = lower boundary of median class (first class where CF ≥ N/2). N = total frequency. cf = cumulative frequency of the class BEFORE median class. f = frequency OF the median class. h = class width."],
      ["Mode formula terms",    "Modal class = class with the highest frequency. f₁ = its frequency. f₀ = frequency of class before it. f₂ = frequency of class after it. L = lower boundary. h = class width."],
      ["Empirical relation use", "Valid for moderately asymmetric distributions. If any two of Mean, Median, Mode are known, use Mode=3Median−2Mean to find the third instantly."],
      ["Missing frequency",     "One unknown frequency: form one equation using Σf=N. Two unknowns: two equations — one from Σf=N and one from the given mean or median condition."],
    ],
    examples: [
      {
        q: "Find median. Classes: 0–10, 10–20, 20–30, 30–40, 40–50. Freq: 5, 8, 15, 10, 7",
        steps: [
          "N = 45,  N/2 = 22.5",
          "Cumulative frequencies: 5, 13, 28, 38, 45",
          "Median class: 20–30  (CF crosses 22.5 here)",
          "L=20, cf=13, f=15, h=10",
          "M = 20 + [(22.5−13)/15] × 10 = 20 + 6.33 = 26.33",
        ],
      },
      {
        q: "Mean = 26, Mode = 32. Find Median.",
        steps: [
          "Mode = 3×Median − 2×Mean",
          "32 = 3×Median − 52",
          "Median = 84/3 = 28",
        ],
      },
      {
        q: "Find mode. Classes: 10–20, 20–30, 30–40, 40–50. Freq: 8, 16, 24, 12",
        steps: [
          "Modal class = 30–40  (highest frequency = 24)",
          "L=30, f₁=24, f₀=16, f₂=12, h=10",
          "Z = 30 + [(24−16)/(48−16−12)] × 10 = 30 + [8/20]×10 = 34",
        ],
      },
    ],
    tips: [
      "Always compute cumulative frequencies first — median class = first class where CF ≥ N/2.",
      "Empirical relation Mode=3Median−2Mean appears directly in NIMCET. Know it cold.",
      "For grouped data: always use class MIDPOINTS (not class limits) in mean/SD calculations.",
      "NIMCET often gives a table with one unknown frequency and asks for it given the mean.",
      "If the median class is the first class, cf = 0. Don't panic — just substitute 0.",
    ],
  },

  disp: {
    title: "Dispersion — MD, variance and SD",
    formulas: [
      ["Mean deviation about mean",  "MD = Σ|xᵢ − x̄| / n    (ungrouped)"],
      ["Mean deviation — grouped",   "MD = Σfᵢ|xᵢ − x̄| / N"],
      ["MD minimum property",        "MD is minimum when calculated about the MEDIAN"],
      ["Variance — ungrouped",       "σ² = Σ(xᵢ−x̄)² / n  =  Σxᵢ²/n − x̄²"],
      ["Variance — grouped",         "σ² = Σfᵢxᵢ²/N − x̄²"],
      ["Standard deviation",         "σ = √(σ²)"],
      ["Coefficient of variation",   "CV = (σ / x̄) × 100%"],
      ["Combined mean",              "x̄ = (n₁x̄₁ + n₂x̄₂) / (n₁+n₂)"],
      ["Combined variance",          "σ² = [n₁(σ₁²+d₁²) + n₂(σ₂²+d₂²)] / (n₁+n₂),   dᵢ = x̄ᵢ − x̄"],
    ],
    concepts: [
      ["Adding constant k to all values",  "Mean increases by k. Range, SD, variance, MD are all UNCHANGED. Shifting data doesn't change spread."],
      ["Multiplying all values by k",       "New mean = k×x̄. New SD = |k|×σ. New variance = k²×σ². New range = |k|×range."],
      ["Coefficient of variation (CV)",     "Unit-free measure of relative spread. Lower CV = more consistent. Use CV to compare variability between two datasets with different units or scales."],
      ["d₁ and d₂ in combined variance",   "d₁ = x̄₁ − x̄combined, d₂ = x̄₂ − x̄combined. They measure how far each group's mean is from the overall mean. Always compute combined mean first."],
    ],
    examples: [
      {
        q: "Data: 3, 6, 9, 12, 15. Find variance and SD.",
        steps: [
          "x̄ = 45/5 = 9",
          "Σxᵢ² = 9+36+81+144+225 = 495",
          "σ² = 495/5 − 9² = 99 − 81 = 18",
          "σ = √18 = 3√2 ≈ 4.24",
        ],
      },
      {
        q: "Each value multiplied by 3. Original: x̄=10, σ²=4. New mean and variance?",
        steps: [
          "New mean = 3×10 = 30",
          "New variance = 3²×4 = 9×4 = 36",
          "New SD = 3×√4 = 3×2 = 6",
        ],
      },
      {
        q: "Group A: n=50, x̄=60, σ=8. Group B: n=100, x̄=75, σ=6. Combined variance?",
        steps: [
          "x̄combined = (50×60+100×75)/150 = 10500/150 = 70",
          "d₁=60−70=−10,   d₂=75−70=5",
          "σ² = [50(64+100) + 100(36+25)] / 150",
          "= [50×164 + 100×61] / 150 = 14300/150 ≈ 95.33",
        ],
      },
      {
        q: "Group A: x̄=50, σ=10. Group B: x̄=80, σ=4. Which is more consistent?",
        steps: [
          "CV(A) = (10/50)×100 = 20%",
          "CV(B) = (4/80)×100 = 5%",
          "Group B is more consistent — lower CV means less relative variability",
        ],
      },
    ],
    tips: [
      "Adding constant → only mean changes; SD stays same. Multiplying by k → both mean and SD multiply by |k|.",
      "Variance = SD². SD multiplies by |k| → variance multiplies by k².",
      "Combined variance: compute combined mean first, then d₁, d₂, then apply formula.",
      "CV comparison: LOWER CV = MORE CONSISTENT. This is asked directly in NIMCET.",
      "Shortcut variance formula σ² = Σxᵢ²/n − x̄² is computationally faster for numbers.",
    ],
  },

  mom: {
    title: "Moments, skewness and kurtosis",
    formulas: [
      ["rth moment about origin",    "μ'ᵣ = Σxᵢʳ / n"],
      ["rth central moment",         "μᵣ = Σ(xᵢ−x̄)ʳ / n"],
      ["First central moment",       "μ₁ = 0   (always)"],
      ["Second central moment",      "μ₂ = σ²  (variance)"],
      ["Pearson's β₁ (skewness)",    "β₁ = μ₃² / μ₂³     (always ≥ 0)"],
      ["Pearson's β₂ (kurtosis)",    "β₂ = μ₄ / μ₂²"],
      ["γ₁ — direction of skew",     "γ₁ = ±√β₁  (+ if μ₃>0, − if μ₃<0)"],
      ["γ₂ — excess kurtosis",       "γ₂ = β₂ − 3"],
      ["Pearson's skewness coeff.",  "Sk = (Mean−Mode)/σ  =  3(Mean−Median)/σ"],
    ],
    concepts: [
      ["Central moments summary",  "μ₁=0 always. μ₂=σ² (variance). μ₃ determines asymmetry direction (sign matters). μ₄ determines peakedness. Symmetric distribution: all odd central moments = 0."],
      ["Skewness types",           "Positive (right skew): Mean>Median>Mode, μ₃>0, γ₁>0. Negative (left skew): Mean<Median<Mode, μ₃<0, γ₁<0. Symmetric: Mean=Median=Mode, β₁=0."],
      ["Kurtosis types via β₂",    "β₂=3 → Mesokurtic (normal bell curve). β₂>3 → Leptokurtic (sharper peak, thin tails). β₂<3 → Platykurtic (flatter, fat tails). γ₂=β₂−3 is excess kurtosis."],
      ["β₁ vs γ₁",                "β₁ ≥ 0 always because μ₃ is squared. β₁=0 means symmetric. γ₁ inherits the sign of μ₃ and reveals the DIRECTION of skew."],
    ],
    examples: [
      {
        q: "μ₂=4, μ₃=−8. Find β₁ and interpret skewness.",
        steps: [
          "β₁ = μ₃²/μ₂³ = (−8)²/4³ = 64/64 = 1",
          "μ₃ < 0 → negatively skewed (left-skewed)",
          "γ₁ = −√1 = −1  (negative sign confirms left skew)",
          "For this distribution: Mean < Median < Mode",
        ],
      },
      {
        q: "Mean=35, Median=34, SD=5. Find Pearson's skewness coefficient.",
        steps: [
          "Sk = 3(Mean−Median)/σ = 3(35−34)/5 = 3/5 = 0.6",
          "Positive value → positively skewed (right-skewed)",
          "Confirmed: Mean(35) > Median(34)   ✓",
        ],
      },
      {
        q: "A distribution has β₂=2.1. Classify its kurtosis.",
        steps: [
          "β₂=2.1 < 3 → Platykurtic",
          "Flatter than normal, heavier/fatter tails",
          "γ₂ = 2.1−3 = −0.9  (negative excess kurtosis)",
        ],
      },
    ],
    tips: [
      "Normal distribution facts: β₁=0, β₂=3. Memorize both — direct MCQ targets.",
      "β₁ ≥ 0 always. β₁=0 → symmetric. Use the SIGN of γ₁ (not β₁) for direction.",
      "Symmetric distribution: β₁=0, all odd moments=0, Mean=Median=Mode.",
      "Pearson's 3(Mean−Median)/σ is used when exact moments are not given — very common.",
      "Memory: Lepto = tall narrow peak (like a spike). Platy = flat, wide peak (like a plateau).",
    ],
  },

  freq: {
    title: "Frequency distributions",
    formulas: [
      ["Class midpoint (mark)",      "xᵢ = (lower limit + upper limit) / 2"],
      ["Class width",                "h = upper boundary − lower boundary"],
      ["Relative frequency",         "Relative freq = fᵢ / N"],
      ["Less-than cumulative freq",  "CF = running total of frequencies from the first class"],
      ["More-than cumulative freq",  "More-than CF = N − (sum of all previous frequencies)"],
      ["Frequency density",          "Freq density = fᵢ / h   (use only when widths are unequal)"],
    ],
    concepts: [
      ["Exclusive vs inclusive classes", "Exclusive (10–20, 20–30): upper limit of one = lower limit of next. Inclusive (10–19, 20–29): convert by subtracting 0.5 from lower and adding 0.5 to upper boundaries before using formulas."],
      ["Median from ogive",          "Less-than ogive: plot (upper boundary, CF). More-than ogive: plot (lower boundary, more-than CF). The x-coordinate of their intersection = median."],
      ["Histogram construction",     "Equal class widths → y-axis = frequency. Unequal widths → y-axis = frequency density. Bars must always touch — no gaps allowed."],
      ["Types of frequency series",  "Individual: raw data values. Discrete: specific values with frequencies. Continuous: data grouped into class intervals. Most NIMCET problems use continuous series."],
    ],
    examples: [
      {
        q: "Find mean. Classes: 10–20, 20–30, 30–40, 40–50. Freq: 4, 8, 14, 4",
        steps: [
          "Class midpoints: 15, 25, 35, 45",
          "Σfᵢxᵢ = 4(15)+8(25)+14(35)+4(45) = 60+200+490+180 = 930",
          "N = 30",
          "Mean = 930/30 = 31",
        ],
      },
      {
        q: "Convert inclusive to exclusive classes: 5–14, 15–24, 25–34",
        steps: [
          "Gap = 15−14 = 1, adjustment factor = 1/2 = 0.5",
          "Subtract 0.5 from lower, add 0.5 to upper",
          "New exclusive classes: 4.5–14.5, 14.5–24.5, 24.5–34.5",
        ],
      },
    ],
    tips: [
      "Always use class MIDPOINTS (not limits) in mean, MD, and SD calculations for grouped data.",
      "For inclusive classes, ALWAYS convert to exclusive first before applying median or mode formulas.",
      "Build the cumulative frequency column before finding median — this is where most errors happen.",
      "NIMCET may ask for % of data in a range — use the cumulative frequency table directly.",
      "Frequency density on y-axis only when class widths are unequal. Equal widths → frequency on y-axis.",
    ],
  },
};

const gold   = "#c8950a";
const navy   = "#152037";
const cream  = "#faf9f6";
const white  = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("prob");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* ── Header ── */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>Probability &amp; Statistics</div>
        <div style={{ color: "#7a9ab8", fontSize: "11px", margin: "0 0 12px" }}>
          Formulas · concepts · solved examples · exam tips
        </div>

        {/* ── Tabs ── */}
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
        <div style={{ fontSize: "10px", color: "#b07a00", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>
          📐 Key formulas
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "7px", marginBottom: "22px" }}>
          {d.formulas.map(([name, formula], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${gold}`, borderRadius: "3px", padding: "9px 11px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", color: "#999", marginBottom: "5px" }}>{name}</div>
              <div style={{ fontSize: "13px", fontFamily: "'Courier New',monospace", color: navy, fontWeight: "700", lineHeight: "1.5" }}>{formula}</div>
            </div>
          ))}
        </div>

        {/* Concepts */}
        <div style={{ fontSize: "10px", color: "#1a365d", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>
          📖 Concepts
        </div>
        <div style={{ marginBottom: "22px", display: "grid", gap: "7px" }}>
          {d.concepts.map(([h, b], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${navy}`, borderRadius: "3px", padding: "10px 13px", fontSize: "13px", lineHeight: "1.65" }}>
              <span style={{ fontWeight: "700", color: navy }}>{h}: </span>
              <span style={{ color: "#444" }}>{b}</span>
            </div>
          ))}
        </div>

        {/* Examples */}
        <div style={{ fontSize: "10px", color: "#14532d", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>
          ✏️ NIMCET-style solved examples
        </div>
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
        <div style={{ fontSize: "10px", color: "#9f1239", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>
          ⚡ NIMCET exam patterns &amp; tips
        </div>
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
          NIMCET Official Syllabus · Probability &amp; Statistics · Study smart, then grind PYQs 🎯
        </div>
      </div>
    </div>
  );
}
