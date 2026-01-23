/* ==================================================
   GLOBAL SAFETY CHECK
================================================== */
console.log("✅ script.js loaded");

/* ==================================================
   PROJECT / CERTIFICATE MODAL (SAFE)
================================================== */
window.openProjectInfoModal = function (projectId) {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");
  const closeBtn = document.getElementById("closeModal");

  if (!modalOverlay || !modalBody) return;

  if (typeof projectDetails === "undefined") {
    modalBody.innerHTML = "<p style='color:white'>Project data not loaded.</p>";
  } else {
    const p = projectDetails[projectId];
    if (!p) {
      modalBody.innerHTML = "<p style='color:white'>Details not found.</p>";
    } else {
      modalBody.innerHTML = `
        <div style="background:#020617;color:#e5e7eb;padding:28px;border-radius:16px;height:80vh;overflow:auto">
          <h2>${p.title}</h2>
          <p>${p.brief}</p>
          <ul>${p.points.map(pt => `<li>${pt}</li>`).join("")}</ul>
        </div>
      `;
    }
  }

  modalOverlay.classList.remove("hidden");

  // Close by clicking overlay
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) closeModal();
  };

  // Close button
  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }

  function closeModal() {
    modalOverlay.classList.add("hidden");
    modalBody.innerHTML = "";
  }
};

/* ==================================================
   CHATBOT SYSTEM (SAFE GUARDS ADDED)
================================================== */
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbot = document.getElementById("chatbot");
const chatBody = document.getElementById("chat-body");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const optionsBtn = document.getElementById("optionsBtn");
const optionsMenu = document.getElementById("optionsMenu");

if (chatbotIcon && chatbot && chatBody && sendBtn && userInput) {

  function addMessage(sender, text) {
    const div = document.createElement("div");
    div.className = sender === "bot" ? "bot-msg" : "user-msg";
    div.innerHTML = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function respond(query) {
    if (typeof portfolioData === "undefined") {
      addMessage("bot", "Data not loaded yet.");
      return;
    }

    const q = query.toLowerCase();
    let res = portfolioData.summary;

    if (q.includes("skills")) res = portfolioData.skills.join("<br>");
    else if (q.includes("experience")) res = portfolioData.experience;
    else if (q.includes("projects")) res = portfolioData.projects.join("<br>");
    else if (q.includes("cert")) res = portfolioData.certificates.join("<br>");
    else if (q.includes("linkedin"))
      res = `<a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a>`;
    else if (q.includes("github"))
      res = `<a href="${portfolioData.contact.github}" target="_blank">GitHub</a>`;
    else if (q.includes("mail"))
      res = portfolioData.contact.email;

    setTimeout(() => addMessage("bot", res), 200);
  }

  chatbotIcon.onclick = () => {
    chatbot.classList.toggle("hidden");
    if (!chatbot.classList.contains("hidden") && chatBody.innerHTML === "") {
      addMessage("bot", "👋 Hi! Ask me about Tayyab.");
    }
  };

  sendBtn.onclick = () => {
    if (!userInput.value.trim()) return;
    addMessage("user", userInput.value);
    respond(userInput.value);
    userInput.value = "";
  };

  userInput.onkeydown = (e) => {
    if (e.key === "Enter") sendBtn.click();
  };

  /* ==================================================
     CHATBOT OPTIONS (SAFE)
  ================================================== */
  if (optionsBtn && optionsMenu) {
    optionsBtn.onclick = () => {
      optionsMenu.classList.toggle("hidden");
    };

    optionsMenu.onclick = (e) => {
      if (e.target.classList.contains("option-item")) {
        addMessage("user", e.target.innerText);
        respond(e.target.innerText);
        optionsMenu.classList.add("hidden");
      }
    };
  }
}
