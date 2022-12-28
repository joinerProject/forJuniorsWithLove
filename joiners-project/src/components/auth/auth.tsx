import { UseTabRootSlotProps } from '@mui/base';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import UserModel from '../../models/userModel';
import authService from '../../services/authService';
import './auth.css'
import Login from './login/login';
import Register from './register/register';

const Auth = () => {

    return (
    <div className='auth'>
	    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
		<Register/>
		<Login/>
	</div>
    </div>
 )

}
export default Auth;