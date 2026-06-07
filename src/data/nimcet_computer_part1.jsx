import { useState } from "react";

const TABS = [
  { id: "cpu",    label: "💻 CPU & Organization" },
  { id: "numsys", label: "🔢 Number Systems" },
  { id: "arith",  label: "➕ Binary Arithmetic" },
  { id: "twos",   label: "🔄 Two's Complement" },
  { id: "float",  label: "🔣 Float & Characters" },
  { id: "bool",   label: "⚡ Boolean Algebra" },
  { id: "gates",  label: "🔲 Logic Gates" },
];

const DATA = {
  cpu: {
    title: "Computer Organization & CPU",
    rules: [
      ["Von Neumann Architecture", "CPU + Memory + I/O Units connected by Buses. Programs AND data stored in the SAME memory. Instructions executed sequentially."],
      ["CPU = ALU + CU + Registers", "ALU: does arithmetic and logical operations. CU: fetches, decodes, controls. Registers: fastest storage (inside CPU)."],
      ["Program Counter (PC)", "Holds address of the NEXT instruction to be fetched. Auto-increments after each fetch."],
      ["Key Registers", "MAR: address of memory being accessed | MDR/MBR: data being transferred | IR: current instruction being decoded | AC: accumulator (stores results)."],
      ["Instruction Cycle", "Fetch → Decode → Execute → (Write Back). Repeat forever. CU controls all four phases."],
      ["Bus types", "Data bus: transfers data (bidirectional). Address bus: carries address (unidirectional, CPU→memory). Control bus: read/write/interrupt signals."],
      ["Memory hierarchy (fast→slow)", "Registers → L1 Cache → L2 Cache → L3 Cache → RAM → SSD/HDD → Optical/Tape. Speed and cost decrease; capacity increases going right."],
      ["RISC vs CISC", "RISC: few simple fixed-length instructions, faster per instruction, more registers (ARM). CISC: many complex variable-length instructions, fewer registers (x86/Intel)."],
    ],
    concepts: [
      ["ALU — what it actually does", "Performs arithmetic (add, subtract, multiply, divide) AND logical operations (AND, OR, NOT, XOR, compare). Results go to accumulator (AC) or general-purpose registers. The Flags register (Zero flag, Carry flag, Overflow flag, Sign flag) shows status of the last ALU operation — used by conditional branch instructions."],
      ["Control Unit — the brain", "Fetches instruction from RAM using PC → stores in IR → decodes opcode → sends control signals to ALU, registers, and memory. Two types: Hardwired CU (fast, built from circuits, hard to modify) and Microprogrammed CU (uses microcode ROM, slower but flexible, easier to update)."],
      ["Instruction format and addressing modes", "Instruction = Opcode (what to do) + Operand(s) (data or address). Addressing modes: Immediate (data is in the instruction itself, e.g., ADD R1, #5), Direct (instruction has the memory address), Indirect (instruction has address of address), Register (operand is in a register). NIMCET tests which mode is being described."],
      ["Cache memory — how it works", "Cache stores copies of frequently accessed RAM locations for fast CPU access. L1: 32-64 KB, ~1 ns, per core. L2: 256 KB-4 MB, ~5 ns, per core. L3: 4-64 MB, ~10-30 ns, shared. Cache hit = data found in cache (fast). Cache miss = must fetch from RAM (slow). Locality principle: recently used data (temporal) and nearby data (spatial) likely to be needed again."],
    ],
    examples: [
      {
        q: "Which component decodes instructions and sends control signals? (A) ALU  (B) Cache  (C) Control Unit  (D) MAR",
        steps: [
          "ALU: executes arithmetic/logic — does NOT decode.",
          "Cache: memory storage — does NOT decode.",
          "MAR: holds memory address — a register, not a control component.",
          "CU (Control Unit): fetches instruction into IR, decodes the opcode, then sends signals.",
          "Answer: (C) Control Unit.",
        ],
      },
      {
        q: "The Program Counter (PC) holds: (A) the current instruction  (B) the address of the next instruction  (C) the last result  (D) a memory address being accessed",
        steps: [
          "IR (Instruction Register) holds the CURRENT instruction.",
          "AC (Accumulator) holds the last arithmetic result.",
          "MAR holds the memory address being actively accessed.",
          "PC holds the address of the NEXT instruction to be fetched — it gets incremented after each fetch.",
          "Answer: (B) Address of the next instruction.",
        ],
      },
      {
        q: "A CPU runs at 3 GHz and takes 6 cycles per instruction (CPI=6). What is execution time per instruction and MIPS rating?",
        steps: [
          "Clock period = 1 / 3×10⁹ Hz = 0.333 ns per cycle.",
          "Time per instruction = CPI × clock period = 6 × 0.333 ns = 2 ns.",
          "MIPS = Clock_speed_MHz / CPI = 3000 / 6 = 500 MIPS.",
          "Alternatively: MIPS = 1 / (CPI × clock period × 10⁶) = 1 / (2×10⁻⁹ × 10⁶) = 500.",
        ],
      },
      {
        q: "What is the correct order from fastest to slowest access time?",
        steps: [
          "Registers: <1 ns (inside CPU, directly wired).",
          "L1 Cache: ~1-4 ns.",
          "L2 Cache: ~5-10 ns.",
          "L3 Cache: ~20-40 ns.",
          "RAM (Main Memory): ~60-100 ns.",
          "SSD: ~50-200 μs.",
          "HDD: ~5-20 ms.",
          "Answer: Registers > L1 > L2 > L3 > RAM > SSD > HDD.",
        ],
      },
    ],
    tips: [
      "ALU = does math + logic. CU = controls + decodes. Registers = fastest storage inside CPU. These three distinctions cover 80% of CPU MCQs.",
      "PC holds NEXT instruction address. IR holds CURRENT instruction. MAR holds memory address during access. MDR holds data. Know all four.",
      "Memory hierarchy speed order: Registers > L1 > L2 > L3 > RAM > SSD > HDD. NIMCET tests this ordering directly.",
      "RISC = ARM chips (phones), few simple instructions. CISC = Intel x86 (PC), many complex instructions. Used in architecture comparison MCQs.",
      "Bus directions: Address bus → unidirectional (CPU to memory only). Data bus → bidirectional. Control bus → carries read/write/interrupt signals.",
    ],
  },

  numsys: {
    title: "Number Systems — Binary, Octal, Decimal, Hexadecimal",
    rules: [
      ["Binary place values (memorize)", "2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024"],
      ["Hex digit mapping", "A=10, B=11, C=12, D=13, E=14, F=15. Place values: 16⁰=1, 16¹=16, 16²=256, 16³=4096."],
      ["Binary → Decimal", "Σ (each bit × its place value). E.g., 1011₂ = 8+0+2+1 = 11₁₀."],
      ["Decimal → Binary", "Divide by 2 repeatedly. Write remainders BOTTOM-TO-TOP (last remainder = MSB)."],
      ["Binary → Hex", "Group 4 bits from RIGHT. Pad left with 0s if needed. Convert each 4-bit group. E.g., 11010110 → 1101|0110 → D6₁₆."],
      ["Hex → Binary", "Expand EACH hex digit to EXACTLY 4 binary bits. E.g., A3₁₆ → 1010|0011 = 10100011₂."],
      ["Binary → Octal", "Group 3 bits from RIGHT. Convert each 3-bit group (0-7). E.g., 101110₂ → 101|110 → 56₈."],
      ["Fraction → Binary", "Multiply fraction by 2. Take integer part (0 or 1). Repeat with remaining fraction. Read results TOP-TO-BOTTOM."],
    ],
    concepts: [
      ["Hex ↔ Binary table — memorize 10 to 15", "0=0000, 1=0001, 2=0010, 3=0011, 4=0100, 5=0101, 6=0110, 7=0111, 8=1000, 9=1001, A=1010, B=1011, C=1100, D=1101, E=1110, F=1111. Knowing A-F instantly makes binary↔hex conversion a 5-second process. Only need to memorize A(1010) through F(1111) — 0-9 just prefix with 0s."],
      ["Decimal to binary — division method (step-by-step)", "Divide the number by 2. Record the remainder (always 0 or 1). Divide the quotient by 2. Repeat until quotient = 0. Read ALL remainders BOTTOM-TO-TOP. Example: Convert 45: 45÷2=22R1, 22÷2=11R0, 11÷2=5R1, 5÷2=2R1, 2÷2=1R0, 1÷2=0R1. Reading bottom to top: 101101₂. Verify: 32+8+4+1=45 ✓."],
      ["Fractional binary conversion", "Fractional part: repeatedly multiply by 2, take integer part as the next bit. Example: 0.625 → 0.625×2=1.25 (bit=1) → 0.25×2=0.5 (bit=0) → 0.5×2=1.0 (bit=1, stop). 0.625₁₀=0.101₂. Terminating fractions work cleanly; recurring fractions (like 0.1₁₀) have infinite binary representations — a source of floating-point errors."],
      ["Memory size units (powers of 2)", "1 Nibble = 4 bits. 1 Byte = 8 bits. 1 KB = 2¹⁰ = 1024 bytes. 1 MB = 2²⁰ ≈ 1 million bytes. 1 GB = 2³⁰ ≈ 1 billion bytes. 1 TB = 2⁴⁰ bytes. NOTE: computers use base-2, so 1 KB = 1024 bytes (NOT 1000). NIMCET frequently asks: how many KB in 1 MB? Answer: 1024."],
    ],
    examples: [
      {
        q: "Convert 10110101₂ to decimal and hexadecimal.",
        steps: [
          "Binary → Decimal: 1×128+0×64+1×32+1×16+0×8+1×4+0×2+1×1",
          "= 128+32+16+4+1 = 181₁₀.",
          "Binary → Hex: group 4 bits from right: 1011|0101",
          "1011 = B,  0101 = 5  →  B5₁₆.",
          "Verify: B5₁₆ = 11×16+5 = 176+5 = 181₁₀ ✓",
        ],
      },
      {
        q: "Convert decimal 246 to binary and hexadecimal.",
        steps: [
          "Decimal → Binary (divide by 2):",
          "246÷2=123 R0, 123÷2=61 R1, 61÷2=30 R1, 30÷2=15 R0,",
          "15÷2=7 R1, 7÷2=3 R1, 3÷2=1 R1, 1÷2=0 R1.",
          "Read bottom-to-top: 11110110₂.",
          "Binary → Hex: 1111|0110 → F|6 = F6₁₆.",
          "Verify: F6₁₆ = 15×16+6 = 240+6 = 246 ✓.",
        ],
      },
      {
        q: "Convert 3AF₁₆ to decimal and binary.",
        steps: [
          "Hex → Decimal: 3×16²  +  A×16¹  +  F×16⁰",
          "= 3×256  +  10×16  +  15×1",
          "= 768 + 160 + 15 = 943₁₀.",
          "Hex → Binary: 3=0011, A=1010, F=1111",
          "Result: 001110101111₂ = 1110101111₂ (drop leading zeros).",
        ],
      },
      {
        q: "Convert 0.3125₁₀ to binary.",
        steps: [
          "0.3125 × 2 = 0.625  →  integer part = 0",
          "0.625  × 2 = 1.25   →  integer part = 1",
          "0.25   × 2 = 0.5    →  integer part = 0",
          "0.5    × 2 = 1.0    →  integer part = 1 (fraction = 0, STOP)",
          "Read top-to-bottom: 0.0101₂",
          "Verify: 0/2+1/4+0/8+1/16 = 0.25+0.0625 = 0.3125 ✓",
        ],
      },
    ],
    tips: [
      "Hex A-F in binary: A=1010, B=1011, C=1100, D=1101, E=1110, F=1111. Memorize these 6 — 0 to 9 just add leading zeros to their binary.",
      "Binary→Hex: group 4 bits from the RIGHT. Pad zeros on the LEFT for incomplete leftmost group.",
      "Decimal→Binary: divide by 2, read remainders BOTTOM-TO-TOP. Reversing the read order is the #1 student error.",
      "Quick check: binary number ending in 0 = even decimal. Ending in 1 = odd. Use this to sanity-check your conversion.",
      "1 KB = 1024 bytes (not 1000). 1 MB = 1024 KB. 1 GB = 1024 MB. NIMCET uses powers of 2, not SI decimal prefixes.",
    ],
  },

  arith: {
    title: "Binary Arithmetic — Addition, Subtraction, Multiplication",
    rules: [
      ["Addition: 0+0", "= 0 (carry = 0)"],
      ["Addition: 0+1 or 1+0", "= 1 (carry = 0)"],
      ["Addition: 1+1", "= 0 (carry = 1). Think: 1+1=10₂."],
      ["Addition: 1+1+carry(1)", "= 1 (carry = 1). Sum of three 1s = 11₂."],
      ["Subtraction: 1−0=1, 0−0=0, 1−1=0", "Straightforward. No borrow needed."],
      ["Subtraction: 0−1 (borrow)", "= 1 (borrow 1 from next left column). Borrow converts to 2 in current column: 2−1=1."],
      ["Multiplication: any bit × 0", "= 0. Any bit × 1 = same bit. Shift-and-add method."],
      ["Left shift by n bits", "= Multiply by 2ⁿ. Right shift by n bits = Divide by 2ⁿ (integer)."],
    ],
    concepts: [
      ["Binary addition — column method", "Align numbers on right. Add columns right-to-left, tracking carry. Carry 1 goes to the next column left. Key rule: 1+1=0 carry 1 (just like adding 5+5=10 in decimal — write 0, carry 1). Example: 1011+0111: right to left: 1+1=0(c1), 1+1+1=1(c1), 0+1+1=0(c1), 1+0+1=0(c1), +carry=1. Result: 10010₂=18. Verify: 11+7=18 ✓."],
      ["Binary subtraction — borrow method", "Right to left. When top bit < bottom bit, borrow from the next left column. Borrow gives you 2 in current column (because binary), so 2−1=1. After borrowing, reduce the left neighbor by 1 (it may then need to borrow from its left). Most common error: forgetting to reduce the borrowed column. Alternative: use two's complement method (covered in next tab)."],
      ["Multiplication — shift-and-add", "For each bit of multiplier (right to left): if bit=1, write multiplicand as a partial product (shift left by position). If bit=0, write all zeros. Add all partial products. Example: 101×11 (=5×3=15): partial products are 101 (for LSB=1) and 1010 (for next bit=1, shifted left). Sum: 101+1010=1111₂=15 ✓."],
      ["Arithmetic shifts", "Left shift (<<n): append n zeros on right, discard leftmost n bits. Equivalent to ×2ⁿ. Right shift for UNSIGNED (>>n): append n zeros on LEFT. Equivalent to ÷2ⁿ. Right shift for SIGNED (arithmetic >>n): append n copies of SIGN BIT on left. This preserves the sign for negative numbers. NIMCET tests: 'binary number 00101100 shifted left by 2 bits =' → 10110000 (= ×4)."],
    ],
    examples: [
      {
        q: "Add binary numbers: 10111 + 01110.",
        steps: [
          "  1 0 1 1 1  (= 23)",
          "+ 0 1 1 1 0  (= 14)",
          "Right to left: 1+0=1(c0), 1+1=0(c1), 1+1+1=1(c1), 0+1+1=0(c1), 1+0+1=0(c1), carry=1",
          "Result: 1 0 0 1 0 1 = 100101₂",
          "Verify: 23+14=37 = 32+4+1 = 100101₂ ✓",
        ],
      },
      {
        q: "Subtract: 11010 − 01011 (binary).",
        steps: [
          "  1 1 0 1 0  (= 26)",
          "− 0 1 0 1 1  (= 11)",
          "Expected: 26−11=15=01111₂",
          "Right: 0−1: borrow → 10−1=1, reduce next position",
          "Next (was 1, now 0): 0−1: borrow → 10−1=1, reduce next",
          "Next (was 0, now −1 → borrow makes it 1): after borrow: 1−0=1",
          "Continue: 0−1 with borrows resolved → working: 1 1 0 1 0 − 0 1 0 1 1 = 0 1 1 1 1",
          "Result: 01111₂ = 15 ✓",
        ],
      },
      {
        q: "Multiply: 110 × 101 (binary).",
        steps: [
          "  1 1 0  (= 6)",
          "× 1 0 1  (= 5)",
          "Bit 0 (1): partial = 110 × 1 = 110",
          "Bit 1 (0): partial = 110 × 0 = 000, shifted left 1 = 0000",
          "Bit 2 (1): partial = 110 × 1 = 110, shifted left 2 = 11000",
          "Sum: 110 + 0000 + 11000",
          "= 00110 + 11000 = 11110₂ = 30",
          "Verify: 6×5=30 ✓",
        ],
      },
      {
        q: "What is 00110100 shifted left by 2? What decimal value is that?",
        steps: [
          "00110100 = 52₁₀ (32+16+4 = 52).",
          "Shift left by 2: append 2 zeros, discard 2 MSBs.",
          "00110100 → 11010000 (shifted left 2).",
          "Verify: left shift by 2 = ×4. 52×4 = 208.",
          "11010000₂ = 128+64+16 = 208 ✓.",
        ],
      },
    ],
    tips: [
      "1+1=10 in binary (write 0, carry 1). 1+1+1=11 (write 1, carry 1). These two rules cover 100% of binary addition.",
      "Borrow in subtraction = gives you 2 in the current column (since binary). So 10−1=1 (not 2−1=1 in decimal terms, but same result).",
      "Left shift by n = multiply by 2ⁿ. Right shift by n = divide by 2ⁿ. NIMCET tests this directly.",
      "Always verify binary arithmetic by converting both operands and result to decimal. Takes 15 seconds and catches all errors.",
      "Multiplication shortcut: 1×anything = that thing. 0×anything = 0. Shift-and-add is just like decimal long multiplication.",
    ],
  },

  twos: {
    title: "Two's Complement Arithmetic",
    rules: [
      ["One's complement", "Flip ALL bits. 0→1, 1→0. E.g., 00101100 → 11010011."],
      ["Two's complement", "One's complement + 1. E.g., 11010011 + 1 = 11010100."],
      ["Shortcut for two's complement", "Scan from RIGHT: copy all bits up to and INCLUDING the first 1. Then FLIP all remaining bits to the left."],
      ["Range of n-bit signed", "−2^(n−1) to 2^(n−1)−1. For 8-bit: −128 to +127. For 4-bit: −8 to +7."],
      ["MSB=0 → positive. MSB=1 → negative.", "The Most Significant Bit (leftmost) is the sign bit in two's complement."],
      ["Subtraction A−B", "= A + TC(B). If carry OUT of sign bit → discard it → result is positive. No carry out → result is negative."],
      ["Sign extension", "Extending n-bit to m-bit: fill extra left bits with the SIGN bit (0 for +, 1 for −)."],
      ["Overflow (signed arithmetic)", "Overflow if carry INTO MSB ≠ carry OUT of MSB. OR: two same-sign numbers produce opposite-sign result."],
    ],
    concepts: [
      ["Why two's complement?", "Subtraction becomes addition: A−B = A + TC(B). Only ONE representation of zero (unlike one's complement which has +0 and −0). Makes hardware simpler — one circuit handles both add and subtract. This is why ALL modern computers use two's complement for signed integers."],
      ["Finding decimal value of a negative two's complement number", "Method 1: Take TC of the number → gives the magnitude → apply negative sign. Method 2: Direct formula for n-bit number b₍ₙ₋₁₎...b₀ → value = −b₍ₙ₋₁₎×2^(n-1) + Σbᵢ×2ⁱ (i=0 to n-2). Example: 1101₂ (4-bit) = −1×8 + 1×4 + 0×2 + 1×1 = −8+5 = −3. The MSB contributes its weight with a NEGATIVE sign."],
      ["Subtraction using two's complement — complete algorithm", "To compute A−B in n bits: Step 1: Write A in binary. Step 2: Find two's complement of B. Step 3: Add A + TC(B) as n-bit addition. Step 4: If carry out of bit n-1 → discard carry, result is positive. Step 5: If no carry out → result is negative, still in TC form → take TC again to find magnitude. Step 6: Check for overflow (if both operands same sign but result different sign)."],
      ["Special case: most negative number", "For n-bit: the most negative representable number is −2^(n-1). For 8-bit: −128 = 10000000₂. Taking TC of 10000000: flip→01111111, add 1→10000000 (itself!). So −128 has no positive counterpart in 8-bit representation. This is the 'edge case' that appears in NIMCET."],
    ],
    examples: [
      {
        q: "Find two's complement of 00101100 (8-bit).",
        steps: [
          "Method 1: Flip all bits → 11010011. Add 1 → 11010100.",
          "Method 2 (shortcut): Scan from right.",
          "00101100 — rightmost 1 is at position 2 (from right, 0-indexed).",
          "Keep: '100' (positions 0-2). Flip the rest: 00101 → 11010.",
          "Result: 11010100 ✓ (both methods agree).",
          "Verify: 00101100=44₁₀. TC should represent −44. 11010100: −128+64+16+4=−44 ✓",
        ],
      },
      {
        q: "Compute 15 − 6 using 5-bit two's complement.",
        steps: [
          "15 = 01111₂.  6 = 00110₂.",
          "TC(6): flip→11001, add 1→11010.",
          "Add: 01111 + 11010:",
          "  01111",
          "+ 11010 → sum = 101001 (6 bits)",
          "Carry out of bit 4 (MSB of 5-bit) = 1 → discard it.",
          "Result = 01001₂ = 9.  Verify: 15−6=9 ✓",
        ],
      },
      {
        q: "What decimal value does 11010₂ represent in 5-bit two's complement?",
        steps: [
          "MSB=1 → negative number.",
          "Method 1: Take TC → flip: 00101, add 1: 00110 = 6. So value = −6.",
          "Method 2: Direct formula: −1×16 + 1×8 + 0×4 + 1×2 + 0×1 = −16+10 = −6.",
          "Answer: 11010₂ in 5-bit TC = −6.",
        ],
      },
      {
        q: "Detect overflow: add 01100 + 01010 (5-bit signed).",
        steps: [
          "01100 = +12,  01010 = +10.  Expected sum = +22. But 5-bit max = +15 → overflow expected.",
          "  01100",
          "+ 01010",
          "= 10110",
          "Result MSB=1 → appears negative (−10). Two positives produced a negative → OVERFLOW.",
          "Check carry rule: carry into bit 4 (MSB)=1, carry out of bit 4=0. 1 XOR 0 = 1 → overflow confirmed.",
        ],
      },
    ],
    tips: [
      "TC shortcut: scan right-to-left, copy bits including the first 1, flip everything to its left. Faster than flip-then-add.",
      "If MSB=1 → negative. Take TC to find magnitude, then apply minus sign. This is the universal decode method.",
      "Subtraction A−B: add A + TC(B). Carry out? → discard it, answer is positive. No carry out? → answer is negative, still in TC form.",
      "Overflow: two positives → negative result = overflow. Two negatives → positive = overflow. Mixed signs can NEVER overflow.",
      "8-bit range: −128 to +127. Note: −128 (10000000) has no positive counterpart — TC of 10000000 = 10000000 (itself). Edge case worth memorizing.",
    ],
  },

  float: {
    title: "Floating Point Representation & Character Encoding",
    rules: [
      ["IEEE 754 Single Precision (32-bit)", "1 sign bit + 8 exponent bits (bias=127) + 23 mantissa bits."],
      ["IEEE 754 Double Precision (64-bit)", "1 sign bit + 11 exponent bits (bias=1023) + 52 mantissa bits."],
      ["Value formula", "(−1)^S × 1.M × 2^(E−bias). S=sign, M=mantissa bits, E=stored exponent."],
      ["Special values", "E=0, M=0: ±Zero. E=all 1s, M=0: ±Infinity. E=all 1s, M≠0: NaN."],
      ["ASCII key values", "'A'=65, 'Z'=90, 'a'=97, 'z'=122, '0'=48, '9'=57, Space=32, newline=10."],
      ["Upper↔Lower case", "Difference = 32. 'A'+32='a'. Toggle bit 5 to switch case."],
      ["Unicode (UTF-8)", "Variable 1-4 bytes. Backward-compatible with ASCII for first 128 chars. Supports all world scripts."],
      ["BCD (Binary Coded Decimal)", "Each decimal digit encoded separately in 4 bits. 0=0000 to 9=1001. Values 1010-1111 are INVALID in BCD."],
    ],
    concepts: [
      ["Decimal → IEEE 754 single precision (step-by-step)", "Step 1: Sign bit = 0 (positive) or 1 (negative). Step 2: Convert absolute value to binary (integer + fraction). Step 3: Normalize: write as 1.xxx × 2^n (move binary point until there's exactly one 1 before it). Step 4: Stored exponent = n + 127. Convert to 8-bit binary. Step 5: Mantissa = the xxx part (after the leading 1), pad to 23 bits with zeros. Step 6: Concatenate: S(1bit) + E(8bits) + M(23bits)."],
      ["IEEE 754 → decimal (decode steps)", "Step 1: Read sign bit S (0=+, 1=−). Step 2: Read exponent byte E, compute actual exponent = E − 127. Step 3: Read mantissa bits M, prepend the implicit leading 1: value is 1.M in binary. Step 4: Shift binary point right by (actual exponent) places. Step 5: Convert to decimal. Example: S=0, E=130→actual=3, M=101→value=1.101×2³=1101.₂=13."],
      ["Character encoding comparison", "ASCII: 7-bit, 128 chars (32-126 printable). Extended ASCII: 8-bit, 256 chars (adds symbols/accents). Unicode/UTF-32: 4 bytes per character, covers all scripts. UTF-8: variable 1-4 bytes, most efficient for English. EBCDIC: IBM mainframe encoding (not ASCII compatible). For NIMCET: focus on ASCII values and the fact that UTF-8 is the modern web standard."],
      ["BCD arithmetic and error", "In BCD addition, if the sum of two BCD digits exceeds 9 (i.e., result ≥ 1010₂=10), add correction factor 0110₂ (=6) to get the correct BCD result. Example: 5+8=13. In 4-bit binary: 0101+1000=1101 (=D, invalid BCD). Add 0110: 1101+0110=10011 → carry out + 0011 → BCD result: 1|0011 = 13 ✓."],
    ],
    examples: [
      {
        q: "Convert 13.25 to IEEE 754 single precision.",
        steps: [
          "Sign = 0 (positive).",
          "13 in binary = 1101₂.  0.25 in binary = 0.01₂.",
          "13.25 = 1101.01₂.",
          "Normalize: 1.10101 × 2³ (move point 3 places left).",
          "Stored exponent = 3 + 127 = 130 = 10000010₂.",
          "Mantissa = 10101 followed by 18 zeros (23 bits total).",
          "Result: 0  10000010  10101000000000000000000",
        ],
      },
      {
        q: "Decode IEEE 754 single: 0 10000101 10100000000000000000000",
        steps: [
          "Sign = 0 → positive.",
          "Exponent byte = 10000101₂ = 128+4+1 = 133. Actual exponent = 133−127 = 6.",
          "Mantissa bits = .101 (rest are zeros) → implied value: 1.101₂.",
          "Value = 1.101₂ × 2⁶ = 1101000.₂ = 64+8+32+... ",
          "1.101 × 64 = 1101000₂ = 64+32+8 = 104? Let me compute: 1.101 × 2⁶ = 1101000₂.",
          "1101000₂ = 64+32+8 = 104. Answer: +104.",
        ],
      },
      {
        q: "ASCII values: What is 'M' in decimal and binary? What is char code 74?",
        steps: [
          "'A'=65. 'M' is the 13th letter. 'M' = 65+12 = 77₁₀.",
          "77 in binary: 64+8+4+1 = 1001101₂.",
          "Char code 74: 74−65 = 9 → 9th letter after A = J. Char 74 = 'J'.",
          "Verify: A=65, B=66, ...J=74 ✓.",
        ],
      },
      {
        q: "Represent 39 in BCD and verify BCD addition 25+18.",
        steps: [
          "39 in BCD: digit 3=0011, digit 9=1001 → BCD: 0011 1001.",
          "BCD addition 25+18: 0010 0101 + 0001 1000.",
          "Units: 5+8=13. Binary: 0101+1000=1101 (invalid, >9). Add 0110: 1101+0110=10011 → carry+0011.",
          "Tens: 2+1+carry(1)=4 → 0100. No correction needed.",
          "BCD result: 0100 0011 = 43₁₀. Verify: 25+18=43 ✓.",
        ],
      },
    ],
    tips: [
      "IEEE 754 single: 1+8+23=32 bits, bias=127. Double: 1+11+52=64 bits, bias=1023. Memorize these 4 numbers.",
      "Normalization: form is ALWAYS 1.xxx × 2^n. The leading 1 is implicit (not stored) — this gives one free bit of precision.",
      "ASCII: 'A'=65, 'a'=97 (lowercase = uppercase + 32 = toggle bit 5). '0'=48. Space=32. These 4 values cover all ASCII MCQs.",
      "BCD: only 0000-1001 are valid. If sum > 9 in BCD arithmetic, add 0110 (correction factor) to get the right BCD digit.",
      "UTF-8 is backward compatible with ASCII for chars 0-127. Characters with code > 127 use multi-byte sequences in UTF-8.",
    ],
  },

  bool: {
    title: "Boolean Algebra",
    rules: [
      ["Identity laws", "A + 0 = A     |     A · 1 = A"],
      ["Null / Dominance laws", "A + 1 = 1     |     A · 0 = 0"],
      ["Idempotent laws", "A + A = A     |     A · A = A"],
      ["Complement laws", "A + A' = 1   |     A · A' = 0"],
      ["Involution (double NOT)", "(A')' = A"],
      ["De Morgan's Theorem 1", "(A + B)' = A' · B'    (negate OR → AND of negations)"],
      ["De Morgan's Theorem 2", "(A · B)' = A' + B'    (negate AND → OR of negations)"],
      ["Absorption laws", "A + AB = A     |     A(A + B) = A"],
      ["Distributive laws", "A(B+C) = AB+AC     |     A+(BC) = (A+B)(A+C)"],
      ["Consensus theorem", "AB + A'C + BC = AB + A'C    (BC term is redundant)"],
    ],
    concepts: [
      ["De Morgan's theorem — the most tested rule", "To complement (negate) an expression: (1) Replace every OR(+) with AND(·) and every AND(·) with OR(+). (2) Complement EACH individual variable. Apply to any complexity: (A+B+C)' = A'·B'·C'. (A·B·C)' = A'+B'+C'. NIMCET uses De Morgan's in almost every exam — know both directions. Extended: (A+BC)' = A'·(BC)' = A'·(B'+C')."],
      ["Boolean simplification — systematic strategy", "Step 1: Apply De Morgan's to remove complements from groups. Step 2: Use distributive law to factor or expand. Step 3: Apply complement law (A+A'=1, A·A'=0) to eliminate terms. Step 4: Apply absorption (A+AB=A) to reduce. Step 5: Use idempotent (A+A=A) to remove duplicates. Work BOTH sides independently — never 'cross the equals sign'."],
      ["Minterms, SOP, and truth tables", "SOP (Sum of Products): Boolean expression written as sum (OR) of AND terms. Each AND term is a minterm. To get SOP from truth table: for each row where output=1, write an AND term with each variable: uncomplemented if that variable's bit=1, complemented if bit=0. OR all these terms. Example: row A=1,B=0,C=1 and output=1 → term = AB'C."],
      ["Karnaugh Map (K-map) — simplification tool", "Plot minterms (1s) from truth table on K-map grid. Rows and columns labeled in GRAY CODE order (00,01,11,10) so adjacent cells differ in exactly 1 bit. Group adjacent 1s in groups of 1,2,4,8 (always power of 2). Each group gives one simplified AND term (eliminate variables that change within the group). Sum all group terms for the simplified SOP."],
    ],
    examples: [
      {
        q: "Simplify: F = A + AB + AB'",
        steps: [
          "A + AB + AB'",
          "= A + A(B + B')        [factor A from the last two terms]",
          "= A + A · 1             [complement law: B+B'=1]",
          "= A + A                 [identity: A·1=A]",
          "= A                     [idempotent: A+A=A]",
          "Answer: F = A",
        ],
      },
      {
        q: "Apply De Morgan's theorem: simplify (AB + A'B')'",
        steps: [
          "Apply De Morgan's to the outer complement:",
          "(AB + A'B')' = (AB)' · (A'B')'",
          "= (A' + B') · (A + B)     [De Morgan's on each product]",
          "This is actually (A XNOR B)' = A XOR B.",
          "Expand: (A'+B')(A+B) = A'A+A'B+B'A+B'B = 0+A'B+AB'+0 = A'B+AB'",
          "Answer: F = A'B + AB' = A XOR B",
        ],
      },
      {
        q: "Simplify: F = AB + A'B + AB'",
        steps: [
          "AB + A'B + AB'",
          "= B(A+A') + AB'          [factor B from first two]",
          "= B·1 + AB'               [complement: A+A'=1]",
          "= B + AB'                 [identity]",
          "= B + A                   [absorption: B+AB' = B+A, since B+AB'=(B+A)(B+B')=(B+A)·1]",
          "Answer: F = A + B",
        ],
      },
      {
        q: "From truth table: A=0,B=0→0; A=0,B=1→1; A=1,B=0→0; A=1,B=1→1. Find simplified Boolean expression.",
        steps: [
          "Output=1 when: (A=0,B=1) → A'B, and (A=1,B=1) → AB.",
          "SOP: F = A'B + AB",
          "Simplify: = B(A'+A) = B·1 = B",
          "Answer: F = B  (output equals B, independent of A).",
          "Verify: B=1 → output=1, B=0 → output=0 ✓",
        ],
      },
    ],
    tips: [
      "De Morgan's TWO rules: (A+B)'=A'B' and (AB)'=A'+B'. Know both directions. Swap AND↔OR AND complement each variable.",
      "Absorption: A+AB=A. Proof: A(1+B)=A·1=A. Memorize the result — saves 3 simplification steps.",
      "Complement pair: A+A'=1 and A·A'=0. These are the most powerful tools — always look for a variable alongside its complement.",
      "SOP from truth table: find all rows with output=1. Write AND term for each: variable uncomplemented if bit=1, complemented if bit=0. OR all terms.",
      "Consensus: AB+A'C+BC — the BC term is always redundant. Remove it. This simplifies 3-term expressions elegantly.",
    ],
  },

  gates: {
    title: "Logic Gates & Truth Tables",
    rules: [
      ["AND gate: F=A·B", "Output=1 ONLY when ALL inputs are 1. Otherwise 0. Symbol: D-shape flat on left."],
      ["OR gate: F=A+B", "Output=1 when ANY input is 1. Output=0 only when ALL inputs are 0."],
      ["NOT gate: F=A'", "Inverts input. 0→1, 1→0. One input, one output. Also called inverter."],
      ["NAND gate: F=(A·B)'", "NOT of AND. Output=0 ONLY when ALL inputs=1. Otherwise 1. Universal gate."],
      ["NOR gate: F=(A+B)'", "NOT of OR. Output=1 ONLY when ALL inputs=0. Otherwise 0. Universal gate."],
      ["XOR gate: F=A⊕B=A'B+AB'", "Output=1 when inputs are DIFFERENT. Output=0 when inputs are SAME."],
      ["XNOR gate: F=(A⊕B)'=AB+A'B'", "Output=1 when inputs are SAME (equality gate). Opposite of XOR."],
      ["Universal gates", "NAND and NOR can each implement ANY logic function. NOT(A) = NAND(A,A) = NOR(A,A)."],
    ],
    concepts: [
      ["Complete 2-input truth table — memorize this", "A=0,B=0: AND=0,OR=0,NAND=1,NOR=1,XOR=0,XNOR=1. A=0,B=1 or A=1,B=0 (different inputs): AND=0,OR=1,NAND=1,NOR=0,XOR=1,XNOR=0. A=1,B=1: AND=1,OR=1,NAND=0,NOR=0,XOR=0,XNOR=1. Memory shortcuts: NAND = flip AND's output. NOR = flip OR's output. XOR = 1 when different. XNOR = 1 when same."],
      ["Implementing all gates using only NAND", "NOT(A) = NAND(A,A). AND(A,B) = NOT(NAND(A,B)) = NAND(NAND(A,B), NAND(A,B)). OR(A,B): by De Morgan A+B=(A'·B')'. So OR = NAND(NAND(A,A), NAND(B,B)) = NAND(A',B') = (A'·B')' = A+B. NOR(A,B) = NOT(OR) = NOT(NAND(A',B')) = add another NOT to the OR implementation. These prove NAND is universal."],
      ["Half adder and full adder circuits", "Half adder (2 inputs, no carry in): Sum = A XOR B. Carry_out = A AND B. Implements 1-bit addition. Full adder (3 inputs: A, B, Cin): Sum = A XOR B XOR Cin. Carry_out = AB + Cin(A XOR B) = majority function. Connect n full adders in series for n-bit addition (ripple carry adder). NIMCET asks: what gates implement a half adder? Answer: XOR + AND."],
      ["Combinational vs Sequential logic", "Combinational: output depends ONLY on current inputs. No memory. Examples: gates, adders, multiplexers (MUX), decoders, encoders. Sequential: output depends on current inputs AND previous state (memory). Examples: flip-flops (D, JK, SR, T), registers, counters, shift registers. NIMCET tests circuit type identification and which components belong to each category."],
    ],
    examples: [
      {
        q: "Evaluate: F = (A NAND B) NOR (B XOR C), for A=1, B=0, C=1.",
        steps: [
          "Step 1: A NAND B = (A·B)' = (1·0)' = 0' = 1",
          "Step 2: B XOR C = 0 ⊕ 1 = 1  (different inputs → 1)",
          "Step 3: F = 1 NOR 1 = (1+1)' = 1' = 0",
          "Answer: F = 0",
        ],
      },
      {
        q: "Build OR gate using only NAND gates. Show the circuit logic.",
        steps: [
          "Target: A OR B = A+B.",
          "De Morgan's: A+B = (A'·B')' = NAND(A', B').",
          "Get A': NAND(A,A) = (A·A)' = A'.",
          "Get B': NAND(B,B) = B'.",
          "OR: NAND(A', B') = (A'·B')' = A+B.",
          "Circuit: G1=NAND(A,A), G2=NAND(B,B), G3=NAND(G1,G2). Output of G3 = A OR B.",
        ],
      },
      {
        q: "Which gate has the same output as an XOR gate when one input is always 1? When always 0?",
        steps: [
          "XOR truth: A XOR B = A'B + AB'.",
          "When B=1 (fixed): A XOR 1 = A'·1 + A·0 = A'. Output = NOT A.",
          "When B=0 (fixed): A XOR 0 = A'·0 + A·1 = A. Output = A (buffer).",
          "Answer: XOR with one input fixed to 1 behaves as a NOT gate.",
          "XOR with one input fixed to 0 behaves as a buffer (pass-through).",
        ],
      },
      {
        q: "Truth table for F = A'B + AB'C. How many input combinations give output=1?",
        steps: [
          "3 inputs (A,B,C) → 8 rows total.",
          "Term A'B: A=0 and B=1 (C can be 0 or 1) → 2 rows: (0,1,0) and (0,1,1).",
          "Term AB'C: A=1, B=0, C=1 → 1 row: (1,0,1).",
          "Check overlap: A'B requires A=0; AB'C requires A=1. No overlap.",
          "Total rows where F=1 = 2+1 = 3.",
          "Combinations: (A=0,B=1,C=0), (A=0,B=1,C=1), (A=1,B=0,C=1).",
        ],
      },
    ],
    tips: [
      "NAND: output=0 ONLY when ALL inputs=1. NOR: output=1 ONLY when ALL inputs=0. Both are 'rare 1/0' gates — the exception is the special case.",
      "XOR: different inputs → 1. XNOR: same inputs → 1. For n inputs: XOR=1 when ODD number of 1s. XNOR=1 when EVEN number of 1s.",
      "NAND is universal: NOT=NAND(A,A). This single fact proves NAND can build everything (AND, OR, NOT → any Boolean function).",
      "Half adder = XOR (sum) + AND (carry). Full adder adds a carry-in input. These definitions appear as direct MCQ fill-in-the-blank.",
      "XOR with fixed 1 input → NOT gate behavior. XOR with fixed 0 → buffer. Useful for understanding programmable logic.",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("cpu");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* Header */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP — COMPUTER AWARENESS · PART 1 of 2
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>Computer Basics &amp; Data Representation</div>
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

        {/* Rules / Formulas */}
        <div style={{ fontSize: "10px", color: "#b07a00", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>📐 Key Rules &amp; Formulas</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "7px", marginBottom: "22px" }}>
          {d.rules.map(([name, rule], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${gold}`, borderRadius: "3px", padding: "9px 11px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", color: "#999", marginBottom: "5px" }}>{name}</div>
              <div style={{ fontSize: "13px", fontFamily: "'Courier New',monospace", color: navy, fontWeight: "700", lineHeight: "1.5" }}>{rule}</div>
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
          NIMCET · Computer Awareness · Part 1 of 2 · Load Part 2 for Hardware, Software &amp; Internet 🎯
        </div>
      </div>
    </div>
  );
}
