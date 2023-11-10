import User from "../models/UserSchema.js";

// get all users
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");
        res.status(200).json({ success: true, message: "Users found!!", data: users })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}

// get specific user from id
export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found!!' });
        }
        res.status(200).json({ success: true, message: "User found!!", data: user })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}
// update user
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;

        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true })
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found!!' });

        }
        res.status(200).json({ success: true, message: "User updated successfully!!", data: updatedData })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}


// delete user
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId)
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found!!' });

        }
        res.status(200).json({ success: true, message: "User deleted successfully!!" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });

    }
}