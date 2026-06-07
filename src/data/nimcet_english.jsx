import { useState } from "react";

const TABS = [
  { id: "comp",     label: "📖 Comprehension" },
  { id: "vocab",    label: "📝 Vocabulary" },
  { id: "grammar",  label: "⚙️ Grammar" },
  { id: "sentence", label: "🔤 Sentences" },
  { id: "wordform", label: "🔧 Word Formation" },
  { id: "phrases",  label: "💬 Phrases & Idioms" },
  { id: "tech",     label: "✍️ Technical Writing" },
];

const DATA = {
  comp: {
    title: "Reading Comprehension",
    rules: [
      ["Step 1: Read questions first", "Before reading the passage, read ALL questions. This tells you what to look for — main idea, specific fact, inference, tone, or vocabulary."],
      ["Step 2: Skim then scan", "First skim for structure (intro/body/conclusion). Then scan for the specific information each question needs."],
      ["Main idea question", "Correct answer = broadest statement that is true about the ENTIRE passage. Not too specific (just one paragraph) and not broader than what's discussed."],
      ["Factual question", "Answer is directly stated in the passage. Find the exact sentence. Don't infer — quote the text (in spirit)."],
      ["Inference question", "Answer is implied, not directly stated. Must be logically supported by passage — not common knowledge or assumption."],
      ["Vocabulary in context", "For word meaning questions, read the full sentence and 1-2 sentences around it. The context reveals meaning — don't rely on dictionary knowledge alone."],
      ["Tone words to know", "Objective, critical, appreciative, ironic, humorous, solemn, sarcastic, formal, informal, argumentative, nostalgic, pessimistic, optimistic."],
      ["'True but not in passage' trap", "Eliminate answers that are true in general but not supported by the passage. Only use what the passage says."],
    ],
    concepts: [
      ["4 types of comprehension questions", "Type 1 — Factual: 'According to the passage...' → find exact text. Type 2 — Inference: 'It can be inferred that...' → read between lines, must be logically implied. Type 3 — Main idea/Theme: 'The passage is primarily about...' → cover all paragraphs. Type 4 — Vocabulary in context: 'The word X in paragraph 2 most nearly means...' → use surrounding text. NIMCET usually has 2-3 passage questions, testing types 1, 2, and 3."],
      ["Skimming vs scanning — when to use each", "Skimming: read quickly to get the gist/structure. Read first and last sentence of each paragraph — they contain topic sentences and conclusions. Use to find where information is located. Scanning: targeted search for a specific fact, number, name, or keyword. Move eyes quickly over text without reading everything. After skimming to locate the right paragraph, scan for the specific answer. NIMCET passages are usually 200-300 words — skimming takes 30 seconds."],
      ["Eliminating wrong answer options", "Wrong answer patterns: (1) Too broad — covers more than the passage discusses. (2) Too specific — mentions only one detail, not the whole passage. (3) Opposite — contradicts what the passage says. (4) True but unsupported — factually correct but not in the passage. (5) Partially correct — true for part of the answer but the rest is wrong. Eliminate these systematically — the correct answer is the one supported by text evidence."],
      ["Tone and purpose identification", "Author's purpose: to inform (factual, neutral), to persuade (argument, opinion words), to entertain (narrative, humor), to describe (imagery, adjectives). Tone clues: word choice (positive vs negative), modifiers, hedging language (may, might, perhaps = less certain), absolute language (always, never = more assertive). Critical tone: points out flaws. Appreciative: highlights strengths. Objective: no personal opinion shown."],
    ],
    examples: [
      {
        q: "Passage: 'Artificial intelligence has transformed modern industries, from healthcare to finance. While AI offers unprecedented efficiency gains, critics argue that it threatens employment and raises ethical concerns about decision-making authority. Policymakers must balance technological progress with social responsibility.' Q1: Main idea? Q2: What do critics argue? Q3: Tone of the passage?",
        steps: [
          "Q1 (Main idea): Must cover the entire passage. Option A: 'AI is bad for jobs' — too specific (one critic's view). Option B: 'AI transforms industries but raises concerns, requiring balanced policy' — covers all three paragraphs ✓.",
          "Q2 (Factual): Directly stated: 'critics argue that it threatens employment and raises ethical concerns about decision-making authority.' Answer = job loss + ethical concerns about decision-making.",
          "Q3 (Tone): No strong opinion words. Presents both sides (offers efficiency AND critics argue concerns). Uses 'must balance' suggesting measured responsibility. Tone = balanced/objective.",
        ],
      },
      {
        q: "In the passage: 'The algorithm's unprecedented accuracy was both laudable and disconcerting.' What does 'disconcerting' most likely mean?",
        steps: [
          "Context: 'laudable' (praiseworthy) is contrasted with 'disconcerting' using 'both...and'.",
          "If 'laudable' is positive, 'disconcerting' must be somewhat negative (the 'and' here implies a mixed reaction).",
          "'Dis-' prefix often indicates negative. '-concerting' relates to concern/unease.",
          "Disconcerting = causing unease or worry.",
          "Answer: causing concern, unsettling, or disturbing.",
        ],
      },
      {
        q: "NIMCET inference trap: Passage says 'Many students struggle with advanced mathematics.' Which inference is valid? (A) All students fail math. (B) Math is taught poorly. (C) Some students find advanced math challenging. (D) Math should be removed from curriculum.",
        steps: [
          "(A) 'All students fail' — 'many' ≠ 'all'. Overgeneralization. Wrong.",
          "(B) 'Taught poorly' — not mentioned in the passage at all. Outside inference. Wrong.",
          "(C) 'Some students find it challenging' — directly supported by 'many students struggle'. ✓",
          "(D) 'Should be removed' — a recommendation not even implied in the passage. Wrong.",
          "Answer: (C). Only (C) is directly supported by the passage without adding outside information.",
        ],
      },
    ],
    tips: [
      "Always read questions BEFORE the passage. You'll read with purpose and find answers faster.",
      "Main idea answer: should cover ALL paragraphs, not just one. If an option only describes paragraph 1 or 2 → eliminate it.",
      "Inference ≠ assumption: a valid inference must be logically supported by the passage. If it requires outside knowledge → not a valid inference.",
      "Vocabulary in context: even if you've never seen the word, the surrounding sentences almost always give strong clues. Use contrast words (but, however, although) and positive/negative cues.",
      "Eliminate 'absolute' wrong answers: options with 'always', 'never', 'all', 'none' are usually too extreme unless the passage itself uses such language.",
    ],
  },

  vocab: {
    title: "Vocabulary & Commonly Confused Words",
    rules: [
      ["Affect vs Effect", "AFFECT = verb (to influence): 'Stress affects health.' EFFECT = noun (result): 'The effect was positive.' Memory: A-ffect = Action (verb). E-ffect = End result (noun)."],
      ["Than vs Then", "THAN = comparison: 'She is taller than me.' THEN = time/sequence: 'First study, then practice.'"],
      ["Accept vs Except", "ACCEPT = receive/agree to: 'I accept the offer.' EXCEPT = excluding: 'Everyone except him came.'"],
      ["Principal vs Principle", "PRINCIPAL = main (adj) or head of school (noun): 'The principal reason is cost.' PRINCIPLE = fundamental rule: 'He acted on principle.'"],
      ["Complement vs Compliment", "COMPLEMENT = completes/matches: 'The sauce complements the dish.' COMPLIMENT = praise: 'She paid him a compliment.'"],
      ["Its vs It's", "ITS = possessive pronoun: 'The cat licked its paw.' IT'S = it is: 'It's raining today.'"],
      ["Their / There / They're", "THEIR = possessive (their books). THERE = place (go there) or existential (there is). THEY'RE = they are."],
      ["Stationary vs Stationery", "STATIONARY = not moving (a stationary car). STATIONERY = writing materials (pens, paper). Memory: stationEry = pEns."],
    ],
    concepts: [
      ["Synonyms and antonyms — high-frequency pairs", "Abundant (adj): plentiful ↔ scarce. Ambiguous: unclear ↔ clear/unambiguous. Benevolent: kind ↔ malevolent. Concise: brief ↔ verbose/wordy. Diligent: hardworking ↔ lazy/indolent. Eloquent: articulate ↔ inarticulate. Frugal: thrifty ↔ wasteful/extravagant. Incessant: never-stopping ↔ sporadic/occasional. Obsolete: outdated ↔ current/modern. Prudent: careful ↔ reckless. Zealous: enthusiastic ↔ apathetic. These pairs are directly tested in NIMCET synonym/antonym questions."],
      ["Context clues — 4 types", "Type 1 — Definition: word is defined right there ('The system was redundant, meaning unnecessarily repetitive'). Type 2 — Synonym: a similar word nearby ('The error was egregious — a truly terrible mistake'). Type 3 — Antonym: a contrasting word ('Unlike his gregarious sister, he was reclusive'). Type 4 — Example: examples explain the word ('Nocturnal animals, such as owls and bats...'). Use these clues in vocabulary-in-context MCQs — scan the sentence and nearby sentences."],
      ["Homophones and near-homophones (commonly confused)", "Advice (noun) vs Advise (verb). Loose (not tight) vs Lose (to misplace). Quite (fairly) vs Quiet (silent). Weather (climate) vs Whether (if). Passed (past tense of pass) vs Past (time gone by). Breath (noun, the air) vs Breathe (verb, the action). Altogether (completely) vs All together (all in one place). Altogether different situation vs They sang all together."],
      ["Connotation vs Denotation", "Denotation: the literal dictionary meaning. Connotation: the emotional or cultural associations. Example: 'house' (denotation: a building to live in) vs 'home' (connotation: warmth, family, belonging). 'Slim' vs 'skinny' vs 'thin': same denotation, but slim=positive, skinny=neutral-negative, thin=neutral. NIMCET vocabulary questions often test connotation — which word 'best fits' a given context based on tone."],
    ],
    examples: [
      {
        q: "Choose the correct word: 'Regular exercise has a positive ___ on mental health.' (A) affect (B) effect",
        steps: [
          "The blank is after 'a positive' — this means a NOUN is needed.",
          "EFFECT is the noun (result/impact).",
          "AFFECT is the verb (to influence).",
          "'A positive effect' = noun phrase ✓.",
          "Answer: (B) effect.",
        ],
      },
      {
        q: "Find the antonym of VERBOSE: (A) Eloquent (B) Concise (C) Fluent (D) Articulate",
        steps: [
          "VERBOSE means using more words than necessary; overly wordy.",
          "Eloquent: expressing ideas clearly and effectively — not opposite.",
          "Fluent: speaking smoothly — not opposite.",
          "Articulate: expressing clearly — not opposite.",
          "CONCISE means expressing ideas in few words — exact opposite of verbose.",
          "Answer: (B) Concise.",
        ],
      },
      {
        q: "Choose correct sentence: (A) 'Its a difficult problem.' (B) 'The team lost it's match.' (C) 'Every dog has its day.' (D) 'Its' raining outside.'",
        steps: [
          "(A) 'Its a difficult problem': needs 'It's' (it is) — WRONG.",
          "(B) 'lost it's match': 'it's' = it is here, which makes no sense. Needs possessive 'its' — WRONG.",
          "(C) 'Every dog has its day': 'its' = possessive (the dog's day) ✓ — CORRECT.",
          "(D) 'Its raining': needs contraction 'It's' (it is raining) — WRONG.",
          "Answer: (C).",
        ],
      },
    ],
    tips: [
      "Affect/Effect trick: 'RAVEN' — Remember Affect is a Verb, Effect is a Noun. This covers 95% of usage.",
      "Their/There/They're: test by expanding 'they're' → 'they are'. If that works, use they're. If it's a place or existential, use there. If possessive, use their.",
      "Complement/Compliment: complEment = complEte (shares the 'e'). ComplIment = kind words ('I' appreciate them).",
      "Principal/Principle: your principAL is your pAL (a person). A principle is a rule (ends in -le like 'rule').",
      "Stationary/Stationery: stationEry has an 'e' like pEn and papEr (the items).",
    ],
  },

  grammar: {
    title: "Grammar — Parts of Speech, Tenses & Agreement",
    rules: [
      ["8 Parts of Speech", "Noun (names), Pronoun (replaces noun), Verb (action/state), Adjective (modifies noun), Adverb (modifies verb/adj/adverb), Preposition (shows relationship), Conjunction (joins), Interjection (expresses emotion)."],
      ["Subject-Verb agreement: AND", "Two subjects joined by AND → PLURAL verb. 'Tom and Jerry ARE friends.' Exception: if both refer to same person ('The manager and founder IS present') → singular."],
      ["Subject-Verb agreement: OR/NOR", "Verb agrees with the NEAREST subject. 'Neither the manager nor the employees WERE informed.' 'Neither the employees nor the manager WAS informed.'"],
      ["Indefinite pronouns → singular", "Everyone, someone, anyone, no one, everybody, nobody, each, either, neither → singular verb. 'Everyone IS required to attend.'"],
      ["Articles: A / AN / THE", "A: before consonant SOUNDS. AN: before vowel SOUNDS (an hour, an MBA — not the letter but the sound). THE: specific/known noun. No article: proper nouns, languages, sports generally."],
      ["Prepositions of time", "AT: specific times (at 5 pm, at noon). ON: days and dates (on Monday, on June 5). IN: months/years/seasons/periods (in January, in 2024, in the morning)."],
      ["Prepositions of place", "AT: points/locations (at school, at the corner). ON: surfaces (on the table, on the wall). IN: enclosed spaces (in the box, in the city, in the car)."],
      ["Tense: Present Perfect use", "HAVE/HAS + past participle. For: actions with present relevance, recent past, with 'just/already/yet/ever/never/since/for'. 'I have lived here for 10 years' (still living). NOT 'I have lived here in 2010' (use past simple for specific time)."],
    ],
    concepts: [
      ["12 tenses — organized view", "SIMPLE: Present (do/does), Past (did/V2), Future (will+V1). CONTINUOUS: Present (am/is/are+V-ing), Past (was/were+V-ing), Future (will be+V-ing). PERFECT: Present (have/has+V3), Past (had+V3), Future (will have+V3). PERFECT CONTINUOUS: Present (have/has been+V-ing), Past (had been+V-ing), Future (will have been+V-ing). For NIMCET: know when to use each — especially Past Simple vs Present Perfect, and Past Perfect for sequence of past events."],
      ["Common grammar errors in MCQ", "Error 1: Wrong article — 'He is a honest man' → 'an honest man' (vowel sound). Error 2: Double negative — 'I don't know nothing' → 'I don't know anything'. Error 3: Wrong preposition — 'She is good in mathematics' → 'good AT mathematics'. Error 4: Redundancy — 'Join together', 'return back', 'end result', 'future plans' — the second word is redundant. Error 5: Wrong comparative — 'more better' → 'better'. Error 6: Split infinitive (sometimes): 'to quickly run' vs 'to run quickly' — avoid in formal writing."],
      ["Adjective order before noun", "Opinion → Size → Age → Shape → Color → Origin → Material → Purpose + Noun. Example: 'a lovely little old rectangular green French silver whittling knife.' In practice: usually 2-3 adjectives. 'A big old brown wooden table' (not 'a wooden brown old big table'). This is tested in sentence arrangement MCQs."],
      ["Pronoun agreement and case", "Subject pronouns: I, he, she, we, they (used as subject: 'She and I went'). Object pronouns: me, him, her, us, them (used after verb/preposition: 'between him and me'). Reflexive: myself, himself — only when subject and object are the same ('He hurt himself'). NEVER use reflexive as subject: 'Myself attended the meeting' is WRONG. Relative pronouns: WHO for people, WHICH for things, THAT for people or things."],
    ],
    examples: [
      {
        q: "Identify the error: 'Each of the students have submitted their assignment.' (A) Each (B) have submitted (C) their (D) assignment",
        steps: [
          "'Each' is an indefinite pronoun → takes singular verb.",
          "'Have submitted' is plural → should be 'has submitted'.",
          "'Their' technically should be 'his/her' but modern usage accepts 'their' with 'each'.",
          "The clear grammatical error = 'have submitted' should be 'has submitted'.",
          "Answer: (B) have submitted → should be 'has submitted'.",
        ],
      },
      {
        q: "Fill the blank with correct article: '___ MBA from a top university is highly valued in industry.'",
        steps: [
          "The letter M is a consonant, but 'MBA' is pronounced 'em-bee-ay'.",
          "The SOUND at the start is 'em' — a vowel sound.",
          "Rule: use 'an' before vowel SOUNDS, not just vowel letters.",
          "So: 'An MBA' is correct.",
          "Answer: AN MBA from a top university...",
        ],
      },
      {
        q: "Choose correct preposition: 'She has been working on this project ___ Monday.' (A) since (B) for (C) from (D) during",
        steps: [
          "'Since' is used with a specific point in time: since Monday, since 2020, since morning.",
          "'For' is used with a duration: for 3 days, for two weeks.",
          "'From' needs 'to/till' to complete the expression: 'from Monday to Friday'.",
          "'During' + period of time, not a specific start point.",
          "'Since Monday' = from Monday until now (a specific point) ✓",
          "Answer: (A) since.",
        ],
      },
      {
        q: "Which sentence is grammatically correct? (A) 'He is one of the students who has passed.' (B) 'He is one of the students who have passed.'",
        steps: [
          "The relative clause 'who ____ passed' refers to 'students' (plural), not 'one'.",
          "The antecedent of 'who' = 'students' (plural) → plural verb needed.",
          "'Who have passed' agrees with plural 'students' ✓.",
          "Common error: incorrectly making 'who' agree with 'one' (singular) → has passed.",
          "Answer: (B) 'who have passed' is correct.",
        ],
      },
    ],
    tips: [
      "Article trick: say the word out loud. If it starts with a vowel SOUND → 'an'. A university (yu-niversity = consonant sound) = 'a university'. An hour (silent h, vowel sound) = 'an hour'.",
      "Since vs For: Since = point in time (since 2020, since Monday). For = duration (for 5 years, for 3 days). If the blank can be replaced by 'a period of' → for. If 'starting from' → since.",
      "Indefinite pronouns (everyone, each, neither, either, someone) ALWAYS take singular verbs. This appears in every NIMCET error-spotting question.",
      "Preposition with adjectives: good/bad AT, interested IN, different FROM, afraid OF, married TO, responsible FOR. These fixed prepositions are heavily tested.",
      "Present perfect vs Past simple: if a specific past time is given (yesterday, last year, in 2020) → use past simple. If no time or 'ever/never/just/already/yet' → present perfect.",
    ],
  },

  sentence: {
    title: "Sentence Structure, Active/Passive & Speech",
    rules: [
      ["Simple sentence", "One INDEPENDENT CLAUSE: subject + verb + (object). 'The engineer solved the problem.' Can have compound subject or compound verb."],
      ["Compound sentence", "Two+ INDEPENDENT CLAUSES joined by FANBOYS (For, And, Nor, But, Or, Yet, So) or semicolon. 'She studied hard, and she passed the exam.'"],
      ["Complex sentence", "One independent + one+ DEPENDENT (subordinate) clause. 'Although she was tired, she completed the report.' Dependent clause cannot stand alone."],
      ["Active voice", "Subject DOES the action: 'The team completed the project.' Preferred in most writing for clarity."],
      ["Passive voice formation", "Object + BE (conjugated) + past participle + (by agent). 'The project was completed by the team.' Agent (by whom) can be omitted if unknown/unimportant."],
      ["Direct → Indirect speech tense shifts", "Present simple → Past simple. Present continuous → Past continuous. Present perfect → Past perfect. Past simple → Past perfect. Will → Would. Can → Could. May → Might."],
      ["Parallel structure", "Items in a list or comparison must use the same grammatical form. 'She likes reading, writing, and to cook' → WRONG. 'She likes reading, writing, and cooking' → CORRECT."],
      ["Dangling modifier", "A modifier must clearly refer to the correct noun. 'Running down the street, the rain started' → WRONG (rain can't run). 'Running down the street, I got soaked' → CORRECT."],
    ],
    concepts: [
      ["Active vs Passive — when to use each", "Active: when agent (doer) is important or known. Clearer and more direct. Most writing prefers active. Passive: (1) When agent is unknown ('The window was broken'). (2) When agent is unimportant ('The results were analyzed'). (3) In scientific/technical writing ('The sample was heated to 100°C'). (4) To emphasize the action/result over the doer ('The award was given to the best researcher'). NIMCET tests: convert active to passive and vice versa."],
      ["Direct to Indirect speech — complete rules", "Step 1: Change reporting verb ('said' stays 'said', 'said to' → 'told'). Step 2: Remove quotation marks, add 'that'. Step 3: Shift tense back. Step 4: Change pronouns: I→he/she, we→they, you→he/she/I (context-dependent). Step 5: Change time/place expressions: now→then, today→that day, tomorrow→the next day, yesterday→the previous day, here→there, this→that. Example: 'I will come tomorrow,' he said → He said that he would come the next day."],
      ["Common sentence errors to spot", "Run-on sentence: two independent clauses without proper punctuation ('I studied I passed' → wrong). Fix: add conjunction, semicolon, or split into two sentences. Comma splice: two independent clauses joined by only a comma ('I studied, I passed' → wrong). Fix: add coordinating conjunction after comma ('I studied, and I passed') or use semicolon. Fragment: incomplete sentence ('Because she was tired.' → no main clause). Fix: attach to main clause."],
      ["Parallel structure — examples", "Faulty: 'The report is clear, concise, and has organization.' (clear=adj, concise=adj, has organization=verb phrase). Correct: 'The report is clear, concise, and organized.' (all adjectives). Faulty: 'She decided to study hard, work efficiently, and taking regular breaks.' Correct: 'She decided to study hard, work efficiently, and take regular breaks.' (all infinitives). Parallel structure applies in comparisons too: 'Walking is better than to run' → 'Walking is better than running.'"],
    ],
    examples: [
      {
        q: "Convert to passive: 'The committee will announce the results tomorrow.'",
        steps: [
          "Active: The committee (subject) + will announce (verb) + the results (object).",
          "Passive: Object becomes subject: 'The results'.",
          "Passive verb: will + be + past participle of 'announce' = 'will be announced'.",
          "Agent (optional): 'by the committee'.",
          "Time expression stays: 'tomorrow'.",
          "Passive: 'The results will be announced (by the committee) tomorrow.'",
        ],
      },
      {
        q: "Convert to indirect speech: 'I am working on an important project,' she said.",
        steps: [
          "Reporting verb: 'said' (no change needed since no person to 'tell').",
          "Tense shift: 'am working' (present continuous) → 'was working' (past continuous).",
          "Pronoun shift: 'I' → 'she'.",
          "Add 'that': 'she said that'.",
          "Result: 'She said that she was working on an important project.'",
          "Note: 'an important project' stays — no time/place reference here.",
        ],
      },
      {
        q: "Identify the error in parallel structure: 'The engineer prefers designing systems, to test code, and documentation.'",
        steps: [
          "List: 'designing systems' (gerund phrase), 'to test code' (infinitive phrase), 'documentation' (noun).",
          "Not parallel — three different grammatical forms.",
          "Corrected (all gerunds): 'The engineer prefers designing systems, testing code, and writing documentation.'",
          "OR (all infinitives): 'The engineer prefers to design systems, to test code, and to write documentation.'",
          "Key rule: all items in a list must use the same grammatical form.",
        ],
      },
    ],
    tips: [
      "Passive voice test: can you add 'by someone/something' and it still makes sense? Then it's likely passive. 'The email was sent (by the manager).' ✓",
      "Indirect speech — tense backshift chart to memorize: will→would, can→could, may→might, am/is→was, have/has→had, was/were→had been.",
      "Parallel structure: read the list aloud and check if all items have the same form (-ing, to+verb, or plain noun). If they sound mismatched → error.",
      "Dangling modifier: ask 'Who is doing the action in the opening phrase?' The subject of the main clause must be the answer.",
      "Comma splice vs run-on: comma splice has a comma between independent clauses (wrong). Run-on has nothing between them (also wrong). Both need a conjunction or semicolon or period.",
    ],
  },

  wordform: {
    title: "Word Formation — Prefixes, Suffixes & Roots",
    rules: [
      ["Negative prefixes", "un- (unhappy, unclear), dis- (disagree, dishonest), in-/im-/ir-/il- (incorrect, impossible, irregular, illegal), non- (nonprofit), mis- (misunderstand)."],
      ["Quantity/degree prefixes", "over- (overestimate), under- (underestimate), hyper- (hyperactive), micro- (microchip), macro- (macroeconomics), mono- (monologue), poly- (polygon), bi- (bicycle), tri- (triangle)."],
      ["Position/time prefixes", "pre- (preview, predict), post- (postpone, postwar), re- (revisit, redo), inter- (international), trans- (transfer), sub- (submarine), super- (supernatural), anti- (antibiotic)."],
      ["Noun suffixes", "-tion/-sion (action/result: education, discussion), -ity (quality: equality), -ment (state/result: achievement), -ness (state: happiness), -er/-or (person: teacher, doctor), -ism (doctrine: capitalism), -ist (person: specialist)."],
      ["Adjective suffixes", "-ous/-ious (full of: glamorous, ambitious), -ful (full of: beautiful), -less (without: careless), -able/-ible (capable: readable, flexible), -al (relating to: national), -ic (of: scientific), -ive (tending to: creative)."],
      ["Verb suffixes", "-ize/-ise (make: realize, organize), -ify (make: simplify, classify), -en (make: strengthen, widen)."],
      ["Adverb suffix", "-ly converts adjective to adverb: quick→quickly, careful→carefully. EXCEPTION: fast, hard, early are both adjective and adverb (no -ly form)."],
      ["Common root words", "aud (hear: audio, audible), vis/vid (see: visible, video), scrib/script (write: describe, scripture), port (carry: transport), dict (say: predict, dictate), mit/mis (send: transmit, mission)."],
    ],
    concepts: [
      ["Word families — building vocabulary systematically", "From one root, learn the whole word family. Example from EDUCATE: Noun: education (the act), educator (person), educationalist. Verb: educate. Adjective: educational, educated. Adverb: educationally. From MANAGE: Noun: management, manager, manageability. Verb: manage. Adjective: manageable, managerial. Adverb: manageably. NIMCET fills-in-the-blank questions test whether you pick the right FORM of a known word."],
      ["Prefix meanings — quick reference", "For decoding unfamiliar words: anti- = against (anticlimactic). bene- = good (beneficial). circum- = around (circumference). co-/com-/con- = with/together (cooperate, commit). contra- = against (contradict). de- = remove/down (decompose). ex- = out/former (export, ex-president). extra- = beyond (extraordinary). mal- = bad (malfunction). omni- = all (omnipotent). semi- = half (semicircle). uni- = one (uniform). These prefixes unlock 100s of technical words."],
      ["Commonly tested word transformation patterns", "Form changes that NIMCET tests in sentence completion: Adjective → Noun: beautiful→beauty, strong→strength, wide→width, high→height. Noun → Adjective: hope→hopeful/hopeless/hopeful, child→childish/childlike. Verb → Noun: produce→production, decide→decision, know→knowledge. Adding or removing prefixes to change meaning: possible→impossible, honest→dishonest, moral→immoral, legal→illegal/illegality. Pattern: identify the part of speech needed in the blank, then form the correct word."],
      ["Technical and scientific word roots", "bio- (life: biology, biometric). geo- (earth: geography, geology). hydro- (water: hydraulic, hydroelectric). photo- (light: photograph, photosynthesis). tele- (distant: telephone, telescope). auto- (self: automobile, automatic). thermo- (heat: thermometer, thermal). electro- (electricity: electronics, electrode). cyber- (computing: cybersecurity). nano- (tiny: nanotechnology). These appear in technical English comprehension passages and vocabulary questions."],
    ],
    examples: [
      {
        q: "Form correct word: 'The scientist made an ___ discovery that changed the field.' (use SIGNIFICANT)",
        steps: [
          "The blank comes after 'an' (article before vowel sound) and before 'discovery' (noun).",
          "Need an ADJECTIVE to modify the noun 'discovery'.",
          "SIGNIFICANT is already an adjective — but wait: 'an' before 'sig' (consonant sound) → should be 'a'.",
          "Actually: 'a significant discovery' (s = consonant sound → 'a').",
          "Alternatively, the question might want a different form. Root: SIGNIFY. Adjective: significant. Noun: significance.",
          "Answer: 'a significant discovery' — SIGNIFICANT (adjective form).",
        ],
      },
      {
        q: "What does 'implausible' mean? Break it down using prefixes and roots.",
        steps: [
          "im- = prefix meaning 'not' (variant of 'in-' before 'p').",
          "plausible = believable, credible (from Latin 'plaudere' = to applaud/approve).",
          "im- + plausible = NOT believable.",
          "implausible = not believable, unlikely, hard to accept as true.",
          "Example: 'His excuse was implausible — no one believed it.'",
        ],
      },
      {
        q: "Fill correct form: 'Her ___ (kind) toward others made her popular.' and 'The ___ (complicate) of the problem surprised everyone.'",
        steps: [
          "Sentence 1: 'Her ___ toward others' → possessive 'her' + blank + 'toward' = needs a NOUN. KIND → KINDNESS (noun suffix -ness). 'Her kindness toward others' ✓",
          "Sentence 2: 'The ___ of the problem' → 'the' + blank + 'of' = needs a NOUN. COMPLICATE → COMPLEXITY or COMPLICATION. 'The complexity of the problem' ✓ (or 'complication' but complexity is more natural).",
        ],
      },
    ],
    tips: [
      "In fill-in-the-blank word form questions: first identify what PART OF SPEECH the blank needs (noun? adjective? verb?), then form the correct form of the given word.",
      "Memorize -tion vs -sion: generally, if root verb ends in -ss or -it, use -sion (discuss→discussion, permit→permission). Otherwise -tion (educate→education).",
      "Prefix im-/in-/ir-/il-: all mean 'not'. Use il- before 'l' (illegal), ir- before 'r' (irregular), im- before 'p/m/b' (impossible, immoral), in- elsewhere (incorrect).",
      "Fast, hard, early, late, high, low, long: these are adjectives AND adverbs — no -ly form. 'He worked hard' (not 'hardly' — that means scarcely).",
      "Root words unlock vocabulary: 'aud' = hear. Audit (to hear/check), Auditorium (place to hear), Inaudible (cannot be heard). Learning one root teaches 5-10 words.",
    ],
  },

  phrases: {
    title: "Phrases, Idioms & One-Word Substitutions",
    rules: [
      ["Idioms — group A (actions/decisions)", "Bite the bullet: endure difficulty bravely. Beat around the bush: avoid the main topic. Bite off more than you can chew: take on too much. Burn bridges: permanently damage a relationship. Cut corners: sacrifice quality for speed/ease."],
      ["Idioms — group B (situations)", "Piece of cake: very easy task. Once in a blue moon: very rarely. Under the weather: feeling unwell. The tip of the iceberg: small visible part of a large problem. Hit the nail on the head: describe exactly what is happening."],
      ["Idioms — group C (secrets/information)", "Spill the beans: reveal a secret. Let the cat out of the bag: accidentally reveal a secret. Read between the lines: understand the hidden meaning. Sit on the fence: remain neutral. The ball is in your court: it is your turn to decide/act."],
      ["Phrasal verbs — set A", "Break down: stop working / have emotional collapse. Bring about: cause to happen. Call off: cancel. Carry out: perform/implement. Come across: find by chance."],
      ["Phrasal verbs — set B", "Give up: stop trying / abandon. Look after: take care of. Look into: investigate. Put off: postpone. Run out of: exhaust a supply. Set up: establish or prepare."],
      ["Phrasal verbs — set C", "Take over: assume control. Turn down: reject / reduce volume. Work out: exercise / find solution / result in. Give in: surrender. Make up: invent / reconcile / apply cosmetics."],
      ["One-word subs — Group A (people)", "Bibliophile: book lover. Teetotaler: abstains from alcohol. Polyglot: speaks many languages. Misanthrope: hates all humans. Philanthropist: loves/helps humanity. Hypocrite: pretends to have virtues they lack."],
      ["One-word subs — Group B (concepts)", "Posthumous: occurring after death. Infallible: incapable of error. Obsolete: no longer in use. Ephemeral: lasting a very short time. Verbose: using too many words. Ambiguous: having more than one meaning."],
    ],
    concepts: [
      ["More idioms by theme — NIMCET favourites", "Work: Burn the midnight oil (work late). Hit the books (study hard). Back to square one (start over). On the same page (in agreement). Think outside the box (be creative). Money: Cost an arm and a leg (very expensive). Break even (make no profit/loss). A penny for your thoughts (asking what someone is thinking). Problems: In hot water (in trouble). Bite the dust (fail/die). Jump the gun (act too soon). Up in the air (uncertain). Cross that bridge when we come to it (deal with a problem when it arises)."],
      ["Important phrasal verbs for technical context", "Look up: search for information. Log in/out: access/exit a computer system. Back up: create a copy of data. Shut down: turn off completely. Start up: begin functioning. Zoom in/out: magnify or reduce view. Key in: type on keyboard. Scroll down/up: move through a document. Print out: produce a hard copy. Fill in: complete a form. These appear in technical writing comprehension passages."],
      ["One-word substitutions — extended list for NIMCET", "Autobiography: account of one's own life. Biography: account of another's life. Omniscient: knows everything. Omnipotent: all-powerful. Omnivore: eats plants and animals. Insolvent: cannot pay debts. Gregarious: enjoying company of others. Extempore: spoken without preparation. Connoisseur: expert judge in matters of taste. Altruistic: unselfishly concerned for others. Ambidextrous: equally skilled with both hands. Inimitable: impossible to imitate. Inevitable: impossible to avoid. Contemporaries: people living at the same time. Blasphemy: showing disrespect to religion."],
      ["Collocations — common word partnerships", "Collocations: words that naturally go together. Make vs Do: make a decision, make progress, make an effort. Do homework, do research, do business. Have vs Take: have a look, have an idea, have lunch. Take a break, take responsibility, take notes. Strong collocations for technical writing: reach a conclusion, conduct research, solve a problem, raise a question, draw a comparison, provide evidence, carry out an experiment, give a presentation. Using wrong collocations makes writing sound unnatural even if grammatically correct."],
    ],
    examples: [
      {
        q: "Choose one-word substitution: 'One who is unable to pay their debts' = (A) Bankrupt (B) Insolvent (C) Impoverished (D) Destitute",
        steps: [
          "Bankrupt: legally declared unable to pay debts — close but more specific (legal declaration).",
          "Insolvent: technically unable to pay debts (financial state) — the precise technical one-word substitution.",
          "Impoverished: very poor, lacking resources — not specifically about debts.",
          "Destitute: extremely poor, lacking basic needs — not specifically about debts.",
          "Answer: (B) Insolvent — specifically means 'unable to pay one's debts'.",
        ],
      },
      {
        q: "Identify the meaning: 'The new policy caused a storm in a teacup.' (A) Bad weather (B) Damage to the kitchen (C) A big fuss about something minor (D) A major crisis",
        steps: [
          "'Storm in a teacup' is an idiom — literal interpretation (A, B) is incorrect.",
          "A 'storm' = a huge fuss. 'In a teacup' = in a very small space = about something small/trivial.",
          "Meaning: a great deal of anger or worry about something that is not important.",
          "Option D (major crisis) is the opposite — the idiom implies the crisis is exaggerated.",
          "Answer: (C) A big fuss about something minor.",
        ],
      },
      {
        q: "Fill in with correct phrasal verb: 'We need to ___ the details of the contract before signing.' (A) look into (B) look up (C) look after (D) look down on",
        steps: [
          "Look into: investigate thoroughly ✓ — matches 'examine the details'.",
          "Look up: search for information in a reference source (dictionary, database).",
          "Look after: take care of — doesn't apply to a contract.",
          "Look down on: feel superior to — doesn't apply here.",
          "To 'look into the details' means to examine/investigate them carefully.",
          "Answer: (A) look into.",
        ],
      },
    ],
    tips: [
      "One-word substitutions: 'Posthumous' (after death), 'Infallible' (cannot err), 'Ephemeral' (short-lived), 'Verbose' (wordy), 'Omniscient' (all-knowing) — these 5 appear in NIMCET most frequently.",
      "Idiom trap: never interpret idioms literally. 'Kick the bucket' = die (not physically kick anything). 'Bite the dust' = fail or die (not related to dust).",
      "Make vs Do collocations: MAKE a decision/mistake/progress/effort/friends. DO homework/research/business/damage/justice. These fixed pairings cannot be swapped.",
      "Phrasal verb meanings often differ completely from the base verb: 'Look up' (in a dictionary) ≠ 'look' + 'up'. Learn phrasal verbs as single units with their own meanings.",
      "One-word substitution strategy: think of the root word or language origin. Philo- = love, so Bibliophile = book lover. Omni- = all, so Omniscient = all-knowing. Knowing roots decodes many one-word substitutions.",
    ],
  },

  tech: {
    title: "Technical Writing, Accuracy & Error Spotting",
    rules: [
      ["Characteristics of technical writing", "Clear (unambiguous), Concise (no unnecessary words), Precise (exact terms), Objective (neutral, factual), Organized (logical flow), Consistent (uniform terminology)."],
      ["Formal vs informal language", "Formal: complete sentences, no contractions, no slang, passive voice common. Informal: contractions (it's, don't), colloquial language, first person. Technical writing = formal register."],
      ["Redundancy to avoid", "'Absolute necessity' (necessity is already absolute). 'Join together', 'return back', 'end result', 'future plans', 'past history', 'added bonus', 'completely finished' — second word is redundant."],
      ["Comma rules", "Before FANBOYS in compound sentences. After introductory phrase/clause. To separate items in a list of 3+. Around non-restrictive clauses. With direct address. NOT before 'that' (restrictive clauses)."],
      ["Semicolon uses", "Between two related independent clauses without conjunction. Before transitional phrases (however, therefore, moreover, furthermore) when connecting two independent clauses."],
      ["Colon uses", "Before a list or explanation. 'The report had three sections: introduction, body, and conclusion.' NOT used after a verb or preposition."],
      ["Apostrophe rules", "Possessive: engineer's report, the team's effort. Contraction: don't, it's, we're. NEVER for simple plurals: 'The 1990s' (not '1990's'). For plural possessive: 'students' assignments' (apostrophe after s)."],
      ["Tautology and wordiness", "Avoid: 'in my personal opinion' (personal = in my opinion), 'at this point in time' (= now), 'due to the fact that' (= because), 'in the event that' (= if), 'with the exception of' (= except)."],
    ],
    concepts: [
      ["Error spotting — systematic approach", "Error spotting MCQs give an underlined sentence in 4 parts. Check in order: (1) Subject-verb agreement — does verb number match subject? (2) Tense consistency — is tense appropriate and consistent? (3) Article usage — a/an/the or none? (4) Preposition — correct preposition for the expression? (5) Pronoun reference — does pronoun match its antecedent? (6) Parallel structure — are listed items in the same form? (7) Word choice — confused words (affect/effect, etc.)? (8) Redundancy — any unnecessary repetition? Check all 8 before choosing."],
      ["Sentence improvement — common patterns", "Improvement MCQs give an underlined portion and 4 alternatives. Common improvements: (1) Replacing wordiness with concise language. (2) Fixing wrong tense. (3) Correcting wrong preposition. (4) Fixing parallel structure. (5) Removing redundancy. (6) Replacing passive with active for clarity. Strategy: read the original, identify the problem, find the option that FIXES ONLY THAT PROBLEM without introducing new errors. The 'No improvement needed' option is correct roughly 20-25% of the time in NIMCET."],
      ["Technical writing — clarity and conciseness", "Before: 'Due to the fact that the system was not functioning properly, it was determined that a decision would need to be made to shut it down.' After (improved): 'Because the system malfunctioned, we decided to shut it down.' Reductions: 'due to the fact that' → 'because'. 'was not functioning properly' → 'malfunctioned'. 'it was determined' → 'we determined'. 'a decision would need to be made' → 'decided'. 45 words → 14 words. Same meaning, far clearer. This type of editing is tested in sentence improvement questions."],
      ["Punctuation in technical writing — key rules", "Hyphen (-): compound adjectives before noun ('state-of-the-art technology', 'well-defined parameters'). Numbers as words ('twenty-first century'). Dash (—): parenthetical information for emphasis — stronger than commas. Quotation marks: technical terms on first use ('The algorithm uses a process called backpropagation'). Brackets [ ]: editorial comments within a quotation. Slash (/): alternatives (and/or, pass/fail). Never use exclamation marks in formal technical writing. Ellipsis (...): omitted words in a quotation."],
    ],
    examples: [
      {
        q: "Find the error: 'The committee have decided to postponed the meeting until next month.' (A) The committee (B) have decided (C) to postponed (D) until next month",
        steps: [
          "Part A: 'The committee' — subject is fine.",
          "Part B: 'have decided' — committee can take plural verb in British English (as a body); fine.",
          "Part C: 'to postponed' — after 'to', we need the BASE FORM of the verb (infinitive), not past tense. 'to postpone' is correct.",
          "'Decided to postponed' → 'decided to postpone'.",
          "Answer: (C) 'to postponed' — should be 'to postpone'.",
        ],
      },
      {
        q: "Improve: 'The reason why the project failed was because of the fact that there was a shortage of funds.'",
        steps: [
          "Issues: (1) 'The reason why...was because' — 'because' is redundant after 'reason'. (2) 'due to the fact that' is wordy. (3) 'there was a shortage of' is wordy.",
          "Redundancy: 'The reason WHY...was BECAUSE' → 'The reason...was that'.",
          "Wordy: 'because of the fact that there was a shortage of' → 'due to'.",
          "Improved: 'The project failed due to a shortage of funds.'",
          "Or: 'The reason the project failed was a shortage of funds.'",
          "Reduction from 22 words to 8-10 words.",
        ],
      },
      {
        q: "Spot the error in punctuation: 'The engineers solution was both elegant and efficient however it was too expensive to implement.'",
        steps: [
          "Error 1: 'engineers solution' — missing possessive apostrophe → 'engineer's solution'.",
          "Error 2: 'efficient however' — 'however' connects two independent clauses as a transitional word → needs semicolon before it. 'efficient; however, it was...'",
          "Corrected: 'The engineer's solution was both elegant and efficient; however, it was too expensive to implement.'",
        ],
      },
      {
        q: "Which of these is the most appropriate for a technical report? (A) 'I think this method is really good.' (B) 'The proposed method demonstrates superior performance metrics.' (C) 'This method rocks and works like a charm.' (D) 'We reckon this'll do the trick.'",
        steps: [
          "(A) 'I think...really good': subjective, informal, vague — not technical.",
          "(C) 'rocks', 'works like a charm': slang, idioms — never in technical writing.",
          "(D) 'reckon', 'do the trick': colloquial/informal — inappropriate.",
          "(B) 'demonstrates superior performance metrics': objective, formal, specific, uses technical terminology — appropriate.",
          "Answer: (B) — clear, formal, precise, and objective.",
        ],
      },
    ],
    tips: [
      "Error spotting order: always check subject-verb agreement FIRST, then tense, then prepositions, then articles, then word choice. This systematic order prevents missing errors.",
      "Redundancy red flags: 'reason is because' (use 'reason is that'), 'return back', 'future plans', 'past history', 'added bonus' — these are wrong and commonly appear in error-spotting MCQs.",
      "Formal writing: no contractions (it's → it is), no slang, use passive voice in scientific contexts, no emotional language, avoid first person where possible.",
      "'No improvement needed' option: if all four alternatives change something that was correct, the original is fine. Don't change what isn't broken — this catches about 1 in 4 improvement questions.",
      "Technical vocabulary tip: precise > general. 'The system malfunctioned' > 'the system had problems'. 'The data indicated' > 'it showed'. 'Parameters' > 'settings'. Use specific nouns and active verbs.",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("comp");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* Header */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP — GENERAL ENGLISH
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>General English — 10 Questions</div>
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

        <div style={{ background: "#f0f4ff", border: "1px solid #c7d7f7", borderRadius: "5px", padding: "12px 15px", marginBottom: "20px" }}>
          <div style={{ fontSize: "10px", color: "#3b5bdb", fontWeight: "700", letterSpacing: "1px", marginBottom: "8px" }}>🎯 NIMCET ENGLISH — QUICK STRATEGY (10 Questions)</div>
          <div style={{ fontSize: "12.5px", color: "#364fc7", lineHeight: "1.6" }}>
            Typical breakdown: Comprehension passage (2-3 Qs) · Synonyms/Antonyms (2 Qs) · Error spotting / Sentence improvement (2 Qs) · Fill in the blank — grammar (1-2 Qs) · One-word substitution / Idiom (1-2 Qs). Spend max 8-10 minutes on this section. Passage: read questions first, then passage. Grammar: eliminate wrong forms. Vocabulary: use roots and context clues. Time saved here = time for Maths.
          </div>
        </div>

        <div style={{ textAlign: "center", color: "#bbb", fontSize: "10px", paddingTop: "12px", borderTop: "1px solid #e8e4da", fontStyle: "italic" }}>
          NIMCET · General English · 10 Questions · All topics covered · Study smart, then grind PYQs 🎯
        </div>
      </div>
    </div>
  );
}
