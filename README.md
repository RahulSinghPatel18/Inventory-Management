-------------- 1st day practice --------

### Phase 1 — Basic Setup

1. Node.js project create kiya
2. `npm init`
3. Express install kiya
4. Basic server banaya
5. `GET /` se server test kiya

npm install express
npm install mongoose
npm install dotenv
express   → API/server banane ke liye
mongoose  → MongoDB se baat karne ke liye
dotenv    → .env variables read karne ke liye
### Phase 2 — Database

6. MongoDB Atlas setup
7. `.env` me MongoDB URL rakha
8. `dotenv` install/use kiya
9. Mongoose install kiya
10. MongoDB connect kiya

### Phase 3 — Product Structure

11. `Product` model/schema banaya
12. Fields define ki:

* name
* price
* quantity
* category

13. Mongoose validation add ki

### Phase 4 — API Structure

14. `routes/` folder banaya
15. `controllers/` folder banaya
16. Routes aur controllers separate kiye

### Phase 5 — Product CRUD

17. Create Product → `POST`
18. Get All → `GET`
19. Get By ID → `GET`
20. Update → `PUT`
21. Delete → `DELETE`

### Phase 6 — Testing

22. Postman se APIs test ki
23. MongoDB me data verify kiya
24. Invalid data ki validation test ki

### Phase 7 — Code Safety

25. `.gitignore` banaya
26. `.env` ko GitHub se protect kiya
27. GitHub par project push kiya

---

### Abhi current position 📍

```text
Basic Server       ✅
MongoDB            ✅
Mongoose           ✅
Model              ✅
Routes             ✅
Controllers        ✅
CRUD               ✅
Validation         ✅
Postman            ✅
Git/GitHub         ✅
```
                 Client / Postman
                        │
                        ↓
                    server.js
                        │
                        ↓
                     app.js
                        │
                        ↓
               productRoutes.js
                        │
                        ↓
             productController.js
                        │
                        ↓
                  Product.js
                        │
                        ↓
                  Mongoose
                        │
                        ↓
                  MongoDB Atlas



                  -------------- 2nd day practice --------