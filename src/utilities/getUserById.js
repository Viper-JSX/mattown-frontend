import axiosClient from "../axios/client";

const getUserById = async (userId) => {
    const user = await axiosClient.get(`/users/${userId}`);

    console.log("Getting user by id: ", userId);
    return user;
}

export default getUserById;