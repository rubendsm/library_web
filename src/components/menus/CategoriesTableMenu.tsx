import { Book, Edit, Delete } from "@mui/icons-material";
import { Divider, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputNameDialog from "@/components/dialogs/InputNameDialog";
import SuccessDialog from "@/components/dialogs/SuccessDialog";
import FailureDialog from "@/components/dialogs/FailureDialog";
import { useState } from "react";
import { Category } from "@/models/Category";
import categoryService from "@/services/categoryService";
import { useTranslation } from "react-i18next";

interface CategoriesTableMenuProps {
    selectedRow: Category;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

const CategoriesTableMenu: React.FC<CategoriesTableMenuProps> = ({ selectedRow, anchorEl, onClose }) => {
    const { t } = useTranslation();
    const [isSuccessDialogOpen, setSuccessDialogOpen] = useState(false);
    const [isFailureDialogOpen, setFailureDialogOpen] = useState(false);
    const [isInputNameDialogOpen, setInputNameDialogOpen] = useState(false);
    const [categoryName, setCategoryName] = useState('');

    const screenName = "components.menus.categories.";
    var msg_failure = "components.dialogs.failure.category";
    var msg_sucess = "components.dialogs.sucesss.";

    const navigate = useNavigate();

    const handleEditClick = () => {
        setInputNameDialogOpen(true);
    };

    const handleShowBooksClick = () => {
        //navigate(`/categories/books?categoryId=${selectedRow.categoryId}`);
    };

    const handleDeleteClick = () => { };

    const handleNameChange = (value: string) => {
        setCategoryName(value);
        return value;
    }

    const handleConfirm = async () => {
        handleDialogClose();

        const categoryData = {
            categoryId: selectedRow.categoryId,
            categoryName: categoryName,
        }

        try {
            const response = await categoryService.updateCategory(categoryData);
            console.log("duas batatas"+response.status)

            if (response.status === 201) {
                setSuccessDialogOpen(true);
            } else if (response.status === 400) {
                msg_failure = "components.dialogs.failure.error_400";
                setFailureDialogOpen(true);
            } else if (response.status === 500) {
                msg_failure = "components.dialogs.failure.error_500";
                setFailureDialogOpen(true);
            } else {
                setFailureDialogOpen(true);
            }

        } catch (error) {
            setFailureDialogOpen(true);
        }

        setCategoryName('');
        onClose();
    }

    const handleDialogClose = () => {
        setInputNameDialogOpen(false);
        setSuccessDialogOpen(false);
        setFailureDialogOpen(false);
    }

    return (
        <>
            <Menu
                id="rowMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={onClose}>
                <MenuItem key="edit" onClick={handleEditClick}>
                    <Edit sx={{ marginRight: 1 }} /> {t(screenName + "1")}
                </MenuItem>
                <MenuItem key="showBooks" onClick={handleShowBooksClick}>
                    <Book sx={{ marginRight: 1 }} /> {t(screenName + "2")}
                </MenuItem>
                <Divider />
                <MenuItem key="delete" onClick={handleDeleteClick}>
                    <Delete sx={{ marginRight: 1 }} /> {t(screenName + "3")}
                </MenuItem>
            </Menu>

            {/* Input Name Dialog */}
            <InputNameDialog
                title="Edit category"
                isDialogOpen={isInputNameDialogOpen}
                onDialogClose={handleDialogClose}
                onConfirmButton={handleConfirm}
                inputName={handleNameChange}
                initialInputValue={selectedRow?.categoryName} />

            {/* Render SuccessDialog only when isSuccessDialogOpen is true */}
            {isSuccessDialogOpen && (
                <SuccessDialog
                    isDialogOpen={isSuccessDialogOpen}
                    onDialogClose={handleDialogClose}
                    msg={t(msg_sucess)}
                />
            )}

            {/* Render FailureDialog only when isFailureDialogOpen is true */}
            {isFailureDialogOpen && (
                <FailureDialog
                    isDialogOpen={isFailureDialogOpen}
                    onDialogClose={handleDialogClose}
                    msg={t(msg_failure)}
                />
            )}
        </>
    );
}

export default CategoriesTableMenu;