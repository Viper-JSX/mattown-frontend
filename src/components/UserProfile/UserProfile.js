import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import getUserById from "../../utilities/getUserById";
import { profileViewModes } from "../../variousThings/constants";

const UserProfile = () => {
    const { id } = useParams(); //User ID
    const profileViewMode = Boolean(id) ? profileViewModes.guest : profileViewModes.own; //If there is an id it means that user views other user's profile, otherwise user views their own profile. ***Redo the logic in the future

    const user = useSelector((state) => profileViewMode === profileViewModes.own ? "own" : "guest" /*state.user : getUserById("123")*/);

    console.log(user);

    return (
        <div className="user-profile">
            User
        </div>
    );
}

export default UserProfile;