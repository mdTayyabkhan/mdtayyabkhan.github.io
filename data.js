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
    "During my 6+ months internship at AIvariant, I honed my practical data analysis skills in a professional setting. I was responsible for the end-to-end BI process, using SQL for data extraction, Excel for in-depth data cleaning, and Power BI to build new reports and update critical business dashboards..",
  // These are for the chatbot
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
    "Data-driven analyst with 6+ months of hands-on internship experience at AIvariant, specializing in the end-to-end business intelligence lifecycle. I am proficient in using SQL for data extraction, Excel for cleaning and transformation, and Power BI to build insightful, interactive dashboards. My portfolio of projects, including a complex Flipkart sales dashboard analysis, demonstrates my ability to translate raw data into actionable business insights. I hold a Data Analyst Certification from Excelr and a TATA certificate in data visualization."
};

/* ===============================
  Modal Details
  =============================== */

const projectDetails = {
  "project1": {
    title: "Stock Market Analytics Dashboard",
    dashboardUrl: "project1.html",
    datasetUrl: "#", // <-- Add your link here
    points: [
      //  (need to change later)Analyzed 5+ years of NIFTY 50 stock data using Python and Pandas.",
      // Developed interactive charts in Power BI to track moving averages and volume.",
      // Identified trends and patterns using candlestick and RSI indicators.",
      // Calculated key metrics like ROI, volatility, and Sharpe ratio.",
      //Automated data ingestion from a live API>."
    ]
  },
  "project2": {
    title: "Pizza Sales Analytics",
    dashboardUrl: "project2.html",
    datasetUrl: "#", // <-- Add your link here
    points: [
      "Utilized SQL to perform the complete ETL (Extract, Transform, Load) process, cleaning and preparing the backend sales data for analysis.",
      "Developed a dynamic, multi-page dashboard in Power BI, including data modeling, to visualize complex business performance metrics.",
      "Designed an executive Sales Analytics summary to track core KPIs like Total Revenue (₹8.17L), Total Orders (21.3K), and Average Order Value (₹38.31).",
      "Created dedicated Best Sellers and Less Selling pages to automatically rank products by revenue, quantity, and orders, providing actionable insights for marketing and inventory.",
      "Implemented robust, interactive slicers for Date Range, Pizza Category, and Size, allowing any user to easily filter and drill down into the data for strategic decision-making."
    ]
  },
  "project3": {
    title: "Flipkart Sales Analytics Dashboard",
    dashboardUrl: "project3.html",
    datasetUrl: "#", // <-- Add your link here
    points: [
      "Used SQL to process, clean, and aggregate complex backend sales and profitability data.",
      "Built a comprehensive, multi-page Power BI report with a main executive dashboard to track high-level KPIs like Total Revenue ($160M) and Total Profit ($88M).",
      "Designed dedicated drill-down pages for Order, Customer, and Product Insights, analyzing metrics by demographics, location, and product category.",
      "Implemented advanced analytical features, including a ""Profit Insights and Forecast"" page to model future performance.",
      "Created interactive parameter sliders (for Price Increment & Discount %) to enable dynamic, prescriptive analysis of pricing strategies on profitability."
      "Developed a ""Target Analysis"" page using gauge charts to visually track sales and profit performance against set business goals."
    ]
  }
};

const certDetails = {
  "cert1": {
    title: "Certified Data Analyst",
    img: "assets/certificates/cert1.jpg",
    issuedBy: "Issued by Microsoft",
    credentialUrl: "#" // <-- Add your credential link here
  },
  "cert2": {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    img: "assets/certificates/cert2.jpg",
    issuedBy: "Issued by Google (via Coursera)",
    credentialUrl: "#" // <-- Add your credential link here
  }
};