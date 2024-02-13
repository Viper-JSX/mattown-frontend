import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import getUserById from "../../utilities/getUserById";
import { profileViewModes } from "../../variousThings/constants";
import { useEffect, useState } from "react";

const UserProfile = () => {
    const { id } = useParams(); //User ID
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        getUserById(id)
        .then((user) => {

            if (!user) {
                console.log("User does not exist");
                return;
            }

            setUser(user);
            console.log("Fetched user", data);
        })
        .catch((err) => {
            console.log("Error when fetching user", err);      
        })
    }, []);

    console.log("Received user", user);

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