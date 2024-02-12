import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import getUserById from "../../utilities/getUserById";
import { profileViewModes } from "../../variousThings/constants";
import { useEffect, useState } from "react";

const UserProfile = () => {
    const { id } = useParams(); //User ID
    const [ user, setUser ] = useState(null);

    useEffect(async () => {
       const { fetchedUser } = (await getUserById(id)).data;
       setUser(fetchedUser);
    }, []);

    console.log("Received user", user);

    return (
        <div className="user-profile">
            Guest user 
            { id }
        </div>
    );
}

export default UserProfile;