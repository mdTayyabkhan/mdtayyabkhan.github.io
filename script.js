document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     QUERY SELECTORS (CHATBOT + MODAL + NAV)
  ===================================================== */
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

  /* =====================================================
     GSAP ANIMATIONS
  ===================================================== */
  if (window.gsap) {
    gsap.from("#typingName", {
      duration: 1.1,
      opacity: 0,
      x: -25,
      ease: "power2.out",
    });

    gsap.from("#navLinks li", {
      duration: 0.9,
      opacity: 0,
      y: -15,
      stagger: 0.08,
      delay: 0.2,
      ease: "power2.out",
    });

    gsap.from(".about-card, .content-card", {
      duration: 1,
      opacity: 0,
      y: 30,
      delay: 0.35,
      ease: "power2.out",
    });
  }

  /* =====================================================
     MODAL — PROJECTS + CERTIFICATES
     (Shows text only — no images)
  ===================================================== */

  // ⭐ PROJECT MODAL
  /* =====================================================
   FIXED MODAL — PROJECTS + CERTIFICATES
===================================================== */
window.openProjectModal = (projectId) => {
  const details = projectDetails[projectId];
  if (!details) return;

  modalBody.innerHTML = `
      <h3 class="text-2xl font-bold mb-3">${details.title}</h3>
      <p class="text-base leading-relaxed mb-4">${details.brief}</p>

      <button class="btn-primary w-full mt-3" onclick="closeModal()">Close</button>
  `;

  modalOverlay.classList.remove("hidden");
};

window.openCertModal = (certId) => {
  const details = certDetails[certId];
  if (!details) return;

  modalBody.innerHTML = `
      <h3 class="text-2xl font-bold mb-3">${details.title}</h3>
      <p class="text-base leading-relaxed mb-4">${details.brief}</p>

      <button class="btn-primary w-full mt-3" onclick="closeModal()">Close</button>
  `;

  modalOverlay.classList.remove("hidden");
};

// Close modal by clicking X
closeModalBtn?.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

// Close modal by clicking outside
modalOverlay?.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.add("hidden");
});

// Close function for button inside popup
window.closeModal = () => modalOverlay.classList.add("hidden");

  // Close modal (button)
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modalOverlay.classList.add("hidden");
    });
  }

  // Close modal (click outside)
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target.id === "modalOverlay") {
        modalOverlay.classList.add("hidden");
      }
    });
  }

  /* =====================================================
     CHATBOT SYSTEM
  ===================================================== */

  const addMessage = (sender, text) => {
    if (!chatBody) return;
    const msg = document.createElement("div");
    msg.className = sender === "bot" ? "bot-msg" : "user-msg";
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleChatbotResponse = (query) => {
    const q = query.toLowerCase();
    let response = "I can answer questions about Mohammad Tayyab Khan. Try a quick option.";

    if (q.includes("about")) response = portfolioData.summary;
    else if (q.includes("education")) response = portfolioData.education;
    else if (q.includes("skills")) response = portfolioData.skills.join(", ");
    else if (q.includes("experience")) response = portfolioData.experience;
    else if (q.includes("projects")) response = portfolioData.projects.join(", ");
    else if (q.includes("cert")) response = portfolioData.certificates.join(", ");
    else if (q.includes("linkedin"))
      response = `<a href="${portfolioData.contact.linkedin}" target="_blank" class="underline">LinkedIn Profile</a>`;
    else if (q.includes("github"))
      response = `<a href="${portfolioData.contact.github}" target="_blank" class="underline">GitHub Profile</a>`;
    else if (q.includes("mail") || q.includes("email"))
      response = `<a href="mailto:${portfolioData.contact.email}" class="underline">${portfolioData.contact.email}</a>`;
    else if (q.includes("hi") || q.includes("hello"))
      response = "Hello! How can I help you today?";

    setTimeout(() => addMessage("bot", response), 400);
  };

  if (chatbotIcon && chatbot) {
    chatbotIcon.addEventListener("click", () => {
      chatbot.classList.toggle("hidden");
      if (!chatbot.classList.contains("hidden")) {
        chatBody.innerHTML = "";
        addMessage("bot", "👋 Welcome to Tayyab’s AI Assistant!");
        addMessage("bot", "Ask me anything about Mohammad Tayyab Khan.");
      }
    });
  }

  if (sendBtn && userInput) {
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
  }

  if (optionsBtn && optionsMenu) {
    optionsBtn.addEventListener("click", () => {
      optionsMenu.classList.toggle("hidden");
    });

    optionsMenu.addEventListener("click", (e) => {
      if (e.target.classList.contains("option-item")) {
        addMessage("user", e.target.textContent);
        handleChatbotResponse(e.target.textContent);
        optionsMenu.classList.add("hidden");
      }
    });
  }

  /* =====================================================
     CONTACT FORMS — FOOTER & CONTACT PAGE
  ===================================================== */
  const handleForm = (formEl, messageEl) => {
    if (!formEl || !messageEl) return;

    formEl.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(formEl);

      messageEl.textContent = "Sending...";
      messageEl.style.color = "#d9e4ff";

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.success) {
          messageEl.textContent = "Message sent successfully!";
          messageEl.style.color = "#bbf7d0";
          formEl.reset();
        } else {
          messageEl.textContent = "Error: " + data.message;
          messageEl.style.color = "#ff9f9f";
        }
      } catch (err) {
        messageEl.textContent = "Something went wrong.";
        messageEl.style.color = "#ff9f9f";
      }
    });
  };

  handleForm(
    document.getElementById("footerContactForm"),
    document.getElementById("footerFormMessage")
  );

  handleForm(
    document.getElementById("contactForm"),
    document.getElementById("contactFormMessage")
  );
});
