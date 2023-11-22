import UserModel from "../Model/UserModel.js"
import { jwt } from 'jsonwebtoken'


/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
import bcrypt from 'bcrypt';

export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check if username already exists
        const existingUsername = await UserModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).send({ error: "Please use a unique username" });
        }

        // Check if email already exists
        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).send({ error: "Please use a unique email" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new UserModel({
            username,
            password: hashedPassword,
            profile: profile || '',
            email,
        });

        // Save the user to the database
        const result = await user.save();

        // Respond to the client
        return res.status(201).send({ msg: "User registered successfully"});
    } catch (error) {
        console.error(error);

        // Handle specific error cases
        if (error instanceof Error) {
            return res.status(500).send({ error: error.message });
        } else {
            return res.status(500).send({ error: "Internal Server Error" });
        }
    }
}

export async function login(req, res) {

    const {username, password}=req.body;

    try{
        UserModel.findOne({username})
        .then(user=>{
            bcrypt.compare(password, user.password)
            .then(passwordCheck=>{
                if(!passwordCheck) return res.status(400).send({error:"Don't have Password"});

                // create jwt token
                jwt.sign({
                    userId:user._id,
                    username:user.username
                },'secret',{expiresIn:"24h"})
                return res.status(200).send({
                    msg:"Login Successful..!",
                    username: user.username,
                    token
                })
            })
            .catch(error=>{
                return res.status(400).send({error:"password does not match"})
            })
        })
        .catch(error=>{
            return res.status(404).send({error:"Username not Found"});
        })

    }catch(error){
        return res.status(500).send({error});
    }

}

export async function getUser(req, res) {
    res.json('getUser route')
}

export async function updateUser(req, res) {
    res.json('updateUser route')
}

export async function generateOTP(req, res) {
    res.json('generateOTP route')
}

export async function verifyOTP(req, res) {
    res.json('verifyOTP route')
}

export async function createResetSession(req, res) {
    res.json('createResetSession route')
}

export async function resetPassword(req, res) {
    res.json('resetPassword route')
}