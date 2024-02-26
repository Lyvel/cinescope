# CineScope

CineScope is a movie discovery app that allows users to search for movies, view detailed information about them, including posters, genres, ratings, and release years. The app aims to provide movie enthusiasts with a comprehensive platform to explore movies from various genres and periods.

### Live Demo

Check out the live demo here: [CineScope Live Demo](https://cinescope.lyvel.co.uk/)

![Website Snippet](https://img001.prntscr.com/file/img001/jrga7tVaT7uzWfhjHHYMtw.png)

## Technology Stack

CineScope is built using a modern technology stack to ensure high performance, scalability, and ease of maintenance:

### Frontend

- **Next.js**: A React framework for server-rendered or statically-exported React apps.
- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps, used for managing the app's state.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Typescript**: A typed superset of JavaScript that compiles to plain JavaScript.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **Express Rate Limit**: Middleware for limiting repeated requests to public APIs and endpoints.
- **Node Cache**: A simple caching module that has set, get and delete methods and works a bit like memcached.
- **Typescript**: Used for writing the server-side code to enhance code quality and maintainability.

## Getting Started

To get CineScope running on your local machine, follow these steps:

### Prerequisites

- Node.js
- npm or yarn

### Setting Up the Environment

Before running the app, you'll need to set up environment variables for both the frontend and backend. Create a `.env` file in each of the `frontend` and `backend` folders.

#### Backend `.env` Configuration

```plaintext
PORT=YOUR_PORT (3001)
APIKEY=YOUR_TMDB_API_KEY (APIKEY)
CACHE_DURATION=CACHE_DURATION_IN_SECONDS (300)
```

#### Frontend `.env` Configuration

```plaintext
APIURL=URL_TO_BACKEND_SERVER (http://localhost:3001/)
```

### Running the Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash 
   npm run dev
   ```

### Running the Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Next.js app:
   ```bash
   npm run dev
   ```

The frontend should now be running on `http://localhost:3000`.

## Building a Docker Image

This project is also configured to run as a Docker container. Ensure you have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/linux/) installed on your system before proceeding.

### Building Image

To build the Docker image for this project, navigate to the project's root directory where the `Dockerfile` is located and run the following command:

```bash
docker build -t cinescope .
```

### Using Docker Compose

For convenience, this project includes a `docker-compose.yml` file, which simplifies the process of building and running mutli-container Docker applications.

To start the application with Docker Compose, use the following command:

```bash
docker-compose up --build
```

### Customizing Environment Variables

Both the Docker and Docker Compose methods utilize environment variables as defined in the Dockerfile and docker-compose.yml. You can customise these variables as needed for your development or production environments.

The `Dockerfile` installs `PM2` on the image allowing for running the `frontend` and `backend` on one image. To configure `PM2`, you can customise the `ecosystem.config.js` file.
