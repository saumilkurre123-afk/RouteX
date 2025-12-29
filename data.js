/* DATA FILE: Full Weekly Schedule */

const timetableData = {
  // --- COMPUTER SCIENCE ---
  "Computer Science": {
    "Monday": [
      { subject: "Data Structures", time: "09:00 – 10:00", room: "CS-201" },
      { subject: "DBMS", time: "10:15 – 11:15", room: "CS-202" },
      { subject: "Mathematics III", time: "12:00 – 01:00", room: "CS-201" }
    ],
    "Tuesday": [
      { subject: "Operating Systems", time: "09:00 – 10:00", room: "CS-203" },
      { subject: "Web Dev Lab", time: "11:00 – 01:00", room: "Lab-2" },
      { subject: "Technical Writing", time: "02:00 – 03:00", room: "Seminar Hall" }
    ],
    "Wednesday": [
      { subject: "AI Fundamentals", time: "10:00 – 11:30", room: "Auditorium" },
      { subject: "Compiler Design", time: "12:00 – 01:00", room: "CS-204" },
      { subject: "Library Hour", time: "03:00 – 04:00", room: "Central Lib" }
    ],
    "Thursday": [
      { subject: "Computer Networks", time: "09:00 – 10:00", room: "CS-204" },
      { subject: "Algorithms", time: "11:00 – 12:00", room: "CS-201" },
      { subject: "Python Lab", time: "02:00 – 04:00", room: "Lab-3" }
    ],
    "Friday": [
      { subject: "Minor Project", time: "09:00 – 12:00", room: "Lab-1" },
      { subject: "Software Eng.", time: "02:00 – 03:00", room: "CS-202" }
    ]
  },

  // --- MECHANICAL ENGINEERING ---
  "Mechanical Engineering": {
    "Monday": [
      { subject: "Thermodynamics", time: "09:00 – 10:00", room: "ME-101" },
      { subject: "Engineering Mechanics", time: "11:00 – 12:00", room: "ME-103" }
    ],
    "Tuesday": [
      { subject: "Fluid Mechanics", time: "11:00 – 12:30", room: "ME-102" },
      { subject: "Heat Transfer", time: "02:00 – 03:00", room: "ME-101" }
    ],
    "Wednesday": [
      { subject: "Workshop Practice", time: "09:00 – 12:00", room: "Workshop-A" },
      { subject: "Material Science", time: "01:00 – 02:00", room: "ME-104" }
    ],
    "Thursday": [
      { subject: "AutoCAD Lab", time: "10:00 – 12:00", room: "CAD-Lab" },
      { subject: "TOM (Theory of Machines)", time: "02:00 – 03:00", room: "ME-102" }
    ],
    "Friday": [
      { subject: "Machine Design", time: "09:00 – 11:00", room: "ME-105" },
      { subject: "Industrial Mgmt", time: "12:00 – 01:00", room: "ME-101" }
    ]
  },

  // --- ELECTRICAL ENGINEERING ---
  "Electrical Engineering": {
    "Monday": [
      { subject: "Circuit Theory", time: "09:00 – 10:00", room: "EE-201" },
      { subject: "Analog Electronics", time: "11:00 – 12:00", room: "EE-203" }
    ],
    "Tuesday": [
      { subject: "Power Systems", time: "10:00 – 11:30", room: "EE-205" },
      { subject: "Signals & Systems", time: "01:00 – 02:00", room: "EE-201" }
    ],
    "Wednesday": [
      { subject: "Control Systems", time: "09:00 – 10:00", room: "EE-202" },
      { subject: "Electrical Machines", time: "11:00 – 12:00", room: "EE-204" }
    ],
    "Thursday": [
      { subject: "Digital Logic", time: "11:00 – 12:00", room: "Lab-E1" },
      { subject: "Power Electronics", time: "02:00 – 03:00", room: "EE-205" }
    ],
    "Friday": [
      { subject: "Microprocessors Lab", time: "10:00 – 01:00", room: "Lab-E2" }
    ]
  },

  // --- CIVIL ENGINEERING ---
  "Civil Engineering": {
    "Monday": [
      { subject: "Structural Analysis", time: "10:00 – 11:00", room: "CE-101" },
      { subject: "Surveying I", time: "12:00 – 01:00", room: "CE-102" }
    ],
    "Tuesday": [
      { subject: "Field Surveying Lab", time: "09:00 – 12:00", room: "Field Ground" },
      { subject: "Hydrology", time: "02:00 – 03:00", room: "CE-103" }
    ],
    "Wednesday": [
      { subject: "Concrete Tech", time: "11:00 – 12:00", room: "CE-102" },
      { subject: "Transportation Eng", time: "01:00 – 02:00", room: "CE-101" }
    ],
    "Thursday": [
      { subject: "Fluid Mechanics", time: "09:00 – 10:00", room: "CE-103" },
      { subject: "Geotech Lab", time: "02:00 – 04:00", room: "Soil Lab" }
    ],
    "Friday": [
      { subject: "Geotech Eng", time: "10:00 – 11:00", room: "CE-101" },
      { subject: "Env. Engineering", time: "12:00 – 01:00", room: "CE-104" }
    ]
  },

  // --- PHARMACY ---
  "Pharmacy": {
    "Monday": [
      { subject: "Pharmaceutics I", time: "09:00 – 10:00", room: "SLT-1" },
      { subject: "Human Anatomy", time: "11:00 – 12:00", room: "SLT-3" }
    ],
    "Tuesday": [
      { subject: "Organic Chemistry", time: "11:00 – 12:00", room: "SLT-2" },
      { subject: "Biochemistry", time: "02:00 – 03:00", room: "SLT-1" }
    ],
    "Wednesday": [
      { subject: "Pharmacology", time: "10:00 – 11:00", room: "SLT-1" },
      { subject: "Pharma Analysis", time: "12:00 – 01:00", room: "SLT-2" }
    ],
    "Thursday": [
      { subject: "Pathophysiology", time: "01:00 – 02:00", room: "SLT-3" },
      { subject: "Medicinal Chem", time: "03:00 – 04:00", room: "SLT-1" }
    ],
    "Friday": [
      { subject: "Pharmaceutics Lab", time: "09:00 – 12:00", room: "Lab-P1" },
      { subject: "Microbiology", time: "02:00 – 03:00", room: "SLT-2" }
    ]
  },

  // --- LAW ---
  "Law": {
    "Monday": [
      { subject: "Constitutional Law", time: "10:00 – 11:00", room: "Law-Hall 1" },
      { subject: "Law of Torts", time: "12:00 – 01:00", room: "Room-5" }
    ],
    "Tuesday": [
      { subject: "Family Law I", time: "11:00 – 12:00", room: "Room-5" },
      { subject: "Contract Law", time: "02:00 – 03:00", room: "Law-Hall 1" }
    ],
    "Wednesday": [
      { subject: "Criminal Law (IPC)", time: "09:00 – 10:00", room: "Room-2" },
      { subject: "Legal History", time: "11:00 – 12:00", room: "Room-2" }
    ],
    "Thursday": [
      { subject: "Property Law", time: "02:00 – 03:00", room: "Room-6" },
      { subject: "Environmental Law", time: "03:00 – 04:00", room: "Room-6" }
    ],
    "Friday": [
      { subject: "Moot Court Practice", time: "02:00 – 05:00", room: "Moot Court Hall" }
    ]
  }
};