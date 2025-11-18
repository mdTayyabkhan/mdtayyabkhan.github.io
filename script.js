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
        MODAL SYSTEM — FINAL
  ========================== */
  window.openProjectModal = (projectId) => {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalBody = document.getElementById("modalBody");
    const details = projectDetails[projectId];
    if (!details) return;

    let extraInfo = "";

    if (projectId === "project2") {
      extraInfo = `
        <ul style="margin-top:10px; padding-left:18px; line-height:1.6;">
          <li>→ Utilized SQL to perform the complete ETL (Extract, Transform, Load) process, cleaning and preparing the backend sales data for analysis.</li><br>
          <li>→ Developed a dynamic, multi-page dashboard in Power BI, including data modeling, to visualize complex business performance metrics.</li><br>
          <li>→ Designed an executive "Sales Analytics" summary to track core KPIs like <strong>Total Revenue (₹8.17L)</strong>, <strong>Total Orders (21.3K)</strong>, and <strong>Average Order Value (₹38.31)</strong>.</li><br>
          <li>→ Created dedicated "Best Sellers" and "Less Selling" pages to automatically rank products by revenue, quantity, and orders, providing actionable insights for marketing and inventory.</li><br>
          <li>→ Implemented robust, interactive slicers for Date Range, Pizza Category, and Size, allowing any user to easily filter and drill down into the data for strategic decision-making.</li>
        </ul>
      `;
    }

    if (projectId === "project3") {
      extraInfo = `
        <ul style="margin-top:10px; padding-left:18px; line-height:1.6;">
          <li>→ Used SQL to process, clean, and aggregate complex backend sales and profitability data.</li><br>
          <li>→ Built a comprehensive, multi-page Power BI report with a main executive dashboard to track high-level KPIs like <strong>Total Revenue ($160M)</strong> and <strong>Total Profit ($88M)</strong>.</li><br>
          <li>→ Designed dedicated drill-down pages for Order, Customer, and Product Insights, analyzing metrics by demographics, location, and product category.</li><br>
          <li>→ Implemented advanced analytical features, including a "Profit Insights and Forecast" page to model future performance.</li><br>
          <li>→ Created interactive parameter sliders (for Price Increment & Discount %) to enable dynamic, prescriptive analysis of pricing strategies on profitability.</li><br>
          <li>→ Developed a "Target Analysis" page using gauge charts to visually track sales and profit performance against set business goals.</li>
        </ul>
      `;
    }

    modalBody.innerHTML = `
      <h3 class="text-2xl font-bold mb-3">${details.title}</h3>
      <p class="text-base leading-relaxed mb-4">${details.brief}</p>
      ${extraInfo}
      <button class="btn-primary" onclick="closeModal()">Close</button>
    `;

    modalOverlay.classList.remove("hidden");
    modalOverlay.style.display = "flex";
  };

  window.openCertModal = (certId) => {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalBody = document.getElementById("modalBody");
    const details = certDetails[certId];
    if (!details) return;

    let extraInfo = "";

    if (certId === "cert1") {
      extraInfo = `
        <p style="margin-top:10px;">As part of my <strong>Data Analyst Certification from Excelr</strong>, which I completed with distinction, I gained a comprehensive skill set in the complete data analytics lifecycle. The program focused on hands-on application and covered:</p>
        <ul style="margin-top:10px; padding-left:18px; line-height:1.6;">
          <li>• <strong>Database Management:</strong> Mastering SQL to query, join, aggregate, and extract complex datasets from relational databases.</li><br>
          <li>• <strong>Data Visualization:</strong> Developing and deploying interactive, insightful dashboards from scratch using both Power BI and Tableau.</li><br>
          <li>• <strong>Statistical Programming:</strong> Applying core Statistics principles and utilizing Python (with libraries like Pandas and Matplotlib) for data exploration and analysis.</li><br>
          <li>• <strong>Business Intelligence:</strong> Leveraging advanced Excel functions, Pivot Tables, and data modeling for in-depth data manipulation and reporting.</li>
        </ul>
      `;
    }

    if (certId === "cert2") {
      extraInfo = `
        <p style="margin-top:10px;">I completed the <strong>TATA "Data Visualisation: Empowering Business with Effective Insights"</strong> virtual experience program, a practical simulation of a real-world data analyst's workflow. This intensive program, developed by TATA and hosted on the Forage platform, involved a series of hands-on tasks.</p>
        <p style="margin-top:10px;">I learned to move from a raw business problem to a final, actionable insight. The modules focused on framing the business scenario, choosing the right visuals for the data, and creating effective dashboards.</p>
        <p style="margin-top:10px;">The program culminated in a capstone task focused on communicating analysis and key insights, solidifying my ability to translate complex data into a clear, compelling story for stakeholders.</p>
      `;
    }

    modalBody.innerHTML = `
      <h3 class="text-2xl font-bold mb-3">${details.title}</h3>
      <p class="text-base leading-relaxed mb-4">${details.brief}</p>
      ${extraInfo}
      <button class="btn-primary" onclick="closeModal()">Close</button>
    `;

    modalOverlay.classList.remove("hidden");
    modalOverlay.style.display = "flex";
  };

  window.closeModal = () => {
    const modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.classList.add("hidden");
    modalOverlay.style.display = "none";
  };

  // Allow closing with “X” or background click
  closeModalBtn?.addEventListener("click", closeModal);
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
});
