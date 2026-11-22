const projects = [
  {
    name: "RR SupeRR SELECTOR Analysis",
    category: "Sports Analytics / Data Analytics",
    filter: ["data-analytics", "data-science"],
    short: "Cricket player evaluation based on consistency and competition-wise performance.",
    tech: ["Python", "Pandas", "Visualization"],
    github: "https://github.com/search?q=RR+SupeRR+SELECTOR&type=repositories",
    demo: "",
    roleScore: { "Data Scientist": 100, "Data Analyst": 100, "Machine Learning Intern": 88, "Software Developer": 62, "Web Developer": 45 },
    details: {
      problem: "Evaluate cricket player performance and support competitive comparison using match and competition context.",
      objective: "Organize player data into understandable performance comparisons and statistical visualizations.",
      workflow: "Collect and clean player data, calculate performance measures, compare consistency and competition results, then present visual summaries.",
      features: "Player performance analysis, consistency comparison, competition-wise performance and statistical visualizations.",
      contribution: "End-to-end data preparation and analytical presentation should be stated only against the verified repository implementation.",
      challenges: "Comparing players across different match contexts and making statistical summaries easy to interpret.",
      learning: "Sports analytics, exploratory analysis and communicating results clearly.",
      improve: "Add reproducible notebooks, a larger match history and documented evaluation assumptions."
    }
  },
  {
    name: "Ferry Operational Analytics",
    category: "Data Analytics",
    filter: ["data-analytics", "data-science"],
    short: "Toronto Island Ferry ticket activity analytics, historical trends and direct-horizon demand forecasting.",
    tech: ["Python", "Pandas", "Streamlit", "Data Visualization"],
    github: "https://github.com/pravindy021/Ferry-Operational-Analytics",
    demo: "",
    roleScore: { "Data Scientist": 98, "Data Analyst": 100, "Machine Learning Intern": 82, "Software Developer": 58, "Web Developer": 40 },
    details: {
      problem: "Understand ferry ticket activity and short-term demand patterns without interpreting activity as passenger capacity.",
      objective: "Explore ticket sales and redemption patterns, identify activity trends and provide prediction intervals for operational monitoring.",
      workflow: "Load ticket activity data, clean fields, analyze sales and redemption patterns, aggregate trends and build visualizations.",
      features: "Historical sales and redemptions, 15-minute to 2-hour direct forecasts, model comparison, prediction intervals and downloadable reports.",
      contribution: "Repository review confirms Python and Pandas-based analytical work; detailed ownership can be updated after source review.",
      challenges: "Handling missing time intervals and clearly presenting limits without interpreting ticket sales or redemptions as passenger counts or vessel capacity.",
      learning: "Time-based aggregation, operational analytics and responsible interpretation of public data.",
      improve: "Publish a documented dashboard and add clearly stated assumptions to the analysis."
    }
  },
  {
    name: "Career Progression Analytics",
    category: "Data Analytics",
    filter: ["data-analytics", "data-science"],
    short: "Analytical study of career-related trends and progression patterns.",
    tech: ["Python", "Pandas", "Visualization"],
    github: "https://github.com/search?q=%22Career+Progression+Analytics%22+pravindy021&type=repositories",
    demo: "",
    roleScore: { "Data Scientist": 90, "Data Analyst": 96, "Machine Learning Intern": 78, "Software Developer": 55, "Web Developer": 42 },
    details: {
      problem: "Translate career-related data into understandable patterns and analytical insights.",
      objective: "Explore variables associated with career progression and communicate meaningful trends.",
      workflow: "Source and review the dataset, prepare fields, explore distributions and relationships, then present visual findings.",
      features: "Career trend exploration and analytical visualizations. Detailed implemented features require source verification.",
      contribution: "Project scope and implementation contribution should be confirmed from the repository.",
      challenges: "Avoiding unsupported conclusions and interpreting career data with appropriate context.",
      learning: "Data cleaning, exploratory analysis and analytical storytelling.",
      improve: "Add a documented methodology and clearly label descriptive versus inferential findings."
    }
  },
  {
    name: "Afficiando Coffee Roasters",
    category: "Business Analytics",
    filter: ["data-analytics", "data-science"],
    short: "Product optimization and revenue contribution analysis for a coffee roasters business.",
    tech: ["Excel", "SQL", "Data Visualization"],
    github: "https://github.com/search?q=Afficiando+pravindy021&type=repositories",
    demo: "",
    roleScore: { "Data Scientist": 84, "Data Analyst": 96, "Machine Learning Intern": 70, "Software Developer": 52, "Web Developer": 38 },
    details: {
      problem: "Identify product performance and revenue contribution to support business decisions.",
      objective: "Analyze sales frequency and revenue patterns to understand optimization opportunities.",
      workflow: "Review product sales data, aggregate revenue and frequency measures, compare product performance and summarize insights.",
      features: "Product performance, revenue contribution, sales frequency and business insight analysis.",
      contribution: "Implementation details and final measured outcomes require verification in the source materials.",
      challenges: "Separating high-volume products from high-contribution products and preserving business context.",
      learning: "Business analytics, contribution analysis and decision-oriented reporting.",
      improve: "Add time-based trends, margin data and an executive dashboard."
    }
  },
  {
    name: "AI Gym Trainer Coach",
    category: "AI / Computer Vision",
    filter: ["ai", "data-science", "software"],
    short: "Real-time pose estimation, repetition counting and exercise feedback for a guided workout.",
    tech: ["Python", "Streamlit", "Streamlit WebRTC", "OpenCV", "MediaPipe", "SQLite", "Groq", "gTTS"],
    github: "https://github.com/pravindy021/AI-REALTIME-GYM-COACH",
    demo: "https://ai-realtime-gym-coach.onrender.com",
    roleScore: { "Data Scientist": 82, "Data Analyst": 62, "Machine Learning Intern": 100, "Software Developer": 88, "Web Developer": 68 },
    details: {
      problem: "Provide automated real-time exercise guidance and repetition feedback.",
      objective: "Track body pose, recognize supported exercises and count repetitions using a live camera feed.",
      workflow: "Capture frames, estimate pose landmarks, calculate joint-based exercise states, count valid repetitions and present feedback.",
      features: "Real-time pose estimation, repetition counting, workout feedback and supported squat, push-up, curl, shoulder press and lunge flows.",
      contribution: "Built around the verified Python, Streamlit, OpenCV and MediaPipe stack.",
      challenges: "Camera variation, landmark noise and maintaining accurate state transitions between exercise repetitions.",
      learning: "Computer vision pipelines, pose landmarks, Streamlit applications and real-time feedback design.",
      improve: "Add confidence thresholds, calibration and broader evaluation across devices and lighting conditions."
    }
  },
  {
    name: "InkLoom AI",
    category: "AI Application / Software",
    filter: ["ai", "software", "web"],
    short: "AI-assisted brand governance and content review platform.",
    tech: ["Python", "JavaScript", "React", "AI"],
    github: "https://github.com/pravindy021/InkLoom-AI",
    demo: "https://inkloom-ai-frontend.vercel.app/",
    roleScore: { "Data Scientist": 70, "Data Analyst": 58, "Machine Learning Intern": 86, "Software Developer": 100, "Web Developer": 96 },
    details: {
      problem: "Help reviewers evaluate content against brand and governance requirements.",
      objective: "Combine a web interface with backend AI-assisted review workflows.",
      workflow: "Submit content through the frontend, process it in the backend and return review information to the user.",
      features: "Repository review confirms Python and JavaScript components with a React-style frontend. Final feature details should be sourced from the application.",
      contribution: "Implemented as a full-stack application; precise module ownership can be updated after code review.",
      challenges: "Separating frontend and backend responsibilities and presenting AI review output clearly.",
      learning: "Full-stack integration, API workflows and deployed web application development.",
      improve: "Document architecture, API contracts and evaluation examples in the repository."
    }
  },
  {
    name: "Parcel-AI",
    category: "Software / AI",
    filter: ["ai", "software"],
    short: "Parcel-related software project using AI-assisted functionality.",
    tech: ["AI", "Software"],
    github: "https://github.com/search?q=Parcel-AI+pravindy021&type=repositories",
    demo: "",
    roleScore: { "Data Scientist": 76, "Data Analyst": 60, "Machine Learning Intern": 88, "Software Developer": 96, "Web Developer": 72 },
    details: {
      problem: "A parcel-related workflow that can be improved through software and AI functionality.",
      objective: "Automate or assist a parcel-focused task using the implementation in the project.",
      workflow: "The verified workflow should be documented after reviewing the available source and project materials.",
      features: "Source implementation required for accurate feature descriptions.",
      contribution: "Do not infer implementation ownership or outcomes beyond verified project materials.",
      challenges: "Accurate requirement and implementation verification.",
      learning: "Project design and AI-assisted software development.",
      improve: "Complete source review and publish a concise technical architecture."
    }
  },
  {
    name: "CampusLoop",
    category: "Web Development",
    filter: ["web", "software"],
    short: "A student marketplace prototype with authentication, listings, wishlists and messaging.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/pravindy021/CampusLoop",
    demo: "",
    roleScore: { "Data Scientist": 46, "Data Analyst": 54, "Machine Learning Intern": 58, "Software Developer": 86, "Web Developer": 100 },
    details: {
      problem: "Provide students with a dedicated platform for exchanging renting and buying needs.",
      objective: "Build a practical campus-oriented marketplace experience.",
      workflow: "The PHP application serves web pages and handles user-facing marketplace interactions; detailed routes require source review.",
      features: "Authentication, catalogue search, seller listing and image handling, wishlists, product messaging and notifications. Checkout, rental booking and payments are not implemented.",
      contribution: "Frontend and backend ownership should be updated after detailed source review.",
      challenges: "Structuring listings and creating a clear user experience for a shared campus community.",
      learning: "PHP web development, JavaScript interaction and responsive application structure.",
      improve: "Add authentication hardening, verification, search filters and clear validation states."
    }
  },
  {
    name: "CivicPulse AI",
    category: "AI / Software Development",
    filter: ["ai", "software", "web"],
    short: "An AI-focused civic complaint and intelligent city action concept.",
    tech: ["AI", "Software", "Web"],
    github: "https://github.com/search?q=CivicPulse+AI+pravindy021&type=repositories",
    demo: "",
    roleScore: { "Data Scientist": 78, "Data Analyst": 72, "Machine Learning Intern": 92, "Software Developer": 98, "Web Developer": 86 },
    details: {
      problem: "Improve how civic complaints and city action needs can be captured and prioritized.",
      objective: "Explore an intelligent civic reporting workflow with AI-assisted categorization.",
      workflow: "Available implementation materials should define the ingestion, processing and action-routing workflow.",
      features: "Civic complaint and intelligent city action solution. Detailed functionality remains source-verified pending.",
      contribution: "No technical or outcome claims beyond available project materials.",
      challenges: "Data quality, complaint categorization and responsible prioritization.",
      learning: "AI application design and civic technology concepts.",
      improve: "Document system architecture and add privacy, accountability and evaluation considerations."
    }
  },
  {
    name: "UNO Game",
    category: "Game Development",
    filter: ["game", "software"],
    short: "A Unity-based UNO card game implementation.",
    tech: ["Unity", "C#"],
    github: "https://github.com/pravindy021/UNO_GAME",
    demo: "",
    roleScore: { "Data Scientist": 42, "Data Analyst": 44, "Machine Learning Intern": 54, "Software Developer": 88, "Web Developer": 48 },
    details: {
      problem: "Create a playable digital card game based on UNO mechanics.",
      objective: "Implement card gameplay, turns and player interaction in Unity.",
      workflow: "The Unity project controls the game scene, card state and player interactions; detailed mechanics require source verification.",
      features: "Unity-based UNO gameplay. Implemented mechanics should be confirmed from source before adding specifics.",
      contribution: "Project ownership and implementation details are to be verified.",
      challenges: "Game state management and consistent rule enforcement.",
      learning: "Unity development, C# scripting and interactive state-driven design.",
      improve: "Publish a rules guide and add automated tests for card and turn transitions."
    }
  }
];

