import { Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
        <Routes>
            <Route path="" element={ <h2>Home page</h2> } />
            <Route path="/auth" element={ <h2>Auth</h2> } />
        </Routes>
    );
}

export default Layout;