import { Route, Routes } from "react-router-dom";
import SignIn from "../auth/login/login";
import Register from "../auth/register/register";
import CreateProject from "../create-project/create-main/createProject";

const Router = (): JSX.Element => {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-project" element={<CreateProject/>}/>
            </Routes>
        </div>
    );
}
export default Router;