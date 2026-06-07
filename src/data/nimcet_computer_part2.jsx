import { useState } from "react";

const TABS = [
  { id: "input",    label: "⌨️ Input Devices" },
  { id: "output",   label: "🖥️ Output Devices" },
  { id: "storage",  label: "💾 Storage Devices" },
  { id: "memory",   label: "🧠 Memory Types" },
  { id: "os",       label: "⚙️ Operating Systems" },
  { id: "software", label: "📱 Software" },
  { id: "internet", label: "🌐 Internet & Email" },
];

const DATA = {
  input: {
    title: "Input Devices",
    rules: [
      ["Keyboard", "Most common input device. QWERTY layout standard. Types: membrane (quiet, cheap), mechanical (tactile, durable)."],
      ["Mouse", "Pointing device. Types: optical (LED), laser (more precise), trackball (inverted mouse, stationary). Also: touchpad, trackpoint."],
      ["Scanner", "Converts physical documents/images to digital. Types: flatbed (most common), handheld, drum. Resolution measured in DPI."],
      ["OCR", "Optical Character Recognition — converts scanned TEXT images into editable digital text. Software-based recognition algorithm."],
      ["OMR", "Optical Mark Recognition — reads presence/absence of marks in specific positions. Used for MCQ answer sheets and surveys."],
      ["MICR", "Magnetic Ink Character Recognition — reads characters printed in magnetic ink. Used exclusively for bank cheques."],
      ["Biometric devices", "Input by biological characteristics: fingerprint scanner, iris scanner, retina scanner, facial recognition camera."],
      ["Touchscreen types", "Resistive: works with any object (stylus, finger), pressure-based, older ATMs. Capacitive: only conductive touch (finger), more accurate, modern smartphones."],
    ],
    concepts: [
      ["Device category classification", "Keyboard/keypad: text and command input. Pointing devices: mouse, trackpad, joystick, trackball, light pen (positioning). Document scanning: flatbed scanner, hand scanner. Special-purpose reading: MICR (cheques), OMR (answer sheets), OCR (text from images), Barcode/QR (product codes). Audio/visual: microphone, webcam, digital camera. Biometric: fingerprint, iris, face. NIMCET frequently asks 'which is NOT an input device' — know these categories cold."],
      ["MICR vs OMR vs OCR — exact distinctions", "MICR: reads MAGNETIC INK characters (numbers at bottom of cheques). The characters must be printed with special magnetic ink. Extremely reliable, used only in banking. OMR: reads filled MARKS (circles, bubbles, squares) at fixed positions. Fast, used for standardized tests. Doesn't recognize text. OCR: recognizes TEXT characters from scanned images using pattern recognition software. Can convert handwritten or printed text. Most flexible but requires processing power."],
      ["Barcode vs QR code — comparison", "Barcode (1D): parallel lines of varying width. Stores 20-25 characters. Reads horizontally only. Requires line-of-sight laser. Common in retail. QR Code (2D): square matrix of dots. Stores up to ~7000 characters including URLs, text. Reads from any angle. Uses camera. Built-in error correction (can read even if partially damaged). QR codes are strictly a superset of barcodes in capability."],
      ["Digitizer / Graphics tablet", "A flat surface that translates pen/stylus position to digital coordinates. Uses electromagnetic sensing — doesn't require physical screen contact. Used by graphic designers and architects for precise freehand drawing. The stylus detects pressure levels (up to 8192 levels in professional tablets). Output is vector coordinate data, not pixels. Different from touchscreen: graphics tablet input maps to the entire screen, not just touched area."],
    ],
    examples: [
      {
        q: "Which of the following is an OUTPUT device? (A) Scanner (B) Joystick (C) Plotter (D) Microphone",
        steps: [
          "Scanner: converts physical documents to digital data → INPUT.",
          "Joystick: pointing/gaming device → INPUT.",
          "Microphone: captures audio → INPUT.",
          "Plotter: produces large-format drawings/printouts on paper → OUTPUT.",
          "Answer: (C) Plotter.",
        ],
      },
      {
        q: "A bank processes thousands of cheques daily. Which technology reads the account numbers printed at the bottom? (A) OCR (B) OMR (C) Barcode (D) MICR",
        steps: [
          "OCR: reads printed/handwritten text — not specific to banking.",
          "OMR: reads marks/bubbles — used for answer sheets.",
          "Barcode: product identification — not used on cheques.",
          "MICR: specially designed for banking. Account numbers on cheques are printed with magnetic ink and read by MICR readers.",
          "Answer: (D) MICR.",
        ],
      },
      {
        q: "A student fills bubbles on an exam answer sheet. Which device reads it? How does it differ from OCR?",
        steps: [
          "OMR (Optical Mark Recognition) reads the answer sheet.",
          "OMR difference: it only detects WHETHER a mark is present at a specific position — no text recognition involved.",
          "OCR difference: OCR recognizes actual characters (letters, digits) from scanned images.",
          "OMR is faster, simpler, and more reliable for fixed-position marks.",
          "OMR cannot read handwriting; OCR can (with varying accuracy).",
        ],
      },
    ],
    tips: [
      "NIMCET loves: 'which is NOT an input device?' Plotter, monitor, printer, speaker, projector = OUTPUT. Everything else that feeds data IN = input.",
      "MICR = cheques (magnetic ink). OMR = bubble sheets (marks). OCR = text from images (recognition). Three distinct purposes — know them cold.",
      "Capacitive touchscreen (smartphones): needs conductive material (finger or special stylus). Resistive (older ATMs, budget devices): works with any pressure.",
      "DPI (Dots Per Inch) = resolution measure. Higher DPI = more detail. 300 DPI = standard print quality. 600+ DPI = high quality scanning.",
      "Biometric devices ARE input devices. Fingerprint scanner, iris scanner, face recognition camera — all take biological data as INPUT to the computer.",
    ],
  },

  output: {
    title: "Output Devices",
    rules: [
      ["Monitor/Display types", "CRT (old, bulky, magnetic), LCD (flat, liquid crystals), LED (LCD + LED backlight, most common), OLED (each pixel self-lit, true black, premium)."],
      ["Screen resolution standards", "HD: 1280×720 | FHD: 1920×1080 | QHD: 2560×1440 | 4K UHD: 3840×2160 | 8K: 7680×4320."],
      ["Impact printers", "Physically strike paper via ribbon. Types: Dot matrix (pins form dots, can do multi-copy, noisy), Line printer (entire line at once, mainframe era)."],
      ["Non-impact printers", "Don't physically strike. Types: Inkjet (liquid ink droplets, good color), Laser (dry toner + heat, fast, high volume), Thermal (heat-sensitive paper, receipts)."],
      ["Laser vs Inkjet key differences", "Laser: faster (PPM), toner powder, cost-effective for volume, crisp text. Inkjet: slower, liquid ink, better photos, affordable hardware but costly ink."],
      ["Plotter", "Prints large-format VECTOR graphics. Used for CAD drawings, blueprints, maps, banners. Types: pen plotter (moves pen), inkjet plotter."],
      ["DPI and PPM", "DPI (Dots Per Inch): print/screen resolution. Higher = more detail. PPM (Pages Per Minute): printer speed."],
      ["Projector types", "DLP (Digital Light Processing): uses mirrors, good contrast. LCD projector: uses liquid crystals, accurate color. LED/Laser projector: long lamp life."],
    ],
    concepts: [
      ["Monitor technology comparison", "CRT: heavy, bulky, uses electron beam, good color accuracy, high radiation, power-hungry — obsolete. LCD: flat, uses liquid crystals + separate backlight (CCFL or LED), slim, efficient. LED: LCD panel with LED backlight — most modern 'LCD' monitors are actually LED-backlit LCDs. OLED: organic compounds emit light per-pixel, true black (pixel off = no light), highest contrast, used in premium phones/TVs. QLED: LCD with quantum dots for enhanced color."],
      ["Printer type comparison table", "Dot matrix: impact, pins form characters, multi-copy capable (invoices, receipts), slow (~100-500 cps), noisy, very cheap consumables. Inkjet: non-impact, liquid ink cartridges, excellent color photos, moderate speed (5-20 PPM), affordable hardware, expensive per-page cost. Laser: non-impact, dry toner powder, fast (20-60 PPM), high-quality text, cost-effective for high volume, higher upfront cost. Thermal: heat causes color change in special paper, no ink/toner, very quiet, low maintenance, receipts/labels."],
      ["Soft copy vs hard copy output", "Hard copy: physical, permanent output on paper or other medium — printer, plotter. Soft copy: electronic, temporary output displayed on screen — monitor, projector. Audio output: speakers, headphones (sometimes categorized separately). NIMCET may ask: 'which output is hard copy?' → anything printed. 'Soft copy?' → anything displayed digitally."],
      ["Resolution and display quality factors", "Resolution: total pixels (1920×1080 = 2,073,600 pixels). More pixels = sharper image. Refresh rate (Hz): how many times per second the screen updates. 60 Hz = standard. 120/144 Hz = gaming. Response time (ms): how quickly a pixel changes color. Lower = less motion blur. Aspect ratio: 16:9 (widescreen standard), 4:3 (old monitors), 21:9 (ultrawide). Color depth: 8-bit (16.7M colors), 10-bit (1B colors)."],
    ],
    examples: [
      {
        q: "A company needs to print 10,000 pages per day with sharp text quality at low cost per page. Best printer type?",
        steps: [
          "Dot matrix: very slow, not suitable for 10,000 pages quickly.",
          "Inkjet: moderate speed, high ink cost per page at volume.",
          "Thermal: requires special paper, impractical for large volume documents.",
          "Laser: fast (20-60 PPM), dry toner is cheap per-page, excellent text quality, designed for high-volume printing.",
          "Answer: Laser printer — best for high volume + low cost per page + text quality.",
        ],
      },
      {
        q: "Which monitor type provides true blacks because pixels can be completely turned off? (A) LCD (B) LED (C) CRT (D) OLED",
        steps: [
          "CRT: electron beam controls brightness — blacks not perfectly deep.",
          "LCD: always has backlight even for dark content → light bleeds through → not true black.",
          "LED: same as LCD with LED backlight — same true-black limitation.",
          "OLED: each pixel is its own light source. Black pixel = pixel turned OFF = zero light = perfect black.",
          "Answer: (D) OLED.",
        ],
      },
      {
        q: "What output device is used by architects to print large engineering blueprints? (A) Laser printer (B) Inkjet printer (C) Plotter (D) Dot matrix",
        steps: [
          "Laser and inkjet printers: standard A4/A3 paper sizes, not large format.",
          "Dot matrix: slow, low quality, for text/receipt printing.",
          "Plotter: designed specifically for large-format vector graphics. Can print on wide rolls of paper. Used for CAD drawings, blueprints, maps, banners.",
          "Answer: (C) Plotter.",
        ],
      },
    ],
    tips: [
      "Impact vs Non-impact: Dot matrix = impact (physically strikes). Inkjet, Laser, Thermal = non-impact. This distinction is a direct NIMCET question type.",
      "Laser printer = toner (dry powder) + heat + drum. Inkjet = liquid ink cartridge + nozzles. Never confuse these materials.",
      "OLED = true blacks (pixel off = zero light). LCD/LED always has backlight → cannot achieve true black. This difference appears in MCQ directly.",
      "PPM = printer speed. DPI = print resolution. Higher PPM → faster. Higher DPI → sharper. Laser has higher PPM; Inkjet can have comparable DPI.",
      "Plotter = large-format VECTOR output. Normal printers = raster (pixel-based). This vector vs raster distinction explains why plotters are used for CAD.",
    ],
  },

  storage: {
    title: "Storage Devices",
    rules: [
      ["HDD (Hard Disk Drive)", "Magnetic platters spin (5400-10000 RPM). Read/write head moves across surface. Sequential or random access. SATA interface. 1-20 TB typical."],
      ["SSD (Solid State Drive)", "NAND flash memory chips, no moving parts. Faster, more durable, silent, lighter than HDD. Two types: SATA SSD (~500 MB/s) and NVMe SSD (~3500 MB/s, PCIe interface)."],
      ["CD / DVD / Blu-ray capacities", "CD: 700 MB. DVD Single-Layer: 4.7 GB. DVD Dual-Layer: 8.5 GB. Blu-ray SL: 25 GB. Blu-ray DL: 50 GB."],
      ["Flash storage", "USB flash drive (pen drive), SD card, microSD — all use NAND flash. Non-volatile, portable, no moving parts."],
      ["Magnetic tape", "Sequential access only (no random access). Extremely high capacity (up to 330 TB/cartridge). Cheapest per GB. Used for cold backup and archival."],
      ["Access types", "Sequential access: must read data in order (tape). Random access: jump to any location instantly (HDD, SSD, RAM). Direct access is another term for random access."],
      ["HDD performance factors", "Seek time: time to move head to correct track. Rotational latency: time to rotate platter to correct sector. Transfer rate: data read/written per second. Total access time = seek + latency + transfer."],
      ["RAID (Redundant Array of Independent Disks)", "RAID 0: striping (speed, no redundancy). RAID 1: mirroring (redundancy, copies data). RAID 5: striping + parity (balance of speed and redundancy). Minimum 3 disks."],
    ],
    concepts: [
      ["HDD vs SSD — complete comparison", "HDD: mechanical (spinning platters + moving head), slower (100-150 MB/s), sensitive to vibration/shock, fragmentation affects speed, cheaper per GB, higher capacity available. SSD: solid-state (no moving parts), much faster (500-7000 MB/s depending on SATA/NVMe), shock resistant, no fragmentation issue, more expensive per GB, generates less heat. NIMCET tests: 'why is SSD faster?' → no mechanical movement. 'Why is tape cheapest?' → sequential access, high capacity."],
      ["Optical storage technology", "Data stored as pits (lands) burned into a reflective disc by laser. Reading: laser beam reflects differently off pits vs flat areas → 0s and 1s. CD uses 780nm red laser (700 MB). DVD uses 650nm red laser (4.7 GB — shorter wavelength, tighter tracks, more data). Blu-ray uses 405nm blue-violet laser (25 GB — even shorter wavelength). CD-R: write once (organic dye layer). CD-RW: rewritable (phase-change material). ROM suffix = factory-pressed, read-only."],
      ["Flash memory (NAND) — how it works", "NAND flash: stores charge in floating gate transistors. No charge=1, charge=0 (or vice versa). Types: SLC (1 bit/cell, fastest, longest life), MLC (2 bits/cell), TLC (3 bits/cell, consumer SSDs), QLC (4 bits/cell, high density but shorter lifespan). Wear leveling: SSD controller distributes writes evenly across cells to extend lifespan. NAND flash is used in: SSDs, USB drives, SD cards, smartphones."],
      ["Primary vs Secondary vs Tertiary storage", "Primary: RAM — volatile, directly accessed by CPU, fastest. Secondary: HDD, SSD — non-volatile, persistent, much larger capacity, slower than RAM. Tertiary: magnetic tape, optical jukeboxes — very slow (manual or robotic retrieval), very cheap, used for backup and long-term archival. NIMCET asks: 'Which is NOT primary storage?' → anything other than RAM. 'Which is used for backup archival?' → magnetic tape."],
    ],
    examples: [
      {
        q: "Why is an SSD preferred over an HDD for a laptop? List 3 technical reasons.",
        steps: [
          "1. Speed: SSD accesses data at 500+ MB/s (SATA) vs HDD at 100-150 MB/s. No seek time or rotational latency.",
          "2. Durability: No moving parts → resistant to drops/shock. HDD head can crash into platter if dropped.",
          "3. Power efficiency: SSD consumes 2-3W vs HDD's 6-8W → longer laptop battery life.",
          "Bonus: SSD is lighter, generates less heat, and produces no noise.",
        ],
      },
      {
        q: "Order these from smallest to largest capacity: Blu-ray DL, DVD-SL, CD, USB 64GB, Blu-ray SL.",
        steps: [
          "CD: 700 MB (= 0.7 GB).",
          "DVD Single Layer: 4.7 GB.",
          "Blu-ray Single Layer: 25 GB.",
          "USB 64 GB: 64 GB.",
          "Blu-ray Dual Layer: 50 GB.",
          "Correct order: CD (700MB) < DVD-SL (4.7GB) < Blu-ray SL (25GB) < Blu-ray DL (50GB) < USB 64GB (64GB).",
        ],
      },
      {
        q: "A data center needs to archive 500 TB of data at minimum cost. Best storage medium and why?",
        steps: [
          "SSD: fastest but most expensive per GB — not suitable for 500TB cost-effectively.",
          "HDD: cheaper than SSD, but still significant cost at 500TB scale.",
          "Optical (Blu-ray): 50 GB per disc, requires thousands of discs, fragile.",
          "Magnetic tape: $10-15 per TB, extremely cheap per GB, long archival life (30+ years), high per-cartridge capacity (up to 330 TB).",
          "Answer: Magnetic tape — most cost-effective for large-scale cold archival.",
        ],
      },
    ],
    tips: [
      "Storage capacity order: CD(700MB) < DVD-SL(4.7GB) < DVD-DL(8.5GB) < Blu-ray SL(25GB) < Blu-ray DL(50GB). Memorize for direct MCQ.",
      "Tape = sequential access only. HDD/SSD/CD/DVD = random access (also called direct access). This distinction appears in NIMCET.",
      "NVMe SSD (PCIe) is ~7× faster than SATA SSD. SATA SSD is ~5× faster than HDD. NIMCET may test relative speed rankings.",
      "RAID 0 = speed (striping, no backup). RAID 1 = safety (mirroring, perfect copy). RAID 5 = balanced (striping + parity, tolerates 1 disk failure).",
      "HDD access time = seek time + rotational latency + transfer time. SSD has NO seek time or rotational latency → much faster random access.",
    ],
  },

  memory: {
    title: "Memory Types — RAM, ROM, Cache & Virtual Memory",
    rules: [
      ["RAM (Random Access Memory)", "Volatile — loses all data when power is off. Directly accessed by CPU. Stores currently running programs and active data."],
      ["SRAM (Static RAM)", "Uses flip-flops. Faster, more expensive, lower density. Does NOT need periodic refresh. Used for CACHE memory."],
      ["DRAM (Dynamic RAM)", "Uses capacitors that must be REFRESHED thousands of times per second. Slower, cheaper, higher density. Used as MAIN MEMORY (DDR4/DDR5)."],
      ["ROM (Read-Only Memory)", "Non-volatile — retains data without power. Normally read-only. Stores firmware (BIOS/UEFI boot code)."],
      ["ROM types", "PROM: write once. EPROM: erase with UV light, reprogram. EEPROM: erase electrically. Flash: EEPROM variant, erase/write in blocks (SSDs, USB drives)."],
      ["Cache levels", "L1: 32-64 KB per core, ~1-4 cycle access. L2: 256 KB-4 MB per core. L3: 4-64 MB shared. All SRAM-based."],
      ["Virtual memory", "Uses HDD/SSD space as an extension of RAM. OS manages page table mapping virtual → physical addresses."],
      ["Page and page fault", "Page: fixed-size block of virtual memory (typically 4 KB). Page fault: requested page not in RAM → OS loads from disk (very slow, ms vs ns)."],
    ],
    concepts: [
      ["RAM types and DDR generations", "DRAM is the dominant main memory type. Modern form: SDRAM (Synchronous DRAM — synchronized with CPU clock). DDR (Double Data Rate) transfers data on both clock edges. Generations: DDR3 (1333-2133 MT/s), DDR4 (2133-3200 MT/s), DDR5 (4800-6400 MT/s, lower voltage). Higher DDR number = faster, more efficient, lower voltage. Also: LPDDR (Low Power DDR) for mobile devices."],
      ["ROM type hierarchy", "Basic ROM: factory-programmed, never changed (e.g., calculator ROMs). PROM: user can write once using a PROM programmer (permanent after write). EPROM: can be erased by exposing to UV light through a quartz window (visible on old chips). EEPROM: erase electrically, byte by byte — slow but convenient. Flash (NAND/NOR): type of EEPROM, erases in blocks, much faster. Flash is the technology inside SSDs, USB drives, phones. BIOS chips use NOR flash (random access needed)."],
      ["Cache hierarchy — why it exists", "Problem: CPU operates at GHz speeds (ns per operation), RAM operates at ~60-100 ns. Without cache, CPU would wait for RAM constantly. Solution: Cache stores frequently accessed data very close to CPU (on the die). Principle of temporal locality: recently used data will likely be used again. Principle of spatial locality: nearby memory addresses likely to be accessed. L1 is fastest (and smallest), L3 is slowest (and largest). Cache hit ratio is critical for performance — modern CPUs achieve 95%+ hit rate for L1+L2+L3 combined."],
      ["Virtual memory — paging and thrashing", "Paging: OS divides memory into fixed-size pages (4 KB typically). When a page needed isn't in RAM (page fault): OS saves a RAM page to disk (swap space/pagefile) and loads the needed page. Very slow (milliseconds). Thrashing: when the system spends more time swapping pages than executing programs — caused by too many processes for available RAM. Symptoms: CPU at 100%, disk at 100%, system nearly frozen. Fix: add more RAM or reduce number of running processes."],
    ],
    examples: [
      {
        q: "Which type of RAM is used in cache memory and why? (A) DRAM (B) SRAM (C) DDRAM (D) Flash",
        steps: [
          "DRAM: requires refreshing, slower — used for main memory (RAM sticks).",
          "Flash: non-volatile, much slower for random access — used in SSDs/USB.",
          "DDRAM: a form of DRAM (DDR = Double Data Rate DRAM) — main memory.",
          "SRAM: uses flip-flops, no refresh needed, extremely fast (~1-4 ns), expensive and low density.",
          "Cache needs extreme speed to match CPU pace → SRAM is the only viable option.",
          "Answer: (B) SRAM — fastest type, no refresh delay.",
        ],
      },
      {
        q: "What is the difference between EPROM and EEPROM? Which is used in modern BIOS chips?",
        steps: [
          "EPROM: Erasable Programmable ROM. Erased by exposing to ultraviolet (UV) light through a quartz window. Then reprogrammed with PROM programmer. Requires physical removal from circuit.",
          "EEPROM: Electrically Erasable PROM. Erased electrically, byte by byte, in-circuit. No need to remove chip.",
          "Flash (NOR): type of EEPROM but erased/written in blocks. Supports in-system programming.",
          "Modern BIOS/UEFI uses NOR Flash — allows firmware updates without removing the chip.",
          "Answer: EEPROM (specifically NOR Flash) is used in modern BIOS chips.",
        ],
      },
      {
        q: "A system has 4 GB RAM but runs 20 programs requiring 8 GB total. How does the OS manage this?",
        steps: [
          "OS uses virtual memory: treats HDD/SSD space as an extension of RAM.",
          "Programs see virtual addresses; OS maps them to physical RAM pages.",
          "Inactive pages are swapped to disk (pagefile/swapfile) to free RAM for active processes.",
          "When a swapped-out page is needed → page fault → OS loads it back (disk access = slow).",
          "If too many page faults → system thrashes (disk/CPU both overloaded) → severe slowdown.",
          "Solution: upgrade RAM or close programs.",
        ],
      },
    ],
    tips: [
      "SRAM = cache (fast, expensive, no refresh). DRAM = main memory (slower, cheaper, needs refresh). This distinction is tested directly.",
      "Volatile = loses data without power: RAM (SRAM + DRAM). Non-volatile = retains data: ROM, Flash, SSD, HDD.",
      "ROM type sequence: PROM (write once) → EPROM (UV erase) → EEPROM (electrical erase) → Flash (block-erase EEPROM). Each generation adds more flexibility.",
      "Cache hit = fast (ns). Cache miss = go to RAM (slower). Page fault = go to disk (very slow, ms). Speed difference: cache vs disk = ~1 million times faster.",
      "DDR4 vs DDR5: DDR5 is faster, uses lower voltage, higher bandwidth. LPDDR = mobile version (phones, tablets). All are volatile DRAM variants.",
    ],
  },

  os: {
    title: "Operating Systems",
    rules: [
      ["OS definition", "System software that manages hardware resources and provides services to application programs. Acts as interface between user and hardware."],
      ["6 main OS functions", "Process management | Memory management | File system management | Device (I/O) management | Security & access control | User interface (GUI/CLI)."],
      ["Batch OS", "No user interaction during execution. Jobs collected and processed in batches. Used in early mainframes. No multitasking."],
      ["Time-sharing / Multitasking OS", "Multiple users/programs share CPU time. CPU rapidly switches between processes (context switch). Gives illusion of simultaneous execution. Unix, Windows, Linux."],
      ["Real-time OS (RTOS)", "Guarantees response within a strict time deadline. Hard RTOS: missing deadline = system failure (aircraft, medical). Soft RTOS: missed deadline = degraded quality (video streaming)."],
      ["CPU scheduling algorithms", "FCFS: First-Come-First-Served (simple, convoy effect). SJF: Shortest Job First (minimum average wait, hard to predict). Round Robin: time quantum, fair. Priority: highest priority runs first, starvation possible."],
      ["File systems", "FAT32: max 4 GB per file (Windows, USB). NTFS: large files, permissions, encryption (modern Windows). ext4: Linux standard. APFS: Apple macOS/iOS."],
      ["Process states", "New → Ready → Running → Waiting/Blocked → Terminated. OS scheduler moves processes between states."],
    ],
    concepts: [
      ["Key OS functions — detailed", "Process Management: creates, schedules, and terminates processes. Prevents deadlock. Memory Management: allocates RAM to processes, implements virtual memory, paging, segmentation. File Management: organizes files in hierarchical directories, manages read/write/delete permissions, maintains file metadata. Device Management: uses device drivers as translators between OS and specific hardware. Security: user authentication, access control lists (ACL), encryption. User Interface: GUI (icons, windows, mouse) or CLI (text commands, e.g., Linux terminal)."],
      ["Multitasking, multithreading, multiprocessing", "Multitasking: running multiple PROCESSES simultaneously (apparent — CPU switches rapidly). Multithreading: a single process splits into multiple threads sharing the same memory space. Faster than separate processes. Multiprocessing: actual parallel execution using multiple CPU cores/processors. Multi-user: multiple users accessing the same system simultaneously (time-sharing mainframes). NIMCET asks: 'What allows multiple programs to run on one CPU?' → Multitasking (time-sharing)."],
      ["OS types comparison", "Batch OS: no interaction, jobs in queue, early era. Time-sharing OS: multiple users, context switching, modern standard. Real-time OS (RTOS): deadline-critical, embedded systems (VxWorks, FreeRTOS, QNX). Distributed OS: manages cluster of networked computers as one (Google's data centers). Embedded OS: minimal, runs on microcontrollers (washing machines, routers). Mobile OS: Android (Linux kernel, Google), iOS (Darwin/XNU kernel, Apple)."],
      ["Popular OS and their properties", "Windows (Microsoft): most popular desktop OS, proprietary, GUI-focused, supports most software/hardware. macOS (Apple): Unix-based, proprietary, runs only on Apple hardware, known for stability and design. Linux (Torvalds): open-source, free, highly customizable, server/developer favorite. Distributions: Ubuntu, CentOS, Debian, Arch. Android (Google): Linux-based, open-source, most popular mobile OS. iOS (Apple): Closed-source, Apple devices only, known for security and performance."],
    ],
    examples: [
      {
        q: "Which scheduling algorithm causes the 'convoy effect' where short processes wait behind a long one? (A) SJF (B) Round Robin (C) FCFS (D) Priority",
        steps: [
          "SJF: shortest job runs first — no convoy effect, short jobs go ahead.",
          "Round Robin: each process gets equal time slice — no convoy.",
          "Priority: high priority first — can cause starvation but not the convoy effect specifically.",
          "FCFS: processes run in arrival order. If a long process arrives first, all shorter processes wait — this IS the convoy effect.",
          "Answer: (C) FCFS (First-Come-First-Served).",
        ],
      },
      {
        q: "An air traffic control system requires that radar data is processed within 100ms, always. Which OS type is required?",
        steps: [
          "Batch OS: no real-time guarantees — not suitable.",
          "Time-sharing OS: fair to all processes but no deadline guarantees.",
          "Mobile OS: not designed for industrial control systems.",
          "Hard Real-Time OS (RTOS): guarantees every process meets its deadline. Missing deadline could cause catastrophic failure.",
          "Air traffic control is a safety-critical system → Hard RTOS required.",
          "Answer: Real-Time Operating System (Hard RTOS).",
        ],
      },
      {
        q: "A Windows NTFS volume can support files larger than 4 GB, but a FAT32 USB drive cannot. Why?",
        steps: [
          "FAT32 (File Allocation Table 32-bit): uses 32-bit file size field. Maximum = 2³²−1 bytes ≈ 4 GB per file.",
          "NTFS (NT File System): uses 64-bit file size field. Maximum ≈ 16 EB (exabytes) per file — essentially unlimited.",
          "This is why video files >4 GB (e.g., 4K movies) cannot be copied to FAT32 USB drives.",
          "Fix: format USB as exFAT (supports large files, compatible with Windows and macOS).",
        ],
      },
    ],
    tips: [
      "OS function mnemonic: P-M-F-D-S-U (Process, Memory, File, Device, Security, User Interface). Know all 6 functions.",
      "FCFS = convoy effect (short jobs wait for long). SJF = minimum average wait time but impractical (can't know burst time). Round Robin = fairest for interactive systems.",
      "FAT32: 4 GB max file size. NTFS: practically unlimited. exFAT: large files + cross-platform. ext4: Linux. APFS: Mac. File systems are a direct MCQ topic.",
      "Android is Linux-based. iOS is Darwin/XNU-based. macOS is Unix-based. Windows is NT-based. These kernel origins appear in MCQ.",
      "Process states: Ready → Running → Blocked (waiting for I/O) → Ready (I/O complete) → Running again. The OS scheduler manages these transitions.",
    ],
  },

  software: {
    title: "Computer Software",
    rules: [
      ["System software", "Manages hardware and provides platform for other software. Includes OS, device drivers, BIOS/UEFI, utility programs."],
      ["Application software", "Performs specific tasks for users. Word processors, spreadsheets, browsers, games, media players, etc."],
      ["Device driver", "Translates OS commands into device-specific instructions. Without drivers, OS cannot communicate with hardware (printer, graphics card, etc.)."],
      ["Firmware", "Software embedded in hardware (ROM/Flash). BIOS/UEFI is firmware. First code to execute on startup. Controls hardware initialization."],
      ["Compiler", "Translates ENTIRE source code to machine code at once. Produces executable file. Examples: C, C++. Run-time errors only seen after compilation."],
      ["Interpreter", "Translates and executes code LINE BY LINE. No separate executable. Slower but easier to debug. Examples: Python, Ruby, JavaScript (in browsers)."],
      ["Assembler", "Converts ASSEMBLY language (mnemonics like MOV, ADD) to machine code. One-to-one translation."],
      ["Open source vs Proprietary", "Open source: free, source code available (Linux, Firefox, VLC, Python). Proprietary/commercial: paid, closed source (Windows, MS Office, Photoshop, macOS)."],
    ],
    concepts: [
      ["System software types — complete list", "Operating System: foundation, manages all resources. Device Drivers: specific interface for each hardware component. BIOS/UEFI (firmware): boot-time hardware check and OS loading. Utility Programs: maintenance and optimization tools — antivirus (Norton, Kaspersky), disk defragmenter (HDD only), disk cleanup, backup software, compression tools (WinZip, 7-Zip), file manager (Windows Explorer, Finder). Language translators: compiler, interpreter, assembler, linker, loader. ALL of these are system software, not application software."],
      ["Application software categories", "Word processing: MS Word, Google Docs (create/edit text documents). Spreadsheet: MS Excel, Google Sheets (calculations, charts, data). Presentation: MS PowerPoint, Google Slides. Database management: MySQL, MS Access, Oracle (store, query, manage data). Web browser: Chrome, Firefox, Edge, Safari (access web). Media: VLC (player), Photoshop (image editing), Audacity (audio). Communication: MS Teams, Zoom, Skype. Accounting: Tally, QuickBooks. NIMCET asks: 'Which is application software?' → anything user-facing that does a specific task."],
      ["Language translation — compiler vs interpreter vs assembler", "Compiler: takes entire program → produces separate machine code file → fast execution but slow compilation. Error found only after full compilation attempt. Examples: C, C++, Go, Rust. Interpreter: no separate output file → translate + execute line by line → slower execution but immediate feedback. Examples: Python, Ruby, PHP. Hybrid: Java compiles to bytecode → JVM interprets bytecode (platform independence). JavaScript: interpreted by browser's JS engine. Linker: combines multiple compiled object files into one executable. Loader: copies executable into RAM for running."],
      ["Generations of programming languages", "1GL (Machine language): binary directly. 2GL (Assembly): mnemonics (MOV AX, 5), needs assembler. 3GL (High-level): C, Java, Python — human-readable, needs compiler/interpreter. 4GL (Very high-level): SQL, MATLAB — problem-oriented, closer to natural language. 5GL (AI/logic): Prolog, LISP — describe WHAT, computer figures out HOW. NIMCET may ask: 'SQL belongs to which generation?' → 4GL."],
    ],
    examples: [
      {
        q: "Classify each: (1) Antivirus  (2) MS Excel  (3) Device driver  (4) Python interpreter  (5) VLC",
        steps: [
          "(1) Antivirus: utility program → SYSTEM software.",
          "(2) MS Excel: spreadsheet for users → APPLICATION software.",
          "(3) Device driver: translates OS commands to hardware → SYSTEM software.",
          "(4) Python interpreter: language translator → SYSTEM software.",
          "(5) VLC: media player for users → APPLICATION software.",
          "Summary: System = antivirus, driver, interpreter. Application = Excel, VLC.",
        ],
      },
      {
        q: "Which language translator produces a separate executable file from the complete source code? (A) Interpreter (B) Assembler (C) Compiler (D) Linker",
        steps: [
          "Interpreter: translates line by line, no separate executable produced.",
          "Assembler: converts assembly language to machine code (specific case).",
          "Linker: combines multiple compiled object files into one executable — but doesn't translate source code itself.",
          "Compiler: takes entire high-level source code → translates → produces machine code executable (.exe, .out).",
          "Answer: (C) Compiler.",
        ],
      },
      {
        q: "A programmer writes code in Python. When they run it, is it compiled or interpreted? What is the advantage?",
        steps: [
          "Python uses an INTERPRETER — translates and executes line by line.",
          "Advantage 1: Immediate feedback — error shown exactly at the problematic line.",
          "Advantage 2: No separate compilation step needed — faster development cycle.",
          "Advantage 3: Platform independent — same Python code runs anywhere Python is installed.",
          "Disadvantage: Slower execution than compiled languages like C/C++.",
          "Note: CPython (standard Python) compiles to bytecode (.pyc) first, then interprets — technically hybrid.",
        ],
      },
    ],
    tips: [
      "System vs Application: System software manages hardware/provides platform (OS, drivers, utility, BIOS). Application software does specific user tasks (Word, Chrome, VLC). Don't confuse them.",
      "Compiler = whole program at once → executable file. Interpreter = line by line → no executable. Java = hybrid (compile to bytecode, interpret on JVM).",
      "Assembler converts assembly → machine code. Linker combines object files. Loader puts program into RAM. These three appear in language processing MCQs.",
      "SQL = 4th generation language. C/Java = 3rd generation. Assembly = 2nd generation. Binary = 1st generation. NIMCET asks which generation a language belongs to.",
      "Open source examples: Linux, Android (partly), Python, VLC, Firefox, LibreOffice. Proprietary: Windows, macOS, MS Office, Photoshop, iOS. Know 3-4 examples of each.",
    ],
  },

  internet: {
    title: "Internet, Email & Online Security",
    rules: [
      ["Internet vs WWW", "Internet: global network of networks (infrastructure). WWW (World Wide Web): collection of web pages accessed via browsers using HTTP — runs ON the internet. The internet exists without WWW; WWW cannot exist without internet."],
      ["Key protocols and ports", "HTTP: port 80 | HTTPS: port 443 | FTP: port 21 | SSH: port 22 | SMTP: port 25/587 | POP3: port 110 | IMAP: port 143 | DNS: port 53."],
      ["Email protocols", "SMTP: sends email (Simple Mail Transfer Protocol). POP3: downloads email to local device, removes from server. IMAP: syncs email across devices, stays on server. Use IMAP for multiple devices; POP3 for single device."],
      ["IP addressing", "IPv4: 32-bit, dotted decimal (e.g., 192.168.1.1), ~4.3 billion addresses. IPv6: 128-bit, hex (e.g., 2001:db8::1), virtually unlimited."],
      ["DNS (Domain Name System)", "Translates human-readable domain names (www.google.com) to IP addresses (142.250.182.78). Like a phone book for the internet. Without DNS, you'd need to type IP addresses for every website."],
      ["Network types", "PAN: Personal (Bluetooth, ~10m). LAN: Local (building, ~100m). MAN: Metropolitan (city). WAN: Wide (countries — internet is the largest WAN)."],
      ["Networking devices", "Hub: broadcasts to all ports (inefficient). Switch: forwards to specific device using MAC address. Router: routes packets between networks using IP. Modem: converts digital↔analog for internet connection."],
      ["SSL/TLS and HTTPS", "SSL (Secure Sockets Layer) / TLS (Transport Layer Security): encryption protocols. HTTPS = HTTP + TLS. Encrypts all data between browser and server. Green padlock icon in browser = HTTPS active."],
    ],
    concepts: [
      ["Email system — complete flow", "Sending: user's email client → SMTP server → recipient's mail server (via SMTP). Receiving options: POP3 (port 110): downloads messages to local device, typically deletes from server — suitable for one device. IMAP (port 143): synchronizes across all devices, messages stay on server — suitable for multiple devices (phone + laptop + tablet). Email components: From (sender), To (recipient), CC (Carbon Copy — visible to all), BCC (Blind Carbon Copy — hidden from others), Subject, Body, Attachments. Spam = unwolicited bulk email."],
      ["IP address classes (IPv4)", "Class A: first octet 1-126. Subnet mask 255.0.0.0. Large networks. Class B: 128-191. Mask 255.255.0.0. Medium networks. Class C: 192-223. Mask 255.255.255.0. Small networks (most common). Class D: 224-239. Multicast. Class E: 240-255. Reserved/experimental. Private addresses (not routable on internet): 10.x.x.x (Class A), 172.16-31.x.x (Class B), 192.168.x.x (Class C) — used in LANs. Your home WiFi router likely uses 192.168.x.x."],
      ["Malware types — complete taxonomy", "Virus: attaches to files, needs user action to spread. Self-replicates when infected file runs. Worm: spreads independently over networks without human action (no host file needed). Trojan Horse: appears to be legitimate software, secretly malicious — does NOT self-replicate. Ransomware: encrypts victim's files, demands payment for decryption key (Bitcoin usually). Spyware: monitors user activity, records keystrokes, sends data to attacker. Adware: displays unwanted ads. Rootkit: hides deep in OS, grants attacker administrative access. Keylogger: records all keystrokes (steals passwords). Phishing: fake emails/websites designed to steal credentials — social engineering, not a virus."],
      ["Web browsing technology", "URL structure: Protocol://Domain/Path?Query. Example: https://www.example.com/page?id=5. HTTP: stateless protocol — each request independent. Cookies: small files browser stores to maintain state (login sessions, preferences). Cache: locally stored copies of web resources for faster loading. Browser engines: Chrome uses Blink, Firefox uses Gecko, Safari uses WebKit. DHCP: automatically assigns IP address to device on network (your router does this). DNS resolution: browser checks local cache → router cache → ISP DNS → root DNS servers."],
    ],
    examples: [
      {
        q: "What is the difference between POP3 and IMAP? When would you choose IMAP?",
        steps: [
          "POP3 (Port 110): Downloads emails to local device. Typically deletes them from the mail server after download. Works offline. Best for single device usage.",
          "IMAP (Port 143): Synchronizes emails across all devices. Messages stored on server. Changes (read/delete/move) reflect everywhere.",
          "Choose IMAP when: accessing email from phone, laptop, and tablet — all stay in sync.",
          "Choose POP3 when: using only one device and want all emails stored locally.",
          "Modern default: IMAP. Gmail, Outlook use IMAP by default.",
        ],
      },
      {
        q: "Classify each threat: (1) WannaCry encrypts files, demands Bitcoin. (2) Fake bank email asks for password. (3) Software spreads itself via USB without user action.",
        steps: [
          "(1) WannaCry: encrypts files and demands ransom → RANSOMWARE.",
          "(2) Fake bank email: social engineering to steal credentials → PHISHING.",
          "(3) Spreads via USB without user action → WORM (no need for host file to be run).",
          "Note: if it had needed the user to run an infected file → would be VIRUS.",
          "NIMCET frequently tests these distinctions.",
        ],
      },
      {
        q: "What is DNS and what happens if DNS servers are down?",
        steps: [
          "DNS = Domain Name System. Translates domain names (google.com) to IP addresses (142.250.x.x).",
          "It works like a phone book: you look up a name, get a number.",
          "If DNS is down: you cannot reach websites by name.",
          "However: if you know the IP address directly, you can still reach the site.",
          "DNS failure = most websites become unreachable even though internet connection works.",
          "This is why 'internet works but websites don't load' is often a DNS issue.",
        ],
      },
      {
        q: "What are the differences between Hub, Switch, and Router?",
        steps: [
          "Hub: Layer 1 device. Broadcasts ALL incoming data to ALL connected ports. No intelligence. Wastes bandwidth. Obsolete.",
          "Switch: Layer 2 device. Learns MAC addresses of connected devices. Forwards frames only to the correct port. Efficient. Used in LANs.",
          "Router: Layer 3 device. Connects different networks. Routes IP packets between networks (e.g., home network to internet). Has a public IP and assigns private IPs via DHCP.",
          "Summary: Hub=dumb broadcast. Switch=smart LAN. Router=network-to-network.",
        ],
      },
    ],
    tips: [
      "Email protocols: SMTP = SEND (port 25/587). POP3 = download+delete (port 110). IMAP = sync across devices (port 143). This triplet appears in every NIMCET computer section.",
      "HTTP = port 80. HTTPS = port 443. FTP = port 21. These three port numbers are the most commonly tested.",
      "Malware quick reference: Virus = needs host file. Worm = spreads alone. Trojan = disguised software. Ransomware = encrypts + demands payment. Phishing = fake page to steal credentials.",
      "Internet ≠ WWW. Internet = the global network infrastructure. WWW = web pages accessed via HTTP. Email, FTP, VoIP also use internet but are NOT part of WWW.",
      "IPv4 = 32-bit = 4 numbers (0-255) separated by dots. IPv6 = 128-bit = 8 groups of 4 hex digits. Why IPv6? IPv4 addresses ran out (~4.3 billion total, all assigned).",
    ],
  },
};

