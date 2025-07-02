# Find a Representative - Interactive Map Application

This is a modern, responsive web application built with React, Vite, and Tailwind CSS. It provides a user-friendly interface for finding company representatives and warehouse locations across the United States via a fully interactive, clickable SVG map.

This project was bootstrapped with Vite and uses components inspired by ShadCN/UI.

![Find a Rep App Screenshot](https://placehold.co/800x500/E2E8F0/4A5568?text=App+Screenshot+Here)

---

## Features

* **Interactive USA Map:** A high-fidelity, visually accurate SVG map of the United States where every state is clickable.
* **Dynamic Data Display:** Clicking a state dynamically loads and displays contact information for representatives and warehouses in that specific region.
* **Tabbed Information:** Contact details are neatly organized into "Reps" and "Warehouses" tabs for easy navigation.
* **Default and Selected States:** The application displays default corporate headquarters information on load and allows users to clear their selection to return to the default view.
* **Fully Responsive:** The layout seamlessly adapts to all screen sizes, from mobile phones to desktop monitors, ensuring a great user experience on any device.
* **Modern Tech Stack:** Built with the latest web technologies including React 18, Vite for fast development, and Tailwind CSS for utility-first styling.

---

## Technologies Used

This project is built upon a modern frontend stack:

* **Framework:** [React](httpss://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** The UI is inspired by [ShadCN/UI](https://ui.shadcn.com/), utilizing Radix UI primitives for accessibility and functionality.
* **Linting:** [ESLint](https://eslint.org/) with TypeScript support.
* **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## Project Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/) (version 18.x or newer) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://your-repository-url/find-a-rep.git
    cd find-a-rep
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

---

## Running the Application

Once the dependencies are installed, you can run the application in various modes using the scripts defined in `package.json`.

1.  **Start the development server:**
    This command will start the Vite development server, typically on `http://localhost:5173`. The server features Hot Module Replacement (HMR) for a fast development experience.
    ```sh
    npm run dev
    ```

2.  **Build for production:**
    This command will build the application for production, creating an optimized and minified bundle in the `dist/` directory.
    ```sh
    npm run build
    ```

3.  **Preview the production build:**
    After building the project, this command starts a local static web server to preview the production files from the `dist/` directory.
    ```sh
    npm run preview
    ```

---

## Code Structure

The main application logic is contained within the `src/` directory.


/src
|-- /components
|   |-- /ui (ShadCN UI components)
|-- App.jsx       # Main application component with layout and state management
|-- index.css     # Global styles and Tailwind CSS directives
|-- main.jsx      # Entry point of the application


* **`App.jsx`**: This is the core component where the state for the selected state and active tab is managed. It also contains the data fetching logic and renders the `UsaMap` and information display components.
* **`UsaMap` Component (within `App.jsx`)**: This component renders the interactive SVG map, handles click events on states, and applies dynamic styling based on the current selection.

---

## Future Improvements

* **API Integration:** Move the static `repData` object to a dedicated backend API endpoint to allow for dynamic data management.
* **Canadian Map:** Add a map of Canada with clickable provinces to expand the tool's reach.
* **Search Functionality:** Implement a search bar to allow users to find reps or warehouses by name or city.
* **Unit & Integration Tests:** Add a testing framework like Vitest or Jest to ensure application reliability.
