import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import getUserById from "../../utilities/getUserById";
import { profileViewModes } from "../../variousThings/constants";
import { useEffect, useState } from "react";

const UserProfile = () => {
    const { id } = useParams(); //User ID
    const [ user, setUser ] = useState(null);

    useEffect(async () => {
       const data = getUserById(id);
       setUser(data);
    }, []);

    return (
        <div className="user-profile">
            Guest user
            { user?.firstname }
        </div>
    );
}

export default UserProfile;