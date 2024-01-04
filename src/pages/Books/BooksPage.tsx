import Book from '@mui/icons-material/Book';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, TextField, Typography } from "@mui/material";
import { GenericBook } from "@/models/GenericBook";
import { useEffect, useState } from "react";
import genericBookService from '@/services/genericBookService';
import GridTable from '@/components/table/GridTable';
import { useTranslation } from 'react-i18next';

export const screenName = "pages.BooksPage."

const BooksPage = () => {
    const { t } = useTranslation();
    const [data, setData] = useState<GenericBook[]>([]);
    const [filteredData, setFilteredData] = useState<GenericBook[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [update, setUpdate] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);

        const fetchData = async () => {
            try {
                const response = await genericBookService.getAllGenericBooks();

                if (response.status === 200) {
                    setData(response.data);
                    setFilteredData(response.data);
                }

            } catch (error: any) {
                setError(error.message);
            }
        };

        setIsLoading(false);
        fetchData();
        setUpdate(false);
    }, [update]);

    useEffect(() => {
        // Filter data based on the search query
        if (Array.isArray(data)) {
            const filteredBooks = data.filter(genericBook =>
                genericBook.isbn.includes(searchQuery) ||
                genericBook.title.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredData(filteredBooks);
        }
    }, [searchQuery]);

    const handleAddButton = () => {
        navigate('add');
    };

    const handleMenuClose = () => {
        setUpdate(true);
    };

    return (
        <div>
            <Typography variant="h3" style={{ justifyContent: 'center', marginBottom: '20px' }} >
                <Book sx={{ color: 'black', width: '75px', height: '75px' }} />
                { t(screenName + "title") }
            </Typography>
            <Button variant="contained" color='secondary' onClick={handleAddButton}>
                { t(screenName + "createButton") }
            </Button>
            <Divider sx={{ my: 2 }} />
            {isLoading ? (
                <img src="src\assets\loading.svg" alt="Loading" style={{ width: '60px', height: '60px' }} />
            ) : (
                <>
                    {data.length != 0 ? (
                        <>
                            <TextField
                                id='searchQuery'
                                name='searchQuery'
                                sx={{ mt: 2, width: '25%' }}
                                label={ t(screenName + "query.label") }
                                variant="outlined"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <GridTable rows={filteredData as []} columnName={'genericBooks'} onMenuClose={handleMenuClose} />
                        </>
                    ) : (
                        <>
                            {!error && <h2>{ t(screenName + "query.error") }</h2>}
                            {error && <h2>{error}</h2>}
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default BooksPage;