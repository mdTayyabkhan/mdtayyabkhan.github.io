alert("script.js loaded");

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     SAFE SELECTORS
  ========================== */
  const chatbotIcon = document.getElementById("chatbot-icon");
  const chatbot = document.getElementById("chatbot");
  const chatBody = document.getElementById("chat-body");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const optionsBtn = document.getElementById("optionsBtn");
  const optionsMenu = document.getElementById("optionsMenu");

  /* ==========================
     PROJECT MODAL — HARD FIX
  ========================== */
  window.openProjectInfoModal = function (projectId) {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalBody = document.getElementById("modalBody");

    if (!modalOverlay || !modalBody) {
      alert("Modal structure missing");
      return;
    }

    if (!window.projectDetails || !projectDetails[projectId]) {
      modalBody.innerHTML = "<p>Project details unavailable.</p>";
    } else {
      const p = projectDetails[projectId];
      modalBody.innerHTML = `
        <div style="background:#020617;color:#e5e7eb;padding:30px;border-radius:16px;height:80vh;overflow:auto">
          <h2>${p.title}</h2>
          <p>${p.brief}</p>
          <ul>${p.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
        </div>
      `;
    }

    modalOverlay.classList.remove("hidden");

    /* CLOSE — SUPPORT ID + CLASS */
    modalOverlay.addEventListener("click", (e) => {
      if (
        e.target.id === "modalOverlay" ||
        e.target.classList.contains("modal-close") ||
        e.target.classList.contains("close-modal-btn")
      ) {
        modalOverlay.classList.add("hidden");
        modalBody.innerHTML = "";
      }
    });
  };

  /* ==========================
     CHATBOT CORE
  ========================== */
  function addMessage(sender, text) {
    const div = document.createElement("div");
    div.className = sender === "bot" ? "bot-msg" : "user-msg";
    div.innerHTML = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function respond(query) {
    const q = query.toLowerCase();
    let res = "I can help with Tayyab’s profile, skills, projects, or experience.";

    if (q.includes("about")) res = portfolioData.summary;
    else if (q.includes("education")) res = portfolioData.education;
    else if (q.includes("skills")) res = portfolioData.skills.join("<br>");
    else if (q.includes("experience")) res = portfolioData.experience;
    else if (q.includes("projects")) res = portfolioData.projects.join("<br>");
    else if (q.includes("cert")) res = portfolioData.certificates.join("<br>");
    else if (q.includes("linkedin")) res = `<a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a>`;
    else if (q.includes("github")) res = `<a href="${portfolioData.contact.github}" target="_blank">GitHub</a>`;
    else if (q.includes("mail")) res = portfolioData.contact.email;

    setTimeout(() => addMessage("bot", res), 200);
  }

  chatbotIcon?.addEventListener("click", () => {
    chatbot.classList.toggle("hidden");
    if (!chatbot.classList.contains("hidden") && chatBody.innerHTML === "") {
      addMessage("bot", "👋 Hi! Ask me about Tayyab’s profile.");
    }
  });

  sendBtn?.addEventListener("click", () => {
    if (!userInput.value.trim()) return;
    addMessage("user", userInput.value);
    respond(userInput.value);
    userInput.value = "";
  });

  userInput?.addEventListener("keydown", e => {
    if (e.key === "Enter") sendBtn.click();
  });

  /* ==========================
     CHATBOT OPTIONS — REAL FIX
  ========================== */
  optionsBtn?.addEventListener("click", () => {
    optionsMenu.classList.toggle("hidden");
  });

  optionsMenu?.addEventListener("click", (e) => {
    if (e.target.classList.contains("option-item")) {
      const text = e.target.innerText;
      addMessage("user", text);
      respond(text);
      optionsMenu.classList.add("hidden");
    }
  });

});
