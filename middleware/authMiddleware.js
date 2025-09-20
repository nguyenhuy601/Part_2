module.exports.isAuthenticated = (req, res, next) => {
  const userId = req.cookies?.userId; // lấy từ cookie
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.userId = userId; // gắn vào req để controller dùng
  next();
};
