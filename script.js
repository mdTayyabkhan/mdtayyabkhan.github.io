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

  if (typeof certDetails === "undefined") {
    modalBody.innerHTML = "<p style='color:white'>Certificate data not loaded.</p>";
  } else {
    const c = certDetails[certId];
    modalBody.innerHTML = `
      <div style="background:#020617;color:#e5e7eb;padding:28px;border-radius:16px;height:80vh;overflow:auto">
        <h2>${c.title}</h2>
        <p>${c.brief}</p>
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
   CHATBOT LOGIC – SAFE, FINAL & DYNAMIC
================================================== */
document.addEventListener("DOMContentLoaded", () => {

  const chatBody = document.getElementById("chatBody");
  const optionsPanel = document.getElementById("optionsPanel");
  const typingIndicator = document.getElementById("typingIndicator");
  const input = document.getElementById("userInput");
  const chatbotIcon = document.getElementById("chatbotIcon");
  const chatbotPopup = document.getElementById("chatbotPopup");

  if (!chatbotIcon || !chatbotPopup || !chatBody || !input) {
    console.warn("❌ Chatbot elements missing in DOM");
    return;
  }

  /* ===============================
     DYNAMIC RESPONSE ENGINE
  =============================== */
  function getDynamicResponse(query) {
    const q = query.toLowerCase();

    /* CONTACT */
    if (q.includes("email") || q.includes("mail")) {
      return `📧 Email: <a href="mailto:${portfolioData.contact.email}">
        ${portfolioData.contact.email}</a>`;
    }

    if (q.includes("linkedin")) {
      return `🔗 LinkedIn: <a href="${portfolioData.contact.linkedin}" target="_blank">
        View Profile</a>`;
    }

    if (q.includes("github")) {
      return `🐙 GitHub: <a href="${portfolioData.contact.github}" target="_blank">
        View Projects</a>`;
    }

    if (q.includes("contact")) {
      return `
        📧 <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a><br>
        🔗 <a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a><br>
        🐙 <a href="${portfolioData.contact.github}" target="_blank">GitHub</a>
      `;
    }

    /* ABOUT / SUMMARY */
    if (q.includes("about") || q.includes("yourself") || q.includes("summary")) {
      return portfolioData.summary;
    }

    /* SKILLS */
    if (q.includes("skill")) {
      return `🛠 Skills:<br>• ${portfolioData.skills.join("<br>• ")}`;
    }

    /* EXPERIENCE / INTERNSHIP */
    if (q.includes("experience") || q.includes("internship")) {
      return portfolioData.experience;
    }

    /* PROJECTS */
    if (q.includes("project")) {
      return `📊 Projects:<br>• ${portfolioData.projects.join("<br>• ")}`;
    }

    /* CERTIFICATES */
    if (q.includes("certificate") || q.includes("certification")) {
      return `🎓 Certifications:<br>• ${portfolioData.certificates.join("<br>• ")}`;
    }

    /* RESUME */
    if (q.includes("resume") || q.includes("cv")) {
      return `📄 <a href="resume.pdf" target="_blank">Download Resume</a>`;
    }

    return "That’s a great question. I’d be happy to discuss this in detail during an interview.";
  }

  /* ===============================
     CHAT FUNCTIONS
  =============================== */
  function addUserMsg(text) {
    const div = document.createElement("div");
    div.className = "user-msg";
    div.innerText = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function respond(query) {
    if (typingIndicator) typingIndicator.style.display = "block";

    setTimeout(() => {
      if (typingIndicator) typingIndicator.style.display = "none";

      const reply = getDynamicResponse(query);

      const div = document.createElement("div");
      div.className = "bot-msg";
      div.innerHTML = reply;
      chatBody.appendChild(div);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 700);
  }

  window.sendMessage = function () {
    const text = input.value.trim();
    if (!text) return;
    addUserMsg(text);
    input.value = "";
    respond(text.toLowerCase());
  };

  window.sendQuick = function (text) {
    addUserMsg(text);
    respond(text.toLowerCase());
    if (optionsPanel) optionsPanel.style.display = "none";
  };

  window.toggleOptions = function () {
    if (!optionsPanel) return;
    optionsPanel.style.display =
      optionsPanel.style.display === "block" ? "none" : "block";
  };

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") window.sendMessage();
  });

  /* ===============================
     CHATBOT TOGGLE
  =============================== */
  chatbotIcon.addEventListener("click", e => {
    e.stopPropagation();
    chatbotPopup.classList.toggle("open");
  });

  document.addEventListener("click", e => {
    if (
      !chatbotPopup.contains(e.target) &&
      !chatbotIcon.contains(e.target)
    ) {
      chatbotPopup.classList.remove("open");
      if (optionsPanel) optionsPanel.style.display = "none";
    }
  });

});
