import './EvaluationsPage.css'
import { useState } from 'react';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import EvaluationPageTable from './EvaluationsTable';

export const screenName = "pages.EvaluationsPage."

function EvaluationsPage() {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <>
            <div className='main-container'>
                <Typography
                    variant="h3"
                    component="div"
                    style={{ cursor: 'pointer' }}>
                    <ReviewsIcon sx={{ color: 'black', width: '75px', height: '75px' }} />
                    { t(screenName + "title") }
                </Typography>
                <h6>Nota: old evaluations component</h6>
                <EvaluationPageTable 
                    onSearchChange={handleSearchChange}
                    searchQuery={searchQuery}
                />
            </div>

        </>
    );
}

export default EvaluationsPage;