const gold  = "#c8950a";
const navy  = "#152037";
const cream = "#faf9f6";
const white = "#ffffff";

export default function App() {
  const [tab, setTab] = useState("input");
  const d = DATA[tab];

  return (
    <div style={{ fontFamily: "Georgia,'Times New Roman',serif", background: cream, minHeight: "100vh", color: "#1c1c2e", fontSize: "14px" }}>

      {/* Header */}
      <div style={{ background: navy, padding: "14px 18px 0" }}>
        <div style={{ display: "inline-block", background: gold, color: navy, fontSize: "10px", fontWeight: "700", letterSpacing: "2px", padding: "3px 8px", marginBottom: "8px" }}>
          NIMCET PREP — COMPUTER AWARENESS · PART 2 of 2
        </div>
        <div style={{ color: white, fontSize: "17px", margin: "0 0 2px" }}>Computer Hardware, Software &amp; Internet</div>
        <div style={{ color: "#7a9ab8", fontSize: "11px", margin: "0 0 12px" }}>
          Key Facts · Concepts · Solved Examples · Exam Tips
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
        <div style={{ fontSize: "10px", color: "#b07a00", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>🗝️ Key Facts &amp; Rules</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "7px", marginBottom: "22px" }}>
          {d.rules.map(([name, rule], i) => (
            <div key={i} style={{ background: white, borderLeft: `4px solid ${gold}`, borderRadius: "3px", padding: "9px 11px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "10px", color: "#999", marginBottom: "5px" }}>{name}</div>
              <div style={{ fontSize: "12.5px", color: navy, fontWeight: "600", lineHeight: "1.5" }}>{rule}</div>
            </div>
          ))}
        </div>

        {/* Concepts */}
        <div style={{ fontSize: "10px", color: "#1a365d", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700", marginBottom: "10px" }}>📖 Concepts &amp; Details</div>
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
          NIMCET · Computer Awareness · Part 2 of 2 · All sections complete · Now go practice PYQs 🎯
        </div>
      </div>
    </div>
  );
}
