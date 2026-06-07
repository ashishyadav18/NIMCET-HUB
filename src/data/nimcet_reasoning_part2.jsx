import { useState } from "react";

const TABS = [
  { id: "mirror", label: "🪞 Mirror & Non-verbal" },
  { id: "stmt",   label: "📝 Statements & Args" },
  { id: "di",     label: "📊 Data Interpretation" },
  { id: "ds",     label: "✅ Data Sufficiency" },
  { id: "num",    label: "🔢 Numerical Reasoning" },
  { id: "viz",    label: "📉 Data Visualization" },
  { id: "crit",   label: "🧠 Critical Thinking" },
];

const DATA = {
  mirror: {
    title: "Mirror Images & Non-verbal Reasoning",
    rules: [
      ["Vertical mirror (standard)", "LEFT and RIGHT are swapped. TOP and BOTTOM stay the same. Most common mirror type in NIMCET."],
      ["Horizontal mirror / water image", "TOP and BOTTOM are swapped. LEFT and RIGHT stay the same. Think of a reflection in still water."],
      ["Clock mirror formula", "Mirror time = 11:60 − original time. If original minutes = 00, use 12:00 − original. E.g., 4:20 → 11:60−4:20 = 7:40."],
      ["Letters — vertical symmetry", "Unchanged in vertical mirror: A H I M O T U V W X Y. These look identical when flipped left-right."],
      ["Letters — horizontal symmetry", "Unchanged in horizontal mirror (water image): B C D E H I K O X. These look same when flipped top-bottom."],
      ["Both-direction symmetric letters", "H, I, O, X look the same in BOTH vertical and horizontal mirrors."],
      ["Figure series rule", "Identify what changes frame to frame: rotation (45°/90°/180°)? element added/removed? shading swapped? size change? Confirm over 2→3 steps, then apply."],
      ["Matrix / 3×3 grid rule", "Check row-wise AND column-wise patterns separately. Missing piece must satisfy BOTH simultaneously. Fill using the weaker constraint first, verify with stronger."],
    ],
    concepts: [
      ["Types of non-verbal questions in NIMCET", "1. Mirror image (vertical or horizontal). 2. Figure series (what comes next?). 3. Analogy — figure A:B :: figure C:? 4. Odd one out (which figure is different and why?). 5. Matrix completion (3×3 grid, one cell missing). 6. Paper folding and hole punching. 7. Counting shapes (triangles/squares in a figure). Each has a fixed mechanical solving strategy — identify type, apply strategy."],
      ["Clock mirror — worked formula", "Rule: Mirror time = 11:60 − original time. Step 1: Write original time. Step 2: Subtract hour from 11, subtract minutes from 60. Step 3: If original minutes = 00, subtract from 12:00 instead (e.g., 9:00 → 3:00). Cross-check: original + mirror ≈ 12:00. E.g., 7:40+4:20=12:00 ✓."],
      ["Figure series — step-by-step method", "Step 1: Compare Figure 1 → Figure 2 (what changed?). Step 2: Confirm SAME change from Figure 2 → Figure 3. Step 3: Apply confirmed change to Figure 3 to predict Figure 4. Step 4: Match with options. If two changes happen simultaneously (rotate + add element), track both together."],
      ["Counting triangles and squares systematically", "Triangles in divided figure: count T1 (smallest), T2 (2-unit), T3 (3-unit) etc. Squares in n×n grid: total = 1²+2²+3²+...+n² = n(n+1)(2n+1)/6. For a 3×3 grid: 9+4+1=14 squares. Don't count by eyeballing — go size by size."],
    ],
    examples: [
      {
        q: "What does a clock showing 8:15 look like in a vertical mirror?",
        steps: [
          "Formula: Mirror time = 11:60 − original time.",
          "11:60 − 8:15 = 3:45.",
          "The mirror image shows 3:45.",
          "Cross-check: 8:15 + 3:45 = 12:00 ✓.",
        ],
      },
      {
        q: "Which of these letters look IDENTICAL in a vertical mirror: B, A, H, R, S, X, T?",
        steps: [
          "Vertical mirror swaps left and right.",
          "Check each: B (asymmetric left-right) → different. A (symmetric) → same. H → same. R → different. S → different. X → same. T → same.",
          "Letters that look identical: A, H, X, T.",
          "General list to remember: A H I M O T U V W X Y.",
        ],
      },
      {
        q: "Figure series: Figure 1 has 1 dot inside a circle. Figure 2 has 2 dots. Figure 3 has 3 dots. Figure 4 has 4 dots in a square (not circle). What is Figure 5?",
        steps: [
          "Pattern for shape: circle → circle → circle → square → ?",
          "Pattern for dots: 1 → 2 → 3 → 4 → 5.",
          "Shape pattern: every 3 circles, switches to square? Or alternates? Check: shapes are circle,circle,circle,square. Maybe every 4th is a square → next (5th) would be circle again.",
          "Most likely: dots increase by 1 each time (→5 dots). Shape follows a sub-pattern — verify from options.",
          "Answer: 5 dots inside a circle (assuming shape returns to circle at step 5).",
        ],
      },
      {
        q: "Count total triangles in a figure: large triangle divided into 4 equal smaller triangles (3 pointing up, 1 pointing down).",
        steps: [
          "Small triangles pointing UP: 3.",
          "Small triangle pointing DOWN: 1.",
          "Medium triangles (2 small units combined): Left-bottom pair, right-bottom pair, top pair — 3 combinations.",
          "Wait — in a triangle divided into 4: T1(3 up + 1 down) = 4 smallest. T2 (3 medium, each = 3 small arranged as larger △): top △, bottom-left △, bottom-right △ (each covers 3 small). That gives 3 medium.",
          "Whole large triangle: 1.",
          "Total = 4 + 3 + 1 = ... actually standard result: 4-piece triangle has 5 total (3 small up + 1 inverted + 1 large). Let me recount: small=4 (3up+1down), large=1 → total=5.",
          "Standard answer: 5 triangles.",
        ],
      },
    ],
    tips: [
      "Clock mirror formula: 11:60 − original. Practice 5 different times before the exam until it's instant.",
      "Vertical mirror = left-right flip. Water image = top-bottom flip. These two are tested as separate question types — know which is which.",
      "Letter symmetry list: A H I M O T U V W X Y (vertical). B C D E H I K O X (horizontal). H, I, O, X are symmetric in BOTH directions.",
      "Figure series: always identify the change rule from two consecutive pairs before predicting. Never guess from one comparison.",
      "Counting shapes: go size by size systematically. For triangles: count 1-unit, 2-unit, 3-unit triangles separately. Eyeballing always misses some.",
    ],
  },

  stmt: {
    title: "Statements, Arguments, Assumptions & Courses of Action",
    rules: [
      ["Assumption (implicit)", "Unstated belief that MUST be true for the statement to be meaningful or logical. It bridges the gap between evidence and conclusion."],
      ["Negation test for assumption", "Negate the assumption. If the argument completely falls apart → it IS a valid assumption. If argument still holds → NOT an assumption."],
      ["Conclusion", "A logical inference that follows DIRECTLY and necessarily from the given statement(s). Requires no outside information. Must be guaranteed, not merely possible."],
      ["Strong argument", "Directly relevant to the main issue, significant in impact, fact-based (not emotional or vague). Addresses the core of the statement."],
      ["Weak argument", "Tangential, trivial, emotional, circular, or addresses a minor/irrelevant aspect of the statement. Does not connect to the central issue."],
      ["Valid Course of Action", "Practical, directly addresses the root cause, feasible to implement, and does not create worse problems than it solves."],
      ["Invalid Course of Action", "Drastic, extreme, punishes wrong party, addresses wrong problem, vague, or impractical."],
      ["'Definitely follows' vs 'probably follows'", "NIMCET asks if conclusion DEFINITELY follows. If it requires any assumption or is only likely → does NOT definitely follow."],
    ],
    concepts: [
      ["Statement-Assumption — identification method", "Ask: 'What is the speaker quietly assuming without saying it?' The assumption is necessary for the statement to make sense. Apply negation test: negate the candidate assumption. If the conclusion or statement becomes pointless/invalid → confirmed assumption. This is the most reliable method and avoids guessing."],
      ["Strong vs Weak Arguments — 4-point checklist", "(1) Is it DIRECTLY relevant to the main issue in the statement? (2) Is it SIGNIFICANT (not trivial)? (3) Is it FACT-BASED (not emotional or based on unproven claims)? (4) Does it go to the HEART of the issue (not a side effect)? If all 4 → Strong. Even one failure → Weak. Arguments using 'always', 'never', 'all' without justification are usually Weak."],
      ["Courses of Action — evaluation", "Valid: targets the root cause, practically implementable, proportionate to the problem, doesn't harm innocent parties. Invalid: (a) too extreme (arrest everyone), (b) solves a different problem, (c) impractical (impossible to enforce), (d) the problem doesn't exist or is already solved, (e) creates a worse problem. NIMCET gives 2-3 courses and asks which are valid."],
      ["Statement → Conclusion strict rule", "The conclusion must be DIRECTLY deducible from the statement — nothing more. Avoid options that are too specific (add detail not in statement), too general (broaden beyond statement), or require outside knowledge. Correct conclusion: 'If statement is true, this conclusion MUST be true.' Wrong: 'this MIGHT be true' or 'this is generally true'."],
    ],
    examples: [
      {
        q: "Statement: 'Start exercising daily to stay healthy.' Identify the assumption(s). A: Exercise improves health. B: The reader is unhealthy.",
        steps: [
          "Apply negation test to A: 'Exercise does NOT improve health.' If this were true, the advice to exercise for health is meaningless → A is a valid assumption ✓.",
          "Apply negation test to B: 'The reader IS healthy.' Does the advice collapse? No — even healthy people can exercise to maintain health. → B is NOT a necessary assumption.",
          "Answer: Only Assumption A is valid.",
        ],
      },
      {
        q: "Statement: 'Should social media be banned for children under 13?' Arguments: I. Yes, it exposes children to inappropriate content. II. No, it is an important communication tool. III. No, parents can supervise usage instead.",
        steps: [
          "Argument I: Directly relevant (inappropriate content is a core concern for banning). Significant harm. Fact-based. → STRONG.",
          "Argument II: 'Important communication tool' — true but doesn't directly address the harm concern. Also, children have other communication means. → WEAK (doesn't negate the ban's rationale).",
          "Argument III: Proposes an ALTERNATIVE solution (supervision vs ban). Directly relevant — suggests ban is unnecessary if supervised. → STRONG (it challenges the need for a total ban).",
          "Answer: Arguments I and III are strong.",
        ],
      },
      {
        q: "Statement: 'Road accidents in City X rose by 30% last month.' Courses of Action: I. Impose strict traffic fines. II. Ban all vehicles for a week. III. Increase traffic police deployment at accident-prone areas.",
        steps: [
          "Course I: Strict fines → deters reckless driving (root cause). Practical and proportionate. → VALID.",
          "Course II: Ban ALL vehicles for a week → extreme, disrupts daily life, economy. Not proportionate. Does not permanently address the problem. → INVALID.",
          "Course III: More police at accident-prone areas → directly targets where accidents happen. Practical, targeted. → VALID.",
          "Answer: Courses I and III are valid.",
        ],
      },
      {
        q: "Statement: 'All top-ranked universities have excellent research facilities.' Conclusion I: Only universities with research facilities are top-ranked. Conclusion II: Some top-ranked universities have good labs.",
        steps: [
          "Conclusion I: Statement says 'all top-ranked → have research facilities'. Conclusion I claims 'only (those with research) → top-ranked'. This is the INVERSE — not valid from the statement.",
          "Conclusion II: 'Some top-ranked have good labs.' Since ALL top-ranked have research facilities, SOME of them certainly do. → VALID (a weaker version of the given statement always follows).",
          "Answer: Only Conclusion II follows.",
        ],
      },
    ],
    tips: [
      "Negation test for assumptions: if negating the candidate makes the entire argument collapse → it IS a valid assumption. Practice this until automatic.",
      "Strong argument: directly relevant + significant + fact-based. If it's about a side issue or uses emotional language → Weak.",
      "Courses of action: eliminate anything extreme (ban all, arrest everyone), punishing innocent people, or addressing the wrong issue. Keep targeted and proportionate solutions.",
      "Conclusion trap: don't pick options that use 'always', 'all', 'never' if the statement only says 'some' or 'most'. Conclusions must not over-generalize.",
      "Restatement trap: an option that just repeats the statement in different words is NOT a conclusion — it's circular. Conclusions must add new logical content derived FROM the statement.",
    ],
  },

  di: {
    title: "Data Interpretation",
    rules: [
      ["Percentage formula", "% = (Part / Whole) × 100. Identify the 'whole' (base) correctly — this is the most common error."],
      ["Percentage change", "% change = [(New − Old) / Old] × 100. Positive = increase, Negative = decrease. Base is ALWAYS the OLD value."],
      ["Ratio comparison", "A:B vs C:D → cross-multiply: A×D vs B×C. Larger product → larger ratio. Avoids decimals."],
      ["Average / Mean", "Average = Sum of all values ÷ Count of values."],
      ["Pie chart: value from angle", "Value = (Angle / 360) × Total.   OR   Value = (Percentage / 100) × Total."],
      ["Pie chart: angle from percentage", "Angle = Percentage × 3.6   (since 100% = 360°)."],
      ["Simple growth rate", "Growth % = [(Year 2 − Year 1) / Year 1] × 100."],
      ["Data reading priority", "Read QUESTION first. Identify exactly which rows/columns needed. Extract only those. Never read the full dataset before seeing the questions."],
    ],
    concepts: [
      ["Table-based DI — step-by-step approach", "Step 1: Read table title + row/column headers carefully. Step 2: Read question — identify which data cells are needed. Step 3: Extract only those values. Step 4: Apply the required formula (%, ratio, average, change). Never read the entire table first — it wastes 30-60 seconds. Jump to question, extract, compute."],
      ["Bar chart DI — common question types", "Q1: Which bar is tallest/shortest → visual comparison. Q2: % share of one bar in a group → (bar value / sum of group) × 100. Q3: % change between years → [(new−old)/old] × 100. Q4: Ratio of two bars → divide their values. Don't estimate — read gridlines precisely."],
      ["Pie chart DI — decoding sectors", "If percentages given directly: skip angle conversion. Value = (% / 100) × total. To compare two sectors: directly compare their percentages — no need to find absolute values. Angle given: value = (angle / 360) × total. Remember 360° = 100% of total."],
      ["Line graph DI — trend analysis", "Slope = rate of change. Steeper slope → faster change. Flat line → no change. Crossing point → two quantities equal. For NIMCET: they often ask 'in which year was the growth highest?' → find consecutive pair with the biggest jump (or compute % change for all years, pick max)."],
    ],
    examples: [
      {
        q: "Table: Sales (₹ crore) — 2020: 240, 2021: 300, 2022: 270, 2023: 360. Q1: % increase from 2020 to 2021? Q2: % decrease from 2021 to 2022? Q3: Average sales over 4 years?",
        steps: [
          "Q1: % increase 2020→2021 = [(300−240)/240] × 100 = [60/240] × 100 = 25%.",
          "Q2: % change 2021→2022 = [(270−300)/300] × 100 = [−30/300] × 100 = −10% (10% decrease).",
          "Q3: Average = (240+300+270+360)/4 = 1170/4 = 292.5 crore.",
        ],
      },
      {
        q: "Pie chart: Total budget = ₹60,000. Sectors: A=72°, B=90°, C=120°, D=78°. Q1: Value of sector C. Q2: What % is sector A? Q3: Ratio of B to D.",
        steps: [
          "Check: 72+90+120+78=360° ✓.",
          "Q1: Sector C = (120/360)×60000 = (1/3)×60000 = ₹20,000.",
          "Q2: Sector A % = (72/360)×100 = 20%.",
          "Q3: Sector B value = (90/360)×60000 = 15000. Sector D = (78/360)×60000 = 13000. Ratio B:D = 15000:13000 = 15:13.",
        ],
      },
      {
        q: "Bar chart: Product X sales — Q1:400, Q2:480, Q3:360, Q4:600. Q1: In which quarter was % growth highest? Q2: What is Q3's % share of total annual sales?",
        steps: [
          "% growth Q1→Q2: [(480−400)/400]×100 = 20%.",
          "% change Q2→Q3: [(360−480)/480]×100 = −25% (decline, so exclude for 'highest growth').",
          "% growth Q3→Q4: [(600−360)/360]×100 = 240/360×100 = 66.7%.",
          "Highest growth: Q4 (66.7% over Q3).",
          "Total = 400+480+360+600 = 1840. Q3 share = (360/1840)×100 ≈ 19.6%.",
        ],
      },
      {
        q: "Line graph: Company A profit — 2019:50, 2020:60, 2021:80, 2022:75, 2023:90 (₹ lakh). In which year was growth rate highest?",
        steps: [
          "2019→2020: [(60−50)/50]×100 = 20%.",
          "2020→2021: [(80−60)/60]×100 = 33.3%.",
          "2021→2022: [(75−80)/80]×100 = −6.25% (decline).",
          "2022→2023: [(90−75)/75]×100 = 20%.",
          "Highest growth rate: 2020→2021 at 33.3%.",
        ],
      },
    ],
    tips: [
      "Read question FIRST, then extract only the needed data cells. Never read the full table/chart upfront.",
      "% change base is ALWAYS the OLD value, not the new. '% change from A to B' → (B−A)/A × 100.",
      "Pie chart shortcut: if percentages given directly, values = (%) × (total/100). No angle conversion needed.",
      "Ratio comparison: A/B vs C/D → use cross-multiplication (AD vs BC). Faster than computing decimals for large numbers.",
      "For 'highest % growth' questions: don't compute all — eliminate obvious negatives/declines first, then compare only the positive-growth periods.",
    ],
  },

  ds: {
    title: "Data Sufficiency",
    rules: [
      ["Standard 5 options", "A: Only S1 sufficient. B: Only S2 sufficient. C: Both together sufficient. D: Either alone sufficient. E: Neither alone nor together sufficient."],
      ["'Sufficient' means", "The statement gives EXACTLY ONE possible answer. Even if you don't find it — you just need to confirm uniqueness."],
      ["'Not sufficient' means", "Multiple values satisfy the condition, OR critical info is still missing after applying the statement."],
      ["Step 1: Test S1 alone", "Forget S2. Does S1 alone give a unique answer? Yes → A or D. No → not A."],
      ["Step 2: Test S2 alone", "Forget S1. Does S2 alone give a unique answer? Yes → B or D. No → not B."],
      ["Step 3: Combine (if needed)", "Only if both individually fail. Does S1 + S2 together give unique answer? Yes → C. No → E."],
      ["NEVER compute the actual answer", "You only need to determine IF the question CAN be answered uniquely. Stop once uniqueness is confirmed."],
      ["x²=k gives two roots", "x=±√k. NOT sufficient to determine sign of x unless additional constraints exist."],
    ],
    concepts: [
      ["The single mental question to ask", "For each statement, ask: 'Can I pin down EXACTLY ONE answer from this, or does ambiguity remain?' Test by trying to find TWO different values that both satisfy the statement. If you can find two valid values → NOT sufficient. If only one value is possible → sufficient. This is the complete algorithm."],
      ["Types of DS questions by difficulty", "Easy: direct equation gives unique value (S2: x+5=9 → x=4, unique → sufficient). Medium: inequality or quadratic gives multiple values. Hard: logical/geometric problem where sufficiency isn't obvious. For hard: always try concrete examples — plug in 2 different scenarios and check if they give different answers to the question."],
      ["Combining statements — traps", "Trap 1: Both statements alone are insufficient, but together STILL leave ambiguity → E (not C). Always verify that combined gives ONE unique answer before choosing C. Trap 2: Two statements that are equivalent — combining doesn't add new info (e.g., S1: x is even, S2: x is a multiple of 2 → same information, combining = same as alone)."],
      ["Yes/No questions in DS", "For 'Is x > 0?' type: sufficient means you can answer definitively YES or definitively NO (either is fine — you just need one definite answer). NOT sufficient means you get 'maybe' — sometimes yes, sometimes no depending on the specific value."],
    ],
    examples: [
      {
        q: "Q: Is integer x positive? S1: x² = 25. S2: x + 8 = 11.",
        steps: [
          "S1 alone: x²=25 → x=+5 or x=−5. Two possible values. Cannot determine if x>0. NOT SUFFICIENT.",
          "S2 alone: x+8=11 → x=3. Exactly one answer: x=3>0 → YES, x is positive. SUFFICIENT.",
          "S2 alone resolves the question uniquely.",
          "Answer: B (Only Statement 2 is sufficient).",
        ],
      },
      {
        q: "Q: What is the area of a right triangle? S1: One leg = 6 cm. S2: Hypotenuse = 10 cm.",
        steps: [
          "S1 alone: One leg = 6. Don't know other leg or hypotenuse. Infinitely many triangles possible. NOT SUFFICIENT.",
          "S2 alone: Hypotenuse = 10. Don't know legs. Many right triangles with hypotenuse 10. NOT SUFFICIENT.",
          "Both together: leg=6, hypotenuse=10. Other leg = √(100−36) = √64 = 8 (unique since right triangle). Area = ½×6×8 = 24. UNIQUE answer. SUFFICIENT.",
          "Answer: C (Both together are sufficient).",
        ],
      },
      {
        q: "Q: Is n divisible by 12? S1: n is divisible by 4. S2: n is divisible by 6.",
        steps: [
          "S1 alone: n divisible by 4. n could be 4, 8, 12, 16... some divisible by 12, some not. NOT SUFFICIENT.",
          "S2 alone: n divisible by 6. n could be 6, 12, 18, 24... some divisible by 12, some not. NOT SUFFICIENT.",
          "Both together: n divisible by 4 AND 6. LCM(4,6)=12. So n divisible by 12? Not necessarily — LCM(4,6)=12 only covers all common multiples, but n=12 ✓, n=24 ✓... actually n must be multiple of LCM(4,6)=12. So YES, n is always divisible by 12.",
          "Wait: LCM(4,6)=12. So divisible by both 4 and 6 → divisible by LCM = 12. SUFFICIENT.",
          "Answer: C (Both together are sufficient).",
        ],
      },
      {
        q: "Q: What is the value of x + y? S1: x − y = 6. S2: 2x + y = 18.",
        steps: [
          "S1 alone: x−y=6. Infinite solutions: (7,1), (8,2), (9,3)... NOT SUFFICIENT.",
          "S2 alone: 2x+y=18. Infinite solutions: (9,0), (8,2), (7,4)... NOT SUFFICIENT.",
          "Both together: System: x−y=6 and 2x+y=18. Add: 3x=24 → x=8, y=2. x+y=10. UNIQUE. SUFFICIENT.",
          "Answer: C (Both statements together are sufficient).",
        ],
      },
    ],
    tips: [
      "Never compute the actual answer. Just confirm: 'exactly one answer possible?' Stop as soon as you know this.",
      "Two-value test: try to find 2 different values satisfying the statement. If successful → NOT sufficient. If impossible to find two → sufficient.",
      "x²=k → x=±√k (two values). Almost always NOT sufficient for sign questions without additional constraints.",
      "Yes/No DS: sufficient = can answer definitively (definitely YES or definitely NO). NOT sufficient = 'sometimes yes, sometimes no'.",
      "Don't auto-choose C when both fail individually. Test combined carefully — it might still be E if ambiguity persists.",
    ],
  },

  num: {
    title: "Numerical Reasoning & Mathematical Problem Solving",
    rules: [
      ["Number analogy: A:B::C:?", "Find operation from A to B (×, ÷, ², √, +n). Apply same to C. If A²=B → C²=?. If A+k=B → C+k=?."],
      ["Missing number in grid", "Check row pattern, column pattern, and diagonal pattern. Missing value satisfies ALL of them."],
      ["Hidden operation decode", "Given: 2★3=10, 4★5=41. Try: a★b = a²+b (4+9=13≠10). Try a×(a+b): 2×5=10 ✓. 4×9=36≠41. Try a²+b²: 4+9=13≠10. Try (a+b)²−a: 25−2=23≠10. Try a²+b²−a+b: 4+9−2+3=14≠. Try a×b+a: 6+2=8≠. Try a²+a×b: 4+6=10 ✓ AND 16+20=36≠41. Hmm. 4²+5²=16+25=41 ✓. So a★b=a²+b²."],
      ["Age problem setup", "Current age = x. 'n years ago' = x−n. 'n years later' = x+n. Set equations from given ratio/difference conditions."],
      ["Work-rate problem", "If A does job in 'a' days → rate = 1/a per day. Combined rate = sum of individual rates. Time together = 1/(1/a+1/b) = ab/(a+b)."],
      ["Odd one out (numbers)", "Find common property: all prime? all perfect squares? all even? all multiples of k? The one NOT sharing the property = odd one out."],
      ["Number pattern — difference method", "Find 1st differences (consecutive). If constant → AP. Find 2nd differences (differences of differences). If constant → quadratic series."],
      ["Ratio-proportion shortcuts", "If A:B=m:n and total=T → A=mT/(m+n), B=nT/(m+n). If A:B=m:n and A:C=p:q → B:C = n/m × p/q... use LCM to combine."],
    ],
    concepts: [
      ["Number analogy — systematic approach", "Try operations in this order: (1) Check if it's additive: B−A = constant? (2) Multiplicative: B/A = constant? (3) Square/cube: B=A²? (4) Combined: B=A²+A? B=A×(A+1)? (5) Difference/sum based: A+B=some pattern? The first consistent rule you find for 3 sample pairs is the answer. Never guess — verify with all given pairs."],
      ["Grid puzzles — structured approach", "For 3×3 grid with one missing: (1) Sum of each row = constant? (2) Product of each row = constant? (3) Middle element = sum/product of outer elements? (4) Column sums equal? Try all four — one will work. Apply the confirmed rule to find the missing value."],
      ["Hidden mathematical operations — decode method", "Given: a ★ b = c for 2-3 examples. Step 1: List the operations to try: a+b, a−b, a×b, a²+b, a+b², a²+b², a×(a+b), (a+b)², etc. Step 2: Test each against ALL given examples simultaneously. Step 3: First formula consistent with all → apply to find unknown. Most NIMCET questions need at most 3-4 formula trials."],
      ["Percentage-based problem solving", "These appear as: 'A's salary is 20% more than B's. By what % is B's salary less than A's?' Formula: if A = B×(1+p/100), then B is less than A by [p/(100+p)]×100. E.g., 20% more → B is 20/120×100 = 16.67% less than A. This reverse-percentage trap appears frequently."],
    ],
    examples: [
      {
        q: "Find: 4 : 12 :: 7 : ?",
        steps: [
          "Rule from 4 to 12: 4×3=12. OR 4+8=12. OR 4²−4=12.",
          "Test ×3: 7×3=21. Test +8: 7+8=15. Test n²−n: 49−7=42.",
          "Most NIMCET questions: simplest rule. ×3: 4:12::7:21.",
          "Answer: 21 (if rule is ×3). Verify consistency: 4×3=12 ✓, 7×3=21.",
        ],
      },
      {
        q: "Grid: Row1=[2,4,8], Row2=[3,9,27], Row3=[4,16,?]. Find ?",
        steps: [
          "Row 1: 2, 4, 8 → 2¹, 2², 2³. Geometric with ratio 2.",
          "Row 2: 3, 9, 27 → 3¹, 3², 3³. Geometric with ratio 3.",
          "Row 3: 4, 16, ? → 4¹, 4², 4³ = 4, 16, 64.",
          "Pattern: each row is a, a², a³. So ? = 4³ = 64.",
          "Answer: 64.",
        ],
      },
      {
        q: "If 3+4=21, 5+6=55, 7+8=105, then 9+10=?",
        steps: [
          "3+4=21: try 3×7=21. What is 7? It's 3+4=7. So a×(a+b)=21 ✓.",
          "5+6=55: 5×11=55. 5+6=11 ✓. Formula confirmed: a×(a+b).",
          "7+8=105: 7×15=105. 7+8=15 ✓.",
          "9+10=?: 9×(9+10)=9×19=171.",
          "Answer: 171.",
        ],
      },
      {
        q: "The ratio of Ravi's age to Meena's is 3:4. After 8 years, the ratio becomes 5:6. Find their current ages.",
        steps: [
          "Current: Ravi=3x, Meena=4x.",
          "After 8 years: (3x+8)/(4x+8) = 5/6.",
          "6(3x+8) = 5(4x+8) → 18x+48 = 20x+40 → 8=2x → x=4.",
          "Ravi = 12 years. Meena = 16 years.",
          "Verify: after 8 years → 20:24 = 5:6 ✓.",
        ],
      },
    ],
    tips: [
      "Number analogy: try the simplest operation first (×, ÷, then ², then combinations). The rule that works consistently for all given pairs is correct.",
      "Hidden operations: test each formula candidate against ALL given examples before concluding. One counterexample eliminates a candidate.",
      "Grid puzzles: row pattern → column pattern → diagonal. Check all three. Most grids follow one consistent rule across all rows and columns.",
      "Reverse percentage trap: 'A is p% more than B' → B is NOT p% less than A. Correct: B is [p/(100+p)]×100 % less. 20% more → 16.67% less.",
      "Age problems: always define variables for CURRENT ages. Translate conditions one by one into equations. Solve the system. Never skip the verification step.",
    ],
  },

  viz: {
    title: "Data Visualization — Venn Diagrams, Flowcharts & Complex Charts",
    rules: [
      ["Two sets: n(A∪B)", "n(A) + n(B) − n(A∩B)"],
      ["Only A (not B)", "n(A) − n(A∩B)"],
      ["Only B (not A)", "n(B) − n(A∩B)"],
      ["Neither A nor B", "Total − n(A∪B)"],
      ["Three sets: n(A∪B∪C)", "n(A)+n(B)+n(C) − n(A∩B) − n(B∩C) − n(A∩C) + n(A∩B∩C)"],
      ["Only A (three-set)", "n(A) − n(A∩B) − n(A∩C) + n(A∩B∩C)"],
      ["Exactly two sets", "n(A∩B only) + n(B∩C only) + n(A∩C only). Each pair-only = n(pair) − n(all three)."],
      ["At least two sets", "n(exactly 2) + n(all three)."],
    ],
    concepts: [
      ["2-set Venn — filling order", "Step 1: Fill A∩B (innermost overlap — usually directly given). Step 2: Only A = n(A)−n(A∩B). Step 3: Only B = n(B)−n(A∩B). Step 4: Neither = Total − Only A − Only B − n(A∩B). Verify: all four regions sum to Total. If they don't, you made an error somewhere."],
      ["3-set Venn — filling order (critical)", "Work INWARD to OUTWARD. Step 1: Fill A∩B∩C (innermost — all three region). Step 2: Fill pair-only regions: A∩B only = n(A∩B) − n(A∩B∩C). Same for B∩C only, A∩C only. Step 3: Only A = n(A) − pair regions involving A − n(A∩B∩C). Repeat for B, C. Step 4: None = Total − n(A∪B∪C). Verify all 8 regions (7 inside + 1 outside) sum to Total."],
      ["Flowchart tracing — how to read", "Decision box (diamond) = a Yes/No condition. Process box (rectangle) = an action to perform. Trace your input through each box strictly. At each diamond: evaluate the condition for your input, follow the YES or NO arrow. Never skip a box. For NIMCET: they give an input value and ask for the output after all steps."],
      ["Complex multi-graph questions", "When DI involves 2-3 charts together (e.g., table + pie chart): each chart answers a different type of question. Pie chart gives % shares; table gives absolute values. To combine: use pie chart % × table total = absolute value for that category. These combined-source DI questions are harder but follow the same calculation rules."],
    ],
    examples: [
      {
        q: "In a class of 80 students: 45 play cricket (C), 38 play football (F), 20 play both. How many play only cricket? Only football? Neither?",
        steps: [
          "n(C∩F) = 20 (given).",
          "Only Cricket = n(C) − n(C∩F) = 45 − 20 = 25.",
          "Only Football = n(F) − n(C∩F) = 38 − 20 = 18.",
          "n(C∪F) = 45+38−20 = 63.",
          "Neither = 80 − 63 = 17.",
          "Verify: 25 + 18 + 20 + 17 = 80 ✓.",
        ],
      },
      {
        q: "In a survey of 100 people: 60 like Tea (T), 50 like Coffee (C), 40 like Juice (J). 25 like T&C, 20 like C&J, 15 like T&J. 10 like all three. Find: only T, only C, only J, none.",
        steps: [
          "n(T∩C∩J) = 10.",
          "T∩C only = 25−10 = 15. C∩J only = 20−10 = 10. T∩J only = 15−10 = 5.",
          "Only T = 60 − 15 − 5 − 10 = 30.",
          "Only C = 50 − 15 − 10 − 10 = 15.",
          "Only J = 40 − 10 − 5 − 10 = 15.",
          "n(T∪C∪J) = 60+50+40−25−20−15+10 = 100.",
          "None = 100 − 100 = 0.",
          "Verify: 30+15+15+15+10+5+10 = 100 ✓.",
        ],
      },
      {
        q: "Flowchart: Input x. Step 1: Is x even? YES → x = x/2. NO → x = 3x+1. Step 2: Is x > 10? YES → Output x. NO → Go to Step 1. Input x = 6. What is output?",
        steps: [
          "x=6. Step 1: Is 6 even? YES → x=6/2=3.",
          "Step 2: Is 3>10? NO → go back to Step 1.",
          "x=3. Step 1: Is 3 even? NO → x=3×3+1=10.",
          "Step 2: Is 10>10? NO (10 is NOT strictly greater than 10) → go to Step 1.",
          "x=10. Step 1: Is 10 even? YES → x=10/2=5.",
          "Step 2: Is 5>10? NO → go to Step 1.",
          "x=5. Step 1: Is 5 even? NO → x=3×5+1=16.",
          "Step 2: Is 16>10? YES → Output 16.",
          "Answer: 16.",
        ],
      },
      {
        q: "Exactly how many people like exactly 2 of the three things in the Tea-Coffee-Juice example above?",
        steps: [
          "Exactly 2 = (T∩C only) + (C∩J only) + (T∩J only).",
          "= 15 + 10 + 5 = 30 people.",
          "These are the pair-only regions (excluding the triple overlap).",
        ],
      },
    ],
    tips: [
      "3-set Venn: ALWAYS start from the center (A∩B∩C region) and work outward. Filling from outside inward causes double-counting errors.",
      "Verify every Venn diagram: all regions must sum to Total. If not — recheck which region you filled incorrectly.",
      "Inclusion-exclusion sign pattern: single sets (+), pairs (−), triple (+). Alternating signs, easy to recall.",
      "Flowchart: trace one box at a time. Write the value of x on paper at each step. Never try to follow two boxes simultaneously.",
      "'Exactly two' = sum of all pair-only regions (subtract triple from each pair). 'At least two' = 'exactly two' + 'exactly three'. These phrasings appear directly in NIMCET.",
    ],
  },

  crit: {
    title: "Critical Thinking & Problem Solving",
    rules: [
      ["Main conclusion", "The central CLAIM the author wants to prove. Signal words: therefore, hence, thus, so, clearly, it follows that. The conclusion is what's being argued FOR."],
      ["Premise / Evidence", "Facts or reasons used to SUPPORT the conclusion. Signal words: because, since, as, given that, for, in light of. These support — they are not the conclusion."],
      ["Assumption (implicit)", "An unstated belief linking premise to conclusion. If assumption is FALSE → argument collapses. It's the 'missing link' that the arguer takes for granted."],
      ["Strengthen argument", "Add a fact that makes the conclusion MORE LIKELY to be true. Supports the link: premise → conclusion. Rules out alternative explanations."],
      ["Weaken argument", "Add a fact that makes the conclusion LESS LIKELY. Breaks the link. Provides an alternative explanation. Contradicts a key premise."],
      ["Find the flaw", "Identify the logical error: (a) Correlation ≠ Causation, (b) Hasty generalization, (c) False dichotomy, (d) Circular reasoning, (e) Ad hominem, (f) Appeal to authority."],
      ["Inference", "Something that MUST be true given the information. Stricter than conclusion — directly deducible with certainty."],
      ["Correlation ≠ Causation", "A and B occurring together does NOT mean A caused B. Most common flaw in NIMCET critical reasoning."],
    ],
    concepts: [
      ["Finding the argument structure", "Every argument = Premise(s) + [Assumption gap] + Conclusion. Example: 'Students who exercise perform better in exams. [Assumption: exercise improves cognition/focus]. Therefore, schools should have daily PE.' To analyze: (1) identify conclusion, (2) identify premises, (3) identify the gap (assumption), (4) then answer the question type (strengthen/weaken/find flaw/find assumption)."],
      ["Strengthen vs Weaken — precise distinction", "Strengthen: a new fact that either (a) provides additional evidence for the conclusion, (b) rules out an alternative cause/explanation, (c) validates the assumption. Weaken: a new fact that either (a) contradicts the conclusion, (b) provides a better alternative explanation, (c) shows the assumption is wrong. The correct answer must SHIFT THE PROBABILITY of the conclusion, not just be related to the topic."],
      ["Common logical flaws — with examples", "Flaw 1: Correlation≠Causation — 'Ice cream sales and drowning rise together → ice cream causes drowning' (both caused by hot weather). Flaw 2: Hasty generalization — 'I met 3 rude Londoners → all Londoners are rude.' Flaw 3: False dichotomy — 'You are either with us or against us' (ignores neutral options). Flaw 4: Circular reasoning — 'The policy is good because it benefits people, and we know it benefits people because it is a good policy.' Flaw 5: Ad hominem — 'Don't trust his analysis — he failed his economics exam' (irrelevant personal attack)."],
      ["Problem-solving — logical deduction approach", "For NIMCET problem-solving MCQs: (1) List ALL given facts explicitly. (2) Identify what is asked. (3) Apply one deductive step at a time — never skip. (4) Eliminate options that contradict ANY given fact. (5) The correct answer follows from given facts alone — never use outside knowledge or assumptions not stated. If two options survive: find the one that must be true, not just might be true."],
    ],
    examples: [
      {
        q: "Argument: 'Employees who participate in company wellness programs have 30% fewer sick days. Therefore, wellness programs make employees healthier.' Identify the flaw.",
        steps: [
          "Conclusion: Wellness programs make employees healthier.",
          "Evidence: Participants have 30% fewer sick days.",
          "Flaw: Correlation ≠ Causation. Healthier employees may be MORE LIKELY to participate in wellness programs — not the other way around. The causation could be reversed.",
          "Also: self-selection bias — people who join wellness programs may already be healthier or more health-conscious.",
          "Flaw type: Correlation mistaken for causation + possible selection bias.",
        ],
      },
      {
        q: "Argument: 'A city that introduced free public transport saw car usage drop by 25%. So free public transport reduces car usage.' Which option WEAKENS this?",
        steps: [
          "Conclusion: Free public transport reduces car usage.",
          "Evidence: City saw 25% drop in car usage after introducing free transport.",
          "Weakener options to look for: Alternative explanation for the car usage drop.",
          "Best weakener: 'The city also raised fuel taxes by 50% at the same time as introducing free transport.' → The tax increase, not the free transport, may have reduced car usage.",
          "This is a stronger alternative explanation that weakens the causal claim.",
          "Incorrect weakener: 'Free transport is expensive' — this attacks cost, not the causal claim about car usage.",
        ],
      },
      {
        q: "Statement: 'All students who scored above 90% got a merit scholarship. Priya scored 92%.' What can be definitively inferred?",
        steps: [
          "Given: All [score > 90%] → [merit scholarship]. Priya scored 92% > 90%.",
          "Inference: Priya got a merit scholarship (by modus ponens: applying universal rule to specific case).",
          "This is a DEFINITE inference — guaranteed by the premises.",
          "Invalid inference: 'Priya is brilliant' — not guaranteed. 'All scholarship holders scored above 90%' — NOT valid (converse is not necessarily true).",
          "Answer: Priya received a merit scholarship.",
        ],
      },
      {
        q: "Argument: 'We should invest in renewable energy because fossil fuels will run out someday.' Assumption?",
        steps: [
          "Conclusion: We should invest in renewable energy.",
          "Premise: Fossil fuels will run out someday.",
          "Gap: Why does 'fossil fuels will run out' lead to 'invest in renewables NOW'?",
          "Assumption: Renewable energy is a viable alternative to fossil fuels. (If it weren't viable, the argument has no force.)",
          "Also assumed: It is better to prepare in advance than to face an energy crisis unprepared.",
          "Apply negation test to main assumption: 'Renewable energy is NOT a viable alternative.' → The argument to invest in renewables collapses. ✓ Confirmed assumption.",
        ],
      },
    ],
    tips: [
      "Find the conclusion FIRST using signal words (therefore, hence, thus, so). Everything else is premise or context. This one step structures your entire analysis.",
      "Negation test for assumptions: negate candidate → if argument collapses → confirmed assumption. Practice this until it's automatic.",
      "Correlation ≠ Causation is the #1 flaw type. Whenever you see 'X happened, then Y happened, therefore X caused Y' → flag this immediately.",
      "Strengthen/Weaken: the correct answer must actually shift the probability of the conclusion. Answers that are merely 'related to the topic' but don't affect the conclusion are wrong.",
      "Inference questions: choose only what MUST be true (guaranteed by premises). 'Might be true' or 'probably true' are NOT sufficient for inference. Stricter than assumption.",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("mirror");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* Header */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP — PART 2 of 2
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>Analytical Ability &amp; Logical Reasoning</div>
        <div style={{ color: "#7a9ab8", fontSize: "11px", margin: "0 0 12px" }}>
          Rules &amp; Patterns · Concepts · Solved Examples · Exam Tips
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

        {/* Rules */}
        <div style={{ fontSize: "10px", color: "#b07a00", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>🗝️ Key Rules &amp; Patterns</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "7px", marginBottom: "22px" }}>
          {d.rules.map(([name, rule], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${gold}`, borderRadius: "3px", padding: "9px 11px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", color: "#999", marginBottom: "5px" }}>{name}</div>
              <div style={{ fontSize: "12.5px", color: navy, fontWeight: "600", lineHeight: "1.5" }}>{rule}</div>
            </div>
          ))}
        </div>

        {/* Concepts */}
        <div style={{ fontSize: "10px", color: "#1a365d", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>📖 Concepts &amp; Question Types</div>
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
                    fontSize: "12.5px", color: "#166534",
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
          NIMCET · Analytical Ability &amp; Logical Reasoning · Part 2 of 2 · 40 Questions Section · Study smart, then grind PYQs 🎯
        </div>
      </div>
    </div>
  );
}
