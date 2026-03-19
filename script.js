// ===== DATA =====
const ROLES = [
  "Data Engineer",
  "Analytics Engineer",
  "ETL/ELT Pipeline Builder",
  "Cloud Data Architect",
  "BI & Dashboard Developer"
];

const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "SQL", "PySpark", "R", "DAX", "JavaScript"]
  },
  {
    category: "Data Engineering & ETL",
    items: ["Apache Spark", "Apache Kafka", "Apache Airflow", "Apache Hadoop", "dbt", "Informatica PowerCenter", "Azure Data Factory", "AWS Glue", "Talend"]
  },
  {
    category: "Cloud Platforms",
    items: ["Azure Data Lake Gen2", "Azure Synapse", "Azure Databricks", "Azure Event Hubs", "AWS S3", "AWS Redshift", "AWS Glue", "AWS Kinesis", "GCP BigQuery", "GCS"]
  },
  {
    category: "Databases & Warehouses",
    items: ["Snowflake", "Azure Synapse Analytics", "Amazon Redshift", "PostgreSQL", "MySQL", "Oracle", "MSSQL", "MongoDB Atlas"]
  },
  {
    category: "BI & Visualization",
    items: ["Power BI", "DAX", "Power Query", "Tableau", "Looker Studio", "Excel (Pivot, Macros)"]
  },
  {
    category: "Machine Learning & AI",
    items: ["scikit-learn", "pandas", "NumPy", "Matplotlib", "PySpark ML", "A/B Testing", "Feature Engineering", "Predictive Modeling"]
  },
  {
    category: "Streaming & Real-Time",
    items: ["Apache Kafka", "Azure Event Hubs", "Azure Stream Analytics", "AWS Kinesis"]
  },
  {
    category: "DevOps & CI/CD",
    items: ["Git", "GitHub Actions", "Docker", "Terraform", "Azure DevOps", "AWS CodePipeline"]
  },
  {
    category: "Governance & Quality",
    items: ["Data Lineage", "Metadata Cataloging", "IAM", "Data Quality Validation", "Source-to-Target Mapping"]
  }
];

const EXPERIENCE = [
  {
    role: "Graduate Assistant",
    company: "SUNY Polytechnic Institute, USA",
    date: "Aug 2025 – Present",
    bullets: [
      "Engineered scalable data pipelines using Python, SQL, and Apache Spark, processing <strong>5M+ academic records</strong> daily — improving data availability by 40%",
      "Automated ETL workflows using Apache Airflow and Azure Data Factory, reducing manual intervention by <strong>70%</strong>",
      "Built optimized data models in Snowflake and Azure Synapse Analytics, improving query performance by <strong>45%</strong>",
      "Developed real-time ingestion pipelines using Azure Event Hubs and Databricks, reducing data latency by <strong>60%</strong>",
      "Designed interactive dashboards using Power BI and DAX, increasing stakeholder engagement by <strong>35%</strong>",
      "Implemented CI/CD pipelines using GitHub Actions and Docker, reducing deployment time by <strong>40%</strong>"
    ]
  },
  {
    role: "Data Analytics Engineer",
    company: "Cognizant, India",
    date: "Aug 2023 – Jul 2024",
    bullets: [
      "Developed scalable ELT pipelines using Azure Data Factory, PySpark, and SQL, processing <strong>10M+ records</strong> daily — improving throughput by 50%",
      "Built dimensional data models in Snowflake and Azure Synapse, improving query performance by <strong>40%</strong>",
      "Designed real-time streaming pipelines using Apache Kafka and Azure Stream Analytics, reducing latency by <strong>55%</strong>",
      "Created advanced dashboards using Power BI, DAX, and Power Query, increasing reporting efficiency by <strong>35%</strong>",
      "Deployed pipelines via Azure DevOps CI/CD, reducing release cycles by <strong>40%</strong>",
      "Conducted A/B testing and statistical analysis using Python and SQL, improving campaign performance by <strong>18%</strong>"
    ]
  },
  {
    role: "Data Engineer / Data Analyst",
    company: "Cognizant, India",
    date: "Jun 2021 – Jul 2023",
    bullets: [
      "Built batch ETL pipelines using Informatica PowerCenter and SQL, processing <strong>8M+ records</strong> daily",
      "Developed data ingestion workflows using Apache Hadoop and Hive, reducing processing time by <strong>40%</strong>",
      "Designed relational and dimensional data models in MySQL and Oracle, improving query efficiency by <strong>30%</strong>",
      "Created dashboards using Tableau and Excel, increasing reporting visibility by <strong>25%</strong>",
      "Automated reporting processes using SQL and Excel macros, reducing manual effort by <strong>50%</strong>"
    ]
  }
];

