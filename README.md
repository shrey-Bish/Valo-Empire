# ValoEmpire 🎯

ValoEmpire is a MERN (MongoDB, Express, React, Node.js) based web application that allows users to register, login, and submit forms. It features real-time form validation, protected API routes, and a clean Material-UI-based frontend design.

---

## 🚀 Features

- ✅ User registration and login
- 📧 Real-time email validation
- 🔐 JWT-based authentication
- 🧾 Form submission with error handling
- 🖥️ Clean Material-UI frontend
- 🌐 MongoDB Atlas integration
- 🔄 Node.js & Express backend

---

## 📁 Project Structure

```

valoempire/
├── api/                    # Backend (Express + MongoDB)
│   ├── models/             # Mongoose schemas
│   ├── routes/             # Express routes
│   ├── .env                # Environment variables
│   └── server.js           # Main entry point
│
├── client/                 # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   └── Formsell.jsx
│   │   ├── App.js
│   │   └── index.js
│   └── .env                # Client environment config
│
└── README.md               # This file

````

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/valoempire.git
cd valoempire
````

### 2. Setup environment variables

Create a `.env` file in `api/` with:

```env
PORT=5001
MONGO_URL=mongodb+srv://<username>:<password>@valoempire.mongodb.net/?retryWrites=true&w=majority&appName=valoempire
JWT_SECRET=your_jwt_secret
```

(Optional) Add a `.env` in `client/` for custom REACT\_APP variables.

---

### 3. Install dependencies

```bash
# Backend
cd api
npm install

# Frontend
cd ../client
npm install
```

---

### 4. Run the application

```bash
# Terminal 1 (API server)
cd api
npx nodemon server.js


# Terminal 2 (React client)
cd client
npm start
```

The frontend runs on `http://localhost:3000` and backend on `http://localhost:5001`.

---

## 🛠 Tech Stack

* **Frontend:** React, Material UI
* **Backend:** Node.js, Express
* **Database:** MongoDB Atlas (via Mongoose)
* **Authentication:** JWT
* **Form Handling:** React state hooks

---

## 🔐 Environment Setup Tips

If using Node 17+ and getting this error:

```
Error: error:0308010C:digital envelope routines::unsupported
```

Use this workaround:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

Or downgrade Node to v16 LTS.

---


## ✍️ Author

* Shrey Bishnoi – [@shreybish](https://github.com/shrey-Bish)

---

## 📄 License

This project is licensed under the MIT License.

---

```
