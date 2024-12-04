# Project Showcase Manager

## Features Breakdown

### Create:

Add new projects with:

- Title
- Description
- Image URL
- Category (e.g., "Illustration," "UI/UX," "Logo Design")
- Tools used (comma-separated tags like "Photoshop, Illustrator")

### Read:

- Display all projects in a gallery grid with:
  - Card view showing image, title, category, and tools.
  - Expandable or modal details view for a full description.

### Delete:

- Remove a project from the state, with a confirmation prompt.

### Optional (Stretch Goals):

- Filter: By category or tools.
- Sort: Alphabetically by title or by most recent additions.

---

## Plan of Action

### 1. Set Up State Management

### 2. Create a StateManager to handle project data

### 3. Basic Components

- Header: Title and basic navigation (e.g., "Add Project" button).

- Form: For adding new projects.

- Gallery: Grid layout displaying all project cards.

- Project Card: Individual project with an image, title, and delete button.

### 4. Styling

- Clean and modern layout using Tailwind CSS.

- Responsive grid for the gallery.

- Hover effects on cards for a professional touch.

### 5. Deployment

- Ensure seamless functionality and deploy to Netlify with proper settings.

### New Step - Reorganize

```file
/project-manager
/src
/components
Header.js
ProjectForm.js
ProjectCard.js
ProjectGrid.js
/styles
styles.css
/state.js
main.js
index.html
```
