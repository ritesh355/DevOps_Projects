# 🌤️ Weather App (Dockerized Flask + Nginx)

A simple weather app built with Flask and served via Nginx using Docker Compose. Enter a city name and get real-time weather data fetched from the OpenWeatherMap API.

## 📂 Project Structure

```
weather-app/
│
├── app/
│   ├── app.py               # Flask app
│   └── requirements.txt     # Python dependencies
│
├── frontend/
│   └── index.html           # Simple HTML frontend
│
├── nginx/
│   └── default.conf         # Nginx reverse proxy config
│
├── Dockerfile               # Flask Docker image
├── docker-compose.yml       # Docker Compose setup
└── README.md                # Project documentation
```

## 🚀 Features

- 🐍 Python Flask backend
- 🌐 Nginx as a reverse proxy
- 🐳 Docker + Docker Compose support
- 🔄 Realtime weather data using OpenWeatherMap
- 💻 Clean and simple frontend UI

## ⚙️ Setup Instructions

### 1. 🧰 Prerequisites

Make sure you have:

- Docker installed
- Docker Compose installed
- An API key from [OpenWeatherMap](https://openweathermap.org/)

### 2. 🛠️ Clone the Repo

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 3. 🔐 Configure Environment

Create a `.env` file in the project root:

```
WEATHER_API_KEY=your_openweathermap_api_key_here
```

### 4. 📦 Build & Run Containers

```bash
docker-compose up --build
```

Access the app at: [http://localhost](http://localhost)

### 5. 🧪 Example Usage

- Open the browser.
- Type `Mumbai` or `New York` in the input box.
- Click **Get Weather** to see real-time weather.

## 📝 Tech Stack

| Tool            | Purpose                     |
|-----------------|-----------------------------|
| Flask           | Python Web Framework        |
| OpenWeatherMap  | Weather API Provider        |
| Nginx           | Reverse Proxy               |
| Docker          | Containerization            |
| Docker Compose  | Multi-container setup       |
| HTML/CSS        | Frontend UI                 |

---
## 📸 Live Preview

![Live Screenshot](./assets/live.png)

![Result Screenshot](./assets/result.png)

 ---
## 🧹 Cleanup

To stop and remove containers:

```bash
docker-compose down
```

## 📌 Notes

- For production, use **Gunicorn** instead of Flask's development server.
- Add error handling and input validation for better UX.

## 🙌 Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/)
- Docker & Flask Communities

## 🔗 Connect with Me



- **GitHub**: [ritesh355](https://github.com/ritesh355)
- **LinkedIn**: [Ritesh Singh](https://www.linkedin.com/in/ritesh-singh-092b84340/)
- **Blog**: [Hashnode](https://ritesh-devops.hashnode.dev/)
