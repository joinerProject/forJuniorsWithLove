import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../auth/changePassword";
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
            </Routes>
        </div>
    );
}
export default Router;