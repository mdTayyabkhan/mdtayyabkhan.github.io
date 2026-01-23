document.addEventListener("DOMContentLoaded", () => {
  /* ==========================
        SELECTORS
  ========================== */
  const chatbotIcon = document.getElementById("chatbot-icon");
  const chatbot = document.getElementById("chatbot");
  const chatBody = document.getElementById("chat-body");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const optionsBtn = document.getElementById("optionsBtn");
  const optionsMenu = document.getElementById("optionsMenu");

  /* ==========================
     PROJECT INFO MODAL (DATA-DRIVEN)
  ========================== */
  window.openProjectInfoModal = (projectId) => {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.getElementById("closeModal");

    const project = projectDetails[projectId];
    if (!project) return;

    modalBody.innerHTML = `
      <div style="
        background:#020617;
        color:#e5e7eb;
        padding:32px;
        border-radius:18px;
        width:100%;
        height:85vh;
        overflow-y:auto;
      ">
        <div style="max-width:1000px; margin:auto;">
          <h2 style="font-size:1.9rem; margin-bottom:10px;">
            ${project.title}
          </h2>

          <p style="opacity:0.9; margin-bottom:18px;">
            ${project.brief}
          </p>

          <h3 style="margin-bottom:8px; font-weight:600;">
            Key Insights & Business Focus
          </h3>

          <ul style="padding-left:20px; line-height:1.7;">
            ${project.points.map(point => `<li>${point}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;

    modalOverlay.classList.remove("hidden");

    closeBtn.onclick = () => {
      modalOverlay.classList.add("hidden");
      modalBody.innerHTML = "";
    };
  };

  /* ==========================
        CERTIFICATE POPUPS (UNCHANGED UX)
  ========================== */
  window.openCertModal = (certId) => {
    const cert = certDetails[certId];
    if (!cert) return;

    const popup = window.open(
      "",
      "_blank",
      "width=900,height=800,scrollbars=yes,resizable=yes"
    );

    popup.document.write(`
      <html>
        <head>
          <style>
            body {
              font-family: 'Poppins', sans-serif;
              padding: 40px;
              background: #f9fafb;
              color: #1e293b;
              line-height: 1.7;
            }
            h2 { color: #1e40af; margin-bottom: 10px; }
            button {
              margin-top: 25px;
              background: #1e40af;
              color: white;
              border: none;
              padding: 10px 18px;
              border-radius: 8px;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <h2>${cert.title}</h2>
          <p>${cert.brief}</p>
          <button onclick="window.close()">Close</button>
        </body>
      </html>
    `);

    popup.document.close();
  };

  /* ==========================
        CHATBOT SYSTEM (RECRUITER-GRADE)
  ========================== */
  const addMessage = (sender, text) => {
    const msg = document.createElement("div");
    msg.className = sender === "bot" ? "bot-msg" : "user-msg";
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const formatList = (title, items) => `
    <strong>${title}</strong>
    <ul style="margin-top:6px; padding-left:18px;">
      ${items.map(i => `<li>${i}</li>`).join("")}
    </ul>
  `;

  const handleChatbotResponse = (query) => {
    const q = query.toLowerCase();
    let response =
      "I can help with information about Tayyab’s background, skills, experience, and projects.";

    if (q.includes("about") || q.includes("summary"))
      response = portfolioData.summary;

    else if (q.includes("education"))
      response = portfolioData.education;

    else if (q.includes("skills"))
      response = formatList("Key Skills", portfolioData.skills);

    else if (q.includes("experience"))
      response = portfolioData.experience;

    else if (q.includes("projects"))
      response = formatList("Projects", portfolioData.projects);

    else if (q.includes("cert"))
      response = formatList("Certifications", portfolioData.certificates);

    else if (q.includes("linkedin"))
      response = `<a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn Profile</a>`;

    else if (q.includes("github"))
      response = `<a href="${portfolioData.contact.github}" target="_blank">GitHub Profile</a>`;

    else if (q.includes("mail") || q.includes("email"))
      response = `<a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a>`;

    setTimeout(() => addMessage("bot", response), 300);
  };

  chatbotIcon.addEventListener("click", () => {
    chatbot.classList.toggle("hidden");

    if (!chatbot.classList.contains("hidden") && chatBody.innerHTML === "") {
      addMessage("bot", "👋 Hi! I can answer questions about Tayyab’s profile and projects.");
    }
  });

  sendBtn.addEventListener("click", () => {
    if (!userInput.value.trim()) return;
    addMessage("user", userInput.value);
    handleChatbotResponse(userInput.value);
    userInput.value = "";
  });

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });

  optionsBtn.addEventListener("click", () => {
    optionsMenu.classList.toggle("hidden");
  });
});

/* ==========================
   FOOTER FORM (UNCHANGED)
========================== */
const footerForm = document.getElementById("footerContactForm");
const footerFormMessage = document.getElementById("footerFormMessage");

if (footerForm) {
  footerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    footerFormMessage.textContent = "⏳ Sending...";
    footerFormMessage.style.color = "#fbbf24";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(footerForm),
      });
      const result = await response.json();

      footerFormMessage.textContent = result.success
        ? "✅ Message sent successfully!"
        : "❌ Failed to send message.";
      footerFormMessage.style.color = result.success ? "#22c55e" : "#ef4444";

      if (result.success) footerForm.reset();
    } catch {
      footerFormMessage.textContent = "⚠️ Server error. Try again.";
      footerFormMessage.style.color = "#ef4444";
    }
  });
}
