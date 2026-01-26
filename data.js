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
      "<strong>Business Problem:</strong> Lack of a consolidated view to evaluate market performance, sector risk, and volatility for informed investment analysis.",
    points: [
      "<strong>Approach:</strong> Analyzed multi-year stock market data using return, beta, volatility, and risk-adjusted metrics.",
      "<strong>Approach:</strong> Built interactive Power BI dashboards to compare sector-wise performance and market trends.",
      "<strong>Insights:</strong> Identified periods of negative average returns despite stable market volume.",
      "<strong>Insights:</strong> Highlighted sector-level risk dispersion and correlation patterns.",
      "<strong>Business Impact:</strong> Enabled risk-aware evaluation of market and sector performance for analytical decision-making."
    ]
  },

  project2: {
    title: "Pizza Sales Performance & KPI Analysis",
    brief:
      "<strong>Business Problem:</strong> The business needed visibility into sales performance, product contribution, and order behavior to identify revenue drivers.",
    points: [
      "<strong>Approach:</strong> Consolidated order, revenue, and product data to track end-to-end sales KPIs.",
      "<strong>Approach:</strong> Designed dashboards for daily, monthly, category-wise, and size-wise analysis.",
      "<strong>Insights:</strong> Identified best-selling pizzas contributing disproportionately to revenue.",
      "<strong>Insights:</strong> Detected low-performing items despite similar pricing.",
      "<strong>Business Impact:</strong> Supported data-driven menu optimization and demand planning."
    ]
  },

  project3: {
    title: "Flipkart Sales & Revenue Analytics Dashboard",
    brief:
      "<strong>Business Problem:</strong> The business required a centralized view to monitor revenue, profit, orders, and customer behavior across regions and years.",
    points: [
      "<strong>Approach:</strong> Integrated multi-year e-commerce data covering revenue, profit, orders, and products.",
      "<strong>Approach:</strong> Built interactive dashboards for zone-wise, customer-wise, and order-level analysis.",
      "<strong>Insights:</strong> Observed steady revenue growth with relatively stable profit trends.",
      "<strong>Insights:</strong> Identified dominant customer segments and delivery patterns.",
      "<strong>Business Impact:</strong> Enabled strategic planning using unified sales, customer, and profit insights."
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
      "Excelr certification validating practical skills in Excel, SQL, and Power BI, with a focus on applying data analysis techniques to real-world business problems."
  },

  cert2: {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    brief:
      "TATA certification demonstrating the ability to communicate insights clearly and effectively through data visualization to support business decision-making."
  }
};
