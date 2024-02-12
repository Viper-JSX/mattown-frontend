import { Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm/AuthForm";
import UserProfile from "./UserProfile/UserProfile";

const Layout = ({
    handleSignIn,
    handleSignUp
}) => {
    return (
        <Routes>
            <Route path="" element={ <h2>Feed</h2> } />
            <Route 
                path="/auth" 
                element={ 
                    <AuthForm 
                        handleSignIn={handleSignIn}
                        handleSignUp={handleSignUp}
                    /> 
                } 
            />

            <Route path="/me" element={ <UserProfile /> } />
            <Route path="/users/:id" element={ <UserProfile /> } />

            <Route path="/communities" element={ <h2>Communities</h2> }>
                <Route path="" element={ <h2>Communities list</h2> } />
                <Route path=":id" element={ <h2>Community</h2> } />
            </Route>
        </Routes>
    );
}

export default Layout;