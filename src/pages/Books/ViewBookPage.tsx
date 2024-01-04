import { useAuth } from "@/context/AuthContext";
import { GenericBook } from "@/models/GenericBook";
import genericBookService from "@/services/genericBookService";
import Book from "@mui/icons-material/Book";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { screenName as topScreen } from "./BooksPage";

const ViewBookPage = () => {
    const { t } = useTranslation();
    const [queryParameters] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [genericBook, setGenericBook] = useState<GenericBook | undefined>(undefined);
    const [error, setError] = useState(null);

    const screenName = topScreen + "viewPage.";

    const { user } = useAuth();

    useEffect(() => {
        setIsLoading(true);

        const isbn: string = parseInt(queryParameters.get("isbn")?.toString() || "0").toString();
        const fetchData = async () => {
            try {
                const response = await genericBookService.getGenericBookByISBN(isbn);

                if (response.status === 200) {
                    setGenericBook(response.data);
                }

            } catch (error: any) {
                setError(error.message);
            }
        };

        setIsLoading(false);
        fetchData();
    }, []);

    const formattedDate = genericBook?.datePublished ? new Date(genericBook?.datePublished).toLocaleDateString() : 'N/A';
    const availableCopies = genericBook?.physicalBooks?.find(library => library.libraryId === Number(user.LibraryId))?.count || 0;

    const informationArray = [
        { name: t(screenName + "infoArray.isbn"), value: genericBook?.isbn },
        { name: t(screenName + "infoArray.pageNumber"), value: genericBook?.pageNumber },
        { name: t(screenName + "infoArray.pubDate"), value: formattedDate },
        { name: t(screenName + "infoArray.lan"), value: genericBook?.language.languageAlias },
        { name: t(screenName + "infoArray.authors"), value: genericBook?.authors.map((author: any) => author.authorName).join(', ') },
        { name: t(screenName + "infoArray.categories"), value: genericBook?.categories.map((category: any) => category.categoryName).join(', ') },
        { name: t(screenName + "infoArray.availability"), value: availableCopies },
    ];

    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div>
            <Typography variant="h3" style={{ justifyContent: 'center', marginBottom: '20px' }} >
                <Book sx={{ color: 'black', width: '75px', height: '75px' }} />
                { t(screenName + "title") }
            </Typography>
            <Button variant="contained" color='secondary' onClick={handleBackClick}>
                { t(screenName + "backButton") }
            </Button>
            <Divider sx={{ my: 2 }} />
            {isLoading ? (
                <img src="src\assets\loading.svg" alt="Loading" style={{ width: '60px', height: '60px' }} />
            ) : (
                <>
                    {genericBook != undefined ? (
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <img src={genericBook?.thumbnail} alt={genericBook?.title} style={{ width: '100%', height: 'auto' }} />
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Typography gutterBottom variant="h4" sx={{ color: 'black', fontWeight: 'bold' }}>{genericBook?.title}</Typography>
                                <Divider sx={{ my: 2 }} />
                                <Typography variant="h5" sx={{ mr: 1, color: 'black', fontWeight: 'bold' }}>{ t(screenName + "description") }</Typography>
                                <Typography gutterBottom variant="h6">{genericBook?.description}</Typography>
                                <Grid container spacing={2}>
                                    {informationArray.map((info, index) => (
                                        <Grid key={index} item xs={12} sx={{ display: 'flex' }}>
                                            <Typography variant="h5" sx={{ mr: 1, color: 'black', fontWeight: 'bold' }}>{info.name}:</Typography>
                                            <Typography variant="h6">{info.value}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    ) : (
                        <>
                            {!error && <h2>No Book found</h2>}
                            {error && <h2>{error}</h2>}
                        </>
                    )}
                </>
            )}
        </div >
    );
}

export default ViewBookPage;