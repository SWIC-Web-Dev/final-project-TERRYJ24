import StateManager from "./state.js";

// Add event listener for the project form
document.getElementById("addProjectForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const title = formData.get("title") || "default"; // Fallback for missing title
  const imageURL =
    formData.get("imageURL") ||
    `https://picsum.photos/seed/${encodeURIComponent(title)}/400/300`;

  // Debugging output
  console.log("Generated Title:", title);
  console.log("Generated imageURL:", imageURL);

  // Create a new project object
  const newProject = {
    id: Date.now(),
    title,
    description: formData.get("description"),
    imageURL,
    category: formData.get("category"),
    tools: formData.get("tools"),
  };

  // Add the new project to state
  StateManager.setState([...StateManager.getState(), newProject]);

  // Clear the form inputs
  e.target.reset();

  // Render the updated projects list
  renderProjects();
});

// Function to render projects in the DOM
function renderProjects() {
  const projects = StateManager.getState();
  const projectContainer = document.getElementById("projectContainer");
  projectContainer.innerHTML = ""; // Clear previous render

  projects.forEach(({ title, description, imageURL }) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
            <img src="${imageURL}" alt="${title}" onerror="this.src='https://via.placeholder.com/400x300';" />
            <h3>${title}</h3>
            <p>${description}</p>
        `;
    projectContainer.appendChild(projectCard);
  });
}

// Initial rendering (in case there is preloaded state)
renderProjects();
