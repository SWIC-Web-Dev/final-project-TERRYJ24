// src/components/ProjectGrid.js
import ProjectCard from "./ProjectCard.js";

export default function ProjectGrid(projects) {
  const grid = document.createElement("div");
  grid.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "gap-6",
  );

  projects.forEach((project) => {
    const projectCard = ProjectCard(project);
    grid.appendChild(projectCard);
  });

  return grid;
}
