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
   MORE INFO MODAL (PROJECTS)
========================== */
window.openProjectInfoModal = (projectId) => {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");
  const closeBtn = document.getElementById("closeModal");

  let content = "";

  if (projectId === "project1") {
    content = `
      <h2>📊 Stock Market Analytics Dashboard</h2>
      <p>
        A comprehensive analytics dashboard built to analyze multi-year stock
        market data with a focus on volatility, trends, and sector-wise insights.
      </p>
      <ul>
        <li>Sector-wise stock performance analysis</li>
        <li>Volatility & ROI calculations using DAX</li>
        <li>Interactive filters and KPI cards</li>
        <li>Clean executive-friendly layout</li>
      </ul>
    `;
  }

  if (projectId === "project2") {
    content = `
      <h2>🍕 Pizza Sales Analytics</h2>
      <p>
        End-to-end BI solution using SQL for ETL and Power BI for visualization.
      </p>
      <ul>
        <li>SQL-based data extraction & transformation</li>
        <li>Revenue, Orders, AOV KPIs</li>
        <li>Best & low-selling product analysis</li>
        <li>Interactive slicers for business decisions</li>
      </ul>
    `;
  }

  if (projectId === "project3") {
    content = `
      <h2>🛒 Flipkart Sales Analytics Dashboard</h2>
      <p>
        Advanced analytics project focused on revenue, profit, and forecasting.
      </p>
      <ul>
        <li>Profitability & revenue KPIs</li>
        <li>Product and customer-level insights</li>
        <li>Forecasting & what-if analysis</li>
        <li>Target vs achievement tracking</li>
      </ul>
    `;
  }

  modalBody.innerHTML = content;
  modalOverlay.classList.remove("hidden");

  closeBtn.onclick = () => {
    modalOverlay.classList.add("hidden");
    modalBody.innerHTML = "";
  };
};

  /* ==========================
        CERTIFICATE POPUPS
  ========================== */
  window.openCertModal = (certId) => {
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
        h2 {
          color: #1e40af;
          margin-bottom: 10px;
        }
        h3 {
          color: #334155;
          margin-top: 20px;
          margin-bottom: 8px;
        }
        ul {
          margin-top: 10px;
          padding-left: 22px;
        }
        li {
          margin-bottom: 10px;
        }
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
        button:hover {
          background: #3749d8;
        }
      </style>
    `;

    let content = "";

    if (certId === "cert1") {
      content = `
        <h2>🎓 Certified Data Analyst (Issued by Excelr)</h2>
        <p>I completed Excelr's comprehensive Data Analyst Certification program, graduating with <strong>distinction</strong>. This intensive course provided me with a strong, hands-on foundation in the complete data analytics lifecycle, from data collection to visualization.</p>
        <ul>
          <li><strong>Database Management:</strong> Mastered SQL to query, join, aggregate, and extract data from complex relational databases.</li>
          <li><strong>Data Visualization:</strong> Built end-to-end dashboards from scratch using Power BI and Tableau.</li>
          <li><strong>Statistical Programming:</strong> Applied Statistics and Python (Pandas, Matplotlib) for exploration and analysis.</li>
          <li><strong>Business Intelligence:</strong> Used advanced Excel, Pivot Tables, and data modeling for analysis and reporting.</li>
        </ul>
      `;
    } else if (certId === "cert2") {
      content = `
        <h2>📊 Data Visualisation: Empowering Business with Effective Insights (TATA / Forage)</h2>
        <p>I successfully completed TATA's virtual experience program, a practical simulation that replicated the workflow of a real TATA data analyst. The focus was on turning business problems into actionable insights using visualization and storytelling.</p>
        <ul>
          <li>Framed business scenarios and selected visuals that effectively communicated insights.</li>
          <li>Practiced the complete workflow from raw data to dashboards and business insights.</li>
          <li>Learned how to translate complex data into a compelling story for stakeholders.</li>
        </ul>
      `;
    }

    popup.document.write(`
      <html>
        <head><title>Certificate Info</title>${styles}</head>
        <body>${content}<br><button onclick="window.close()">Close Window</button></body>
      </html>
    `);

    popup.document.close();
  };

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
});

/* ==========================
   FOOTER CONTACT FORM SUBMISSION (with Web3Forms + Error Handling)
========================== */
const footerForm = document.getElementById("footerContactForm");
const footerFormMessage = document.getElementById("footerFormMessage");

if (footerForm) {
  footerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Show feedback to user
    footerFormMessage.textContent = "⏳ Sending...";
    footerFormMessage.style.color = "#fbbf24";

    const formData = new FormData(footerForm);

    let result;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      result = await response.json();

      if (result.success) {
        footerFormMessage.textContent = "✅ Message sent successfully!";
        footerFormMessage.style.color = "#22c55e";
        footerForm.reset();
      } else {
        footerFormMessage.textContent =
          "❌ Failed to send message. Please try again later.";
        footerFormMessage.style.color = "#ef4444";
      }
    } catch (error) {
      footerFormMessage.textContent =
        "⚠️ Server temporarily unavailable. Please try again in a few minutes.";
      footerFormMessage.style.color = "#ef4444";
    }
  });
}
