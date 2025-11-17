document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     QUERY SELECTORS
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
    gsap.from("#typingName", { duration: 1.1, opacity: 0, x: -25, ease: "power2.out" });
    gsap.from("#navLinks li", {
      duration: 0.9, opacity: 0, y: -15, stagger: 0.08, delay: 0.2, ease: "power2.out"
    });
    gsap.from(".about-card, .content-card", {
      duration: 1, opacity: 0, y: 30, delay: 0.35, ease: "power2.out"
    });
  }

  /* =====================================================
     FIXED UNIFIED MODAL HANDLER
  ===================================================== */

  function openModal(title, description) {
    modalBody.innerHTML = `
      <h3 class="modal-title">${title}</h3>
      <p class="modal-desc">${description}</p>
      <button class="btn-primary w-full mt-3" onclick="closeModal()">Close</button>
    `;
    modalOverlay.classList.remove("hidden");
  }

  window.openProjectModal = (id) => {
    const d = projectDetails[id];
    if (!d) return;
    const brief = (d.brief || d.points?.join("<br>") || "Details not available.");
    openModal(d.title, brief);
  };

  window.openCertModal = (id) => {
    const d = certDetails[id];
    if (!d) return;
    const brief = (d.brief || d.issuedBy || "Details not available.");
    openModal(d.title, brief);
  };

  window.closeModal = () => modalOverlay?.classList.add("hidden");

  closeModalBtn?.addEventListener("click", closeModal);

  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  /* =====================================================
     CHATBOT SYSTEM
  ===================================================== */
  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = sender === "bot" ? "bot-msg" : "user-msg";
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleChatbotResponse(query) {
    const q = query.toLowerCase();
    let response = "I can answer questions about Mohammad Tayyab Khan.";

    if (q.includes("about")) response = portfolioData.summary;
    else if (q.includes("education")) response = portfolioData.education;
    else if (q.includes("skills")) response = portfolioData.skills.join(", ");
    else if (q.includes("experience")) response = portfolioData.experience;
    else if (q.includes("projects")) response = portfolioData.projects.join(", ");
    else if (q.includes("cert")) response = portfolioData.certificates.join(", ");
    else if (q.includes("linkedin")) response = `<a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a>`;
    else if (q.includes("github")) response = `<a href="${portfolioData.contact.github}" target="_blank">GitHub</a>`;
    else if (q.includes("mail") || q.includes("email"))
      response = `<a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a>`;
    else if (q.includes("hi") || q.includes("hello"))
      response = "Hello! How can I help you today?";

    setTimeout(() => addMessage("bot", response), 400);
  }

  chatbotIcon?.addEventListener("click", () => {
    chatbot.classList.toggle("hidden");
    if (!chatbot.classList.contains("hidden")) {
      chatBody.innerHTML = "";
      addMessage("bot", "👋 Welcome to Tayyab’s AI Assistant!");
      addMessage("bot", "Ask me anything about Mohammad Tayyab Khan.");
    }
  });

  sendBtn?.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (!text) return;
    addMessage("user", text);
    userInput.value = "";
    handleChatbotResponse(text);
  });

  userInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendBtn.click();
    }
  });

  optionsBtn?.addEventListener("click", () => optionsMenu.classList.toggle("hidden"));

  optionsMenu?.addEventListener("click", (e) => {
    if (e.target.classList.contains("option-item")) {
      addMessage("user", e.target.textContent);
      handleChatbotResponse(e.target.textContent);
      optionsMenu.classList.add("hidden");
    }
  });

  /* =====================================================
     CONTACT FORMS
  ===================================================== */
  function handleForm(form, messageBox) {
    if (!form || !messageBox) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      messageBox.textContent = "Sending…";
      messageBox.style.color = "#fff";

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: new FormData(form),
        });

        const data = await res.json();
        if (data.success) {
          messageBox.textContent = "Message sent successfully!";
          messageBox.style.color = "#bbf7d0";
          form.reset();
        } else {
          messageBox.textContent = "Error: " + data.message;
          messageBox.style.color = "#ff9f9f";
        }
      } catch {
        messageBox.textContent = "Something went wrong.";
        messageBox.style.color = "#ff9f9f";
      }
    });
  }

  handleForm(
    document.getElementById("footerContactForm"),
    document.getElementById("footerFormMessage")
  );

  handleForm(
    document.getElementById("contactForm"),
    document.getElementById("contactFormMessage")
  );

});
