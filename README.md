# 📚 Read with Love — Library Management System

A full-stack library management system that lets users browse, checkout, and manage books online. Built with React TypeScript on the frontend and Spring Boot on the backend, with JWT authentication, Stripe payment integration, and a full admin dashboard.

🌐 **Live Demo**: [love-to-read.onrender.com](https://love-to-read.onrender.com)

---

## 🗂 Repository Structure

```
library-app/
├── frontend/    # React TypeScript app
└── backend/     # Spring Boot REST API
```

- **Frontend repo**: [library-app-frontend](https://github.com/mmj05/library-app-frontend)
- **Backend repo**: [library-app-backend](https://github.com/mmj05/library-app-backend)

---

## ✨ Features

### For Users
- 🔍 Browse and search books by title or category
- 📖 View book details and read/write reviews with star ratings
- ✅ Checkout up to 5 books with due date tracking
- 🔄 Renew or return loans from a personal shelf
- 📈 View full borrowing history
- 💳 Pay outstanding late fees via Stripe
- 💬 Send messages to library administrators

### For Admins
- ➕ Add new books and manage inventory quantities
- 📊 Monitor library operations from a dashboard
- 💬 Respond to user inquiries in a message center

### Security
- 🔐 JWT-based authentication (register, login, auto-logout)
- 🛡️ Role-based access control (USER / ADMIN)
- 🔒 Protected routes and BCrypt password encryption

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Bootstrap 5 |
| Routing | React Router DOM |
| HTTP | Axios with interceptors |
| Payments | Stripe React SDK |
| Backend | Spring Boot 3, Java 17 |
| Auth | Spring Security, JWT |
| Database | PostgreSQL, Spring Data JPA |
| Containerization | Docker |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- Java 17+
- PostgreSQL 12+

### 1. Clone the repo
```bash
git clone https://github.com/mmj05/library-app.git
cd library-app
```

### 2. Start the backend
```bash
cd backend

# Set environment variables
export DB_URL=jdbc:postgresql://localhost:5432/library_db
export DB_USERNAME=your_username
export DB_PASSWORD=your_password
export JWT_SECRET=your-secret-key
export JWT_EXPIRATION=86400000
export SERVER_PORT=8080

./mvnw spring-boot:run
```

### 3. Start the frontend
```bash
cd frontend
npm install

# Create .env file
echo "REACT_APP_API_BASE_URL=http://localhost:8080/api" > .env

npm start
```

Frontend runs at `http://localhost:3000`, backend at `http://localhost:8080`.

### Docker (Alternative)
```bash
cd backend
cp env.example .env
docker-compose up -d
```

---

## 📁 Project Structure

```
frontend/src/
├── Auth/                   # JWT auth logic
├── context/                # React Context providers
├── layouts/
│   ├── HomePage/           # Landing page
│   ├── BookCheckoutPage/   # Book details + checkout
│   ├── SearchBooksPage/    # Search + filter
│   ├── ShelfPage/          # User loans + history
│   ├── ManageLibraryPage/  # Admin dashboard
│   ├── PaymentPage/        # Stripe fee payment
│   └── MessagesPage/       # User-admin messaging
└── models/                 # TypeScript interfaces

backend/src/main/java/
├── config/                 # Security & CORS config
├── controller/             # REST endpoints
├── service/                # Business logic
├── entity/                 # JPA entities
└── dao/                    # Repository interfaces
```

---

## 🔗 API Overview

| Resource | Endpoint |
|---|---|
| Auth | `POST /api/auth/login`, `/register` |
| Books | `GET/PUT /api/books/secure/*` |
| Reviews | `POST /api/reviews/secure` |
| Messages | `POST/PUT /api/messages/secure/*` |
| Payments | `POST /api/payment/secure/payment-intent` |
| Admin | `POST/PUT /api/admin/secure/*` |

Full API documentation is available in the [backend README](./backend/README.md).

---

## 🏥 Health Check

```bash
GET /actuator/health
GET /actuator/info
```