const grid = document.getElementById("project-grid");
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");

function projectCard(project, index) {
  const demo = project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : "";
  return `<article class="project-card reveal" data-index="${index}" data-filter="${project.filter.join(" ")}">
    <div class="project-cover"><div class="project-cover-code">${String(index + 1).padStart(2, "0")}<small>${project.category}</small></div></div>
    <div class="project-body">
      <div class="project-meta"><span>${project.category}</span><span>${String(index + 1).padStart(2, "0")}</span></div>
      <h3>${project.name}</h3>
      <p>${project.short}</p>
      <div class="badge-row">${project.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-actions"><a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>${demo}<button class="details-button" type="button" data-details="${index}">View details →</button></div>
    </div>
  </article>`;
}

function renderProjects(items) {
  grid.innerHTML = items.map((project) => projectCard(project, projects.indexOf(project))).join("");
  observeReveal();
}

renderProjects(projects);

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    applyProjectFilters();
  });
});

function applyProjectFilters() {
  const activeFilter = document.querySelector(".filter-button.active")?.dataset.filter || "all";
  const query = document.getElementById("project-search").value.trim().toLowerCase();
  document.querySelectorAll(".project-card").forEach(card => {
    const project = projects[Number(card.dataset.index)];
    const searchable = `${project.name} ${project.category} ${project.tech.join(" ")} ${project.short}`.toLowerCase();
    const matchesFilter = activeFilter === "all" || card.dataset.filter.split(" ").includes(activeFilter);
    const matchesSearch = !query || searchable.includes(query);
    card.classList.toggle("hidden", !matchesFilter || !matchesSearch);
  });
}

