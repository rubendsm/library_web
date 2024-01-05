import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface InputNameDialogProps {
    title: string;
    isDialogOpen: boolean;
    onDialogClose: () => void;
    onConfirmButton: () => void;
    currentPasswordChange: (value: string) => void;
    newPasswordChange: (value: string) => void;
}

const UpdatePasswordDialog: React.FC<InputNameDialogProps> = ({
    isDialogOpen,
    onDialogClose,
    onConfirmButton,
    currentPasswordChange: currentPasswordChange,
    newPasswordChange: newPasswordChange
}) => {
    const { t } = useTranslation();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState("");

    const screenName = "components.dialogs.updatePassword.";

    const onCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setCurrentPassword(newValue);
        currentPasswordChange(newValue);
    };

    const onNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setNewPassword(newValue);
        newPasswordChange(newValue);
    };

    const resetParams = () => {
        setCurrentPassword("");
        setNewPassword("");
    };

    return (
        <>
            {/* Input Name Dialog */}
            <Dialog
                open={isDialogOpen}
                onClose={onDialogClose}
                maxWidth="xs"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: '10px',
                    },
                }} >
                <DialogTitle style={{ textAlign: 'center', fontSize: 30 }}>{screenName + "title"}</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        id="current"
                        label={t(screenName + "currentPassword")}
                        type="password"
                        value={currentPassword}
                        onChange={onCurrentPasswordChange}
                        sx={{ mt: 2 }} />
                </DialogContent>
                <DialogContent>
                    <TextField
                        fullWidth
                        id="new"
                        label={t(screenName + "newPassword")}
                        type="password"
                        value={newPassword}
                        onChange={onNewPasswordChange}
                        sx={{ mt: 2 }} />
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                    <Button onClick={() => { onDialogClose(); resetParams(); }} color="primary" variant="contained">
                        {t(screenName + "actions.1")}
                    </Button>
                    <Button onClick={() => { onConfirmButton(); resetParams(); }}
                        disabled={newPassword === ''} color="secondary" variant="contained">
                        {t(screenName + "actions.2")}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default UpdatePasswordDialog;