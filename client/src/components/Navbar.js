import React from 'react'
import {Box,Typography,useTheme} from '@mui/material'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem('authToken'))
  //handle logout
  const handleLogout = async() =>{
      try{
         await axios.post('/api/v1/auth/logout')
         localStorage.removeItem("authToken")
         toast.success('logout success')
         navigate('/login')
      }
      catch (error){
        console.log(error)
      }
  }
  return (
    <Box
     widht = {'100%'} 
     backgroundColor = {'cyan'}
     p ="1rem 20%" 
    textAlign={'center'} 
    sx ={{boxShadow:3 ,mb:2}}>
        <Typography variant='h1' color ={"#2D0378"} 
        fontWeight={"bold"}>
        INTELI-BOT
        </Typography>
        {
          loggedIn ? (
            <>
          <NavLink to= "/" p={1}> 
           Home
          </NavLink>
          <NavLink to= "/login"  onClick ={handleLogout} p={1}> 
          Logout
          </NavLink>
          </>
          ):(
           <> 
          <div className='button-view'>
            <Link to ="/register"><div className='buttonx'>Sign Up</div></Link>
            <Link to ="/login"><div className='buttonx'>Sign In</div></Link>
          </div>
          </>
          )
        }
    </Box>
  )
}

export default Navbar
