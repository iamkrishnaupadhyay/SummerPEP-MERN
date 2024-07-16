const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const findExistingUserUsingEmail = async (email) => {
    const user = await UserModel.findOne({ email });
    return user;
};
const verifyPassword = async (plainPassword, hashedPassword) => {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}
const generateJWTToken = (user) => {
    const token = jwt.sign(
        {
            exp: 1000, //seconds
            data: {
                userId: user._id,
                email: user.email,
            },
        },
        process.env.JWT_SECRET_KEY
    );
    return token;
};


const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                status: "fail",
                message: "Email and password is required",
            });
            return;
        }
        // const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // if (!EMAIL_REGEX.test(email)) {
        //     res.status(400).json({
        //         status: "fail",
        //         message: "Invalid Email",
        //     });
        //     return;
        // }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            status: "success",
            message: "User created",
        });
    } catch (err) {
        if (err.code == "11000") {
            res.status(400).json({
                status: "fail",
                message: "Invalid Email or password",
            });
            return;
        }
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log({ email, password });
        if (!email || !password) {
            res.status(400);
            res.json({
                status: "Fail",
                message: "Invalid Email and Password",
            });
            return;
        }
        const user = await findExistingUserUsingEmail(email);
        if (!user) {
            res.status(400).json({
                status: "Fail",
                message: "User Not Found",
            });
            return
        }

        const hashedPassword = user.password;
        const isPasswordCorrect = await verifyPassword(password, hashedPassword);
        if (!isPasswordCorrect) {
            res.status(400).json({
                status: "Fail",
                message: "Incorrect Password",
            });
        }

        res.status(200).json({
            status: "Success",
            message: "User Login",
            data: {
                user: user.name,
                email: user.email,
            },
            token: generateJWTToken(user)
        })
    }
    catch (err) {
        res.status(500).json({
            status: "Fail",
            message: "Invalid Server Request"
        })
    }
};

module.exports = {
    signUp,
    login,
};
