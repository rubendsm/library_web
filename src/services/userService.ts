import { UpdatePasswordDTO } from '@/models/User';
import axiosInstance from './apiConfig';

const userService = {
    // Get all users
    getAllUsers: async () => {
        try {
            return await axiosInstance.get('/user/all');
        } catch (error) {
            throw new Error(`Error getting users: ${error}`);
        }
    },

    // Get all users by library id
    getAllUsersByLibraryId: async (libraryId: number) => {
        try {
            return await axiosInstance.get(`/user/all/library/${libraryId}`);
        } catch (error) {
            throw new Error(`Error getting users: ${error}`);
        }
    },

    updateUserPassword: async(userId: number, updateData: UpdatePasswordDTO) => {
        try {
            return await axiosInstance.put(`/user/edit/${userId}/password`, updateData);
        } catch (error) {
            throw new Error(`Error updating user password: ${error}`)
        }
    }
};

export default userService;
