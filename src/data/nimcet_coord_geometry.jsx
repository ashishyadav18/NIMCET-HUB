import { useState } from "react";

const TABS = [
  { id: "coord",   label: "📍 Coordinates" },
  { id: "lines",   label: "📏 Lines" },
  { id: "pair",    label: "✂️ Pair of Lines" },
  { id: "circle",  label: "⭕ Circle" },
  { id: "para",    label: "🌿 Parabola" },
  { id: "ellipse", label: "🥚 Ellipse" },
  { id: "hyper",   label: "∞ Hyperbola" },
  { id: "tangent", label: "🔗 Tangents & Normals" },
];

const DATA = {
  coord: {
    title: "Rectangular Cartesian Coordinates & Section Formula",
    formulas: [
      ["Distance formula", "d = √[(x₂−x₁)² + (y₂−y₁)²]"],
      ["Midpoint formula", "M = ((x₁+x₂)/2,  (y₁+y₂)/2)"],
      ["Section — internal m:n", "P = ((mx₂+nx₁)/(m+n),  (my₂+ny₁)/(m+n))"],
      ["Section — external m:n", "P = ((mx₂−nx₁)/(m−n),  (my₂−ny₁)/(m−n))"],
      ["Centroid of △", "G = ((x₁+x₂+x₃)/3,  (y₁+y₂+y₃)/3)"],
      ["Area of △", "A = ½|x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)|"],
      ["Collinear condition", "Area of triangle formed = 0"],
      ["Slope of AB", "m = (y₂−y₁)/(x₂−x₁) = tan θ"],
    ],
    concepts: [
      ["Internal vs External", "Internal: point P lies BETWEEN A and B. External: P lies OUTSIDE AB. For internal: both m,n positive. If ratio turns negative after solving, the division is actually external."],
      ["Section formula memory tip", "Numerator for x: m·x₂ + n·x₁ (m attached to far-end point B, n attached to A). Think 'cross-multiply': the weight m pulls toward x₂."],
      ["Area formula — sign rule", "Formula gives signed area. Positive if vertices listed anticlockwise; negative if clockwise. Always take the absolute value for area."],
      ["Centroid divides median 2:1", "G divides median AD (D = midpoint of BC) in ratio AG:GD = 2:1 from vertex. Used directly in NIMCET to find unknown vertices given centroid."],
      ["Collinearity — fastest test", "Area = 0 is the standard MCQ test. Alternatively: slope AB = slope BC. Area method handles all non-trivial cases cleanly."],
    ],
    examples: [
      {
        q: "P divides A(1,3) and B(7,9) internally in ratio 1:2. Find P.",
        steps: [
          "m=1, n=2 (internal division)",
          "x = (1·7 + 2·1)/(1+2) = (7+2)/3 = 3",
          "y = (1·9 + 2·3)/(1+2) = (9+6)/3 = 5",
          "P = (3, 5)",
        ],
      },
      {
        q: "Area of △ with vertices (2,3), (−1,0), (2,−4).",
        steps: [
          "A = ½|x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)|",
          "= ½|2(0−(−4)) + (−1)((−4)−3) + 2(3−0)|",
          "= ½|8 + 7 + 6| = ½×21 = 10.5 sq units",
        ],
      },
      {
        q: "In what ratio does point (4,6) divide the line joining (1,3) and (7,9)?",
        steps: [
          "Let ratio = k:1",
          "Using x: 4 = (7k+1)/(k+1) → 4k+4=7k+1 → k=1",
          "Ratio = 1:1 (midpoint). Verify y: (9+3)/2=6  ✓",
        ],
      },
      {
        q: "The centroid of △ is (4,5). Two vertices are (2,3) and (6,7). Find the third.",
        steps: [
          "G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)",
          "4 = (2+6+x₃)/3 → x₃ = 12−8 = 4",
          "5 = (3+7+y₃)/3 → y₃ = 15−10 = 5",
          "Third vertex = (4, 5)",
        ],
      },
    ],
    tips: [
      "In section formula: m goes with (x₂,y₂) and n goes with (x₁,y₁). Don't swap — it flips the answer.",
      "For collinearity in MCQ: just set area=0 using the determinant. Fastest method.",
      "External division: if both given points are on the same side and ratio is k:1, the external point satisfies x=(kx₂−x₁)/(k−1). Denominator can be zero when k=1 (point at infinity).",
      "Centroid trick: G=(A+B+C)/3 in coordinate sense. So C=3G−A−B. Memorize this one-liner.",
    ],
  },

  lines: {
    title: "Equation of a Line — All Forms",
    formulas: [
      ["Slope-intercept form", "y = mx + c"],
      ["Point-slope form", "y−y₁ = m(x−x₁)"],
      ["Two-point form", "(y−y₁)/(y₂−y₁) = (x−x₁)/(x₂−x₁)"],
      ["Intercept form", "x/a + y/b = 1"],
      ["Normal/perp. form", "x cosα + y sinα = p   (p > 0)"],
      ["General form", "ax+by+c=0,   slope = −a/b"],
      ["Angle between two lines", "tan θ = |(m₁−m₂)/(1+m₁m₂)|"],
      ["Parallel condition", "m₁=m₂  (and c₁≠c₂)"],
      ["Perpendicular condition", "m₁m₂=−1   OR   a₁a₂+b₁b₂=0"],
      ["Distance: point to line", "|ax₁+by₁+c| / √(a²+b²)"],
      ["Distance: parallel lines", "|c₁−c₂| / √(a²+b²)"],
      ["Family through intersection", "L₁ + λL₂ = 0   (for any scalar λ)"],
    ],
    concepts: [
      ["Which form to use when?", "Slope+y-int known → slope-intercept. One point+slope → point-slope. Two points → two-point. x-int and y-int known → intercept form. ax+by+c=0 → general (most flexible for MCQs)."],
      ["Parallel vs Perpendicular — general form trick", "Lines a₁x+b₁y+c₁=0 and a₂x+b₂y+c₂=0: Parallel if a₁/a₂=b₁/b₂≠c₁/c₂. Perpendicular if a₁a₂+b₁b₂=0. Using these avoids converting to slopes and is much faster in MCQs."],
      ["Concurrent lines condition", "Three lines are concurrent if the 3×3 determinant of their coefficients (a,b,c rows) = 0. If two lines meet at a point, substitute that point into the third line and check = 0."],
      ["Family of lines L₁+λL₂=0", "Represents ALL lines through the intersection of L₁=0 and L₂=0. Plug in the extra condition (passes through a point, slope=k, etc.) to determine λ. This avoids solving simultaneous equations to find intersection first."],
      ["Position of point relative to line", "For ax+by+c=0: compute f(P)=ax₁+by₁+c. f(P)>0 and f(Q)>0 → same side. f(P)·f(Q)<0 → opposite sides. Useful in inequalities and half-plane problems."],
    ],
    examples: [
      {
        q: "Find acute angle between lines 3x+y=5 and x+3y=7.",
        steps: [
          "m₁=−3,  m₂=−1/3",
          "tan θ = |(m₁−m₂)/(1+m₁m₂)| = |(−3+1/3)/(1+1)| = |(−8/3)/2| = 4/3",
          "θ = arctan(4/3) ≈ 53.1°",
        ],
      },
      {
        q: "Distance from (2,3) to line 3x−4y+1=0.",
        steps: [
          "d = |3(2)−4(3)+1| / √(9+16)",
          "= |6−12+1| / 5 = 5/5 = 1",
        ],
      },
      {
        q: "Line through intersection of x+2y=5 and 3x+y=10, passing through origin.",
        steps: [
          "Family: (x+2y−5) + λ(3x+y−10) = 0",
          "Pass through (0,0): (−5)+λ(−10)=0 → λ=−½",
          "(x+2y−5) − ½(3x+y−10) = 0",
          "×2: 2x+4y−10−3x−y+10=0 → −x+3y=0 → x=3y",
        ],
      },
      {
        q: "Are lines 2x+3y+4=0, x+y+2=0, 3x+4y+6=0 concurrent?",
        steps: [
          "Solve L₁∩L₂: 2x+3y=−4 and x+y=−2",
          "From L₂: x=−2−y. Sub: 2(−2−y)+3y=−4 → −4+y=−4 → y=0, x=−2",
          "Intersection = (−2, 0). Test in L₃: 3(−2)+4(0)+6=0  ✓ Concurrent",
        ],
      },
    ],
    tips: [
      "Perpendicular test: use a₁a₂+b₁b₂=0. Much faster than converting both to slope form.",
      "When asked 'find line through intersection of L₁ and L₂ with condition': ALWAYS use family form L₁+λL₂=0.",
      "Acute angle formula: if 1+m₁m₂=0, lines are perpendicular (θ=90°). Handle this separately.",
      "Normal form p=|c|/√(a²+b²): p is the perpendicular distance from ORIGIN to the line ax+by+c=0.",
      "For locus: put (h,k) for moving point, write the geometric condition, simplify, replace h→x, k→y.",
    ],
  },

  pair: {
    title: "Pair of Straight Lines",
    formulas: [
      ["Homogeneous pair (origin)", "ax² + 2hxy + by² = 0"],
      ["Sum of slopes m₁+m₂", "−2h/b"],
      ["Product of slopes m₁m₂", "a/b"],
      ["Angle between pair", "tan θ = 2√(h²−ab) / (a+b)"],
      ["Parallel pair condition", "h² = ab"],
      ["Perpendicular pair condition", "a + b = 0"],
      ["General 2nd degree", "ax²+2hxy+by²+2gx+2fy+c = 0"],
      ["Δ=0: represents pair of lines", "abc+2fgh − af²−bg²−ch² = 0"],
      ["Angle bisectors of pair", "(x²−y²)/(a−b) = xy/h"],
    ],
    concepts: [
      ["h²−ab decides the nature", "h²−ab > 0 → two real distinct lines. h²−ab = 0 → coincident (same line twice). h²−ab < 0 → imaginary lines (no real solution). h²=ab → lines are parallel (both through origin means they coincide there)."],
      ["Parallel vs Perpendicular — careful!", "h²=ab → PARALLEL pair. a+b=0 → PERPENDICULAR pair. These are opposite to what you'd guess — memorize with care. Most NIMCET errors come from swapping these two."],
      ["Homogenization technique", "Given curve S=0 and line L: lx+my=n. Replace 1 by (lx+my)/n in S to get homogeneous equation. This pair of lines connects origin to the intersection points of curve and line."],
      ["Combined equation", "If two lines are L₁=0 and L₂=0, their combined equation is L₁·L₂=0. Expand to get the form ax²+2hxy+... Always note coefficient of xy is 2h — factor of 2 is part of the standard form."],
      ["Angle bisectors", "The pair (x²−y²)/(a−b) = xy/h represents the TWO angle bisectors of ax²+2hxy+by²=0. The bisectors of a pair are always perpendicular to each other."],
    ],
    examples: [
      {
        q: "Find angle between pair 2x²+5xy+2y²=0.",
        steps: [
          "a=2,  h=5/2,  b=2",
          "h²−ab = 25/4−4 = 9/4",
          "tan θ = 2√(9/4)/(2+2) = 2×(3/2)/4 = 3/4",
          "θ = arctan(3/4) ≈ 36.87°",
        ],
      },
      {
        q: "Find individual lines from 2x²+7xy+3y²=0.",
        steps: [
          "Divide by x², let m=y/x: 3m²+7m+2=0",
          "(3m+1)(m+2)=0 → m=−1/3 or m=−2",
          "Line 1: y=−x/3 → x+3y=0",
          "Line 2: y=−2x → 2x+y=0",
        ],
      },
      {
        q: "Factorize 2x²+7xy+3y²+8x+14y+8=0 into two lines.",
        steps: [
          "Try (2x+y+a)(x+3y+b): expand and match coefficients",
          "Coefficient of x: 2b+a=8",
          "Coefficient of y: b+3a=14",
          "Constant: ab=8",
          "Solving: a=4, b=2  (verify: ab=8 ✓)",
          "Lines: 2x+y+4=0  and  x+3y+2=0",
        ],
      },
    ],
    tips: [
      "Perpendicular pair: a+b=0 (sum of x² and y² coefficients = 0). Fastest MCQ check.",
      "Parallel pair: h²=ab. Don't confuse with perpendicular. Write both on paper once and memorize.",
      "To extract individual lines: treat ax²+2hxy+by²=0 as quadratic in y (or y/x), use discriminant.",
      "Angle bisectors formula (x²−y²)/(a−b)=xy/h is tested as 'find equation of angle bisectors' — know the form.",
      "For general 2nd degree, if Δ=0 AND h²>ab → hyperbola pair. Δ=0 AND h²=ab → parallel lines.",
    ],
  },

  circle: {
    title: "Equation of a Circle",
    formulas: [
      ["Center origin", "x² + y² = r²"],
      ["Center (h,k)", "(x−h)² + (y−k)² = r²"],
      ["General form", "x²+y²+2gx+2fy+c = 0"],
      ["Center & radius (general)", "Center=(−g,−f),   r=√(g²+f²−c)"],
      ["Real circle condition", "g²+f²−c > 0"],
      ["Diameter form", "(x−x₁)(x−x₂)+(y−y₁)(y−y₂)=0"],
      ["S₁ — power of point", "S₁ = x₁²+y₁²+2gx₁+2fy₁+c"],
      ["Length of tangent", "√S₁   (from external point)"],
      ["Tangent at (x₁,y₁) on x²+y²=r²", "xx₁+yy₁ = r²"],
      ["Tangent at (x₁,y₁) general [T=0]", "xx₁+yy₁+g(x+x₁)+f(y+y₁)+c = 0"],
      ["Chord of contact [T=0]", "Same T=0 formula, evaluated at external point"],
      ["Pair of tangents", "SS₁ = T²"],
      ["Orthogonal circles", "2g₁g₂+2f₁f₂ = c₁+c₂"],
      ["Radical axis", "S₁−S₂ = 0"],
    ],
    concepts: [
      ["Circle identification", "Must have: (1) coefficient of x² = coefficient of y² (both = 1 in standard form), (2) NO xy term. If either fails → not a circle."],
      ["General → Standard (complete the square)", "x²+2gx=(x+g)²−g² and y²+2fy=(y+f)²−f². Center=(−g,−f). r²=g²+f²−c. Check r²>0 for a real circle. This conversion is tested directly."],
      ["S, T, S₁ — the notation system", "S=0 is the circle equation. T=0 is the tangent/chord-of-contact formula. S₁=f(x₁,y₁) is the value when you substitute the point. S₁>0 → outside. S₁=0 → on circle. S₁<0 → inside."],
      ["Radical axis properties", "S₁−S₂=0 is a straight line (xy terms cancel). It is perpendicular to the line of centers. If circles intersect, radical axis is the common chord. Three circles → three radical axes → meet at one point (radical center)."],
    ],
    examples: [
      {
        q: "Find center and radius of x²+y²−6x+4y+4=0.",
        steps: [
          "2g=−6→g=−3,   2f=4→f=2,   c=4",
          "Center = (−g,−f) = (3,−2)",
          "r = √(9+4−4) = √9 = 3",
        ],
      },
      {
        q: "Find tangent to x²+y²=25 at point (3,4).",
        steps: [
          "Check: 9+16=25  ✓ (point is on circle)",
          "T=0: xx₁+yy₁=r²",
          "3x+4y = 25",
        ],
      },
      {
        q: "Length of tangent from (5,4) to x²+y²+2x−4y+1=0.",
        steps: [
          "S₁ = 25+16+10−16+1 = 36",
          "Length = √S₁ = 6",
        ],
      },
      {
        q: "Equation of circle with diameter A(2,3), B(6,7).",
        steps: [
          "(x−2)(x−6)+(y−3)(y−7)=0",
          "x²−8x+12+y²−10y+21=0",
          "x²+y²−8x−10y+33=0",
          "Center=(4,5),  r=√(16+25−33)=√8=2√2",
        ],
      },
    ],
    tips: [
      "Circle check in MCQ: xy term = 0? Coefficients of x² and y² equal? If both YES → circle.",
      "Chord of contact and tangent at a point use IDENTICAL T=0 formula. The distinction is whether the point is on or outside the circle.",
      "Orthogonal circles: 2g₁g₂+2f₁f₂=c₁+c₂. No need to find actual intersections — just plug the coefficients.",
      "Radical axis S₁−S₂=0: subtract the two circle equations directly. The x² and y² terms always cancel.",
      "SS₁=T² for pair of tangents: if S₁<0 (inside), no real tangents. S₁=0 (on circle), exactly one tangent.",
    ],
  },

  para: {
    title: "Parabola",
    formulas: [
      ["Standard (opens right)", "y² = 4ax,   a>0"],
      ["Focus / Directrix", "F=(a,0),   directrix: x=−a"],
      ["Vertex / Axis", "(0,0),   axis: x-axis (y=0)"],
      ["Latus rectum", "x=a,   length = 4a"],
      ["Focal distance of P(x₁,y₁)", "x₁ + a"],
      ["Parametric form", "P = (at², 2at)"],
      ["Other forms", "y²=−4ax: left | x²=4ay: up | x²=−4ay: down"],
      ["Shifted: vertex (h,k)", "(y−k)²=4a(x−h),  F=(h+a,k),  dir: x=h−a"],
      ["Tangent at (x₁,y₁) [T=0]", "yy₁ = 2a(x+x₁)"],
      ["Tangent (slope form)", "y = mx + a/m   (built-in tangency condition)"],
      ["Normal at parameter t", "y = −tx + 2at + at³"],
      ["Slope of normal at t", "= −t"],
      ["Focal chord condition", "t₁·t₂ = −1   (ends of any focal chord)"],
      ["Chord of contact [T=0]", "yy₁ = 2a(x+x₁)   (same formula)"],
    ],
    concepts: [
      ["Four orientations", "y²=4ax → right, F=(a,0). y²=−4ax → left, F=(−a,0). x²=4ay → up, F=(0,a). x²=−4ay → down, F=(0,−a). Rule: focus is always INSIDE the opening. Directrix is on the OPPOSITE side to focus."],
      ["Parametric point", "Every point on y²=4ax is (at², 2at). Check: (2at)²=4a·(at²) ✓. The parameter t is also the slope of tangent at that point (since tangent is ty=x+at²)."],
      ["Focal chord: t₁t₂=−1", "If P(at₁²,2at₁) and Q(at₂²,2at₂) are ends of a chord through focus, then t₁t₂=−1. Given one end, find other: t₂=−1/t₁. This is tested in almost every NIMCET Parabola question."],
      ["Focal chord properties", "For focal chord PQ: (1) tangents at P and Q are PERPENDICULAR, (2) tangents meet ON the directrix, (3) harmonic mean of SP and SQ = semi-latus rectum = 2a. SP·SQ = (2a/t)·(2at) type formula too."],
    ],
    examples: [
      {
        q: "Find focus, directrix, and latus rectum of y²=12x.",
        steps: [
          "4a=12 → a=3",
          "Focus = (3,0),   directrix: x=−3",
          "Latus rectum: x=3, length=12",
        ],
      },
      {
        q: "Tangent to y²=8x at point (2,4).",
        steps: [
          "a=2. Check: 16=8×2 ✓ (point is on curve)",
          "T=0: yy₁=2a(x+x₁) → 4y=4(x+2)",
          "y = x+2",
        ],
      },
      {
        q: "One end of focal chord of y²=12x is (3,6). Find other end.",
        steps: [
          "a=3. Parametric: (3t²,6t). For (3,6): t₁=1",
          "t₁t₂=−1 → t₂=−1",
          "Other end: (3(1)², 6(−1)) = (3,−6)",
          "Verify: 36=12×3 ✓",
        ],
      },
      {
        q: "For what value of k is y=2x+k tangent to y²=16x?",
        steps: [
          "4a=16 → a=4.  slope m=2",
          "Tangent in slope form: y=mx+a/m → c=a/m=4/2=2",
          "k=2. Tangent: y=2x+2",
        ],
      },
    ],
    tips: [
      "y²=4ax → focus on x-axis. x²=4ay → focus on y-axis. The variable that is SQUARED tells you which axis.",
      "Focal chord: t₁t₂=−1. Given one parameter end t₁, other end is −1/t₁. Quick and direct.",
      "Normal at t has slope=−t. Equation: y=−tx+2at+at³. Memorize this directly.",
      "Tangent slope form y=mx+a/m: the a/m term IS the c, so tangency is automatic — no need to set discriminant=0.",
      "For x²=4ay, everything swaps: tangent at (x₁,y₁) is xx₁=2a(y+y₁). Keep this distinction clear.",
    ],
  },

  ellipse: {
    title: "Ellipse",
    formulas: [
      ["Standard form (a>b>0)", "x²/a² + y²/b² = 1"],
      ["c and eccentricity", "c = ae,   e = √(1−b²/a²),   c² = a²−b²"],
      ["Eccentricity range", "0 < e < 1"],
      ["Foci", "(±c, 0)  i.e. (±ae, 0)"],
      ["Vertices (major)", "(±a, 0)"],
      ["Co-vertices (minor)", "(0, ±b)"],
      ["Directrices", "x = ±a/e"],
      ["Latus rectum length", "2b²/a"],
      ["Sum of focal radii", "r₁+r₂ = 2a   (defining property)"],
      ["Focal radii of P(x₁,y₁)", "r₁=a+ex₁  (from left),   r₂=a−ex₁  (from right)"],
      ["Parametric form", "(a cosθ,  b sinθ)"],
      ["Tangent at (x₁,y₁)  [T=0]", "xx₁/a² + yy₁/b² = 1"],
      ["Tangent (slope form)", "y = mx ± √(a²m²+b²)"],
      ["Condition of tangency", "c² = a²m² + b²   (+b² for ellipse)"],
      ["Normal at (x₁,y₁)", "a²x/x₁ − b²y/y₁ = a²−b²"],
    ],
    concepts: [
      ["Identifying the major axis", "Larger denominator determines major axis direction. a²>b² → major axis along x-axis (standard). If b>a, swap labels: major axis along y-axis and foci become (0,±c). Always identify which is larger."],
      ["Eccentricity meaning", "e=0 → perfect circle. e→1 → highly elongated. The closer e is to 1, the flatter the ellipse looks. c=ae tells you the distance from center to each focus."],
      ["Focal radii shortcut", "r₁=a+ex₁ and r₂=a−ex₁. Use these instead of the distance formula — saves 30 seconds per question in NIMCET. Both hold only when the point is ON the ellipse."],
      ["Chord of contact T=0", "From external point (x₁,y₁): chord of contact is xx₁/a²+yy₁/b²=1. Same formula as tangent at a point on the curve. Verify whether the point is on or outside first."],
    ],
    examples: [
      {
        q: "For x²/25+y²/16=1, find foci, eccentricity, latus rectum.",
        steps: [
          "a²=25, b²=16 → a=5, b=4",
          "c = √(25−16) = 3,   e = 3/5 = 0.6",
          "Foci = (±3, 0)",
          "Latus rectum = 2b²/a = 2(16)/5 = 6.4",
        ],
      },
      {
        q: "Tangent to x²/16+y²/9=1 with slope m=1.",
        steps: [
          "a²=16, b²=9, m=1",
          "y = x ± √(16·1+9) = x ± √25 = x ± 5",
          "Two tangents: y=x+5 and y=x−5",
        ],
      },
      {
        q: "Ellipse has foci (±2,0) and sum of focal radii = 10. Find equation.",
        steps: [
          "c=2,   2a=10 → a=5,   a²=25",
          "b² = a²−c² = 25−4 = 21",
          "Equation: x²/25 + y²/21 = 1",
        ],
      },
      {
        q: "Find P(3,b) on x²/25+y²/16=1 and its focal distances.",
        steps: [
          "Verify: 9/25+b²/16=1 → b²=16(1−9/25)=16×16/25 → b=64/25... ",
          "Actually use focal radii: a=5, e=3/5, x₁=3",
          "r₁=a+ex₁=5+(3/5)(3)=5+9/5=34/5",
          "r₂=a−ex₁=5−9/5=16/5",
          "Sum=34/5+16/5=50/5=10=2a ✓",
        ],
      },
    ],
    tips: [
      "Sum of focal radii = 2a is the DEFINITION. Use it to find 'a' immediately in problems.",
      "c²=a²−b² for ELLIPSE (subtract). c²=a²+b² for HYPERBOLA (add). This is tested constantly.",
      "Tangent condition c²=a²m²+b²: PLUS b² for ellipse. MINUS b² for hyperbola. Critical difference.",
      "Focal radii formula r₁=a+ex₁: faster than distance formula. Use it for any 'find distance from focus' MCQ.",
      "When major axis is along y-axis: use x²/b²+y²/a²=1 with a>b. Foci become (0,±c).",
    ],
  },

  hyper: {
    title: "Hyperbola",
    formulas: [
      ["Standard form", "x²/a² − y²/b² = 1"],
      ["c and eccentricity", "c=ae,   e=√(1+b²/a²),   c²=a²+b²"],
      ["Eccentricity range", "e > 1   (always)"],
      ["Foci", "(±ae, 0)  i.e. (±c, 0)"],
      ["Vertices", "(±a, 0)"],
      ["Directrices", "x = ±a/e"],
      ["Asymptotes", "y = ±(b/a)x,   i.e. bx±ay=0"],
      ["Latus rectum length", "2b²/a"],
      ["Difference of focal radii", "|r₁−r₂| = 2a"],
      ["Parametric form", "(a secθ,  b tanθ)"],
      ["Tangent at (x₁,y₁) [T=0]", "xx₁/a² − yy₁/b² = 1"],
      ["Tangent (slope form)", "y = mx ± √(a²m²−b²)"],
      ["Condition of tangency", "c² = a²m² − b²   (−b² for hyperbola)"],
      ["Rectangular hyperbola", "xy = c²,   e=√2,   asymptotes: x=0, y=0"],
      ["Conjugate hyperbola", "−x²/a²+y²/b²=1   (foci on y-axis)"],
    ],
    concepts: [
      ["Ellipse vs Hyperbola — the key table", "Ellipse: +y²/b², e<1, c²=a²−b², SUM of focal radii=2a. Hyperbola: −y²/b², e>1, c²=a²+b², DIFFERENCE of focal radii=2a. Tangent: +b² vs −b². This comparison is tested directly."],
      ["Asymptotes", "Asymptotes bx±ay=0 pass through the center. The hyperbola approaches but never crosses them. Combined equation of asymptotes: x²/a²−y²/b²=0. Difference: (hyperbola equation)−(asymptote equation)=constant."],
      ["Rectangular hyperbola xy=c²", "When a=b: e=√2. Asymptotes are the coordinate axes. Parametric: (ct, c/t). Tangent at (ct,c/t): x+t²y=2ct. Or: at (x₁,y₁): xy₁+yx₁=2c². Very commonly tested."],
      ["Conjugate hyperbola", "−x²/a²+y²/b²=1 has foci on y-axis. The original and conjugate hyperbolas share the SAME asymptotes. Transverse axis of one = conjugate axis of the other."],
    ],
    examples: [
      {
        q: "For x²/9−y²/16=1, find foci, eccentricity, asymptotes.",
        steps: [
          "a²=9, b²=16 → a=3, b=4",
          "c = √(9+16) = 5,   e = c/a = 5/3",
          "Foci = (±5, 0)",
          "Asymptotes: y=±(4/3)x   i.e. 4x±3y=0",
        ],
      },
      {
        q: "Tangent to x²/16−y²/9=1 with slope m=2.",
        steps: [
          "a²=16, b²=9",
          "Condition: c²=a²m²−b²=64−9=55",
          "Tangents: y = 2x ± √55",
        ],
      },
      {
        q: "Tangent to xy=4 at point (1,4).",
        steps: [
          "Use: at (x₁,y₁) on xy=c², tangent is xy₁+yx₁=2c²",
          "c²=4. At (1,4): x(4)+y(1)=8",
          "4x+y = 8",
        ],
      },
      {
        q: "Hyperbola with foci (±5,0) and e=5/3. Find equation.",
        steps: [
          "c=5, e=5/3 → a=c/e=3 → a²=9",
          "b²=c²−a²=25−9=16",
          "Equation: x²/9−y²/16=1",
        ],
      },
    ],
    tips: [
      "c²=a²+b² for hyperbola. c²=a²−b² for ellipse. The + vs − is the #1 most commonly confused formula.",
      "Tangent condition: c²=a²m²−b² (MINUS b²). Opposite of ellipse. Write this on the margin in your exam.",
      "Rectangular hyperbola xy=c²: tangent at (x₁,y₁) is xy₁+yx₁=2c². Memorize this directly.",
      "Asymptote slopes are ±b/a. Note it's b over a (same order as in the hyperbola equation).",
      "Difference |r₁−r₂|=2a for hyperbola. Sum r₁+r₂=2a for ellipse. One more ellipse vs hyperbola contrast.",
    ],
  },

  tangent: {
    title: "Tangents & Normals — Unified Theory (S, T, S₁)",
    formulas: [
      ["S = 0", "The conic equation itself, e.g. x²+y²+2gx+2fy+c=0"],
      ["S₁ = (value at point)", "Substitute (x₁,y₁) into S. S₁>0 outside, =0 on curve, <0 inside"],
      ["T = 0 (key substitution rule)", "x²→xx₁,  y²→yy₁,  x→(x+x₁)/2,  y→(y+y₁)/2,  xy→(xy₁+yx₁)/2"],
      ["Tangent at point ON curve", "T = 0   (point satisfies S₁=0)"],
      ["Chord of contact from OUTSIDE", "T = 0   (point satisfies S₁>0)"],
      ["Chord with midpoint (h,k)", "T = S₁   (substitute (h,k) for (x₁,y₁))"],
      ["Pair of tangents from (x₁,y₁)", "SS₁ = T²"],
      ["Circle normal", "Line through the point AND center (no derivative needed)"],
      ["Parabola normal at t", "y = −tx + 2at + at³"],
      ["Ellipse normal at (x₁,y₁)", "a²x/x₁ − b²y/y₁ = a²−b²"],
      ["Hyperbola normal at (x₁,y₁)", "a²x/x₁ + b²y/y₁ = a²+b²"],
    ],
    concepts: [
      ["T=0: one formula, two meanings", "T=0 is called 'the tangent equation' but it's actually the chord of contact when used from an external point. The formula is IDENTICAL. What changes is where the point lies: on the curve (tangent) vs outside the curve (chord of contact)."],
      ["T=S₁: chord with given midpoint", "This is the most powerful and commonly tested tool. To find the chord of any conic whose midpoint is (h,k): write T=S₁ with (x₁,y₁)=(h,k). Works for all conics. NIMCET tests this directly."],
      ["SS₁=T²: combined pair of tangents", "From external point P(x₁,y₁), two tangents touch the conic at A and B. The combined equation of these two tangents is SS₁=T². Check: S₁>0 for two real tangents. S₁=0 → only one (point is on curve). S₁<0 → no real tangents."],
      ["Normal properties", "Circle: normal passes through center (no calculus). Parabola: normal at t has slope −t. Ellipse/Hyperbola: normal bisects the angle between focal radii at that point — a beautiful reflection property."],
    ],
    examples: [
      {
        q: "Chord of contact from (5,3) to circle x²+y²=16.",
        steps: [
          "S₁ = 25+9−16 = 18 > 0  (external point  ✓)",
          "T=0: xx₁+yy₁=r²",
          "5x+3y = 16",
        ],
      },
      {
        q: "Chord of ellipse x²/16+y²/9=1 with midpoint (2,1).",
        steps: [
          "Use T=S₁:",
          "xx₁/a²+yy₁/b² = x₁²/a²+y₁²/b²",
          "2x/16+y/9 = 4/16+1/9",
          "x/8+y/9 = 1/4+1/9 = 13/36",
          "Multiply by 72: 9x+8y = 26",
        ],
      },
      {
        q: "Normal to parabola y²=8x at (2,4).",
        steps: [
          "a=2. Implicit: 2y·dy/dx=8 → dy/dx=4/y=4/4=1",
          "Normal slope = −1/1 = −1",
          "Normal: y−4 = −1(x−2) → y = −x+6",
          "Cross-check via t: 2at=4→t=1. y=−tx+2at+at³=−x+4+2=−x+6 ✓",
        ],
      },
      {
        q: "Pair of tangents from (3,4) to x²+y²=9. Do real tangents exist?",
        steps: [
          "S₁ = 9+16−9 = 16 > 0   (external point → YES)",
          "T = xx₁+yy₁−r² = 3x+4y−9",
          "SS₁=T²: (x²+y²−9)(16) = (3x+4y−9)²",
          "16x²+16y²−144 = 9x²+16y²+81+24xy−54x−72y",
          "7x²−24xy+24y+54x−225=0  [combined tangent equation]",
        ],
      },
    ],
    tips: [
      "T=S₁ for 'chord with given midpoint' is the #1 most powerful formula in all of conics. Know it cold.",
      "Tangent at point ON curve and chord of contact both use T=0. The point's position tells you which one.",
      "Circle normal = line through point + center. Never use calculus for circles in MCQ — this is instant.",
      "Ellipse normal formula: a²x/x₁−b²y/y₁=a²−b². Note it's NOT the T=0 formula; it uses a²/x₁ not x₁/a².",
      "Compare tangent forms at a glance: circle: xx₁+yy₁=r² | parabola: yy₁=2a(x+x₁) | ellipse: xx₁/a²+yy₁/b²=1 | hyperbola: xx₁/a²−yy₁/b²=1.",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

function SectionLabel({ label, color }) {
  return (
    <div style={{ fontSize: "10px", color, letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>
      {label}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("coord");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* Header */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>Coordinate Geometry</div>
        <div style={{ color: "#7a9ab8", fontSize: "11px", margin: "0 0 12px" }}>
          Formulas · Concepts · Solved Examples · Exam Tips
        </div>

        {/* Tabs */}
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
        <SectionLabel label="📐 Key Formulas" color="#b07a00" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "7px", marginBottom: "22px" }}>
          {d.formulas.map(([name, formula], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${gold}`, borderRadius: "3px", padding: "9px 11px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", color: "#999", marginBottom: "5px" }}>{name}</div>
              <div style={{ fontSize: "13px", fontFamily: "'Courier New',monospace", color: navy, fontWeight: "700", lineHeight: "1.5" }}>{formula}</div>
            </div>
          ))}
        </div>

        {/* Concepts */}
        <SectionLabel label="📖 Concepts" color="#1a365d" />
        <div style={{ marginBottom: "22px", display: "grid", gap: "7px" }}>
          {d.concepts.map(([h, b], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${navy}`, borderRadius: "3px", padding: "10px 13px", fontSize: "13px", lineHeight: "1.65" }}>
              <span style={{ fontWeight: "700", color: navy }}>{h}: </span>
              <span style={{ color: "#444" }}>{b}</span>
            </div>
          ))}
        </div>

        {/* Examples */}
        <SectionLabel label="✏️ NIMCET-style Solved Examples" color="#14532d" />
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
        <SectionLabel label="⚡ NIMCET Exam Patterns & Tips" color="#9f1239" />
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
          NIMCET Official Syllabus · Coordinate Geometry · Study smart, then grind PYQs 🎯
        </div>
      </div>
    </div>
  );
}
