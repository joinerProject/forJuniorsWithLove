import { useState } from 'react';
import './auth.css'

const Auth = () => {

    const [stepOneRegister, setStepOneRegister] = useState<boolean>(true);
	const [isLogin, setIsLogin] = useState<boolean>(false)

    return (
    <div className='auth'>
	    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="signup">
				{stepOneRegister && 
				<form>
					<label aria-hidden="true" htmlFor="chk">Sign up</label>
					<input type="text" name="txt" placeholder="User name"/>
					<input type="email" name="email" placeholder="Email"/>
					<input type="password" name="pswd" placeholder="Password"/>
					<button onClick={()=>setStepOneRegister(false)}>Continue</button>
				</form>}
                {!stepOneRegister && 
                <form>
					<label aria-hidden="true" htmlFor="chk">Sign up</label>
					<input type="text" name="txt" placeholder="Linkedin Profile"/>
					<input type="email" name="email" placeholder="Phone (optional)"/>
					<button>Register</button>
				</form>}
			</div>
			<div className="login">
				<form>
					<label  aria-hidden="true" htmlFor="chk" onClick={()=>setIsLogin(!isLogin)}>Login</label>
					<input type="email" name="email" placeholder="Email"/>
					<input type="password" name="pswd" placeholder="Password"/>
					<button>Login</button>
				</form>
			</div>
	</div>
    </div>
 )

}
export default Auth;