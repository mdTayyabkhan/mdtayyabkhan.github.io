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
        MODAL SYSTEM (UPDATED)
  ========================== */

  // ---------- PROJECT POPUPS ----------
  window.openProjectModal = (projectId) => {
    const popup = window.open("", "_blank", "width=900,height=800,scrollbars=yes,resizable=yes");

    popup.document.write(`
      <html>
        <head>
          <title>Project Details</title>
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
              margin-top: 30px;
              margin-bottom: 8px;
            }
            ul {
              margin-top: 10px;
              padding-left: 22px;
            }
            li {
              margin-bottom: 10px;
            }
            section {
              margin-bottom: 40px;
            }
          </style>
        </head>
        <body>
          <h2>🚀 Projects</h2>
          <p>Here are a couple of projects I've built to apply my skills in data analysis and visualization.</p>

          <section>
            <h3>🍕 Pizza Sales Dashboard</h3>
            <p>This project involved building a comprehensive dashboard to analyze sales performance for a pizza business. I handled the entire data workflow, from the backend database to the final interactive report, to provide actionable insights for growth.</p>
            <ul>
              <li>Handled the complete <strong>ETL (Extract, Transform, Load)</strong> process using <strong>SQL</strong> to clean, prepare, and model the backend sales data.</li>
              <li>Built a dynamic, multi-page dashboard in <strong>Power BI</strong> to visualize complex performance metrics and business trends.</li>
              <li>Designed a high-level executive dashboard to monitor core <strong>KPIs</strong> like <strong>Total Revenue (₹8.17L)</strong>, <strong>Total Orders (21.3K)</strong>, and <strong>Average Order Value (₹38.31)</strong>.</li>
              <li>Created dedicated 'Best Sellers' and 'Less Selling' pages to <strong>automatically rank products</strong> by revenue, quantity, and orders, providing clear insights for marketing and inventory management.</li>
              <li>Engineered the report with <strong>interactive slicers</strong> (for Date, Category, and Size) to allow any user to easily drill down and filter data for strategic decision-making.</li>
            </ul>
          </section>

          <section>
            <h3>🛒 Flipkart Sales & Profitability Dashboard</h3>
            <p>This was an advanced analytics project focused on dissecting Flipkart's sales and profitability. The goal was to move beyond historical reporting and create a predictive tool to help leadership model the real-world impact of business decisions.</p>
            <ul>
              <li>Managed the backend data pipeline, using <strong>SQL</strong> to process, clean, and aggregate complex sales and profitability data.</li>
              <li>Developed a multi-page <strong>Power BI</strong> report featuring an executive dashboard to track high-level <strong>KPIs</strong> such as <strong>Total Revenue ($160M)</strong> and <strong>Total Profit ($88M)</strong>.</li>
              <li>Designed detailed drill-down pages for <strong>Order, Customer, and Product Insights</strong>, enabling deep analysis of performance by demographics, location, and product category.</li>
              <li>Engineered a <strong>'Profit Insights and Forecast'</strong> page to model future performance based on changing variables.</li>
              <li>Added interactive <strong>'what-if' parameter sliders</strong> allowing leadership to instantly see modeled profitability changes, enabling true prescriptive analysis.</li>
              <li>Included a <strong>'Target Analysis'</strong> page with gauge charts to visually track performance against business goals.</li>
            </ul>
          </section>
        </body>
      </html>
    `);

    popup.document.close();
  };

  // ---------- CERTIFICATE POPUPS ----------
  window.openCertModal = (certId) => {
    const details = certDetails[certId];
    if (!details) return;

    const popup = window.open("", "_blank", "width=900,height=800,scrollbars=yes,resizable=yes");

    popup.document.write(`
      <html>
        <head>
          <title>${details.title}</title>
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
              margin-top: 30px;
              margin-bottom: 8px;
            }
            ul {
              margin-top: 10px;
              padding-left: 22px;
            }
            li {
              margin-bottom: 10px;
            }
            section {
              margin-bottom: 40px;
            }
          </style>
        </head>
        <body>
          <h2>🎓 Certifications & Training</h2>

          <section>
            <h3>Certified Data Analyst (Issued by Excelr)</h3>
            <p>I completed Excelr's comprehensive Data Analyst Certification program, graduating with <strong>distinction</strong>. This intensive course provided me with a strong, hands-on foundation in the complete data analytics lifecycle, from data collection to visualization.</p>
            <ul>
              <li><strong>Database Management:</strong> Mastered SQL to query, join, aggregate, and extract data from complex relational databases.</li>
              <li><strong>Data Visualization:</strong> Gained proficiency in building insightful, end-to-end dashboards from scratch using both Power BI and Tableau.</li>
              <li><strong>Statistical Programming:</strong> Applied core Statistics principles and used Python (with libraries like Pandas and Matplotlib) for data exploration, cleaning, and analysis.</li>
              <li><strong>Business Intelligence:</strong> Leveraged advanced Excel functions, Pivot Tables, and data modeling for in-depth data manipulation and ad-hoc reporting.</li>
            </ul>
          </section>

          <section>
            <h3>Data Visualisation: Empowering Business with Effective Insights (Issued by TATA / Forage)</h3>
            <p>I successfully completed TATA's virtual experience program, a practical simulation that replicated the workflow of a real TATA data analyst. The focus was on turning business problems into actionable insights using visualization and storytelling.</p>
            <ul>
              <li>Worked through hands-on tasks to <strong>frame business scenarios</strong> and choose visuals that effectively communicate data insights.</li>
              <li>Practiced the full workflow — from raw data to actionable dashboards and client-ready insights.</li>
              <li>Focused on <strong>translating complex datasets</strong> into clear, compelling stories for stakeholders, bridging the gap between technical analysis and business strategy.</li>
            </ul>
          </section>
        </body>
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