document.getElementById("project-search").addEventListener("input", applyProjectFilters);

document.getElementById("role-select").addEventListener("change", (event) => {
  const role = event.target.value;
  const ordered = [...projects].sort((a, b) => b.roleScore[role] - a.roleScore[role]);
  renderProjects(ordered);
  const active = document.querySelector(".filter-button.active");
  if (active && active.dataset.filter !== "all") active.click();
  else applyProjectFilters();
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-details]");
  if (!button) return;
  const project = projects[Number(button.dataset.details)];
  modalContent.innerHTML = `<p class="modal-category">${project.category}</p><h2 id="modal-title">${project.name}</h2><p class="modal-summary">${project.short}</p>
    <div class="modal-grid">
      <div><h3>Problem Statement</h3><p>${project.details.problem}</p></div>
      <div><h3>Objective</h3><p>${project.details.objective}</p></div>
      <div><h3>Technologies</h3><p>${project.tech.join(", ")}</p></div>
      <div><h3>System Workflow</h3><p>${project.details.workflow}</p></div>
      <div><h3>Implemented Features</h3><p>${project.details.features}</p></div>
      <div><h3>My Contribution</h3><p>${project.details.contribution}</p></div>
      <div><h3>Challenges</h3><p>${project.details.challenges}</p></div>
      <div><h3>Learning Outcomes</h3><p>${project.details.learning}</p></div>
      <div><h3>Future Improvement</h3><p>${project.details.improve}</p></div>
      <div><h3>Media</h3><p>Screenshots and architecture diagrams will appear when project assets are available.</p></div>
    </div>
    <div class="modal-links"><a class="button button-small" href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>${project.demo ? `<a class="button button-secondary button-small" href="${project.demo}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : ""}</div>`;
  modal.showModal();
});

