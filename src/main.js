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

// Define the renderProjects function outside the submit listener
function renderProjects() {
  const projectContainer = document.getElementById("projectContainer");
  projectContainer.innerHTML = ""; // Clear existing projects

  // Access the current state of projects
  const projects = StateManager.getState();

  projects.forEach((project) => {
    // Create a div for each project
    const projectCard = document.createElement("div");
    projectCard.classList.add(
      "bg-white",
      "p-4",
      "rounded-lg",
      "shadow-lg",
      "overflow-hidden",
    );

    // Add title
    const title = document.createElement("h3");
    title.textContent = project.title;
    title.classList.add("text-xl", "font-bold", "text-gray-800");
    projectCard.appendChild(title);

    // Add image
    const image = document.createElement("img");
    image.src =
      project.imageURL || `https://picsum.photos/seed/${project.title}/400/300`;
    image.alt = project.title;
    image.classList.add("w-full", "h-48", "object-cover", "rounded-lg");
    projectCard.appendChild(image);

    // Add description
    const description = document.createElement("p");
    description.textContent = project.description || "No description provided.";
    description.classList.add("text-sm", "text-gray-600", "mt-2");
    projectCard.appendChild(description);

    // Add category and tools
    const categoryAndTools = document.createElement("p");
    categoryAndTools.textContent = `Category: ${project.category || "N/A"} | Tools: ${project.tools || "N/A"}`;
    categoryAndTools.classList.add("text-sm", "text-gray-500", "mt-2");
    projectCard.appendChild(categoryAndTools);

    // Append the project card to the container
    projectContainer.appendChild(projectCard);
  });
}

// Initial rendering (in case there is preloaded state)
renderProjects();
