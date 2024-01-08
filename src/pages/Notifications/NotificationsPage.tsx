import { Button, Divider, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Notifications } from "@mui/icons-material";
import { useState, useEffect } from "react";
import GridTable from "@/components/table/GridTable";
import { useNavigate } from "react-router-dom";
import { Notification } from "@/models/Notification";
import notificationService from "@/services/notificationService";
import { useAuth } from "@/context/AuthContext";

const NotificationsPage = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<Notification[]>([]);
    const [filteredData, setFilteredData] = useState<Notification[]>([]);
    const [activeNotifications, setActiveNotifications] = useState<Notification[]>([]);
    const [pastNotifications, setPastNotifications] = useState<Notification[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [update, setUpdate] = useState(false);

    const screenName = "pages.NotificationsPage.";
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            try {
                const response = await notificationService.getAllNotificationsByLibraryIdForLibrary(user.LibraryId);

                if (response.status === 200) {
                    setData(response.data);
                    const currentDate = new Date();
                    const activeNotifications = response.data.filter((notification: Notification) => {
                        // Assuming notification.endDate is in "dd/mm/yyyy" format
                        const [day, month, year] = notification.endDate.toString().split('/');
                        const endDate = new Date(`${month}/${day}/${year}`);

                        return endDate > currentDate;
                    });
                    const pastNotifications = response.data.filter((notification: Notification) => {
                        // Assuming notification.endDate is in "dd/mm/yyyy" format
                        const [day, month, year] = notification.endDate.toString().split('/');
                        const endDate = new Date(`${month}/${day}/${year}`);

                        return endDate <= currentDate;
                    });

                    setActiveNotifications(activeNotifications);
                    setPastNotifications(pastNotifications);
                    setFilteredData(activeNotifications);
                }

            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchData();
        setIsLoading(false);
        setUpdate(false);
    }, [update]);

    useEffect(() => {
        // Filter data based on the search query
        if (Array.isArray(activeNotifications)) {
            const filteredRequests = activeNotifications.filter(notification =>
                notification.notificationId.toString().includes(searchQuery)
            );
            setFilteredData(filteredRequests);
        }
    }, [searchQuery, activeNotifications]);

    const handleAddButton = () => {
        //navigate('/notifications/add');
    }

    const handleMenuClose = () => {
        setUpdate(true);
    }

    return (
        <div>
            <Typography variant="h3" style={{ justifyContent: 'center', marginBottom: '20px' }} >
                <Notifications sx={{ color: 'black', width: '75px', height: '75px' }} />
                {t(screenName + "title")}
            </Typography>
            <Button variant="contained" color='secondary' onClick={handleAddButton}>
                {t(screenName + "addButton")}
            </Button>
            <Divider sx={{ my: 2 }} />
            <>
                {isLoading ? (
                    <img src="src\assets\loading.svg" alt="Loading" style={{ width: '60px', height: '60px' }} />
                ) : (
                    <>
                        {data.length != 0 ? (
                            <>
                                {activeNotifications.length != 0 ? (
                                    < div >
                                        <h2>{t(screenName + "activeNotifications.title")}</h2>
                                        <TextField
                                            id='searchQuery'
                                            name='searchQuery'
                                            sx={{ mt: 2, width: '25%' }}
                                            label={t(screenName + "activeNotifications.query.label")}
                                            variant="outlined"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <GridTable rows={filteredData as []} columnName={'notifications'} onMenuClose={handleMenuClose} />
                                    </div>
                                ) : (
                                    <h2>{t(screenName + "activeNotifications.query.error")}</h2>
                                )}
                                <Divider sx={{ my: 2 }} />
                                {pastNotifications.length != 0 ? (
                                    <div>
                                        <h2>{t(screenName + "pastNotifications.title")}</h2>
                                        <GridTable rows={pastNotifications as []} columnName={'notifications'} onMenuClose={handleMenuClose} />
                                    </div>
                                ) : (
                                    <h2>{t(screenName + "pastNotifications.error")}</h2>
                                )}
                            </>
                        ) : (
                            <>
                                {!error && <h2>{t(screenName + "error")}</h2>}
                                {error && <h2>{error}</h2>}
                            </>
                        )}
                    </>
                )}
            </>
        </div>
    );
}

export default NotificationsPage;