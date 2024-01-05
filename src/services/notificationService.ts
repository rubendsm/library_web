import axiosInstance from './apiConfig';
import { Notification } from '@/models/Notification';

const notificationService = {
    // Get all Notifications
    getAllNotificationsByLibraryIdForLibrary: async (libraryId: number) => {
        try {
            return await axiosInstance.get(`/notification/all/library/${libraryId}/library`);
        } catch (error) {
            throw new Error(`Error getting notifications: ${error}`);
        }
    },
}

export default notificationService;