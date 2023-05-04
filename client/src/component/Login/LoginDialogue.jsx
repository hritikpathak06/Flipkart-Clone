import React, { useContext, useState } from 'react'
import "./login.css"
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography } from '@mui/material';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const accountInitialValue = {
  login: {
    view: 'login'
  },
  signup: {
    view: 'signup'
  }
}

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
}

const loginInitialValues = {
  username: '',
  password: ''
}

const LoginDialogue = ({ open, setOpen, setAccountInfo }) => {
  const [account, ToggleAccount] = useState(accountInitialValue.login)
  const [signup, setSignup] = useState(signupInitialValues)
  const [login, setLogin] = useState(loginInitialValues)
  // const[setAccount] = useContext(DataContext)

  const handleClose = () => {
    setOpen(false)
  }

  const toggleSignup = () => {
    console.log("Hekko0 heritik")
    ToggleAccount(accountInitialValue.signup)
  }

  const toggleLogin = () => {
    ToggleAccount(accountInitialValue.login)
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
    console.log(signup)
  }

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccountInfo(signup.username);
  }

  const onLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const loginUser = async () => {
    let res = await authenticateLogin(login)
    if (!res) {
      alert("Invalid Details")
      return;
    }
    if (res.status === 200) {
      alert("Login successfull")
      handleClose()
    }
  }



  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box className="main">
          <Box className="mainDiv">
            <Box className="leftBox">
              <Typography variant='h5'>Login</Typography>
              <Typography style={{ marginTop: "20px" }}>Get access to your flipkart account and have a fun</Typography>
            </Box>
            {
              account.view === 'login' ?
                <Box className="wrapperBox">
                  <TextField variant='standard'
                    onChange={onLoginChange}
                    name='username'
                    label="Enter Email/Mobile No" />
                  <TextField variant='standard'
                    onChange={onLoginChange}
                    name='password'
                    label="Enter Password" />
                  <Typography style={{ marginTop: "20px" }}>By continuing you agree the flipkart's terms and conditions</Typography>
                  <Button style={{ marginTop: "20px", border: "1px solid black", background: " #FF5349" }} onClick={loginUser}>Login</Button>
                  <Typography style={{ textAlign: "center", marginTop: "10px" }}>OR</Typography>
                  <Button className='btnLogin' style={{ marginTop: "20px", border: "1px solid black" }}>Request OTP</Button>
                  <Typography
                    onClick={toggleSignup}
                    style={{ marginTop: "20px", color: " #2874f0", fontWeight: "bolder", textAlign: "center", cursor: "pointer" }}>New to flipkart? Create an account</Typography>
                </Box>
                :
                <Box className="wrapperBox" style={{ flex: "1" }}>
                  <TextField onChange={onInputChange} name='firstname' variant='standard' label="Enter Firstname" />
                  <TextField onChange={onInputChange} name='lastname' variant='standard' label="Enter Lastname" />
                  <TextField onChange={onInputChange} name='username' variant='standard' label="Enter Username" />
                  <TextField onChange={onInputChange} name='email' variant='standard' label="Enter Email" />
                  <TextField onChange={onInputChange} name='password' variant='standard' label="Enter Password" />
                  <TextField onChange={onInputChange} name='phone' variant='standard' label="Enter Phone number" />
                  <Button
                    onClick={signupUser}
                    style={{ marginTop: "20px", border: "1px solid black", background: " #FF5349" }}>Continue</Button>
                  <Typography
                    onClick={toggleLogin}
                    style={{ marginTop: "20px", color: " #2874f0", fontWeight: "bolder", textAlign: "center", cursor: "pointer" }}>Already have an account?</Typography>
                </Box>
            }

          </Box>
        </Box>
      </Dialog>
    </>
  )
}

export default LoginDialogue
