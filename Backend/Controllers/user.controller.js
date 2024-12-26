const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({ email });

  if(isUserAlreadyExist) {
    return res.status(400).json({ message: "User already exist" });
  }
  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token);

  res.status(200).json({ user, token });
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

// module.exports.logoutUser = async (req, res, next) => {
//   try {
//     const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    
//     // Check if the token is already blacklisted
//     const isBlacklisted = await blackListTokenModel.findOne({ token });

//     if (!isBlacklisted) {
//       await blackListTokenModel.create({ token });
//     }

//     // Add token to blacklist
//     // await blackListTokenModel.create({ token });

//     res.clearCookie("token");
//     res.status(200).json({ message: "Logged out" });
//   } catch (err) {
//     console.error("Error in logout:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

module.exports.logoutUser = async (req, res, next) => {
  try {
    // Log to see if the function is being called
    console.log("Logout function called");

    // Retrieve token from cookies or headers
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log("Token received:", token);

    // Check if token exists
    if (!token) {
      console.log("No token found");
      return res.status(400).json({ message: "No token provided" });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await blackListTokenModel.findOne({ token });
    console.log("Token blacklisted:", isBlacklisted);

    if (!isBlacklisted) {
      console.log("Adding token to blacklist");
      await blackListTokenModel.create({ token });
    }

    // Clear the token cookie
    res.clearCookie("token");
    console.log("Token cleared from cookies");

    // Return success message
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Error in logout:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
