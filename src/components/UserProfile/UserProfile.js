import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import getUserById from "../../utilities/getUserById";
import { profileViewModes } from "../../variousThings/constants";
import { useEffect, useState } from "react";

const UserProfile = () => {
    const { id } = useParams(); //User ID
    const [ user, setUser ] = useState(null);

    useEffect(() => { //try to convert to async/await
        getUserById(id)
        .then((user) => {

            if (!user) {
                console.log("User does not exist");
                return;
            }

            setUser(user);
        })
        .catch((err) => {
            console.log("Error when fetching user", err);      
        })
    }, []);


    if (!user) {
        return null;
    }

    return (
        <div className="user-profile">
            Guest user 
            { user.firstname }
        </div>
    );
}

export default UserProfile;