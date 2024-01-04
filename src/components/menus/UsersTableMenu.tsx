import { Assignment, Gavel } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { User } from "@/models/User";
import { useTranslation } from "react-i18next";

interface UsersTableMenuProps {
    selectedRow: User;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

const UsersTableMenu: React.FC<UsersTableMenuProps> = ({ selectedRow, anchorEl, onClose }) => {
    const { t } = useTranslation();

    const screenName = "components.menus.users.";

    const navigate = useNavigate();

    const handleShowRequests = () => {
        navigate(`/users/requests?userId=${selectedRow.userId}`);
    };

    const handleShowPunishments = () => {
        navigate(`/users/punishments?userId=${selectedRow.userId}`);
    };

    return (
        <>
            <Menu
                id="rowMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={onClose} >
                <MenuItem onClick={handleShowRequests}>
                    <Assignment sx={{ marginRight: 1 }} /> {t(screenName + "1")}
                </MenuItem>
                <MenuItem onClick={handleShowPunishments}>
                    <Gavel sx={{ marginRight: 1 }} /> {t(screenName + "2")}
                </MenuItem>
            </Menu>
        </>
    );
};

export default UsersTableMenu;