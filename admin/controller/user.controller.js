import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({});
const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: "false",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "This email already exists",
        success: "false",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10); //10- length of the password hashed

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Cannot register",
      success: false,
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    // console.log("Data-- ",email,password,role)
    // console.log("req.body: ",req.body)
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect password",
        success: false,
      });
    }

    if (user.role !== role) {
      return res.status(400).json({
        message: "Account does not exist with this current role",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

const logout = async (req, res) => {
  try {
    res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log("error: " + error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    // cloudinary ayga file k liye (resume ke liye)

    let skillArray;
    if (skills) {
      skillArray = skills.split(",");
    }

    const userId = req.id; //middleware authentication

    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillArray;

    // user's resume comes here

    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "User updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log("error: " + error);
  }
};

export default { register, login, logout, updateProfile };
