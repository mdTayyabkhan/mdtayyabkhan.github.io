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
        PROJECT POPUPS
  ========================== */
  window.openProjectModal = (projectId) => {
    const popup = window.open("", "_blank", "width=900,height=800,scrollbars=yes,resizable=yes");

    const styles = `
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          padding: 40px;
          background: #f9fafb;
          color: #1e293b;
          line-height: 1.7;
        }
        h2 { color: #1e40af; margin-bottom: 10px; }
        h3 { color: #334155; margin-top: 20px; margin-bottom: 8px; }
        ul { margin-top: 10px; padding-left: 22px; }
        li { margin-bottom: 10px; }
        button {
          margin-top: 25px;
          background: #1e40af;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 15px;
        }
        button:hover { background: #3749d8; }
      </style>
    `;

    let content = "";

    if (projectId === "project1") {
      content = `
        <h2>📊 Stock Market Analytics Dashboard</h2>
        <p>A Power BI dashboard analyzing multi-year stock data.</p>
        <ul>
          <li>Sector-wise movement analysis</li>
          <li>Volatility & ROI using DAX</li>
          <li>Interactive trend visuals</li>
        </ul>
      `;
    }

    popup.document.write(`
      <html>
        <head><title>Project Info</title>${styles}</head>
        <body>${content}<br><button onclick="window.close()">Close Window</button></body>
      </html>
    `);

    popup.document.close();
  };

  /* ==========================
        CERTIFICATE POPUPS
  ========================== */
  window.openCertModal = (certId) => {
    const popup = window.open("", "_blank", "width=900,height=800,scrollbars=yes,resizable=yes");
    popup.document.write("<h2>Certificate Info</h2>");
    popup.document.close();
  };

  /* ==========================
     DASHBOARD MODAL (PROJECT 1)
  ========================== */
  window.openDashboardModal = () => {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
      <iframe
        src="https://earnest-madeleine-db8a20.netlify.app/"
        style="width:100%; height:75vh; border:none; border-radius:12px;"
        loading="lazy"
      ></iframe>
    `;

    modalOverlay.classList.remove("hidden");
  };

  /* ✅ FIX: SAFE CLOSE BUTTON HANDLER */
  const closeBtn = document.getElementById("closeModal");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.getElementById("modalOverlay").classList.add("hidden");
      document.getElementById("modalBody").innerHTML = "";
    });
  }

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
    else if (q.includes("skills")) response = portfolioData.skills.join(", ");

    setTimeout(() => addMessage("bot", response), 300);
  };

  chatbotIcon.addEventListener("click", () => {
    chatbot.classList.toggle("hidden");
    if (!chatbot.classList.contains("hidden")) {
      chatBody.innerHTML = "";
      addMessage("bot", "👋 Welcome to Tayyab’s AI Assistant!");
    }
  });

  sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (!text) return;
    addMessage("user", text);
    userInput.value = "";
    handleChatbotResponse(text);
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

      if (result.success) {
        footerFormMessage.textContent = "✅ Message sent successfully!";
        footerFormMessage.style.color = "#22c55e";
        footerForm.reset();
      }
    } catch {
      footerFormMessage.textContent = "⚠️ Server unavailable.";
      footerFormMessage.style.color = "#ef4444";
    }
  });
}
