import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { id } = useParams(); //User ID
    const profileViewMode = Boolean(id); //If there is an id it means that user views other user's profile, otherwise user views their own profile. ***Redo the logic in the future

    return (
        <div className="user-profile">
            User
        </div>
    );
}

export default UserProfile;