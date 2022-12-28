import axios from "axios";
import LoginModel from "../models/loginModel";
import UserModel from "../models/userModel";
import { LoginAction, RegisterAction } from "../redux/AuthState";
import store from "../redux/Store";
import config from "../utils/config";

class AuthService {

    public async register(userInfo:UserModel){
        const registerForm = new FormData();
        registerForm.append('username', userInfo.username);
        registerForm.append('email', userInfo.email);
        registerForm.append('password', userInfo.password);
        registerForm.append('linkedinProfile', userInfo.linkedinProfile);
        (userInfo.phone && registerForm.append('phone', userInfo.phone));
        const response = await axios.post(config.registerUrl, registerForm);
        const token = response.data;
        store.dispatch(RegisterAction(token));
        return;
    }

    public async login(loginInfo:LoginModel) {
        const loginForm = new FormData();
        loginForm.append('username', loginInfo.username)
        loginForm.append('password', loginInfo.password)
        const response = await axios.post(config.loginUrl, loginForm);
        const token = response.data;
        store.dispatch(LoginAction(token));
        return;
    }
}
const authService = new AuthService();
export default authService;