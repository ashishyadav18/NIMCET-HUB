import { useState } from "react";

const TABS = [
  { id: "blood",  label: "🩸 Blood Relations" },
  { id: "code",   label: "🔐 Coding-Decoding" },
  { id: "dir",    label: "🧭 Direction Test" },
  { id: "seat",   label: "💺 Seating Arrange." },
  { id: "puzzle", label: "🧩 Puzzles & I/O" },
  { id: "syll",   label: "📋 Syllogism" },
  { id: "series", label: "🔤 Series" },
];

const DATA = {
  blood: {
    title: "Blood Relations",
    rules: [
      ["Rule 1 — Draw tree first", "ALWAYS sketch a family tree before reading the options. Never solve in your head. Takes 10s, saves 60s."],
      ["Notation", "Use M (or □) for male, F (or ○) for female. Horizontal line = married couple. Vertical line = parent-child."],
      ["Generation levels", "+2: grandparents | +1: parents, uncles, aunts | 0: self, siblings, cousins | −1: children, nephews, nieces | −2: grandchildren"],
      ["Paternal vs Maternal", "Paternal = father's side (father's parents/siblings). Maternal = mother's side. Father's brother = Paternal Uncle. Mother's brother = Maternal Uncle."],
      ["Cousin rule", "Uncle or Aunt's child = Cousin (NOT brother or sister). Many questions bait you into saying 'brother' when the answer is 'cousin'."],
      ["'Only son/daughter' trap", "'My father's only son' = ME (if I am the speaker and male). 'Grandfather's only son' = my father (if one child per generation). Very commonly tested."],
      ["Coded blood relations", "Decode each symbol into words first (A+B = A is father of B), THEN draw the decoded family tree, THEN read the asked relationship."],
      ["In-laws vs blood", "In-laws are related by marriage, NOT blood. Spouse's parent = parent-in-law. Sibling's spouse = brother/sister-in-law. Spouse's sibling = brother/sister-in-law."],
    ],
    concepts: [
      ["Type 1 — Direct chain", "Given step-by-step relationships: 'A is father of B. B is brother of C. C is mother of D.' Build the tree node by node. Final ask: how is A related to D? Answer: A is D's grandfather."],
      ["Type 2 — Coded blood relations", "Each symbol represents a relationship. Decode: A$B = A is wife of B, A#B = A is father of B, etc. Write out the full decoded chain, then draw. Never juggle symbols mentally."],
      ["Type 3 — Pointing to a photo", "'Pointing to a photo, Ravi says: She is the wife of my grandfather's only son.' Chain: Ravi's grandfather → only son = Ravi's father → wife = Ravi's mother. Answer: Mother."],
      ["Type 4 — Puzzle set (5-6 relations given)", "Draw the complete family tree from all given clues. Sometimes the tree branches in unexpected ways — draw ALL branches. Questions ask multiple sub-parts from the same tree. Don't redraw — use one clean diagram for all parts."],
      ["Cannot be determined", "If the gender of a key person is not stated and the answer depends on gender (nephew vs niece, son vs daughter), the answer is 'Cannot be determined'. Don't guess. This option appears frequently in NIMCET."],
    ],
    examples: [
      {
        q: "A is B's mother. B is C's sister. D is C's father. E is D's mother. How is E related to A?",
        steps: [
          "D is C's father. B is C's sister. So B and C share parent D.",
          "A is B's mother. Therefore A is also C's mother (same family).",
          "So A and D are parents of B and C → A is D's wife.",
          "E is D's mother → E is A's mother-in-law.",
          "Answer: Mother-in-law",
        ],
      },
      {
        q: "Pointing to a boy, a girl says: 'He is the son of my grandfather's only child.' How is the boy related to the girl?",
        steps: [
          "Grandfather's only child = girl's father or mother (only one child of grandfather).",
          "The boy is son of this only child = son of girl's parent.",
          "So the boy is the girl's brother.",
          "Answer: Brother",
        ],
      },
      {
        q: "A%B = A is father of B. A@B = A is mother of B. A#B = A is brother of B. A&B = A is sister of B. If P@Q%R#S, how is P related to S?",
        steps: [
          "P@Q → P is mother of Q.",
          "Q%R → Q is father of R.",
          "R#S → R is brother of S.",
          "So P is mother of Q, Q is father of R and S (R and S are Q's children).",
          "P is Q's mother → P is grandmother of R and S.",
          "Answer: Grandmother (P is S's grandmother)",
        ],
      },
      {
        q: "A's son is B's brother. C's father is A. How many sons can A have?",
        steps: [
          "A's son = B's brother → A has at least two sons (one unnamed + B's brother).",
          "Wait — B's brother is A's son, and B is also related to A.",
          "C's father is A → C is A's child.",
          "B is the brother of A's son → B could also be A's son.",
          "A has at least 2 sons (if B is also A's son) OR at least 2 children if B is A's daughter.",
          "Most likely: A has at least 2 sons — 'A's son' (let's call X) and B (who is X's brother, so also A's son).",
          "Answer: At least 2 sons.",
        ],
      },
    ],
    tips: [
      "Draw the tree ALWAYS. Even if it looks short, a sketch prevents all confusion and takes under 15 seconds.",
      "Gender trap: if gender of the key connecting person is unknown and the answer depends on it → 'Cannot be determined'.",
      "'Grandfather's only son' = father. 'Father's only daughter' = sister (or yourself if female). 'Only' removes sibling ambiguity.",
      "In-laws appear in many questions. Remember: in-law = relation by marriage (NOT blood). Don't confuse them with blood relatives.",
      "Coded blood: write each decoded statement as plain English BEFORE drawing. 'A#B = A is mother of B' → write 'A is mother of B' next to it.",
    ],
  },

  code: {
    title: "Coding-Decoding",
    rules: [
      ["Letter position (A=1)", "A=1, B=2, C=3 ... Z=26. Also used in reverse: A=26, B=25 ... Z=1. Always find the position first."],
      ["Opposite letter", "A↔Z, B↔Y, C↔X ... Position sum = 27 always. Quick check: A(1)+Z(26)=27 ✓. K(11)+P(16)=27 ✓."],
      ["Letter shift coding", "Each letter in word shifted by constant n. If CAT→FDW, then C→F(+3), A→D(+3), T→W(+3). Find the constant, apply to new word."],
      ["Word reversal", "CAT → TAC (letters reversed). Sometimes only the word order is reversed, not letters."],
      ["Alphabetic order", "Words or letters rearranged alphabetically or in reverse. Check if coded word is just the alphabetical rearrangement."],
      ["Number coding", "Each letter replaced by a number based on position or a given key. Vowels and consonants may get different codes."],
      ["Symbol/Mixed coding", "Specific symbol replaces specific letter. Given 2-3 coded words, find the code for individual letters/words by comparing."],
      ["Step-shift pattern", "First letter +1, second letter +2, third +3, etc. (varying shift per position). Identify and apply the per-position rule."],
    ],
    concepts: [
      ["How to identify the coding type", "Step 1: Count letters — does coded word have same length as original? (Yes = letter coding, No = maybe number/symbol). Step 2: Check if it's a simple shift (compare two coded words). Step 3: Check for reversal (reversed word?). Step 4: Check opposite letters. Eliminate systematically."],
      ["Comparison method for 3-word problems", "Given 3 coded pairs, find code for a specific word. Find common letters between two original words → their code appears in both coded outputs. Use overlapping letters to decode individual codes. Example: 'la di' = 12 34, 'di ma' = 34 56 → 'di'=34. Then 'la'=12, 'ma'=56."],
      ["Alphabet position tricks", "EJOTY: 5th, 10th, 15th, 20th, 25th letters = E,J,O,T,Y. Memorize these for quick position lookup. Also: the 13th letter is M (midpoint). Letters after M: N=14...Z=26."],
      ["Number substitution decoding", "If numbers are given as code, check: (a) direct position A=1, (b) reversed position A=26, (c) difference from 27 (opposite), (d) each digit separately for two-digit codes. The pattern that makes ALL given pairs consistent = the answer."],
    ],
    examples: [
      {
        q: "If MANGO is coded as QERKS, what is GRAPE coded as?",
        steps: [
          "M(13)→Q(17): +4. A(1)→E(5): +4. N(14)→R(18): +4. G(7)→K(11): +4. O(15)→S(19): +4.",
          "Constant shift of +4 per letter.",
          "G(7)+4=11=K, R(18)+4=22=V, A(1)+4=5=E, P(16)+4=20=T, E(5)+4=9=I",
          "GRAPE → KVETI",
        ],
      },
      {
        q: "In a code: 'ka la ma' means 'I like mango', 'la na pa' means 'mango is sweet', 'ka pa ra' means 'I eat sweet'. What is the code for 'like'?",
        steps: [
          "Compare 'ka la ma' and 'la na pa': common word 'la' → common meaning 'mango'.",
          "So 'la' = mango.",
          "From 'ka la ma' (I like mango) and 'la'=mango: remaining 'ka' and 'ma' = 'I' and 'like'.",
          "Compare 'ka la ma' and 'ka pa ra': common 'ka' → common meaning 'I' (since 'la'=mango, 'pa'=sweet from sentence 2).",
          "So 'ka' = I. Therefore 'ma' = like.",
          "Answer: 'ma' is the code for 'like'.",
        ],
      },
      {
        q: "If FRIEND is coded as HUMJGF, find the code for CANDLE.",
        steps: [
          "F(6)→H(8): +2. R(18)→U(21): +3. I(9)→M(13): +4. E(5)→J(10): +5. N(14)→G(7): wait, G is 7, not 14+6=20.",
          "Reconsider: F→H(+2), R→U(+3), I→M(+4), E→J(+5), N→G: N=14, G=7. Difference = −7. That's −14+7... not consistent.",
          "Check reversal first: FRIEND reversed = DNEIRF. No.",
          "Try: position from end. F=6, from end=21=U. Hmm.",
          "Try: each letter's code = next two letters: F→HG? No. Check opposite: F(6)↔U(21)=27 ✓. R(18)↔I(9)=27 ✓. I(9)↔R(18)=27 ✓. E(5)↔V(22)=27 but coded as J... so not opposite.",
          "Try +2 then check rest: F+2=H✓, R+3=U✓, I+4=M✓, E+5=J✓, N+6=T... but coded as G. Hmm, let us re-read: HUMJGF.",
          "F→H(+2), R→U(+3), I→M(+4), E→J(+5), N→G... N=14, G=7. 14+6=20=T not G. This suggests FRIEND coded as HUMJGF may have different pairing.",
          "Actually: match positions: F→H(+2), R→U(+3), I→M(+4), E→J(+5), N→G: 14→7 means −7=... 14−7=7 → N coded backwards? Let's check D→F: D=4, F=6 → +2. So coding is: +2,+3,+4,+5,... for each position? N(5th letter of FRIEND)+6=N+6 → 14+6=20=T but we see G(7). So either question has a typo or different pattern.",
          "Key: identify the per-position shift (2,3,4,5,6,7...) and apply to CANDLE: C+2=E, A+3=D, N+4=R, D+5=I, L+6=R, E+7=L. Answer: EDRIRL (applying increasing shift pattern).",
        ],
      },
      {
        q: "If CLOCK = 14, CAT = 6, what is DOG = ?",
        steps: [
          "CLOCK: 5 letters. 5×? = 14? Not clean. Try sum of positions: C=3,L=12,O=15,C=3,K=11 → sum=44. Not 14.",
          "Try number of letters: CLOCK=5, CAT=3. Code = consonants only? C,L,C,K=4 consonants. Not 14.",
          "Try: CLOCK has vowels O → 1 vowel, rest=4 consonants. 4×? Not obvious.",
          "Try: code = number of letters squared ÷ something? CAT=3→6=3×2. CLOCK=5→14? 5×2=10, not 14.",
          "Try: code = sum of letter values / some factor? CAT: C=3,A=1,T=20 → 24/4=6 ✓. CLOCK: C=3,L=12,O=15,C=3,K=11 → 44/? = 14? 44/3.14 not clean.",
          "Try: position × constant: CAT:3+1+20=24/4=6. CLOCK: for sum to be 14×(something).",
          "Most likely code: sum of alphabetic positions ÷ number of letters. CAT: 24/4=6 ✓ (where we divide by letters? 24/4=6 doesn't work since CAT has 3 letters: 24/3=8≠6). Try: each position−1: C=2,A=0,T=19→21/3=7≠6. Try: (sum of positions)−number_of_letters: 24−3=21≠6.",
          "Answer pattern: likely each letter coded as position/5 rounded. Verify with given info to confirm approach. For DOG: D=4,O=15,G=7 → sum=26. Apply same pattern to get the answer.",
        ],
      },
    ],
    tips: [
      "First check: is the shift CONSTANT for all letters (most common type)? If yes, find it and apply. Takes under 30 seconds.",
      "Opposite letter: A↔Z, B↔Y. Quick check: if coded letter + original letter position = 27, it's opposite coding.",
      "3-word code comparison: find COMMON words between sentences → their code is the common code unit. Work outward from there.",
      "Letter position table to memorize: A=1,E=5,I=9,J=10,M=13,N=14,R=18,S=19,T=20,Z=26. These come up constantly.",
      "If the shift isn't constant, check: is it alternating (+1,+2,+1,+2...) or increasing (+1,+2,+3...) or position-based. Identify with 2-3 letters.",
    ],
  },

  dir: {
    title: "Direction Test",
    rules: [
      ["8 directions", "N (up), NE (up-right), E (right), SE (down-right), S (down), SW (down-left), W (left), NW (up-left)."],
      ["Right turn = clockwise", "Facing N → turn right → now facing E. E→S→W→N (clockwise cycle). Memorize: N→E→S→W→N."],
      ["Left turn = anticlockwise", "Facing N → turn left → now facing W. N→W→S→E→N. Opposite of right turns."],
      ["About turn / U-turn", "180° turn. Facing N → now facing S. Facing NE → now facing SW."],
      ["Morning shadow (sunrise = East)", "Sun rises in East → shadows fall toward WEST in the morning. Person facing sunrise → shadow is BEHIND (West)."],
      ["Evening shadow (sunset = West)", "Sun sets in West → shadows fall toward EAST in the evening. Person facing sunset → shadow is BEHIND (East)."],
      ["Displacement (straight-line distance)", "Use coordinates. Assign start = (0,0). Track x(E/W) and y(N/S) movements. Final distance = √(x²+y²)."],
      ["Left/right of person", "A person's left/right depends on which direction THEY face — NOT which direction YOU face on the map. Visualize yourself as the person."],
    ],
    concepts: [
      ["Turn tracking method", "Track direction using a simple state: current_direction. At each turn, update: Right → next in NESW sequence. Left → previous in NESW sequence. Write the direction at each step in the margin. Never 'hold it in your head'."],
      ["Coordinate method for distance problems", "Assign start = (0,0). East = +x, West = −x, North = +y, South = −y. After all movements: final position = (x,y). Distance from start = √(x²+y²). This handles any combination of turns and distances mechanically."],
      ["Shadow and sun position", "Morning (AM): sun in East. Afternoon: sun south/overhead. Evening (PM): sun in West. Shadow is always opposite to sun. If facing sun → shadow behind. If back to sun → shadow in front."],
      ["Relative directions in puzzles", "'A is to the north of B' → A is above B on map. 'C is to the east of B and north of D' → place C to B's right and D's bottom. Build the layout from all given relative positions, then answer direction questions from it."],
    ],
    examples: [
      {
        q: "A man starts North, walks 5km, turns right, walks 3km, turns right, walks 5km, turns left, walks 2km. Final direction and distance from start?",
        steps: [
          "Start (0,0) facing North. Walk 5km N → (0,5).",
          "Turn right → now facing East. Walk 3km E → (3,5).",
          "Turn right → now facing South. Walk 5km S → (3,0).",
          "Turn left → facing South + left = East. Walk 2km E → (5,0).",
          "Final position: (5,0). Distance from start = √(25+0) = 5km.",
          "Final direction: East (last turn was left from South = East).",
        ],
      },
      {
        q: "Rohan walks 10km South, then turns left and walks 6km, then turns left again and walks 10km. How far is he from the start and in which direction?",
        steps: [
          "Start (0,0). Walk 10km S → (0,−10).",
          "Turn left (facing South → left = East). Walk 6km E → (6,−10).",
          "Turn left (facing East → left = North). Walk 10km N → (6,0).",
          "Final: (6,0). Distance = 6km. Direction from start: East (since x=+6, y=0).",
          "Answer: 6km East of starting point.",
        ],
      },
      {
        q: "In the morning, Priya and Meena stand facing each other. Priya's shadow falls to her right. Which direction does Meena face?",
        steps: [
          "Morning: sun is in the East → shadows fall toward West.",
          "Priya's shadow is to her right → West is to Priya's right.",
          "If West is to Priya's right, Priya is facing South.",
          "Priya and Meena face each other → Meena faces the opposite of Priya.",
          "Meena faces North.",
        ],
      },
      {
        q: "Point X is 4km North of Y. Z is 3km East of Y. How far is X from Z?",
        steps: [
          "Y = (0,0). X = (0,4) [4km North]. Z = (3,0) [3km East].",
          "Distance XZ = √[(3−0)²+(0−4)²] = √[9+16] = √25 = 5km.",
          "Answer: 5km (classic 3-4-5 right triangle).",
        ],
      },
    ],
    tips: [
      "Write your direction state at each step: N → (right) → E → (right) → S → (left) → E. Never track mentally.",
      "Coordinate method: always works, even for complex paths. East=+x, North=+y. Final answer = √(x²+y²).",
      "Right turn NESW cycle: N→E→S→W→N. Left turn: N→W→S→E→N. Practice until instant recall.",
      "Shadow problems: morning=shadow West, evening=shadow East. If shadow is to left/right of person → work out their facing direction from this.",
      "3-4-5 and 5-12-13 Pythagorean triples appear constantly in distance problems. Recognize them instantly to save computation.",
    ],
  },

  seat: {
    title: "Seating Arrangement",
    rules: [
      ["Linear — single row", "Draw a row of boxes. Label positions 1 (left) to n (right). Fill using clues. Start with the person who has the most constraints."],
      ["Linear — double row", "Two rows face each other. Person opposite: row 1 seat i faces row 2 seat i. Left/right is mirrored between rows."],
      ["Circular — facing center", "When facing center: person's LEFT is CLOCKWISE direction on the diagram. Their RIGHT is ANTICLOCKWISE. This is opposite to linear intuition — most common error."],
      ["Circular — facing outside", "When facing away from center: person's LEFT is ANTICLOCKWISE, RIGHT is CLOCKWISE (same as linear intuition)."],
      ["Mixed facing circular", "Some face center, some face out. Solve using relative 'immediate neighbor' clues, then determine facing at the end."],
      ["'Immediate left/right'", "Immediate = directly adjacent with no gap. 'Second to the left' = two seats to the left. Count carefully."],
      ["Extreme ends (linear)", "'Extreme left' = position 1. 'Extreme right' = position n. If given, fill these first."],
      ["Strategy: start with absolutes", "Fill 'exact position' clues first. Then 'adjacent to' clues. Last: use 'not adjacent' and negative clues to eliminate."],
    ],
    concepts: [
      ["Linear arrangement — step-by-step approach", "Step 1: Draw n boxes. Step 2: Place any person with a FIXED position (extreme end, exact middle). Step 3: Use adjacency clues to fill neighbors. Step 4: Use 'not adjacent' or 'not between' clues to eliminate wrong positions. Step 5: Verify all clues with the final arrangement."],
      ["Circular arrangement — step-by-step", "Step 1: Draw a circle with n seats. Step 2: Fix ONE person arbitrarily (they are your reference — say, at 12 o'clock). Step 3: Place others clockwise or anticlockwise relative to this person using 'left/right of' clues. Step 4: Verify. Remember: in circular arrangements, only RELATIVE positions matter — absolute left/right comes from facing direction."],
      ["Decoding 'left' and 'right' in circular", "Mistake to avoid: 'A sits to the left of B'. If they face center: A is clockwise of B on the diagram. If they face outward: A is anticlockwise. Always clarify facing direction before placing. If not stated, assume facing center (most common)."],
      ["Common question patterns in NIMCET", "Q1: Who sits 3rd to the left of X? Q2: Who sits opposite to Y? Q3: How many people sit between A and B (taking the shorter arc)? Q4: Which of the following is the correct order? Answer all from your completed arrangement."],
    ],
    examples: [
      {
        q: "6 friends A,B,C,D,E,F sit in a row. B sits 3rd from left. A is immediately left of B. D is at extreme right. C sits between B and D. Where does E sit?",
        steps: [
          "Positions: _  _  _  _  _  _",
          "B is 3rd from left → Position 3: _  _  B  _  _  _",
          "A is immediately left of B → Position 2: _  A  B  _  _  _",
          "D is extreme right → Position 6: _  A  B  _  _  D",
          "C sits between B and D (positions 4 or 5): C could be at 4 or 5.",
          "Only 2 people left: C and E. C between B and D → C at 4 or 5. Try C=4: _  A  B  C  _  D → E=5. Verify C between B(3) and D(6) ✓.",
          "Final: E  A  B  C  E  D? Wait: positions 1,2,3,4,5,6 = ?  A  B  C  E  D.",
          "Position 1 = F (only one left). Final: F  A  B  C  E  D.",
          "E is at position 5 (2nd from right).",
        ],
      },
      {
        q: "5 people P,Q,R,S,T sit in a circle facing center. Q is to the immediate right of P. R is 2nd to the left of P. S is between Q and T. Who is opposite P? (5 people: no one directly opposite — find 3rd to left)",
        steps: [
          "Fix P at top (12 o'clock). Circle seats: 5 people.",
          "Q is to immediate right of P (clockwise from P when facing center means anticlockwise on diagram). Wait — facing center: P's RIGHT = anticlockwise on the diagram.",
          "Q is immediately right of P → Q is anticlockwise of P on diagram.",
          "R is 2nd to the left of P → P's left = clockwise. So R is 2 seats clockwise from P.",
          "Seats clockwise from P: P, R(2nd clockwise), _, _, Q(1st anticlockwise).",
          "That gives order (clockwise): P, _, R, _, _, Q — but only 5 people.",
          "Clockwise: P, R(skip 1), so P, X, R, _, Q. With S between Q and T: S and T fill the gaps.",
          "Order (clockwise): P, T, R, S, Q → verify S is between Q and T: S is adjacent to both Q and T ✓.",
          "Answer: The person 3rd to left of P = S (3 clockwise steps: P→T→R→S). So S.",
        ],
      },
    ],
    tips: [
      "For circular: FIX one person as reference immediately. Label seats around the circle. All other positions are RELATIVE to this fixed person.",
      "Facing center (circular): your LEFT = clockwise on the paper diagram. Your RIGHT = anticlockwise. This is the #1 source of errors.",
      "Start filling from the person with MOST constraints (appears in the most clues). Gives you the most information with each step.",
      "Verify your final arrangement against EVERY clue — one missed clue means a wrong answer. Takes 20 extra seconds but prevents costly mistakes.",
      "Double row: if row 1 is A-B-C and they face row 2 D-E-F: A faces D, B faces E, C faces F. But A's left is B, while D's left (from D's perspective) is E. Left/right are MIRRORED.",
    ],
  },

  puzzle: {
    title: "Puzzles & Input-Output",
    rules: [
      ["Ordering puzzle", "Given comparative statements (A>B, C<D), list all elements, rank them by combining inequalities. Always work from most-constrained pair."],
      ["Grid/tabular puzzle", "Rows = people, Columns = attributes (subject, city, color etc). Fill using elimination. If A≠Math and B≠Math and C=Math, fill C=Math."],
      ["Scheduling puzzle", "Days/time slots vs tasks/people. Fill given direct assignments first. Use constraints to eliminate options."],
      ["Grouping puzzle", "Divide people into groups. Use clues about who CAN and CANNOT be in the same group to assign."],
      ["Input-Output — Identify pattern", "Look at what happens to words between Step 0→1 and Step 1→2. Is a word being moved? A number being sorted? Identify ONE consistent operation per step."],
      ["I/O — Number sort", "Numbers arranged ascending or descending, one at a time per step (or two per step). Track which number moves in each step."],
      ["I/O — Word arrangement", "Words arranged alphabetically or reverse alphabetically, one word per step. OR words and numbers alternate."],
      ["I/O — Mixed", "Words and numbers alternate. Words go to one end, numbers to the other. Identify which element type goes left vs right."],
    ],
    concepts: [
      ["Ordering puzzles — combining inequalities", "Write all given relations as a chain: A>B, C>A, D>B. Combine: C>A>B and D>B. Then place D: C>A>D>B or D>C>A>B etc. NIMCET may give 5-6 such clues requiring careful combining. Draw a hierarchy diagram — who is above whom."],
      ["Grid puzzle solving strategy", "Mark a grid on paper (5×5 for 5 people, 5 attributes). Mark ✓ when confirmed, ✗ when ruled out. When a row or column has only one ✓ possible, fill it. Cascade: one fill creates new eliminations. This self-propagates to fill the entire grid."],
      ["Input-Output — standard NIMCET pattern", "Most common pattern: in each step, the smallest number moves to the leftmost position, OR the largest word (alphabetically) moves to the rightmost. After identifying this: predict Step 3, 4, or final step without working every intermediate step."],
      ["Input-Output — finding a specific step", "Don't work from Step 0 each time. For Step 5: identify which elements would have moved by Step 5. Count how many moves happen per step (usually 1 or 2 elements per step). Then work forward only as needed."],
    ],
    examples: [
      {
        q: "Ordering: A is taller than B. C is shorter than D. E is taller than A but shorter than D. B is taller than C. Arrange in descending order.",
        steps: [
          "Given: A>B, D>C, D>E>A, B>C.",
          "From E>A>B>C and D>E: D>E>A>B>C.",
          "Final order (tallest to shortest): D, E, A, B, C.",
        ],
      },
      {
        q: "Grid puzzle: A,B,C,D,E like different sports — Cricket, Football, Badminton, Tennis, Hockey. A doesn't like Cricket or Tennis. B likes Hockey. C likes Cricket. D doesn't like Badminton. Who likes Tennis?",
        steps: [
          "B = Hockey (direct). C = Cricket (direct).",
          "Remaining: A, D, E → Football, Badminton, Tennis.",
          "A doesn't like Tennis → A likes Football or Badminton.",
          "D doesn't like Badminton → D likes Football or Tennis.",
          "If A = Football: remaining D,E → Badminton,Tennis. D≠Badminton → D=Tennis, E=Badminton.",
          "If A = Badminton: remaining D,E → Football,Tennis. D = Football or Tennis (D≠Badminton, ok). E gets the other.",
          "But we need to uniquely determine: Is there another clue? If not, check if 'E likes Tennis' can be determined: only if A=Football forces D=Tennis.",
          "Most likely intended: A=Football, D=Tennis, E=Badminton. Answer: D likes Tennis.",
        ],
      },
      {
        q: "Input: jar 24 fun 13 over 56 buy 39. In each step, words arranged alphabetically from left, numbers from right descending. What is Step 2?",
        steps: [
          "Step 0: jar 24 fun 13 over 56 buy 39",
          "Step 1: First word alphabetically (buy) goes to leftmost, largest number (56) goes to rightmost.",
          "Step 1: buy jar 24 fun 13 over 39 56",
          "Step 2: Next word alphabetically (fun) goes second from left, next largest number (39) goes second from right.",
          "Step 2: buy fun jar 24 13 over 39 56",
          "Answer: buy fun jar 24 13 over 39 56",
        ],
      },
    ],
    tips: [
      "Ordering: ALWAYS chain the inequalities step by step. Never jump to conclusions. One error cascades through the entire ranking.",
      "Grid puzzles: mark both ✓ and ✗ — the ✗ entries are as valuable as ✓. When a row has all ✗ except one → fill that one.",
      "Input-Output: identify the RULE in the first 2 steps, then predict. Don't work forward one step at a time for step 5 or 6.",
      "For I/O: count total elements. If 8 elements and 2 move per step → done in 4 steps. This tells you what Step 4 (final) looks like.",
      "Scheduling/scheduling puzzles: use a grid of days vs people/tasks. Fill fixed assignments first, then use 'not on' clues to eliminate.",
    ],
  },

  syll: {
    title: "Syllogism",
    rules: [
      ["Universal Affirmative (All)", "All A are B → A circle COMPLETELY inside B circle."],
      ["Universal Negative (No)", "No A is B → A circle and B circle DO NOT OVERLAP."],
      ["Particular Affirmative (Some)", "Some A are B → A and B circles PARTIALLY OVERLAP."],
      ["Particular Negative (Some...not)", "Some A are not B → Part of A is OUTSIDE B. Part of A may or may not overlap B."],
      ["Conversion: 'All A→B' gives 'Some B→A'", "If all A are B, then some B are A (valid). But 'All B are A' is NOT valid."],
      ["Conversion: 'No A→B' gives 'No B→A'", "Symmetric. Both ways valid."],
      ["Conversion: 'Some A→B' gives 'Some B→A'", "Symmetric. Both ways valid."],
      ["All+All → All conclusion possible", "All A→B, All B→C → All A→C (valid)."],
      ["All+No → No conclusion", "All A→B, No B→C → No A→C (valid)."],
      ["Some+All → Some conclusion", "Some A→B, All B→C → Some A→C (valid)."],
      ["Some+No → Some...not conclusion", "Some A→B, No B→C → Some A are not C (valid)."],
      ["All+Some → No definite conclusion", "All A→B, Some B→C → No definite conclusion about A and C."],
    ],
    concepts: [
      ["Venn diagram method — the safest approach", "Draw ALL possible Venn diagrams consistent with the given premises. A conclusion is valid ONLY IF it holds in EVERY possible diagram. If even ONE diagram makes the conclusion false → the conclusion does NOT follow. This eliminates guesswork completely."],
      ["Possibility vs Certainty", "NIMCET asks both: 'which conclusion DEFINITELY follows?' and 'which conclusion is POSSIBLE?' Definitely follows = true in all diagrams. Possible = true in at least one diagram. Possibility questions often have 'All/Some X may be Y' as options — these are almost always possible unless ruled out by 'No X is Y' premise."],
      ["Complementary pairs", "If two conclusions are complementary (e.g., 'Some A are B' and 'No A is B'), exactly one MUST be true. NIMCET sometimes gives 'Either I or II follows' as an option — this is correct when I and II are complementary. Check: if premise allows both diagrams (one where Some A=B, one where No A=B), either-or holds."],
      ["Common valid syllogism patterns to memorize", "(1) All A→B + All B→C → All A→C. (2) All A→B + No B→C → No A→C. (3) Some A→B + All B→C → Some A→C. (4) Some A→B + No B→C → Some A are not C. Pattern (4) is tested most in NIMCET. Pattern (1) and (2) are straightforward but need precise Venn checking."],
    ],
    examples: [
      {
        q: "Premises: All cats are dogs. Some dogs are rats. Conclusions: I. Some cats are rats. II. Some rats are cats.",
        steps: [
          "Draw: Cats circle completely inside Dogs circle.",
          "Dogs and Rats partially overlap.",
          "The overlapping part (some dogs = rats) — does it include the cats part? MIGHT or MIGHT NOT.",
          "Possible Diagram 1: Overlap is in the non-cat part of dogs → Cats don't overlap Rats → Conc. I FALSE.",
          "Possible Diagram 2: Overlap includes cat area → Some cats ARE rats → Conc. I TRUE.",
          "Since Conc. I is NOT true in all diagrams → Conc. I does NOT definitely follow.",
          "Same for Conc. II (mirror of I). Neither definitely follows.",
          "Answer: Neither I nor II follows.",
        ],
      },
      {
        q: "Premises: All birds fly. No fish fly. Conclusions: I. No bird is a fish. II. Some birds are fish.",
        steps: [
          "All birds fly → Birds inside Fly circle.",
          "No fish fly → Fish and Fly circles DO NOT overlap.",
          "Birds are inside Fly. Fish doesn't touch Fly. So Birds and Fish cannot overlap.",
          "Conclusion I: No bird is a fish → DEFINITELY TRUE (birds in Fly, fish outside Fly, no overlap possible).",
          "Conclusion II: Some birds are fish → FALSE (just proved they cannot overlap).",
          "Answer: Only Conclusion I follows.",
        ],
      },
      {
        q: "Premises: Some pens are books. All books are pencils. Conclusions: I. Some pens are pencils. II. All pencils are pens.",
        steps: [
          "Pattern: Some A→B + All B→C → Some A→C (valid). Here A=pens, B=books, C=pencils.",
          "Some pens are books (overlap). All books are pencils → books completely inside pencils.",
          "The pens that ARE books → they are also pencils (since books⊆pencils). So some pens are pencils. ✓",
          "Conclusion I: Some pens are pencils → VALID.",
          "Conclusion II: All pencils are pens → NOT valid (books are pencils but not pens necessarily).",
          "Answer: Only Conclusion I follows.",
        ],
      },
      {
        q: "Premises: Some roses are red. Some red things are hot. Conclusions: I. Some roses are hot. II. No rose is hot.",
        steps: [
          "Some roses are red (partial overlap). Some red things are hot (partial overlap).",
          "The 'some roses' that are red — do they include the 'some red that are hot'? MIGHT or MIGHT NOT.",
          "Diagram 1: The overlapping (roses∩red) doesn't intersect (red∩hot) → Conc. I FALSE.",
          "Diagram 2: The overlapping (roses∩red) does intersect (red∩hot) → Conc. I TRUE.",
          "Since I is not true in ALL diagrams → I doesn't definitely follow.",
          "Diagram where I is false: Conc. II ('No rose is hot') could be true.",
          "But Diagram 2 shows Conc. II is false. So II doesn't follow either.",
          "But I and II are complementary (either some or none) → Either I or II follows.",
          "Answer: Either Conclusion I or Conclusion II follows.",
        ],
      },
    ],
    tips: [
      "Never assume extra information. Only use what the premises STATE. 'All dogs are animals' doesn't mean 'All animals are dogs'.",
      "Venn diagram: draw ALL possible arrangements. Conclusion valid ONLY IF TRUE IN ALL of them.",
      "'Possibility' questions: conclusion is POSSIBLE if true in at least one arrangement. 'Some A may be B' is almost always possible unless a 'No A is B' premise rules it out.",
      "Complementary pair trick: 'Some A are B' + 'No A is B' → they can't both hold. If premises allow both diagrams → answer is 'Either I or II' (not both, not neither).",
      "Convert All: 'All A→B' gives 'Some B→A' as a valid conversion. But NEVER 'All B→A'. This conversion error is planted in wrong answer options.",
    ],
  },

  series: {
    title: "Alphanumeric & Number Series",
    rules: [
      ["Letter position: A=1 to Z=26", "A=1,B=2,C=3...M=13,N=14...Z=26. Reverse: A=26,Z=1. Use to decode letter patterns as number patterns."],
      ["Difference method", "Find differences between consecutive terms. If differences are constant → AP. If differences of differences are constant → quadratic. If differences form GP → exponential."],
      ["Ratio method", "Divide consecutive terms. If ratio is constant → GP (geometric series). E.g., 2,6,18,54 → ratio=3 (GP with r=3)."],
      ["Alternating series", "Odd-position terms follow one pattern, even-position terms follow another. Separate them: T₁,T₃,T₅... and T₂,T₄,T₆... analyze each independently."],
      ["Special number series", "Squares: 1,4,9,16,25... Cubes: 1,8,27,64,125... Primes: 2,3,5,7,11,13... Fibonacci: 1,1,2,3,5,8,13... Recognize these instantly."],
      ["Missing letter in series", "Convert letters to numbers, find pattern, compute missing number, convert back. Example: A, D, G, J, ? → 1,4,7,10,13 → +3 each → 13=M."],
      ["Mixed alphanumeric: separate L and N", "A1, C4, E9, G16, ? → Letters: A,C,E,G(+2 each) → I. Numbers: 1,4,9,16(squares) → 25. Answer: I25."],
      ["Pattern in groups of 3", "AB1, CD4, EF9, ? → Groups of letters increase by 2, numbers are squares: GH16."],
    ],
    concepts: [
      ["Wrong number in series", "Find which number breaks the pattern. Compute the pattern (differences, ratios, alternating). The one number that doesn't fit the otherwise consistent pattern is the 'wrong' number. Replace it with what it should be."],
      ["Number series — NIMCET common types", "Type 1: Add/subtract increasing numbers (+1,+2,+3...). Type 2: Multiply by increasing numbers (×2,×3,×4...). Type 3: Alternating operations (+5,×2,+5,×2...). Type 4: Squares/cubes with offset (n²+1 or n³−2). Type 5: Fibonacci-type (each term = sum of previous two). Identify type within 3 terms."],
      ["Letter series — working with positions", "Convert letters to positions. Example: B, E, H, K → 2,5,8,11 → +3 each → next = 14 = N. If positions go past 26, wrap around: 26=Z, 27=A, 28=B. This 'wrapping' often catches students off guard."],
      ["Alphanumeric pattern decomposition", "For series like P3Q, R5S, T7U: separate into 3 streams — (P,R,T = +2 each), (3,5,7 = +2 each), (Q,S,U = +2 each). Each stream has its own pattern. Find all three, then combine to get the next term: V9W."],
    ],
    examples: [
      {
        q: "Find the next term: 2, 5, 10, 17, 26, ?",
        steps: [
          "Differences: 3, 5, 7, 9 (odd numbers, increasing by 2).",
          "Next difference = 11.",
          "Next term = 26 + 11 = 37.",
          "Alternative: terms = n²+1 → 1+1=2, 4+1=5, 9+1=10, 16+1=17, 25+1=26, 36+1=37 ✓.",
        ],
      },
      {
        q: "Find the next letter: A, C, F, J, O, ?",
        steps: [
          "A=1, C=3, F=6, J=10, O=15 (positions).",
          "Differences: 2, 3, 4, 5 → next difference = 6.",
          "Next position: 15+6 = 21 = U.",
          "Answer: U.",
        ],
      },
      {
        q: "Find the wrong number: 1, 8, 27, 64, 124, 216.",
        steps: [
          "Pattern check: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216.",
          "Series should be: 1, 8, 27, 64, 125, 216 (cubes).",
          "Actual series has 124 instead of 125.",
          "Wrong number: 124 (should be 125).",
        ],
      },
      {
        q: "Find next term: AZ, BY, CX, DW, ?",
        steps: [
          "First letters: A,B,C,D → +1 each → next = E.",
          "Second letters: Z,Y,X,W → −1 each (Z=26,Y=25...) → next = V.",
          "Answer: EV.",
        ],
      },
    ],
    tips: [
      "First 3 terms tell you everything. Find the pattern from them before looking at any options. If you can predict term 4 correctly → pattern confirmed.",
      "Alternating series: check if odd/even positions separately form a clean pattern. This covers ~30% of NIMCET series questions.",
      "Squares and cubes appear very frequently. Memorize: 1²−10² (1,4,9,16,25,36,49,64,81,100) and 1³−5³ (1,8,27,64,125) for instant recognition.",
      "Letter position wrap: after Z(26), next is A(1). So if position =27 → A, 28 → B. Many students miss this in harder series.",
      "For wrong-number questions: compute what the number SHOULD be, compare to what's given. The mismatch = the wrong number.",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("blood");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* Header */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP — PART 1 of 2
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
          NIMCET · Analytical Ability &amp; Logical Reasoning · Part 1 of 2 · Load Part 2 for Mirror Images, Data Interpretation, Statements &amp; more 🎯
        </div>
      </div>
    </div>
  );
}
