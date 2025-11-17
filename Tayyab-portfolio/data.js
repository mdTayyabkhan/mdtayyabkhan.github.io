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
    "1+ years of experience working on analytics projects involving Stock Market analysis, Supply Chain optimization, and automated dashboarding. Includes internship experience at AIvariant.",
  // These are for the chatbot
  projects: [
    "Stock Market Analytics Dashboard",
    "Superstore Sales Insights",
    "Supply Chain Efficiency Dashboard"
  ],
  certificates: [
    "Microsoft Certified: Power BI Data Analyst Associate",
    "Google Data Analytics Professional Certificate"
  ],
  contact: {
    email: "mdtayyabkhan02@gmail.com",
    linkedin: "https://linkedin.com/in/mohammadtayyabkhan",
    github: "https://github.com/mdTayyabkhan"
  },
  summary:
    "Mohammad Tayyab Khan is a data professional with a strong analytical mindset and expertise in transforming data into actionable business insights."
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
      "Analyzed 5+ years of NIFTY 50 stock data using Python and Pandas.",
      "Developed interactive charts in Power BI to track moving averages and volume.",
      "Identified trends and patterns using candlestick and RSI indicators.",
      "Calculated key metrics like ROI, volatility, and Sharpe ratio.",
      "Automated data ingestion from a live API."
    ]
  },
  "project2": {
    title: "Superstore Sales Insights",
    dashboardUrl: "project2.html",
    datasetUrl: "#", // <-- Add your link here
    points: [
      "Processed and cleaned over 10,000 sales records using SQL.",
      "Built a comprehensive dashboard in Tableau to monitor KPIs.",
      "Segmented customer data to identify high-value customer groups.",
      "Provided actionable insights on regional profitability and product performance.",
      "Created forecasts for quarterly sales using time-series analysis."
    ]
  },
  "project3": {
    title: "Supply Chain Efficiency Dashboard",
    dashboardUrl: "project3.html",
    datasetUrl: "#", // <-- Add your link here
    points: [
      "Tracked inventory, shipping, and delivery times across multiple carriers.",
      "Used SQL to join complex datasets from different sources.",
      "Visualized supplier performance and identified key bottlenecks.",
      "Helped reduce average delivery lead time by 15% through data-driven recommendations.",
      "Built with Power BI and DAX for complex calculations."
    ]
  }
};

const certDetails = {
  "cert1": {
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    img: "assets/certificates/cert1.jpg",
    issuedBy: "Issued by Microsoft",
    credentialUrl: "#" // <-- Add your credential link here
  },
  "cert2": {
    title: "Google Data Analytics Professional Certificate",
    img: "assets/certificates/cert2.jpg",
    issuedBy: "Issued by Google (via Coursera)",
    credentialUrl: "#" // <-- Add your credential link here
  }
};