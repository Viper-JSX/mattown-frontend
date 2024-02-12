import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((state) => state.user.user);

    if (!user) {
        return null;
    }

    return (
        <div className="profile">
            Own profile { user.firstname }
        </div>
    );
}

export default Profile;