/* ==================================================
   GLOBAL LOAD CHECK
================================================== */
console.log("✅ script.js loaded successfully");

/* ==================================================
   MODAL SYSTEM (PROJECTS + CERTIFICATES)
================================================== */
window.openProjectInfoModal = function (id) {
  const overlay = document.getElementById("modalOverlay");
  const body = document.getElementById("modalBody");
  const closeBtn = document.getElementById("closeModal");

  if (!overlay || !body) return;

  body.innerHTML = "";

  if (typeof projectDetails !== "undefined" && projectDetails[id]) {
    const d = projectDetails[id];
    body.innerHTML = `
      <div style="padding:24px;color:#e5e7eb">
        <h2 style="margin-bottom:12px">${d.title}</h2>
        <p>${d.brief}</p>
        <ul>${d.points.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>
    `;
  } else {
    body.innerHTML = "<p style='color:white'>Details not available.</p>";
  }

  overlay.classList.remove("hidden");

  const close = () => {
    overlay.classList.add("hidden");
    body.innerHTML = "";
  };

  overlay.onclick = e => e.target === overlay && close();
  closeBtn && (closeBtn.onclick = close);
};

/* ==================================================
   CHATBOT SYSTEM — SINGLE SOURCE OF TRUTH
================================================== */
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbot = document.getElementById("chatbot");
const chatBody = document.getElementById("chat-body");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const optionsBtn = document.getElementById("optionsBtn");
const optionsMenu = document.getElementById("optionsMenu");

if (chatbotIcon && chatbot && chatBody) {

  const addMessage = (sender, text) => {
    const div = document.createElement("div");
    div.className = sender === "bot" ? "bot-msg" : "user-msg";
    div.innerHTML = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const respond = (query) => {
    if (typeof portfolioData === "undefined") {
      addMessage("bot", "Data not available.");
      return;
    }

    const q = query.toLowerCase();
    let res = portfolioData.summary;

    if (q.includes("skills")) res = portfolioData.skills.join("<br>");
    else if (q.includes("experience")) res = portfolioData.experience;
    else if (q.includes("projects")) res = portfolioData.projects.join("<br>");
    else if (q.includes("cert")) res = portfolioData.certificates.join("<br>");
    else if (q.includes("linkedin")) res = `<a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a>`;
    else if (q.includes("github")) res = `<a href="${portfolioData.contact.github}" target="_blank">GitHub</a>`;
    else if (q.includes("mail")) res = portfolioData.contact.email;

    setTimeout(() => addMessage("bot", res), 200);
  };

  chatbotIcon.addEventListener("click", e => {
    e.stopPropagation();
    chatbot.classList.toggle("hidden");

    if (!chatbot.classList.contains("hidden") && chatBody.innerHTML === "") {
      addMessage(
        "bot",
        "👋 Hi, this is <b>Tayyab’s AI Assistant</b>.<br>What would you like to know?"
      );
    }
  });

  sendBtn && sendBtn.addEventListener("click", () => {
    if (!userInput.value.trim()) return;
    addMessage("user", userInput.value);
    respond(userInput.value);
    userInput.value = "";
  });

  userInput && userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") sendBtn.click();
  });

  optionsBtn && optionsBtn.addEventListener("click", e => {
    e.stopPropagation();
    optionsMenu.classList.toggle("hidden");
  });

  optionsMenu && optionsMenu.addEventListener("click", e => {
    if (e.target.classList.contains("option-item")) {
      addMessage("user", e.target.innerText);
      respond(e.target.innerText);
      optionsMenu.classList.add("hidden");
    }
  });

  document.addEventListener("click", e => {
    if (!chatbot.contains(e.target) && !chatbotIcon.contains(e.target)) {
      chatbot.classList.add("hidden");
      optionsMenu && optionsMenu.classList.add("hidden");
    }
  });
}
