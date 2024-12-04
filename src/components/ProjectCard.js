// src/components/ProjectCard.js
export default function ProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add(
    "bg-white",
    "p-4",
    "rounded-lg",
    "shadow-lg",
    "overflow-hidden",
  );

  const title = document.createElement("h3");
  title.textContent = project.title;
  title.classList.add("text-xl", "font-bold", "text-gray-800");
  projectCard.appendChild(title);

  const image = document.createElement("img");
  image.src =
    project.imageURL || `https://picsum.photos/seed/${project.title}/400/300`;
  image.alt = project.title;
  image.classList.add("w-full", "h-48", "object-cover", "rounded-lg");
  projectCard.appendChild(image);

  const description = document.createElement("p");
  description.textContent = project.description || "No description provided.";
  description.classList.add("text-sm", "text-gray-600", "mt-2");
  projectCard.appendChild(description);

  const categoryAndTools = document.createElement("p");
  categoryAndTools.textContent = `Category: ${project.category || "N/A"} | Tools: ${project.tools || "N/A"}`;
  categoryAndTools.classList.add("text-sm", "text-gray-500", "mt-2");
  projectCard.appendChild(categoryAndTools);

  return projectCard;
}
