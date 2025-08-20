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
    MONGO_URI="<YOUR_MONGODB_ATLAS_CONNECTION_STRING>"
    JWT_SECRET="<YOUR_STRONG_JWT_SECRET_KEY>"
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
