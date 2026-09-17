# Inventory Management Backend

## Day 1 — Basic Setup & Product CRUD

### Setup
- Node.js project setup
- `npm init`
- Express, Mongoose, dotenv install
- Basic Express server
- MongoDB Atlas connection
- `.env` setup

### Project Structure
- `server.js`
- `app.js`
- `config/db.js`
- `models/Product.js`
- `routes/productRoutes.js`
- `controllers/productController.js`

### Product
- Product Schema/Model
- Fields: name, price, quantity, category
- Mongoose validation

### CRUD APIs
- Create → `POST`
- Get All → `GET`
- Get By ID → `GET`
- Update → `PUT`
- Delete → `DELETE`

### Testing & Git
- Postman API testing
- MongoDB data verification
- Invalid data testing
- `.gitignore` and `.env` protection
- GitHub push

---

## Day 2 — Request Handling & Error Handling

### Concepts
- `req.body` → request data
- `req.params` → URL parameters
- `req.query` → URL query parameters
- `async/await` → asynchronous operations
- `try/catch` → error handling
- `ObjectId.isValid()` → MongoDB ID validation
- `400` → invalid request/data
- `404` → resource not found
- `runValidators` → update validation

### CRUD Improvements
- Invalid ID handling
- Product Not Found handling
- Update validation
- Proper error responses

---

## Current Progress

Basic Server       ✅
MongoDB            ✅
Mongoose           ✅
Model              ✅
Routes             ✅
Controllers        ✅
CRUD               ✅
Validation         ✅
Error Handling     ✅
Postman            ✅
Git/GitHub         ✅

## API Flow

Client / Postman
       ↓
server.js
       ↓
app.js
       ↓
Routes
       ↓
Controllers
       ↓
Product Model
       ↓
Mongoose
       ↓
MongoDB Atlas