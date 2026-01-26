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
      "<strong>Project Overview:</strong> An analytical dashboard designed to evaluate overall market behavior, sector performance, and investment risk using historical stock market data. The project focuses on helping analysts and decision-makers interpret market movements beyond surface-level trends.<br><br><strong>Business Problem:</strong> Investors and analysts often lack a single consolidated view to assess market returns, volatility, and sector-level risk simultaneously. This makes it difficult to identify risk exposure and performance patterns across sectors.",
    points: [
      "<strong>Approach & Tools Used:</strong>"
      "Cleaned and analyzed multi-year market data using Excel and SQL.",
      "Calculated return, beta, volatility, and risk-adjusted metrics.",
      "<strong>Approach & Tools Used:</strong> Built interactive dashboards using Power BI for trend and sector analysis.",
      "<strong>Approach & Tools Used:</strong> Applied KPI-driven visualizations for comparative insights.",
      "<strong>Key Insights Delivered:</strong> Identified periods of negative average returns despite stable market activity.",
      "<strong>Key Insights Delivered:</strong> Highlighted sectors with higher volatility and risk dispersion.",
      "<strong>Key Insights Delivered:</strong> Revealed correlation patterns indicating sector interdependencies.",
      "<strong>Business Value / Impact:</strong> Enables risk-aware evaluation of market and sector performance.",
      "<strong>Business Value / Impact:</strong> Supports informed investment and portfolio assessment decisions.",
      "<strong>Business Value / Impact:</strong> Helps stakeholders identify high-risk and stable market segments."
    ]
  },

  project2: {
    title: "Pizza Sales Performance & KPI Analysis",
    brief:
      "<strong>Project Overview:</strong> A sales analytics dashboard built to track revenue, orders, and product performance for a pizza business. The project focuses on understanding demand patterns and identifying drivers of sales performance.<br><br><strong>Business Problem:</strong> The business lacked visibility into which products, categories, and sizes were driving revenue versus those underperforming. Decision-makers needed clear insights to optimize the menu and sales strategy.",
    points: [
      "<strong>Approach & Tools Used:</strong> Consolidated order, revenue, and product datasets using SQL and Excel.",
      "<strong>Approach & Tools Used:</strong> Designed KPI dashboards in Power BI for daily and monthly trends.",
      "<strong>Approach & Tools Used:</strong> Analyzed category-wise, size-wise, and product-level performance.",
      "<strong>Approach & Tools Used:</strong> Created drill-down views for operational analysis.",
      "<strong>Key Insights Delivered:</strong> Identified top-selling pizzas contributing the highest revenue share.",
      "<strong>Key Insights Delivered:</strong> Detected low-performing items despite similar pricing.",
      "<strong>Key Insights Delivered:</strong> Observed consistent demand patterns across specific days and months.",
      "<strong>Business Value / Impact:</strong> Supports data-driven menu optimization and pricing decisions.",
      "<strong>Business Value / Impact:</strong> Helps reduce focus on low-performing products.",
      "<strong>Business Value / Impact:</strong> Improves demand planning and inventory alignment."
    ]
  },

  project3: {
    title: "Flipkart Sales & Revenue Analytics Dashboard",
    brief:
      "<strong>Project Overview:</strong> An end-to-end sales and revenue analytics dashboard designed to monitor performance across regions, products, and customers in an e-commerce environment.<br><br><strong>Business Problem:</strong> The business required a centralized view to track revenue growth, profitability, and order trends across multiple years and zones, making performance monitoring and strategic planning challenging.",
    points: [
      "<strong>Approach & Tools Used:</strong> Integrated multi-year e-commerce sales data using Excel and SQL.",
      "Built interactive dashboards in Power BI for regional and customer analysis.",
      "<strong>Approach & Tools Used:</strong> Analyzed revenue, profit, orders, and delivery patterns.",
      "<strong>Approach & Tools Used:</strong> Applied KPI tracking for trend comparison.",
      "<strong>Key Insights Delivered:</strong> Observed steady revenue growth with relatively stable profit trends.",
      "<strong>Key Insights Delivered:</strong> Identified zones contributing the highest share of revenue.",
      "<strong>Key Insights Delivered:</strong> Highlighted dominant customer segments and delivery preferences.",
      "<strong>Business Value / Impact:</strong> Enables leadership to monitor business health at a glance.",
      "<strong>Business Value / Impact:</strong> Supports strategic planning using unified sales and customer insights.",
      "<strong>Business Value / Impact:</strong> Helps optimize regional and operational decision-making."
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
      "<strong>Certificate Summary:</strong> Professional certification validating hands-on data analysis and business reporting skills using industry-relevant tools.<br><br><strong>Skills & Competencies Validated:</strong><br>• Data cleaning and analysis using Excel and SQL<br>• KPI tracking and MIS-style reporting<br>• Dashboard development using Power BI<br>• Translating raw data into business insights<br><br><strong>Practical Relevance:</strong> This certification strengthens practical data analysis capabilities required for real-world business reporting. It directly supports tasks such as KPI monitoring, dashboard creation, and stakeholder-ready analysis in analyst roles."
  },

  cert2: {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    brief:
      "<strong>Certificate Summary:</strong> Industry-backed certification focused on presenting data insights clearly to business and non-technical stakeholders.<br><br><strong>Skills & Competencies Validated:</strong><br>• Designing clear, business-focused data visualizations<br>• Choosing appropriate charts for different business questions<br>• Communicating insights effectively through dashboards<br>• Supporting decision-making using visual storytelling<br><br><strong>Practical Relevance:</strong> This certification reinforces the ability to convert analytical findings into clear, actionable insights. It supports real-world dashboard design and improves communication between data teams and business stakeholders."
  }
};
