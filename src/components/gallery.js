const Gallery = (projects) => `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        ${projects
          .map(
            (project) => `
            <div class="shadow-lg rounded-lg bg-white p-4">
                <img src="${project.imageURL}" alt="${project.title}" class="w-full h-48 object-cover rounded" />
                <h3 class="text-xl font-bold mt-2">${project.title}</h3>
                <p class="text-gray-600">${project.category}</p>
                <p class="text-sm text-gray-500">Tools: ${project.tools}</p>
                <button data-id="${project.id}" class="bg-red-500 text-white p-2 mt-2 rounded delete-project">Delete</button>
            </div>
        `,
          )
          .join("")}
    </div>
`;

export default Gallery;
