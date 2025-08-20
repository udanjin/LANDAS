# CodeTester Test


## 1. Installation and Execution Instructions

This project uses a monorepo structure. All commands should be run from the project's root directory, unless otherwise specified.

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn
- A MongoDB Atlas account (for the database)

### Installation Steps

1.  **Clone the Repository**
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd <PROJECT_FOLDER_NAME>
    ```

2.  **Install Backend Dependencies**
    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies**
    ```bash
    cd ../client
    npm install
    ```

### Environment Variables Configuration

1.  **Backend (`/backend`)**
    Create a `.env` file inside the `backend` folder and fill it with the following variables:
    ```env
    PORT=4000
    MONGO_URI=mongodb+srv://dummy1:yBRXF83O51BWlGmf@cluster0.oirsx8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=cde49b973932d1206b7f3b03a9b8d9c69602f62397f8a4c7e8fad2dd1d891ca7
    ```

2.  **Frontend (`/client`)**
    Create a `.env.local` file inside the `client` folder and fill it with the following variable:
    ```env
    VITE_API_URL=http://localhost:4000/api
    ```

### Running the Project (Development)

You will need to run two terminals simultaneously.

1.  **Terminal 1: Run the Backend Server**
    ```bash
    cd backend
    npm run dev
    ```
    The server will be running at `http://localhost:4000`.

2.  **Terminal 2: Run the Frontend Client**
    ```bash
    cd client
    npm run dev
    ```
    The React application will be running at `http://localhost:5173`.

---

## 2. Project Structure Explanation

This project adopts a **Monorepo** architecture combined with **Feature-Based Architecture (FBA)** and **Atomic Design** to ensure scalability and maintainability.


-   **Feature-Based Architecture (FBA)**: Each major functionality (like `auth`) is isolated into its own folder within `features`. This makes each feature modular and self-contained, with its own components, hooks, services, and state management.
-   **Atomic Design**: Within each feature's `components` folder, components are conceptually broken down into:
    -   **Atoms**: The smallest building blocks (e.g., `Button`, `Input`).
    -   **Molecules**: Combinations of atoms to form more complex units (e.g., an `InputField`).
    -   **Organisms**: Larger, self-contained UI sections (e.g., `LoginForm`, `Navbar`).
-   **Shared**: This folder contains truly generic elements that can be used by any feature, such as a global Axios configuration or common utility functions.

---

## 3. Implementation Assumptions and Decisions

-   **Monorepo Architecture**: Chosen to simplify dependency management and facilitate code sharing (e.g., data types) between the frontend and backend in the future.
-   **TypeScript**: Used across the entire project (frontend and backend) to ensure type safety, reduce runtime bugs, and improve the developer experience.
-   **Separate Deployments**: Although in a single repository, the frontend and backend are deployed as two separate projects on Vercel. This simplifies the deployment process and scaling for each part independently.
-   **Frontend Validation**: Input validation (like minimum password length) is performed on the client-side to provide instant feedback to the user, and will be re-validated on the server-side for security.
-   **State Management**: For now, local state management (using `useState`) is sufficient. As the application grows, a library like Zustand will be implemented as needed.

---

## 4. Justification for Optional Libraries Used

### Axios

`axios` was chosen as the primary HTTP client for the frontend application for the following reasons:

1.  **Centralized Instance**: `axios` allows for the creation of a centralized instance (`axiosInstance.ts`). This is extremely useful for setting up base configurations (like `baseURL` and `headers`) in one place, avoiding repetition in every API request.
2.  **Interceptors**: The interceptors feature makes it easy to handle global tasks such as adding an authentication token (JWT) to every request or handling API errors consistently across the application.
3.  **Broad Browser Support**: `axios` has excellent compatibility with a wide range of browsers, including older ones.
4.  **Industry Standard**: `axios` is a very popular library and a de-facto standard in the React ecosystem, with extensive documentation and strong community support.

