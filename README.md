# 🛍️ Product API

A simple CRUD API for managing products, built with **Node.js**, **Express**, and **MongoDB**.

This project is based on the YouTube tutorial:  
**[Build a Simple CRUD API using NodeJS and MongoDB](https://www.youtube.com/watch?v=_7UQPve99r4)**

---

## 🚀 Features

- ✅ Create a product
- 📄 Read all or one product
- 🛠️ Update a product
- ❌ Delete a product

---

## 🧰 Tech Stack

- **Node.js**
- **Express**
- **MongoDB** with **Mongoose**
- **dotenv** for environment variable management
- **Thunder Client** or **Postman** for testing

---

## 📁 Folder Structure

```
product-api/
│
├── models/
│   └── productModel.js       # Mongoose schema
│
├── routes/
│   └── productRoutes.js      # API routes
│
├── .env                      # Environment variables
├── index.js                  # Main server file
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JOY23072005/Product-API.git
cd Product-API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/productAPI?retryWrites=true&w=majority
```

Replace with your actual MongoDB connection string.

### 4. Start the Server

```bash
node index.js
```

> Or use `nodemon index.js` if installed.

You should see:
```
Server Running on Port 3000
Connected to database!
```

---

## 📬 API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/`              | Welcome route            |
| POST   | `/products`      | Create a new product     |
| GET    | `/products`      | Get all products         |
| GET    | `/products/:id`  | Get product by ID        |
| PUT    | `/products/:id`  | Update product by ID     |
| DELETE | `/products/:id`  | Delete product by ID     |

---

## 🧪 Testing the API

Use **Thunder Client** (VS Code extension) or **Postman** to test your API.

### Example Product JSON (for POST/PUT)

```json
{
  "name": "Wireless Mouse",
  "price": 29.99,
  "quantity": 40
}
```

---

## 📝 License

This project is open-source and free to use.

---

## 👤 Author

- GitHub: [JOY23072005](https://github.com/JOY23072005)
