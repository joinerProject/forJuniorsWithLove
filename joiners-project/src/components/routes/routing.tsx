import { Route, Routes } from "react-router-dom";
import ChangePassword from "../auth/changePassword";
import ForgotPassword from "../auth/confirmUser";
import SignIn from "../auth/login";
import Register from "../auth/register";

const Router = (): JSX.Element => {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/change-password" element={<ChangePassword/>}/>
            </Routes>
        </div>
    );
}
export default Router;