document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme || "dark";
document.documentElement.dataset.theme = initialTheme;
themeToggle.setAttribute("aria-label", `Switch to ${initialTheme === "dark" ? "light" : "dark"} theme`);
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
  themeToggle.setAttribute("aria-label", `Switch to ${next === "dark" ? "light" : "dark"} theme`);
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  navMenu.classList.toggle("open", !open);
});
document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("open");
}));

const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];
function updateNavigation() {
  header.classList.toggle("scrolled", window.scrollY > 20);
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}
window.addEventListener("scroll", updateNavigation, { passive: true });
updateNavigation();

function observeReveal() {
  const nodes = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach(node => node.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  nodes.forEach(node => observer.observe(node));
}
observeReveal();

const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...form.querySelectorAll("input[required], textarea[required]")];
  let valid = true;
  fields.forEach(field => {
    const fieldValid = field.value.trim() && (field.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value));
    field.classList.toggle("invalid", !fieldValid);
    field.setAttribute("aria-invalid", String(!fieldValid));
    if (!fieldValid) valid = false;
  });
  if (!valid) {
    formStatus.textContent = "Please complete every field with a valid email address.";
    fields.find(field => field.classList.contains("invalid"))?.focus();
    return;
  }
  formStatus.textContent = "Message format validated. This form is ready for an email or backend integration.";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

const initialFilter = document.querySelector(".filter-button.active");
if (initialFilter) initialFilter.click();
