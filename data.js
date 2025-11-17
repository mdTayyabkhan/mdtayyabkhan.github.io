/* ===============================
  data.js — Portfolio Data Context
  =============================== */

const portfolioData = {
  name: "Mohammad Tayyab Khan",
  role: "Data Analyst",
  education: "B.Com (Computer Application), Telangana, India",
  skills: [
    "Excel",
    "SQL",
    "Power BI",
    "Tableau",
    "Python",
    "Data Visualization"
  ],
  experience:
    "During my 6+ months internship at AIvariant, I honed my practical data analysis skills in a professional setting. I was responsible for the end-to-end BI process, using SQL for data extraction, Excel for in-depth data cleaning, and Power BI to build new reports and update critical business dashboards.",
  
  projects: [
    "Stock Market Analytics Dashboard",
    "Pizza Sales Analytics",
    "Flipkart Sales Analytics Dashboard"
  ],

  certificates: [
    "Certified Data Analyst",
    "Data Visualisation: Empowering Business with Effective Insights"
  ],

  contact: {
    email: "mdtayyabkhan02@gmail.com",
    linkedin: "https://linkedin.com/in/mohammadtayyabkhan",
    github: "https://github.com/mdTayyabkhan"
  },

  summary:
    "Data-driven analyst with 6+ months of hands-on internship experience at AIvariant, specializing in the end-to-end business intelligence lifecycle. I am proficient in using SQL for data extraction, Excel for cleaning and transformation, and Power BI to build insightful, interactive dashboards. My portfolio includes projects like the Flipkart Sales Analytics Dashboard, showcasing my ability to translate raw data into actionable insights. I hold a Data Analyst Certification from Excelr and a TATA certificate in data visualization."
};

/* ===============================
  Modal Details
  =============================== */

const projectDetails = {
  project1: {
    title: "Stock Market Analytics Dashboard",
    dashboardUrl: "project1.html",
    datasetUrl: "#",
    points: [
      "Performed complete stock price analysis including volatility, trends, and return calculation.",
      "Developed interactive visuals in Power BI to compare sector performance and stock movement.",
      "Created advanced DAX measures to compute KPIs such as ROI, volatility, moving averages, and daily returns.",
      "Built a clean analytical dashboard layout enabling investors to understand market patterns quickly."
    ]
  },

 "project2": {
  title: "Pizza Sales Analytics",
  dashboardUrl: "project2.html",
  datasetUrl: "#",
  points: [
    "Utilized SQL to perform the complete ETL (Extract, Transform, Load) process, cleaning and preparing the backend sales data for analysis.",
    "Developed a dynamic, multi-page dashboard in Power BI, including data modeling, to visualize complex business performance metrics.",
    "Designed an executive Sales Analytics summary to track core KPIs like Total Revenue (₹8.17L), Total Orders (21.3K), and Average Order Value (₹38.31).",
    "Created dedicated Best Sellers and Less Selling pages to automatically rank products by revenue, quantity, and orders, providing actionable insights for marketing and inventory.",
    "Added interactive slicers for Date Range, Pizza Category, and Size for flexible deep-dive analysis."
  ]
 },
};