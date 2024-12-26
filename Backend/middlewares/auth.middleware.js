const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model")

// module.exports.authUser = async (req, res, next) => {
//   const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized_1" });
//   }

//   const isBlacklisted = await blackListTokenModel.findOne({ token: token });

//   if (isBlacklisted) {
//     return res.status(401).json({ message: "Unauthorized_2" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await userModel.findById(decoded._id);
//     req.user = user;
//     return next();
    
//   } catch (err) {
//     return res.status(401).json({ message: "Unauthorized_3" });
//   }
// };

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized_1" });
  }

  // Skip blacklist check if the route is /logout
  if (req.path === '/users/logout') {
    return next();
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized_2" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
    
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized_3" });
  }
};

module.exports.authCaptain = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    const isBlacklisted = await blackListTokenModel.findOne({ token: token });
  
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      captain = await captainModel.findById(decoded._id);
      req.captain = captain;
      return next();
      
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }  
}