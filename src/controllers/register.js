const pool = require("../db/connect");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const sendMail = require("../utils/sendMail");
const { badRequestError, unAuthenticatedError } = require("../errors/index");
const { createNewUser, findUserByEmail } = require("../db/queries")

const SignUp = async (req, res, next) => {
    const {name, email} = req.body;
    if (!name || !email) {
        next(new badRequestError('Please provide name and email'))
    }
    const user = await pool.query(findUserByEmail, [email]);
        if(user){
            next(new badRequestError("This account already exists"));
        } else {
            let rnum = Math.floor(Math.random() * name.length);
            let randomPassword = name.substring(rnum,rnum+3) + '@' + email.substring(rnum+1,rnum+4) + rnum + 1000;

            const randomBytes = await bcrypt.genSalt(10)
            const EncryptedPassword = await bcrypt.hash(randomPassword, randomBytes);

            await pool.query(createNewUser, [name, email, EncryptedPassword]);
            await sendMail(email, {
                subject: 'Account Created',
                content: `
                <h3>You have successfully created your account on Auto Room</h3>
                <p>Use following password to login to your account</p>
                <b>Your password:</b> ${randomPassword}
                <p>
                 <b>Note:</b> Please do not share this pasword to anyone
                </p>`
            })
            res.status(201).send("User is created successfully");
        }

}

const SignIn = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        next(new badRequestError('Please provide email and password'));
    }
    const user = await pool.query(findUserByEmail, [email]);
    if(user.rows.length){
        const { password: encryptedPassword, id, name } = result.rows[0];
        const isPasswordCorrect = await bcrypt.compare(password, encryptedPassword);
        if (!isPasswordCorrect) {
            return next(new unAuthenticatedError('Invalid Credentials'));
        }
        const token = jwt.sign(
            { userId: id, name },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_LIFETIME,
            }
        )
        res.cookie("token", token, { httpOnly: true, secure: false })
        res.status(200).json({user: result.rows[0], token});
    } else {
        next(new unAuthenticatedError('User Not Found!'));
    }

}

const Logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ logout: "logout successful" })
}

const Test = (req, res) => {
    pool.query("SELECT * FROM cars", (err, result) => {
        if(err){
            console.log(err)
        }
        if(result){
            res.status(200).json(result.rows)
        }
    })
}

module.exports = {
    SignUp,
    SignIn,
    Logout,
    Test
}
