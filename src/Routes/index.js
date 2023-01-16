import "../Styles/global.scss";
import {Routes, Route, BrowserRouter} from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path={"/"}
                    element={<div>Template for Sass</div>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
