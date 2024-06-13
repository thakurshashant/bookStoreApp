import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body; // Accessing fullname, email, and password from the request body

        // Checking if the user is already present in the database
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10); // Hashing the password so if the access of database is with others password still remains secure
        // Creating a new user
        const createdUser = new User({
            fullname,
            email,
            password :hashPassword //saving hashed password
        });

        // Saving the new user data
        await createdUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
