import StateManager from "./state.js";
import Header from "./components/Header.js";
import ProjectForm from "./components/ProjectForm.js";
import ProjectGrid from "./components/ProjectGrid.js";

// Handle the form submission
function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const title = formData.get("title") || "default";
  const imageURL =
    formData.get("imageURL") ||
    `https://picsum.photos/seed/${encodeURIComponent(title)}/400/300`;

  console.log("Generated Title:", title);
  console.log("Generated imageURL:", imageURL);

  const newProject = {
    id: Date.now(),
    title,
    description: formData.get("description"),
    imageURL,
    category: formData.get("category"),
    tools: formData.get("tools"),
  };

  // Add new project to state
  StateManager.setState([...StateManager.getState(), newProject]);

  // Reset form
  e.target.reset();

  // Render updated project grid
  renderProjects();
}

// Render the projects
function renderProjects() {
  const projectContainer = document.getElementById("projectContainer");
  const projects = StateManager.getState();
  const projectGrid = ProjectGrid(projects);
  projectContainer.innerHTML = ""; // Clear existing content
  projectContainer.appendChild(projectGrid);
}

// Initialize the app
function initializeApp() {
  const root = document.getElementById("app");
  root.appendChild(Header());
  root.appendChild(ProjectForm(handleSubmit));

  // Initial rendering
  renderProjects();
}

// Initialize app when DOM is ready
initializeApp();
