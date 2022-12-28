import UserModel from "../models/userModel";
import jwtDecode from 'jwt-decode';

export class AuthState {
    public user: UserModel = null;
    public token: string;
    constructor() {
        this.token = localStorage.getItem("user")
        if (this.token) {
            this.user = (jwtDecode(this.token) as any).user
        }
    }
}
export enum AuthActionType {
    "Register" = "Register",
    "Login" = "Login",
    "Logout" = "Logout"
}
export interface AuthAction {
    type: AuthActionType,
    payload?: string
}
export function RegisterAction(token: string): AuthAction {
    const action = {
        type: AuthActionType.Register,
        payload: token
    }
    return action;
}
export function LoginAction(token: string): AuthAction {
    const action = {
        type: AuthActionType.Login,
        payload: token
    }
    return action;
}
export function LogoutAction(): AuthAction {
    const action = {
        type: AuthActionType.Logout
    }
    return action;
}
export function AuthReducer(currentState: AuthState = new AuthState(), action: AuthAction): AuthState {
    const newState = { ...currentState }
    switch (action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            const token = action.payload
            newState.user = (jwtDecode(token) as any).user;
            newState.token = token;
            console.log('saved user', newState.user);
            localStorage.setItem("user", token);            
            break;
        case AuthActionType.Logout:
            newState.user = null;
            newState.token = null;
            localStorage.removeItem("user")
    }
    return newState;
}