document.addEventListener("DOMContentLoaded", function () {

  // --- 0. SCROLL ANIMATION OBSERVER (The Premium Feel) ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // --- 1. INTEGRATED TIMETABLE DATA ---
  const timetableData = {
    "Computer Science": {
      "Monday": [
        { subject: "Data Structures", time: "09:00 – 10:00", room: "CS-201" },
        { subject: "DBMS", time: "10:15 – 11:15", room: "CS-202" },
        { subject: "Mathematics III", time: "12:00 – 01:00", room: "CS-201" }
      ],
      "Tuesday": [
        { subject: "Operating Systems", time: "09:00 – 10:00", room: "CS-203" },
        { subject: "Web Dev Lab", time: "11:00 – 01:00", room: "Lab-2" }
      ],
      "Wednesday": [
        { subject: "AI Fundamentals", time: "10:00 – 11:30", room: "Auditorium" },
        { subject: "Compiler Design", time: "12:00 – 01:00", room: "CS-204" }
      ],
      "Thursday": [
        { subject: "Computer Networks", time: "09:00 – 10:00", room: "CS-204" },
        { subject: "Algorithms", time: "11:00 – 12:00", room: "CS-201" }
      ],
      "Friday": [
        { subject: "Minor Project", time: "09:00 – 12:00", room: "Lab-1" }
      ]
    },
    "Mechanical Engineering": {
      "Monday": [
        { subject: "Thermodynamics", time: "09:00 – 10:00", room: "ME-101" },
        { subject: "Engineering Mechanics", time: "11:00 – 12:00", room: "ME-103" }
      ],
      "Tuesday": [
        { subject: "Fluid Mechanics", time: "11:00 – 12:30", room: "ME-102" }
      ],
      "Wednesday": [
        { subject: "Workshop Practice", time: "09:00 – 12:00", room: "Workshop-A" }
      ],
      "Thursday": [
        { subject: "AutoCAD Lab", time: "10:00 – 12:00", room: "CAD-Lab" }
      ],
      "Friday": [
        { subject: "Machine Design", time: "09:00 – 11:00", room: "ME-105" }
      ]
    },
    "Electrical Engineering": {
      "Monday": [
        { subject: "Circuit Theory", time: "09:00 – 10:00", room: "EE-201" }
      ],
      "Tuesday": [
        { subject: "Power Systems", time: "10:00 – 11:30", room: "EE-205" }
      ],
      "Wednesday": [
        { subject: "Control Systems", time: "09:00 – 10:00", room: "EE-202" }
      ],
      "Thursday": [
        { subject: "Digital Logic", time: "11:00 – 12:00", room: "Lab-E1" }
      ],
      "Friday": [
        { subject: "Microprocessors", time: "10:00 – 01:00", room: "Lab-E2" }
      ]
    },
    "Civil Engineering": {
      "Monday": [ { subject: "Structural Analysis", time: "10:00 - 11:00", room: "CE-101" } ],
      "Tuesday": [ { subject: "Surveying Lab", time: "02:00 - 04:00", room: "Field" } ],
      "Wednesday": [ { subject: "Concrete Tech", time: "11:00 - 12:00", room: "CE-102" } ],
      "Thursday": [ { subject: "Fluid Mechanics", time: "09:00 - 10:00", room: "CE-103" } ],
      "Friday": [ { subject: "Geotech Eng", time: "10:00 - 11:00", room: "CE-101" } ]
    },
    "Pharmacy": {
      "Monday": [ { subject: "Pharmaceutics", time: "09:00 - 10:00", room: "SLT-1" } ],
      "Tuesday": [ { subject: "Organic Chem", time: "11:00 - 12:00", room: "SLT-2" } ],
      "Wednesday": [ { subject: "Pharmacology", time: "10:00 - 11:00", room: "SLT-1" } ],
      "Thursday": [ { subject: "Anatomy", time: "01:00 - 02:00", room: "SLT-3" } ],
      "Friday": [ { subject: "Lab Work", time: "02:00 - 05:00", room: "Pharma-Lab" } ]
    },
    "Law": {
      "Monday": [ { subject: "Constitutional Law", time: "10:00 - 11:00", room: "Law-Hall" } ],
      "Tuesday": [ { subject: "Family Law", time: "11:00 - 12:00", room: "Room-5" } ],
      "Wednesday": [ { subject: "Criminal Law", time: "09:00 - 10:00", room: "Room-2" } ],
      "Thursday": [ { subject: "Contract Law", time: "02:00 - 03:00", room: "Room-6" } ],
      "Friday": [ { subject: "Moot Court", time: "03:00 - 05:00", room: "Court Room" } ]
    }
  };

  // --- 2. MOBILE MENU ---
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-item");

  if(hamburger) {
    hamburger.addEventListener("click", () => {
        // Simple toggle for the new full-screen menu
        const isActive = navLinks.classList.contains('active');
        if(isActive) {
            navLinks.classList.remove("active");
        } else {
            navLinks.classList.add("active");
        }
    });
  }

  navItems.forEach(item => {
      item.addEventListener("click", () => {
          navLinks.classList.remove("active");
      });
  });

  // --- 3. TIMETABLE RENDERER ---
  const deptSelect = document.getElementById("dept-select");
  const daySelect = document.getElementById("day-select");
  const timetableBody = document.getElementById("timetable-body");

  function renderTimetable() {
    if (!timetableBody || !deptSelect || !daySelect) return;
    timetableBody.innerHTML = "";
    const dept = deptSelect.value;
    const day = daySelect.value;
    const deptData = timetableData[dept];

    if (!deptData) return;
    const classes = deptData[day];

    if (!classes || classes.length === 0) {
      timetableBody.innerHTML = `<tr><td colspan='3' style='text-align:center; padding: 30px; color: #666; letter-spacing: 1px;'>NO SCHEDULED CLASSES</td></tr>`;
      return;
    }

    classes.forEach(c => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${c.subject}</td>
        <td style="color: #fff;">${c.time}</td>
        <td style="color: #666;">${c.room}</td>
      `;
      timetableBody.appendChild(row);
    });
  }

  if (deptSelect && daySelect) {
      deptSelect.addEventListener("change", renderTimetable);
      daySelect.addEventListener("change", renderTimetable);
      renderTimetable();
  }

  // --- 4. AI CHAT ---
  const sendBtn = document.getElementById("send-btn");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  function handleChat() {
    const text = chatInput.value.trim();
    if (!text) return;

    chatMessages.innerHTML += `<div class="message user">${text}</div>`;
    chatInput.value = ""; 
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        let reply = "Insufficient data. Please query specific sectors.";
        const q = text.toLowerCase();

        if (q.includes("cs") || q.includes("computer")) reply = "Sector: CS // Location: IT Building (New).";
        else if (q.includes("mech")) reply = "Sector: Mechanical // Location: Technology Workshop.";
        else if (q.includes("electrical")) reply = "Sector: Electrical // Location: E-Classroom Complex.";
        else if (q.includes("pharmacy")) reply = "Sector: Pharmacy // Location: Institute of Pharmacy.";
        else if (q.includes("law")) reply = "Sector: Law // Location: Near UTD Admin Block.";
        else if (q.includes("class")) reply = "Accessing database... Please verify the schedule grid above.";
        else if (q.includes("hello")) reply = "RouteX System operational. Awaiting command.";

        chatMessages.innerHTML += `<div class="message bot">${reply}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", handleChat);
    chatInput.addEventListener("keypress", (e) => { if (e.key === 'Enter') handleChat(); });
  }

});