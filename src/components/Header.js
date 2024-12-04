// src/components/Header.js
export default function Header() {
  const header = document.createElement("header");
  header.classList.add("text-center", "m-4");
  header.innerHTML = `
    <h1 class="text-2xl font-extrabold text-indigo-500 sm:text-3xl md:text-4xl lg:text-5xl">Project Manager App</h1>
  `;
  return header;
}
