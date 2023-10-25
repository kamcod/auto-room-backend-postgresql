const pool = require("../db/connect");
const bcrypt = require("bcryptjs");
const sendMail = require("../utils/sendMail");
const { badRequestError, unAuthenticatedError } = require("../errors/index");
const { createNewUser, findUserByEmail } = require("../db/queries")

const SignUp = async (req, res, next) => {
    console.log('here we are... in body', req.body);
    const {name, email} = req.body;
    if (!name || !email) {
        next(new badRequestError('Please provide name and email'))
    }
    pool.query(findUserByEmail, [email], async (err, result) => {
        if(result){
            next(new badRequestError("This account already exists"));
        } else {
            let rnum = Math.floor(Math.random() * name.length);
            let randomPassword = name.substring(rnum,rnum+3) + '@' + email.substring(rnum+1,rnum+4) + rnum + 1000;

            const randomBytes = await bcrypt.genSalt(10)
            const EncryptedPassword = await bcrypt.hash(randomPassword, randomBytes);

            pool.query(createNewUser, [name, email, EncryptedPassword], async (err, result) =>{
                if(result){
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
            })
        }
    })

}

const Test = (req, res) => {
    pool.query("SELECT * FROM cars", (err, result) => {
        if(err){
            console.log(err)
        }
        if(res){
            res.status(200).json(result.rows)
        }
    })
}

module.exports = {
    SignUp,
    Test
}
