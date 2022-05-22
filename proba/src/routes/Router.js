import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../views/Home";


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<><Home /></>} />
        </Routes>
    </BrowserRouter>
)

export default Router;