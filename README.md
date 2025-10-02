# 🎬 Full-Stack Movie Manager

## Project Description

This is a **Full-Stack** project designed to manage a movie collection.

The **Backend** is a **RESTful API** built with **Node.js and Express** that allows users to query, create, update, and delete movie data. It uses **MongoDB** as its database, with **Mongoose** for data modeling.

The **Frontend** is a **Web Client** developed using modern HTML, CSS, and JavaScript, utilizing **Webpack** to bundle assets. It provides an interactive user interface for managing the movies consumed from the API.

## 🛠️ Technology Stack

| Component | Key Technologies |
| :--- | :--- |
| **Backend (API)** | Node.js, Express, MongoDB/Mongoose, dotenv, Morgan, CORS |
| **Frontend (Client)** | HTML, CSS, JavaScript, Webpack |

---

## 🚀 Installation and Setup

The project is divided into two environments—the **Backend** and the **Frontend**—which must be configured and run separately.

### 1. Backend Setup (REST API)

#### Prerequisites
* **Node.js** (Recommended version: 18 or higher)
* **MongoDB Atlas** (or a local MongoDB instance)

#### Installation Steps
1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd [BACKEND_FOLDER]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables (.env):**
    * Create a file named **`.env`** in the backend root directory.
    * Copy the content of the `.env.example` file and replace the values:

        ```
        PORT=3000
        DATABASE=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<db_name>?retryWrites=true&w=majority
        ```

4.  **Start the Server:**
    ```bash
    npm start
    ```
    The server will start at `http://localhost:3000` (or your configured port).

### 2. Frontend Setup (Web Client)

#### Prerequisites
* The **Backend** must be running at `http://localhost:3000`.

#### Installation Steps
1.  **Navigate to the Frontend Directory:**
    ```bash
    cd [FRONTEND_FOLDER]
    ```

2.  **Install Client Dependencies:**
    ```bash
    npm install
    ```

3.  **Compile and Run the Frontend:**
    Use Webpack to compile the assets and, if you have a development server configured, start it:
    ```bash
    npm run start
  
---

## 🗺️ Backend Endpoints

The main router is `/movies`. The base URL is `http://localhost:3000`.

| Method | Endpoint | Description | 
| :--- | :--- | :--- | 
| **GET** | `/movies` | Retrieves the complete list of movies. | 
| **POST** | `/movies` | Creates a new movie in the database. | 
| **PUT** | `/movies` | **(Pending)** Updates a movie's data. | 
| **DELETE** | `/movies` | **(Pending)** Deletes a movie. |

### Example Movie Structure (POST Body)

The API implements validations requiring a strict format:
```json
{
  "title": "The Godfather",
  "year": 1972,
  "director": "Francis Ford Coppola",
  "duration": "2h 55min", 
  "genre": ["Crime", "Drama"],
  "rate": 9.2,
  "poster": "https://url-to-the-poster.jpg" 
}
