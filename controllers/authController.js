const User = require("../models/User");

// Đăng ký
exports.register = async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ username, password });
  res.status(201).json({
    message: "User registered",
    user: { id: user._id, username: user.username },
  });
};

// Đăng nhập
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // set cookie userId
    res.cookie("userId", user._id.toString(), {
      httpOnly: true,
      secure: false, // true nếu HTTPS
      maxAge: 1000 * 60 * 60, // 1h
    });

    res.json({ message: "Login successful", username: user.username });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Đăng xuất
exports.logout = (req, res) => {
  res.clearCookie("userId");
  res.json({ message: "Logged out" });
};

// Profile
exports.profile = async (req, res) => {
  const User = require("../models/User");
  const user = await User.findById(req.userId).select("username");
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({ message: "Welcome to your profile", user });
};
