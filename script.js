document.addEventListener("DOMContentLoaded", () => {
  const chatbotIcon = document.getElementById("chatbot-icon");
  const chatbot = document.getElementById("chatbot");
  const chatBody = document.getElementById("chat-body");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const optionsBtn = document.getElementById("optionsBtn");
  const optionsMenu = document.getElementById("optionsMenu");

  // Modal elements (may not exist on every page)
  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");

  /* ========= GSAP ENTRANCE ========= */
  if (window.gsap) {
    gsap.from("#typingName", { duration: 1.1, opacity: 0, x: -25, ease: "power2.out" });
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

  /* ========= MODAL HELPERS ========= */
  window.openProjectModal = (projectId) => {
    if (!modalOverlay || !modalBody || !window.projectDetails) return;
    const details = projectDetails[projectId];
    if (!details) return;

    const pointsHTML = details.points
      .map((p) => `<li class="list-disc list-inside mb-1">${p}</li>`)
      .join("");

    modalBody.innerHTML = `
      <h3 class="text-xl font-semibold mb-3">${details.title}</h3>
      <ul class="mb-4 text-sm leading-relaxed">${pointsHTML}</ul>
      <div class="flex flex-wrap gap-3">
        ${details.datasetUrl && details.datasetUrl !== "#" ? `<a href="${details.datasetUrl}" target="_blank" class="btn-secondary">Dataset</a>` : ""}
        <a href="${details.dashboardUrl}" target="_blank" class="btn-primary">View Dashboard</a>
      </div>
    `;
    modalOverlay.classList.remove("hidden");
  };

  window.openCertModal = (certId) => {
    if (!modalOverlay || !modalBody || !window.certDetails) return;
    const details = certDetails[certId];
    if (!details) return;

    modalBody.innerHTML = `
      <h3 class="text-xl font-semibold mb-3">${details.title}</h3>
      <img src="${details.img}" alt="${details.title}" class="w-full rounded-lg mb-3">
      <p class="mb-3 text-sm opacity-80">${details.issuedBy}</p>
      ${
        details.credentialUrl && details.credentialUrl !== "#"
          ? `<a href="${details.credentialUrl}" target="_blank" class="btn-primary">View Credential</a>`
          : ""
      }
    `;
    modalOverlay.classList.remove("hidden");
  };

  window.closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.add("hidden");
  };

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  /* ========= CHATBOT ========= */
  const addMessage = (sender, text) => {
    if (!chatBody) return;
    const msg = document.createElement("div");
    msg.className = sender === "bot" ? "bot-msg" : "user-msg";
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const handleChatbotResponse = (query) => {
    const lowerQuery = query.toLowerCase().trim();
    let response = "I can answer questions about Mohammad Tayyab Khan. Try one of the quick options below.";

    if (lowerQuery.includes("about") || lowerQuery.includes("yourself")) {
      response = portfolioData.summary;
    } else if (lowerQuery.includes("education")) {
      response = portfolioData.education;
    } else if (lowerQuery.includes("skills")) {
      response = "Tayyab's skills include: " + portfolioData.skills.join(", ") + ".";
    } else if (lowerQuery.includes("experience")) {
      response = portfolioData.experience;
    } else if (
      lowerQuery.includes("internship") ||
      lowerQuery.includes("roles") ||
      lowerQuery.includes("responsibilities")
    ) {
      response =
        "During the internship at AIvariant, responsibilities included analyzing large datasets, automating reports, and working closely with the data team to improve accuracy and efficiency.";
    } else if (lowerQuery.includes("projects")) {
      response = "Key projects: " + portfolioData.projects.join(", ") + ". You can explore them on the Projects page.";
    } else if (lowerQuery.includes("certificates")) {
      response = "Certificates: " + portfolioData.certificates.join(", ") + ".";
    } else if (lowerQuery.includes("mail") || lowerQuery.includes("email")) {
      response = `You can email Tayyab at: <a href="mailto:${portfolioData.contact.email}" class="underline">${portfolioData.contact.email}</a>`;
    } else if (lowerQuery.includes("linkedin")) {
      response = `Here is the LinkedIn profile: <a href="${portfolioData.contact.linkedin}" target="_blank" class="underline">Open LinkedIn</a>`;
    } else if (lowerQuery.includes("github")) {
      response = `GitHub: <a href="${portfolioData.contact.github}" target="_blank" class="underline">View GitHub</a>`;
    } else if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
      response = "Hello! How can I help you learn more about Mohammad Tayyab Khan?";
    }

    setTimeout(() => addMessage("bot", response), 400);
  };

  if (chatbotIcon && chatbot && chatBody) {
    chatbotIcon.addEventListener("click", () => {
      chatbot.classList.toggle("hidden");
      if (!chatbot.classList.contains("hidden")) {
        chatBody.innerHTML = "";
        addMessage("bot", "👋 Welcome to Tayyab’s AI Assistant!");
        addMessage("bot", "What would you like to know about Mohammad Tayyab Khan?");
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
        const query = e.target.textContent;
        addMessage("user", query);
        handleChatbotResponse(query);
        optionsMenu.classList.add("hidden");
      }
    });
  }

  /* ========= CONTACT FORMS (FOOTER + CONTACT PAGE) ========= */
  const handleForm = (formEl, messageEl) => {
    if (!formEl || !messageEl) return;

    formEl.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(formEl);
      const accessKey = formData.get("access_key");

      if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
        messageEl.textContent = "Form access key is not configured.";
        messageEl.style.color = "#fecaca";
        return;
      }

      messageEl.textContent = "Sending...";
      messageEl.style.color = "#e5e7eb";

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.success) {
          messageEl.textContent = "Message sent successfully. Thank you!";
          messageEl.style.color = "#bbf7d0";
          formEl.reset();
        } else {
          messageEl.textContent = "Error: " + (data.message || "Unable to send your message.");
          messageEl.style.color = "#fecaca";
        }
      } catch (err) {
        messageEl.textContent = "Something went wrong. Please try again.";
        messageEl.style.color = "#fecaca";
      }
    });
  };

  const footerForm = document.getElementById("footerContactForm");
  const footerMsg = document.getElementById("footerFormMessage");
  handleForm(footerForm, footerMsg);

  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("contactFormMessage");
  handleForm(contactForm, contactMsg);
});
