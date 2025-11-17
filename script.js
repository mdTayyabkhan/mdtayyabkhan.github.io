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

  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");
  const closeModalBtn = document.getElementById("closeModal");

  /* ==========================
        MODAL SYSTEM
  ========================== */

  window.openProjectModal = (projectId) => {
    const details = projectDetails[projectId];
    if (!details) return;

    modalBody.innerHTML = `
      <h3 class="text-2xl font-bold mb-3">${details.title}</h3>
      <p class="text-base leading-relaxed mb-4">${details.brief}</p>
      <button class="btn-primary" onclick="closeModal()">Close</button>
    `;

    modalOverlay.classList.remove("hidden");
  };

  window.openCertModal = (certId) => {
    const details = certDetails[certId];
    if (!details) return;

    modalBody.innerHTML = `
      <h3 class="text-2xl font-bold mb-3">${details.title}</h3>
      <p class="text-base leading-relaxed mb-4">${details.brief}</p>
      <button class="btn-primary" onclick="closeModal()">Close</button>
    `;

    modalOverlay.classList.remove("hidden");
  };

  window.closeModal = () => {
    modalOverlay.classList.add("hidden");
  };

  // Close with X button
  closeModalBtn?.addEventListener("click", closeModal);

  // Close on background click
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  /* ==========================
        CHATBOT SYSTEM
  ========================== */

  const addMessage = (sender, text) => {
    const msg = document.createElement("div");
    msg.className = sender === "bot" ? "bot-msg" : "user-msg";
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleChatbotResponse = (query) => {
    const q = query.toLowerCase();
    let response = "I can answer questions about Mohammad Tayyab Khan.";

    if (q.includes("about")) response = portfolioData.summary;
    else if (q.includes("education")) response = portfolioData.education;
    else if (q.includes("skills")) response = portfolioData.skills.join(", ");
    else if (q.includes("experience")) response = portfolioData.experience;
    else if (q.includes("projects")) response = portfolioData.projects.join(", ");
    else if (q.includes("cert")) response = portfolioData.certificates.join(", ");
    else if (q.includes("linkedin"))
      response = `<a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn Profile</a>`;
    else if (q.includes("github"))
      response = `<a href="${portfolioData.contact.github}" target="_blank">GitHub Profile</a>`;
    else if (q.includes("mail") || q.includes("email"))
      response = `<a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a>`;
    else if (q.includes("hi") || q.includes("hello"))
      response = "Hello! How can I help you today?";

    setTimeout(() => addMessage("bot", response), 300);
  };

  chatbotIcon.addEventListener("click", () => {
    chatbot.classList.toggle("hidden");

    if (!chatbot.classList.contains("hidden")) {
      chatBody.innerHTML = "";
      addMessage("bot", "👋 Welcome to Tayyab’s AI Assistant!");
      addMessage("bot", "Ask me anything about Mohammad Tayyab Khan.");
    }
  });

  sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage("user", text);
    userInput.value = "";
    handleChatbotResponse(text);
  });

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendBtn.click();
    }
  });

  optionsBtn.addEventListener("click", () => {
    optionsMenu.classList.toggle("hidden");
  });

  optionsMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("option-item")) {
      const text = e.target.textContent;
      addMessage("user", text);
      handleChatbotResponse(text);
      optionsMenu.classList.add("hidden");
    }
  });

});  // <--- Correct final bracket, script ends here
