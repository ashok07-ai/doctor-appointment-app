import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js"

export const aunthicateToken = async (req, res, next) => {
    const authToken = req.headers.authorization;
    // check if token exist
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ status: false, message: "Access denied!!, No token provided" })
    }

    try {
        const token = authToken.split(" ")[1];
        // verify token
        const decodedInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decodedInfo.id;
        req.role = decodedInfo.role;
        next()
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token is expired!!" })
        }
        return res.status(401).json({ success: false, message: "Invalid toke!!" })
    }
}

export const authorizeByRoles = roles => async (req, res, next) => {
    const userId = req.userId;
    const user = await User.findById(userId) || await Doctor.findById(userId);

    if (!user) {
        return res.status(401).json({ success: false, message: "User not found!" });
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You are not authorized!!" });
    }
    next()
}