import authService from "../../../services/authService";
import UserModel from '../../../models/userModel';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const { register, handleSubmit, formState } = useForm<UserModel>();
    const navigate = useNavigate();
	const sendRegister = async (userInfo:UserModel) =>{
        console.log(userInfo);
		await authService.register(userInfo);
        navigate('/create-project')
	}

    return (
    			<div className="signup">
				<form onSubmit={handleSubmit(sendRegister)}>
					<label aria-hidden="true" htmlFor="chk">Sign up</label>
					<input  type="text" name="txt" placeholder="Username" {...register('username',
                    {
                        required: { value: true, message: "Missing  username", },
                        minLength: { value: 2, message: 'Username too short' },
                        maxLength: { value: 20, message: "Username too long!" }
                    }
                    )}/>
                    <span>{formState.errors.username?.message}</span>
					<input type="email" name="email" placeholder="Email" {...register('email',
                    {
                        required: { value: true, message: "Missing  email", },
                        minLength: { value: 2, message: 'email too short' },
                        maxLength: { value: 20, message: "email too long!" }
                    }
                    )} />
                    <span>{formState.errors.email?.message}</span>
					<input type="password" name="pswd" placeholder="Password" {...register('password',
                    {
                        required: { value: true, message: "Missing  password", },
                        minLength: { value: 2, message: 'password too short' },
                        maxLength: { value: 20, message: "password too long!" }
                    }
                    )}/>
                    <span>{formState.errors.password?.message}</span>
					<input type="text" name="txt" placeholder="Linkedin profile - link" {...register('linkedinProfile',
                    {
                        required: { value: true, message: "Missing  linkedin profile", },
                        minLength: { value: 2, message: 'Linkedin profile too short' },
                        maxLength: { value: 20, message: "Linkedin profile too long!" }
                    }
                    )} />
                    <span>{formState.errors.linkedinProfile?.message}</span>
					<input type="text" name="email" placeholder="Phone (optional)" {...register('phone',
                    {
                        required: { value: true, message: "Missing  phone", },
                        minLength: { value: 2, message: 'Phone too short' },
                        maxLength: { value: 15, message: "Phone too long!" }
                    }
                    )} />
                    <span>{formState.errors.phone?.message}</span>
					<button type='submit'>Register</button>
				</form>
			</div>
)
}
export default Register