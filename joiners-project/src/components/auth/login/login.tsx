import {  useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginModel from "../../../models/loginModel";
import authService from "../../../services/authService";

const Login = () =>{
    const {register, handleSubmit, formState} = useForm<LoginModel>()
    const navigate = useNavigate()
    	const login = async (loginInfo:LoginModel) =>{
            console.log("login info", loginInfo);
            await authService.login(loginInfo);
            navigate('/home-page')
        }

    return(
			<div className="login">
				<form onSubmit={handleSubmit(login)}>
					<label  aria-hidden="true" htmlFor="chk">Login</label>
					<input type="text" name="username" placeholder="Username" 
                    {...register('username',
                    {
                        required: { value: true, message: "Missing  username", },
                        minLength: { value: 2, message: 'username too short' },
                        maxLength: { value: 20, message: "username too long!" }
                    }
                    )}
                    />
                    <span>{formState.errors.username?.message.toString()}</span>
					<input type="password" name="pswd" placeholder="Password" 
                    {...register('password',
                    {
                        required: { value: true, message: "Missing  password", },
                        minLength: { value: 2, message: 'Password too short' },
                        maxLength: { value: 20, message: "Password too long!" }
                    }
                    )}/>
                    <span>{formState.errors.password?.message.toString()}</span>
					<button type="submit">Login</button>
				</form>
			</div>

    )

}
export default Login;