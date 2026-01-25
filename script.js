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
   CHATBOT – FINAL STABLE VERSION
================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById("chatbot");
  const icon = document.getElementById("chatbot-icon");
  const chatBody = document.getElementById("chat-body");
  const input = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  const optionsBtn = document.getElementById("optionsBtn");
  const optionsMenu = document.getElementById("optionsMenu");

  if (!chatbot || !icon) return;

  function addMessage(type, text) {
    const div = document.createElement("div");
    div.className = type === "bot" ? "bot-msg" : "user-msg";
    div.innerHTML = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function respond(q) {
    if (!window.portfolioData) {
      addMessage("bot", "Data loading, please try again.");
      return;
    }

    const query = q.toLowerCase();
    let res = portfolioData.summary;

    if (query.includes("skill")) res = portfolioData.skills.join("<br>");
    else if (query.includes("experience")) res = portfolioData.experience;
    else if (query.includes("project")) res = portfolioData.projects.join("<br>");
    else if (query.includes("certificate")) res = portfolioData.certificates.join("<br>");
    else if (query.includes("mail")) res = portfolioData.contact.email;
    else if (query.includes("linkedin"))
      res = `<a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a>`;

    setTimeout(() => addMessage("bot", res), 200);
  }

  /* Toggle chatbot */
  icon.onclick = (e) => {
    e.stopPropagation();
    chatbot.classList.toggle("hidden");

    if (!chatbot.classList.contains("hidden") && chatBody.innerHTML === "") {
      addMessage("bot", "👋 Hi! Ask me about Tayyab’s skills, projects, or experience.");
    }
  };

  chatbot.onclick = (e) => e.stopPropagation();

  document.onclick = () => {
    chatbot.classList.add("hidden");
    optionsMenu.classList.add("hidden");
  };

  sendBtn.onclick = () => {
    if (!input.value.trim()) return;
    addMessage("user", input.value);
    respond(input.value);
    input.value = "";
  };

  input.onkeydown = (e) => {
    if (e.key === "Enter") sendBtn.click();
  };

  optionsBtn.onclick = (e) => {
    e.stopPropagation();
    optionsMenu.classList.toggle("hidden");
  };

  optionsMenu.onclick = (e) => {
    if (e.target.classList.contains("option-item")) {
      addMessage("user", e.target.innerText);
      respond(e.target.innerText);
      optionsMenu.classList.add("hidden");
    }
  };
});
