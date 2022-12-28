import { Route, Routes } from "react-router-dom";
import Auth from "../auth/auth";

const Router = (): JSX.Element => {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Auth />} />
            </Routes>
        </div>
    );
}
export default Router;