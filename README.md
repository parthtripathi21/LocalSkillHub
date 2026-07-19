# LocalSkillHub

A full-stack marketplace application that connects customers with local service providers. Users can browse available services and perform complete CRUD (Create, Read, Update, Delete) operations through a clean, responsive interface.

## 🚀 Features

* Create, edit, update, and delete service listings
* Responsive dashboard for managing listings
* RESTful API integration
* PostgreSQL database with SQLAlchemy ORM
* FastAPI backend
* Modern React frontend using reusable components
* Custom delete confirmation modal
* Responsive UI built with Tailwind CSS

## 🛠 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Axios
* Framer Motion

### Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* Pydantic
* Uvicorn

## 📁 Project Structure

```text
LocalSkillHub/
├── frontend/
├── backend/
├── README.md
└── .gitignore
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/parthtripathi21/LocalSkillHub.git
cd LocalSkillHub
```

### Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

### Frontend

Open another terminal:

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## 📌 API Endpoints

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/listings`      | Fetch all listings     |
| GET    | `/listings/{id}` | Fetch a single listing |
| POST   | `/listings`      | Create a listing       |
| PUT    | `/listings/{id}` | Update a listing       |
| DELETE | `/listings/{id}` | Delete a listing       |

## 📸 Screenshots

*Screenshots will be added after deployment.*

* Home Page
* Dashboard
* Create Listing
* Edit Listing
* Mobile View

## 🔮 Future Improvements

* User authentication
* Image uploads
* Search & filtering
* User-specific dashboards
* Pagination
* Reviews & ratings
* Favorites
* Deployment with Docker

## 📚 What I Learned

* Building full-stack web applications
* Designing REST APIs with FastAPI
* PostgreSQL database integration
* SQLAlchemy ORM
* React component architecture
* CRUD operations
* Frontend-backend integration
* Responsive UI development

## 👨‍💻 Author

**Parth Tripathi**

If you found this project useful, feel free to star the repository.
