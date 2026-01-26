/* ===============================
  portfolioData — Chatbot + Summary
=============================== */

const portfolioData = {
  name: "Mohammad Tayyab Khan",
  role: "Entry-Level Data Analyst | MIS & Business Reporting",
  education: "BCA, Telangana, India",

  skills: [
    "Excel (Pivot Tables, Power Query, Dashboards)",
    "SQL (Joins, Subqueries, Aggregations)",
    "Power BI (DAX Basics, Interactive Dashboards)",
    "Tableau",
    "Python (Data Analysis)",
    "KPI Reporting & Data Visualization"
  ],

  experience:
    "Data Analyst Intern at AIvariant (6 months) — supported business teams by extracting data using SQL, preparing datasets in Excel, and building Power BI dashboards for MIS reporting, KPI tracking, and performance analysis to aid business decision-making.",

  projects: [
    "Stock Market Performance & Risk Analysis Dashboard",
    "Pizza Sales Performance & KPI Analysis",
    "Flipkart Sales & Revenue Analytics Dashboard"
  ],

  certificates: [
    "Certified Data Analyst (Excelr)",
    "Data Visualisation: Empowering Business with Effective Insights (TATA)"
  ],

  contact: {
    email: "mdtayyabkhan02@gmail.com",
    linkedin: "https://linkedin.com/in/mohammadtayyabkhan",
    github: "https://github.com/mdTayyabkhan"
  },

  summary:
    "Entry-level Data Analyst with hands-on experience in Excel, SQL, and Power BI, focused on building MIS reports and dashboards that help stakeholders monitor performance, track KPIs, and make data-driven business decisions."
};

/* ===============================
  PROJECT MODAL CONTENT (RECRUITER-FIRST)
=============================== */

const projectDetails = {
  project1: {
    title: "Stock Market Performance & Risk Analysis Dashboard",
    brief:
      "<strong>Project Overview:</strong> An analytical dashboard built to evaluate overall market performance, sector behavior, and investment risk using historical stock data.<br><br><strong>Business Problem:</strong> Analysts and decision-makers lacked a consolidated view to assess returns, volatility, and sector-level risk together, making risk-aware evaluation difficult.",
    points: [
      "<strong>Approach & Tools:</strong> Cleaned and analyzed multi-year stock market data using Excel and SQL.",
      "<strong>Approach & Tools:</strong> Calculated return, beta, volatility, and risk-adjusted metrics and built interactive Power BI dashboards.",
      "<strong>Key Insights:</strong> Identified periods of negative average returns despite stable market activity.",
      "<strong>Key Insights:</strong> Highlighted sectors with higher volatility and risk dispersion patterns.",
      "<strong>Business Value:</strong> Enables risk-aware evaluation of market and sector performance to support informed investment analysis."
    ]
  },

  project2: {
    title: "Pizza Sales Performance & KPI Analysis",
    brief:
      "<strong>Project Overview:</strong> A sales analytics dashboard designed to track revenue, orders, and product performance for a pizza business.<br><br><strong>Business Problem:</strong> The business lacked visibility into which products and categories were driving revenue versus those underperforming, limiting effective menu and sales decisions.",
    points: [
      "<strong>Approach & Tools:</strong> Consolidated order, revenue, and product data using SQL and Excel.",
      "<strong>Approach & Tools:</strong> Built KPI-driven Power BI dashboards for daily, monthly, category-wise, and size-wise analysis.",
      "<strong>Key Insights:</strong> Identified top-selling pizzas contributing a major share of total revenue.",
      "<strong>Key Insights:</strong> Detected low-performing items despite similar pricing levels.",
      "<strong>Business Value:</strong> Supports data-driven menu optimization, pricing decisions, and demand planning."
    ]
  },

  project3: {
    title: "Flipkart Sales & Revenue Analytics Dashboard",
    brief:
      "<strong>Project Overview:</strong> An end-to-end analytics dashboard providing a unified view of sales, revenue, profit, and customer behavior in an e-commerce context.<br><br><strong>Business Problem:</strong> The business required a centralized view to monitor performance across regions, customers, and time periods for strategic planning.",
    points: [
      "<strong>Approach & Tools:</strong> Integrated multi-year e-commerce data using Excel and SQL.",
      "<strong>Approach & Tools:</strong> Developed interactive Power BI dashboards for regional, customer, and order-level analysis.",
      "<strong>Key Insights:</strong> Observed steady revenue growth with relatively stable profit trends.",
      "<strong>Key Insights:</strong> Identified dominant customer segments and delivery patterns.",
      "<strong>Business Value:</strong> Enables leadership to monitor business performance and support data-driven strategic decisions."
    ]
  }
};

/* ===============================
  CERTIFICATE MODAL CONTENT
=============================== */

const certDetails = {
  cert1: {
    title: "Certified Data Analyst",
    brief:
      "<strong>Certificate Summary:</strong> Professional certification validating hands-on data analysis and business reporting skills using industry-relevant tools.<br><br><strong>Skills & Competencies Validated:</strong><br>• Data cleaning and analysis using Excel and SQL<br>• KPI tracking and MIS-style reporting<br>• Dashboard development using Power BI<br>• Translating raw data into business insights<br><br><strong>Practical Relevance:</strong> This certification supports real-world analytics work such as KPI monitoring, dashboard creation, and stakeholder-ready reporting in data analyst and MIS roles."
  },

  cert2: {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    brief:
      "<strong>Certificate Summary:</strong> Industry-backed certification focused on communicating data insights clearly to business and non-technical stakeholders.<br><br><strong>Skills & Competencies Validated:</strong><br>• Designing business-focused data visualizations<br>• Selecting appropriate charts for different business questions<br>• Communicating insights through dashboards<br>• Supporting decision-making using visual storytelling<br><br><strong>Practical Relevance:</strong> Strengthens the ability to convert analytical findings into clear, actionable insights and improves collaboration between data teams and business users."
  }
};
