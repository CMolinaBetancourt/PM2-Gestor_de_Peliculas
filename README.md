# 🎬 Full-Stack Movie Manager

## Project Description

This is a **Full-Stack** project designed to manage a movie collection.

The **Backend** is a **RESTful API** built with **Node.js and Express** that allows users to query, create, update, and delete movie data. It uses **MongoDB** as its database, with **Mongoose** for data modeling.

The **Frontend** is a **Web Client** developed using modern HTML, CSS, and JavaScript, utilizing **Webpack** to bundle assets. It provides an interactive user interface for managing the movies consumed from the API.

## 🛠️ Technology Stack

| Component | Key Technologies |
| :--- | :--- |
| **Backend (API)** | Node.js, Express, **MongoDB/Mongoose**, dotenv, Morgan, **CORS** |
| **Frontend (Client)** | HTML, CSS, JavaScript, **Webpack**, **dotenv-cli**, Axios |

-----

## 🚀 Installation and Setup (Local Development)

The project is split into two environments—the **Backend** and the **Frontend**—which must be configured and run separately.

### 1\. Backend Setup (REST API)

#### Prerequisites

  * **Node.js** (Recommended version: 18 or higher)
  * **MongoDB Atlas** (or a local MongoDB instance)

#### Installation Steps

1.   **Clone the repository:**
        ` bash     git clone [YOUR_REPOSITORY_URL]     cd [BACKEND_FOLDER]      `

2.   **Install dependencies:**
        ` bash     npm install      `

3.   **Configure Environment Variables (.env):**
        \* Create a file named **`.env`** in the backend root directory.
        \* Copy and replace the values with your complete MongoDB connection string:

        `        PORT=3000         DATABASE=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<db_name>?retryWrites=true&w=majority        `

4.   **Start the Server:**
        **NOTE:** The `start` script is configured for stability in production (`node index.js`).
        ` bash     npm start      `
        The server will start at `http://localhost:3000`.

### 2\. Frontend Setup (Web Client)

#### Prerequisites

  * The **Backend** must be running **locally** at `http://localhost:3000`.

#### Installation Steps

1.   **Navigate to the Frontend Directory:**
        ` bash     cd [FRONTEND_FOLDER]      `

2.   **Install Client Dependencies:**
        ` bash     npm install      `
    **NOTE:** The client automatically uses `http://localhost:3000` because the production URL variable is not present.

3.   **Start the Frontend:**
        This command runs `live-server` and establishes a connection with your local API.
        ` bash     npm start      `
        The application will open at `http://127.0.0.1:8080`.

-----

## ☁️ Production Deployment (Render & Vercel)

The project is configured for deployment using **Render** for the **API** and **Vercel/Netlify** for the **Web Client**.

### 1\. Backend Deployment (API)

  * **Platform:** Render.
  * **Startup Command:** The `start` script in `package.json` must be set to **`"start": "node index.js"`** for maximum stability.
  * **Critical Variable:** Ensure the **`DATABASE`** environment variable in the Render panel holds the **complete and correct** MongoDB Atlas connection string.

### 2\. Frontend Deployment (Web Client)

The Frontend uses an **intelligent URL logic** in `services.js`: it defaults to `localhost` but switches to the production URL if the `BACKDEPLOY` environment variable exists during the build process.

#### Vercel/Netlify Configuration

1.  **Root Directory:** If applicable, set the **Root Directory** to the `front` folder.
2.  **Build Command:** Use the `prod:build` script to compile assets and inject the URL:
    ```bash
    npm install && npm run prod:build
    ```
3.  **Output Directory:** `public`
4.  **Environment Variable:** You **must** create the secret variable in the Vercel/Netlify panel:
      * **Name:** `BACKDEPLOY`
      * **Value:** `https://movie-manager-tj6m.onrender.com` (Your public Render URL).

-----

## 🗺️ Backend Endpoints

The main router is `/movies`.

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
```