import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Menu,
    MenuItem,
    TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import evaluationService from '../../services/evaluationService';
import { Evaluation } from '../../models/Evaluation';

interface EvaluationPageTableProps {
    onSearchChange: (searchQuery: string) => void;
    searchQuery: string;
}

const EvaluationPageTable: React.FC<EvaluationPageTableProps> = ({
    onSearchChange,
    searchQuery
}) => {

    const [data, setData] = useState<Evaluation[]>([]);
    const [filteredData, setFilteredData] = useState<Evaluation[]>([]);
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await evaluationService.getAllEvaluations();
                setData(response.data);
                setFilteredData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Certifique-se de que data é uma array antes de filtrar
        if (Array.isArray(data)) {
            const filteredEvaluations = data.filter(evaluation =>
                evaluation.evaluationScore.toString().includes(searchQuery) ||
                evaluation.genericBook.title.toLowerCase().includes(searchQuery) ||
                evaluation.user.userName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filteredEvaluations);
        }
    }, [searchQuery, data]);

    const columns: GridColDef[] = [
        { field: 'evaluationId', headerName: 'ID', type: 'number', flex: 1, align: 'center', headerAlign: 'center' },
        { field: 'evaluationDescription', headerName: 'Description', flex: 3, align: 'center', headerAlign: 'center' },
        { field: 'evaluationScore', headerName: 'Score', type: 'number', flex: 1, align: 'center', headerAlign: 'center' },
        { field: 'isbn', headerName: 'ISBN', flex: 1, align: 'center', headerAlign: 'center', renderCell: (params) => params.row.genericBook?.isbn || 'N/A', },
        { field: 'title', headerName: 'Book Title', type: 'number', flex: 2, align: 'center', headerAlign: 'center', renderCell: (params) => params.row.genericBook?.title || 'N/A', },
        { field: 'userId', headerName: 'User ID', type: 'number', flex: 1, align: 'center', headerAlign: 'center', renderCell: (params) => params.row.user?.userId || 'N/A', },
        { field: 'userName', headerName: 'User Name', flex: 1, align: 'center', headerAlign: 'center', renderCell: (params) => params.row.user?.userName || 'N/A', },
        {
            field: 'actions', headerName: 'Actions', flex: 1, align: 'center', headerAlign: 'center', sortable: false, renderCell: (params) => (
                <Button variant="outlined" onClick={(event) => handleMenuOpen(event, params.row)}>
                    Actions
                </Button>
            ),
        }
    ];

    const updateEvaluationData = async () => {
        // Update the state by fetching the updated data
        const response = await evaluationService.getAllEvaluations();
        setData(response.data);
        setFilteredData(response.data);
    }

    const handleDeleteEvaluation = async () => {
        try {
            await evaluationService.deleteEvaluation(selectedId);
            await updateEvaluationData();
        } catch (error) {
            // Handle error
            console.error(error);
        }
        setDeleteConfirmationOpen(false);
    };

    const handleDeleteClick = () => {
        handleMenuClose();
        setDeleteConfirmationOpen(true);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, row: any) => {
        setMenuAnchor(event.currentTarget);
        setSelectedId(row.evaluationId);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    const handleDeleteConfirmationClose = () => {
        setDeleteConfirmationOpen(false);
    };


    return (
        <div>
            {/* O Operador ) : ( )} funciona como if else no tsx dentro do return*/}
            {isLoading ? (
                <img src="src\assets\loading.svg" alt="Loading" style={{ width: '60px', height: '60px' }} />
            ) : (
                <>
                    {data.length === 0 ? (
                        <div>No Evaluations</div>
                    ) : (
                        <>
                            {/* Search Bar */}
                            <div className='text-button-container' >
                                <TextField
                                    sx={{ mt: 2 }}
                                    label="Search for a evaluation (Score, Book Title or User Name)"
                                    variant="outlined"
                                    value={searchQuery}
                                    onChange={(event) => onSearchChange(event.target.value)}
                                    className='textfield'
                                />

                            </div>

                            {/* DataGrid */}
                            <div>
                                <DataGrid
                                    rows={filteredData}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 100 },
                                        },
                                    }}
                                    pageSizeOptions={[50, 100]}
                                    getRowId={(row: Evaluation) => row.evaluationId.toString()}
                                />
                            </div>
                            <Menu
                                id="rowMenu"
                                anchorEl={menuAnchor}
                                open={Boolean(menuAnchor)}
                                onClose={handleMenuClose}
                            >
                                <Divider />
                                <MenuItem onClick={handleDeleteClick}>
                                    <DeleteIcon sx={{ marginRight: 1 }} /> Delete
                                </MenuItem>
                            </Menu>

                            {/* Delete Confirmation Dialog */}
                            <Dialog open={isDeleteConfirmationOpen} onClose={handleDeleteConfirmationClose}>
                                <DialogTitle>{selectedId ? `Confirm Deletion for Evaluation ID ${selectedId}` : 'Confirm Deletion'}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Are you sure you want to delete this evaluation?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleDeleteConfirmationClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleDeleteEvaluation} color="secondary">
                                        Delete
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default EvaluationPageTable;