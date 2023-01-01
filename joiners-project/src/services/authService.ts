import axios from "axios";
import { ConfirmUser } from "../components/auth/changePassword";
import LoginModel from "../models/loginModel";
import UserModel from "../models/userModel";
import { LoginAction, RegisterAction } from "../redux/AuthState";
import store from "../redux/Store";
import config from "../utils/config";

class AuthService {

    public async register(userInfo:UserModel){
        const registerForm = new FormData();
        console.log('form to submit',registerForm)
        const response = await axios.post(config.registerUrl, userInfo);
        const token = response.data;
        console.log("token", token);
        store.dispatch(RegisterAction(token));
        return;
}
    public async login(loginInfo:LoginModel) {
        const response = await axios.post(config.loginUrl, loginInfo);
        const token = response.data;
        store.dispatch(LoginAction(token));
        return;
    }

    public async confirmUser(confirmInfo:ConfirmUser){
        const response = await axios.post(config.confirmUser, confirmInfo);
        console.log("response.data", response.data);
        return response.data;

    }
}
const authService = new AuthService();
export default authService;