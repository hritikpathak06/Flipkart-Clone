const User = require('../model/userSchema')

const userSignup = async(req,res) => {
  try {

    // console.log(req.body)
    const exist = await User.findOne({username:req.body.username})
    if(exist){
        return res.status(401).json({message:"Username already exist"})
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({message:user})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

const userLogin = async(req,res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

   let user = await User.findOne({username:username, password:password})
   if(user){
    return res.status(200).json(`${username} Login Successfull`)
   }else{
    return res.status(401).json("Invalid Login")
   }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}


module.exports = {userSignup, userLogin}