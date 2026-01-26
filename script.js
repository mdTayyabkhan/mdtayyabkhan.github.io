/* ==================================================
   GLOBAL SAFETY CHECK
================================================== */
console.log("✅ script.js loaded");

/* ==================================================
   PROJECT MODAL
================================================== */
window.openProjectInfoModal = function (projectId) {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");

  if (!modalOverlay || !modalBody) {
    alert("Modal HTML missing");
    return;
  }

  if (typeof projectDetails === "undefined") {
    modalBody.innerHTML = "<p style='color:white'>Project data not loaded.</p>";
  } else {
    const p = projectDetails[projectId];
    modalBody.innerHTML = `
      <div style="background:#020617;color:#e5e7eb;padding:28px;border-radius:16px;height:80vh;overflow:auto">
        <h2>${p.title}</h2>
        <p>${p.brief}</p>
        <ul>${p.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
      </div>
    `;
  }

  modalOverlay.classList.remove("hidden");

  modalOverlay.onclick = (e) => {
    if (
      e.target === modalOverlay ||
      e.target.classList.contains("modal-close") ||
      e.target.classList.contains("close-modal-btn")
    ) {
      modalOverlay.classList.add("hidden");
      modalBody.innerHTML = "";
    }
  };
};

/* ==================================================
   CERTIFICATE MODAL
================================================== */
window.openCertModal = function (certId) {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");

  if (!modalOverlay || !modalBody) {
    alert("Modal HTML missing");
    return;
  }

  if (typeof certificateDetails === "undefined") {
    modalBody.innerHTML = "<p style='color:white'>Certificate data not loaded.</p>";
  } else {
    const c = certificateDetails[certId];
    modalBody.innerHTML = `
      <div style="background:#020617;color:#e5e7eb;padding:28px;border-radius:16px;height:80vh;overflow:auto">
        <h2>${c.title}</h2>
        <p>${c.description}</p>
        ${c.link ? `<a href="${c.link}" target="_blank">View Certificate</a>` : ""}
      </div>
    `;
  }

  modalOverlay.classList.remove("hidden");

  modalOverlay.onclick = (e) => {
    if (
      e.target === modalOverlay ||
      e.target.classList.contains("modal-close") ||
      e.target.classList.contains("close-modal-btn")
    ) {
      modalOverlay.classList.add("hidden");
      modalBody.innerHTML = "";
    }
  };
};

/* ==================================================
   CHATBOT LOGIC (EXISTING)
================================================== */
const chatBody = document.getElementById("chatBody");
const optionsPanel = document.getElementById("optionsPanel");
const typingIndicator = document.getElementById("typingIndicator");
const input = document.getElementById("userInput");

const answers = {
  "tell me about yourself":
    "I am an entry-level Data Analyst with hands-on experience in Excel, SQL, and Power BI, specializing in MIS reporting and business insights.",

  "what are your skills?":
    "SQL, Advanced Excel, Power BI, dashboarding, data cleaning, KPI analysis, MIS reporting.",

  "explain your projects":
    "I have built Sales Analytics and E-commerce dashboards focusing on trends, KPIs, and decision-making. You can view them in the Projects section of this portfolio.",

  "why should we hire you?":
    "I bring strong analytical thinking, accuracy, and the ability to convert raw data into meaningful insights that support business decisions.",

  "do you have internship experience?":
    "Yes, I worked as a Data Analyst Intern handling large datasets, creating MIS reports, and automating recurring reports.",

  "can i download your resume?":
    "You can download my resume here: 👉 <a href='resume.pdf' target='_blank'>Download Resume</a>"
};

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addUserMsg(text);
  input.value = "";
  respond(text.toLowerCase());
}

function sendQuick(text) {
  addUserMsg(text);
  respond(text.toLowerCase());
  optionsPanel.style.display = "none";
}

function addUserMsg(text) {
  const div = document.createElement("div");
  div.className = "user-msg";
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function respond(query) {
  typingIndicator.style.display = "block";

  setTimeout(() => {
    typingIndicator.style.display = "none";

    const reply =
      answers[query] ||
      "That’s a great question. I’d be happy to explain this further during an interview.";

    const div = document.createElement("div");
    div.className = "bot-msg";
    div.innerHTML = reply;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 900);
}

function toggleOptions() {
  optionsPanel.style.display =
    optionsPanel.style.display === "block" ? "none" : "block";
}

input.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

/* ==================================================
   CHATBOT TOGGLE & FLOATING BEHAVIOR (ADDED)
================================================== */
const chatbotIcon = document.getElementById("chatbotIcon");
const chatbotPopup = document.getElementById("chatbotPopup");

if (chatbotIcon && chatbotPopup) {
  chatbotIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    chatbotPopup.style.display =
      chatbotPopup.style.display === "flex" ? "none" : "flex";
  });

  document.addEventListener("click", (e) => {
    if (
      !chatbotPopup.contains(e.target) &&
      !chatbotIcon.contains(e.target)
    ) {
      chatbotPopup.style.display = "none";
      optionsPanel.style.display = "none";
    }
  });
}
