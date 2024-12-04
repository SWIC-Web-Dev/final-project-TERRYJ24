// src/components/ProjectForm.js
export default function ProjectForm(handleSubmit) {
  const form = document.createElement("form");
  form.id = "addProjectForm";
  form.classList.add("rounded-lg", "bg-gray-100", "p-4", "shadow");

  form.innerHTML = `
    <label class="block text-sm font-medium text-gray-700">Title</label>
    <input type="text" name="title" required class="mt-1 block w-full rounded border-gray-300 p-2" />

    <label class="mt-4 block text-sm font-medium text-gray-700">Description</label>
    <textarea name="description" class="mt-1 block w-full rounded border-gray-300 p-2"></textarea>

    <label class="mt-4 block text-sm font-medium text-gray-700">Image URL (optional)</label>
    <input type="text" name="imageURL" class="mt-1 block w-full rounded border-gray-300 p-2" />

    <label class="mt-4 block text-sm font-medium text-gray-700">Category</label>
    <input type="text" name="category" class="mt-1 block w-full rounded border-gray-300 p-2" />

    <label class="mt-4 block text-sm font-medium text-gray-700">Tools</label>
    <input type="text" name="tools" class="mt-1 block w-full rounded border-gray-300 p-2" />

    <button type="submit" class="mt-4 rounded bg-blue-500 px-4 py-2 text-white">Add Project</button>
  `;

  form.addEventListener("submit", handleSubmit);

  return form;
}
