import { Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
        <Routes>
            <Route className="auth" element={ <h2>Auth</h2> } />
        </Routes>
    );
}

export default Layout;