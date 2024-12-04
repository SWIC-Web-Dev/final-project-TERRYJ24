import { StateManager } from "../state/StateManager.js";
import Gallery from "./Gallery.js";

// Initialize the state manager
StateManager.subscribe((state) => {
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = Gallery(state);
});

// Form handling for adding a new project
document.getElementById("addProjectForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const title = formData.get("title");
  const newProject = {
    id: Date.now(),
    title,
    description: formData.get("description"),
    imageURL:
      formData.get("imageURL") || `https://picsum.photos/seed/Example/400/300`, // Placeholder image
    category: formData.get("category"),
    tools: formData.get("tools"),
  };
  StateManager.setState([...StateManager.getState(), newProject]);
  e.target.reset();
});

// Initial render
StateManager.setState([]); // Start with an empty state
