import { Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
        <Routes>
            <Route path="" element={ <h2>Feed</h2> } />
            <Route path="/auth" element={ <h2>Auth</h2> } />

            <Route path="/profile" element={ <h2>User Profile</h2> } />

            <Route path="/communities" element={ <h2>Communities</h2> }>
                <Route path="" element={ <h2>Communities list</h2> } />
                <Route path=":id" element={ <h2>Community</h2> } />
            </Route>
        </Routes>
    );
}

export default Layout;