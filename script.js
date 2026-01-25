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
   CHATBOT – FINAL FIXED VERSION (REFERENCE MATCHED)
================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById("chatbot");
  const icon = document.getElementById("chatbot-icon");
  const chatBody = document.getElementById("chat-body");
  const input = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");
  const optionsBtn = document.getElementById("optionsBtn");

  if (!chatbot || !icon || !chatBody) return;

  /* ---------- helpers ---------- */
  function addMessage(type, text) {
    const div = document.createElement("div");
    div.className = type === "bot" ? "bot-msg" : "user-msg";
    div.innerHTML = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function respond(q) {
    if (!window.portfolioData) {
      addMessage("bot", "Data is loading. Please try again.");
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
      res = `<a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn Profile</a>`;

    setTimeout(() => addMessage("bot", res), 200);
  }

  /* ---------- chatbot toggle ---------- */
  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    chatbot.classList.toggle("hidden");

    if (!chatbot.classList.contains("hidden") && chatBody.innerHTML === "") {
      addMessage(
        "bot",
        "👋 <b>Hi!</b> I’m Tayyab’s AI Assistant.<br>Ask me about his skills, projects, experience, or certifications."
      );
    }
  });

  chatbot.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("click", () => {
    chatbot.classList.add("hidden");
  });

  /* ---------- send message ---------- */
  sendBtn?.addEventListener("click", () => {
    if (!input.value.trim()) return;
    addMessage("user", input.value);
    respond(input.value);
    input.value = "";
  });

  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });

  /* ---------- options as chat buttons ---------- */
  optionsBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    showChatOptions();
  });

  function showChatOptions() {
    const options = [
      "About",
      "Skills",
      "Experience",
      "Projects",
      "Certificates",
      "Mail ID",
      "LinkedIn ID"
    ];

    const wrapper = document.createElement("div");
    wrapper.className = "chat-options";

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "chat-option";
      btn.innerText = opt;

      btn.onclick = () => {
        addMessage("user", opt);
        respond(opt);
        wrapper.remove();
      };

      wrapper.appendChild(btn);
    });

    chatBody.appendChild(wrapper);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});