const PROJECTS = [
  {
    icon: "🎯",
    title: "Customer Complaints Resolution Dashboard",
    date: "Jan 2025 – May 2025",
    desc: "Built an ML-based classification system achieving 95% accuracy to categorize customer issues. Developed Power BI dashboards with DAX and Power Query for multi-channel insights — reducing escalations by 22% and boosting resolution rates by 18%.",
    tags: ["Power BI", "DAX", "ML Classification", "Python", "Power Query"]
  },
  {
    icon: "❤️",
    title: "Predicting Heart Disease Risk Using ML",
    date: "May 2024 – Jul 2024",
    desc: "Developed machine learning models to predict heart disease risk based on health indicators. Addressed class imbalance via undersampling and applied feature engineering with Logistic Regression and SVC algorithms.",
    tags: ["scikit-learn", "Python", "Logistic Regression", "SVC", "Feature Engineering"]
  },
  {
    icon: "💤",
    title: "Cardiovascular & Sleep Health Data Analysis",
    date: "Jan 2024 – May 2024",
    desc: "Analyzed and visualized two large datasets to explore correlations between sleep patterns, physical activity, and cardiovascular risk factors. Conducted EDA, data cleaning, and statistical visualization.",
    tags: ["Python", "pandas", "Matplotlib", "EDA", "Statistical Analysis"]
  },
  {
    icon: "⚡",
    title: "Short-Term Electrical Load Forecasting",
    date: "Dec 2022 – Jun 2023",
    desc: "Built an ANN forecasting model achieving 3.14% MAPE in MATLAB, enabling cost-efficient power distribution and proactive energy planning for short-term electrical load forecasting.",
    tags: ["MATLAB", "ANN", "Time Series", "Forecasting", "Energy"]
  }
];

const CODE_LINES = [
  '<span style="color:#89b4fa">import</span> <span style="color:#cba6f7">pyspark</span>',
  '<span style="color:#89b4fa">from</span> pyspark.sql <span style="color:#89b4fa">import</span> SparkSession',
  '',
  '<span style="color:#6c7086"># Initialize distributed pipeline</span>',
  'spark = SparkSession.builder \\',
  '  .appName(<span style="color:#a6e3a1">"DataPipeline"</span>) \\',
  '  .config(<span style="color:#a6e3a1">"spark.sql.adaptive.enabled"</span>, <span style="color:#fab387">True</span>) \\',
  '  .getOrCreate()',
  '',
  '<span style="color:#6c7086"># Process 10M+ records</span>',
  'df = spark.read.parquet(<span style="color:#a6e3a1">"s3://data-lake/*"</span>)',
  'result = df.groupBy(<span style="color:#a6e3a1">"segment"</span>) \\',
  '  .agg({"revenue": <span style="color:#a6e3a1">"sum"</span>}) \\',
  '  .orderBy(<span style="color:#a6e3a1">"sum(revenue)"</span>, ascending=<span style="color:#fab387">False</span>)',
  'result.write.snowflake(<span style="color:#a6e3a1">"analytics_db"</span>)'
];

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateTrail() {
  tx += (mx - tx) * 0.12;
  ty += (my - ty) * 0.12;
  trail.style.left = tx + 'px';
  trail.style.top = ty + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== TYPED ROLE EFFECT =====
let roleIndex = 0, charIndex = 0, deleting = false;
const typedRole = document.getElementById('typedRole');

function typeRole() {
  const current = ROLES[roleIndex];
  if (!deleting) {
    typedRole.innerHTML = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeRole, 2000);
      return;
    }
  } else {
    typedRole.innerHTML = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
    }
  }
  setTimeout(typeRole, deleting ? 50 : 80);
}
setTimeout(typeRole, 1200);

// ===== TERMINAL CODE EFFECT =====
const terminal = document.getElementById('terminalCode');
let lineIdx = 0;
function typeTerminal() {
  if (lineIdx < CODE_LINES.length) {
    terminal.innerHTML += CODE_LINES[lineIdx] + '\n';
    lineIdx++;
    setTimeout(typeTerminal, lineIdx === 0 ? 0 : 180);
  }
}
setTimeout(typeTerminal, 800);

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  let current = 0;
  const step = target / 40;
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(interval);
  }, 40);
}

// ===== RENDER SKILLS =====
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  SKILLS.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'skill-category reveal';
    div.innerHTML = `
      <div class="skill-cat-title">${cat.category}</div>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
      </div>`;
    grid.appendChild(div);
  });
}

// ===== RENDER EXPERIENCE =====
function renderExperience() {
  const timeline = document.getElementById('timeline');
  EXPERIENCE.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-meta">
        <span class="timeline-date">${exp.date}</span>
        <span class="timeline-company">${exp.company}</span>
      </div>
      <div class="timeline-role">${exp.role}</div>
      <ul class="timeline-bullets">
        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>`;
    timeline.appendChild(item);
  });
}

// ===== RENDER PROJECTS =====
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  PROJECTS.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.innerHTML = `
      <div class="project-header">
        <span class="project-icon">${proj.icon}</span>
        <span class="project-date">${proj.date}</span>
      </div>
      <div class="project-title">${proj.title}</div>
      <p class="project-desc">${proj.desc}</p>
      <div class="project-tags">
        ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>`;
    grid.appendChild(card);
  });
}

// ===== INTERSECTION OBSERVER =====
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          // Trigger counters
          const counters = entry.target.querySelectorAll('.stat-num');
          counters.forEach(animateCounter);
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Also observe stat counters
  document.querySelectorAll('.stat-num').forEach(el => {
    const heroObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounter(el);
        heroObserver.unobserve(el);
      }
    });
    heroObserver.observe(el);
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button');
  btn.textContent = 'MESSAGE SENT ✓';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = 'SEND MESSAGE';
    btn.style.background = '';
    this.reset();
  }, 3000);
});

// ===== INIT =====
renderSkills();
renderExperience();
renderProjects();
setTimeout(setupReveal, 100);
