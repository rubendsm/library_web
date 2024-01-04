import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Paper, Grid } from '@mui/material';
import transferService from '@/services/transferService';
import requestService from '@/services/requestService';
import { Transfer, TransferStatus } from '@/models/Transfer';
import { Request, RequestStatus } from '@/models/Request';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const screenName = "pages.LibrarianFrontPage";

function LibrarianFrontPage() {
    const { t } = useTranslation();
    const [libraryName, setLibraryName] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const { user } = useAuth();
    const [pendingTransfers, setPendingTransfers] = useState<number>(0);
    const [pendingRequests, setPendingRequests] = useState<number>(0);

    useEffect(() => {
        /* Informação duplicada ja na toolbar , acho desnecessario
        const fetchData = async () => {
            try {
                const response = await libraryService.getLibraryById(user.LibraryId);

                if (response.status === 200) {
                    setLibraryName(response.data.libraryAlias);
                }

            } catch (error) {
                console.error(error);
            }
        }; */

        const fetchTransfers = async () => {
            try {
                const response = await transferService.getAllTransfersByLibraryId(user.LibraryId);

                if (response.status === 200) {
                    const allTransfers = response.data;
                    const pendingTransfersCount = allTransfers.filter(
                        (transfer: Transfer) => transfer.transferStatus === TransferStatus.Pending
                    ).length;

                    setPendingTransfers(pendingTransfersCount);
                }

            } catch (error) {
                console.error(error);
            }
        };

        const fetchRequests = async () => {
            try {
                const response = await requestService.getAllRequestsByLibraryId(user.LibraryId);

                if (response.status === 200) {
                    const allRequests: Request[] = response.data;  // Fornecer explicitamente o tipo
                    const pendingRequestsCount = allRequests.filter(
                        (request: Request) => request.requestStatus === RequestStatus.Pending
                    ).length;

                    setPendingRequests(pendingRequestsCount);
                }
            } catch (error) {
                console.error(error);
            }
        };

        const today = new Date();
        setDate(today.getDate() + " " + t('months.' + today.getMonth()) + " " + today.getFullYear());

        //fetchData();
        fetchTransfers();
        fetchRequests();
    }, [user.LibraryId]);

    return (
        <>
            <Button>
                <Link to="/adm">Admin</Link>
            </Button>
            <h1>{t(screenName + ".header.greeting")}, {user.Name}</h1>
            <p>{date}</p>
            {/*<h1>{t(screenName + ".header.library")} {libraryName}, ID {user.LibraryId}</h1>*/}

            <Container maxWidth="md" style={{ marginTop: '20px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper elevation={3} style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h5" gutterBottom>
                                {t(screenName + ".dashboard.transfers_pending")}
                            </Typography>
                            <Link to="/transfers" style={{ textDecoration: 'none' }}>
                                <Typography variant="h3" className="bold-black">
                                    {pendingTransfers}
                                </Typography>
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={3} style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h5" gutterBottom>
                                {t(screenName + ".dashboard.requests_pending")}
                            </Typography>
                            <Link to="/requests" style={{ textDecoration: 'none' }}>
                                <Typography variant="h3" className="bold-black">
                                    {pendingRequests}
                                </Typography>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>


        </>
    );
}

export default LibrarianFrontPage;
