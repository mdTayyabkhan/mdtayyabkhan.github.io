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
   CERTIFICATE MODAL (NEW – REQUIRED)
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
   CHATBOT FINAL STABLE LOGIC (ALL PAGES)
================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById("chatbot");
  const chatBody = document.getElementById("chat-body");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const optionsBtn = document.getElementById("optionsBtn");
  const optionsMenu = document.getElementById("optionsMenu");

  const chatbotIcons = document.querySelectorAll(".chatbot-icon");

  if (!chatbot || chatbotIcons.length === 0) return;

  function addMessage(sender, text) {
    const div = document.createElement("div");
    div.className = sender === "bot" ? "bot-msg" : "user-msg";
    div.innerHTML = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function respond(query) {
    if (typeof portfolioData === "undefined") {
      addMessage("bot", "Information is loading, please try again.");
      return;
    }

    const q = query.toLowerCase();
    let res = portfolioData.summary;

    if (q.includes("skill")) res = portfolioData.skills.join("<br>");
    else if (q.includes("experience")) res = portfolioData.experience;
    else if (q.includes("project")) res = portfolioData.projects.join("<br>");
    else if (q.includes("certificate")) res = portfolioData.certificates.join("<br>");
    else if (q.includes("linkedin"))
      res = `<a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn Profile</a>`;
    else if (q.includes("github"))
      res = `<a href="${portfolioData.contact.github}" target="_blank">GitHub Profile</a>`;
    else if (q.includes("mail") || q.includes("email"))
      res = portfolioData.contact.email;

    setTimeout(() => addMessage("bot", res), 200);
  }

  chatbotIcons.forEach(icon => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      chatbot.classList.toggle("hidden");

      if (!chatbot.classList.contains("hidden") && chatBody.innerHTML === "") {
        addMessage(
          "bot",
          "👋 Hi! I’m <b>Tayyab’s AI Assistant</b>.<br>Ask me about his skills, experience, projects, or certifications."
        );
      }
    });
  });

  sendBtn?.addEventListener("click", () => {
    if (!userInput.value.trim()) return;
    addMessage("user", userInput.value);
    respond(userInput.value);
    userInput.value = "";
  });

  userInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });

  optionsBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    optionsMenu.classList.toggle("hidden");
  });

  optionsMenu?.addEventListener("click", (e) => {
    if (e.target.classList.contains("option-item")) {
      addMessage("user", e.target.innerText);
      respond(e.target.innerText);
      optionsMenu.classList.add("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (!chatbot.contains(e.target)) {
      chatbot.classList.add("hidden");
      optionsMenu?.classList.add("hidden");
    }
  });
});
