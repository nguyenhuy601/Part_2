# 🛡️ Session Auth API with Express & MongoDB

## 📌 Giới thiệu
Đây là một RESTful API đơn giản được xây dựng bằng **Node.js + Express + MongoDB**, cung cấp tính năng **xác thực người dùng** dựa trên **cookie (session-like)**.  
Người dùng có thể đăng ký, đăng nhập, đăng xuất và xem thông tin profile sau khi đăng nhập thành công.

## ⚙️ Công nghệ sử dụng
- [Express.js](https://expressjs.com/) – Web framework cho Node.js  
- [MongoDB](https://www.mongodb.com/) – Cơ sở dữ liệu NoSQL  
- [Mongoose](https://mongoosejs.com/) – ODM cho MongoDB  
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) – Hash mật khẩu  
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) – Quản lý cookie trong Express  
- [dotenv](https://www.npmjs.com/package/dotenv) – Quản lý biến môi trường  

## 📂 Cấu trúc thư mục
.
├── config
│   ├── db.js            # Kết nối MongoDB
│   └── swagger.js       # Cấu hình Swagger UI
├── controllers
│   ├── authController.js
│   └── userController.js
├── middleware
│   └── auth.js          # Middleware xác thực người dùng
├── models
│   └── User.js
├── routes
│   ├── authRoutes.js
│   └── userRoutes.js
├── views
│   ├── login.ejs
│   ├── register.ejs
│   └── profile.ejs
├── public
│   ├── css/
│   ├── js/
├── .env                 # Biến môi trường
├── .gitignore
├── package.json
└── server.js            # Entry point của ứng dụng


Auth Routes
Method	URL	Mô tả
GET	/auth/register	Hiển thị form đăng ký
POST	/auth/register	Đăng ký người dùng mới
GET	/auth/login	Hiển thị form đăng nhập
POST	/auth/login	Đăng nhập người dùng
GET	/auth/logout	Đăng xuất người dùng


User Routes
Method	URL	Mô tả
GET	/user/profile	Xem thông tin profile

📝 License

MIT License