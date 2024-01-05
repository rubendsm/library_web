import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import libraryService from '@/services/libraryService';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [libraryName, setLibraryName] = React.useState<string>(() => {
        return localStorage.getItem('libraryName') || "";
    });
    const { user, logoutUser } = useAuth();
    const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = React.useState<null | HTMLElement>(null);

    const screenName = "components.SideBar."

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
        setLanguageMenuAnchorEl(null);
    };

    useEffect(() => {
        if (!user) return;

        const savedLibraryName = localStorage.getItem('libraryName');

        if (savedLibraryName) {
            // Se o nome da biblioteca estiver no localStorage, use-o
            setLibraryName(savedLibraryName);
        } else {
            // Caso contrário, faça o pedido para obter o nome da biblioteca
            const fetchData = async () => {
                try {
                    const response = await libraryService.getLibraryById(user.LibraryId);

                    if (response.status === 200) {
                        const fetchedLibraryName = response.data.libraryAlias;
                        setLibraryName(fetchedLibraryName);

                        // Salve o nome da biblioteca no localStorage para uso futuro
                        localStorage.setItem('libraryName', fetchedLibraryName);
                    }
                } catch (error) {
                    console.error(error);
                    // setIsLoading(false);
                }
            }

            fetchData();
        }
    }, [user]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleUserMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setUserMenuAnchorEl(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setUserMenuAnchorEl(null);
    };

    const handleSignOut = () => {
        localStorage.removeItem('libraryName');
        // Lógica para fazer logout
        // ...
        logoutUser();
        // Feche o menu após ação
        handleUserMenuClose();
    };

    const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLanguageMenuAnchorEl(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setLanguageMenuAnchorEl(null);
    };

    return (
        <>
            {user ? (
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open} style={{ background: '#F89300' }}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                {/* TODO: Código para obter a biblioteca assim que seja feito o login */}
                                {libraryName}
                            </Typography>
                            <IconButton
                                color="inherit"
                                edge="end"
                                onClick={handleUserMenuOpen}
                                sx={{ marginLeft: 'auto' }}
                            >
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu
                                id="account-menu"
                                anchorEl={userMenuAnchorEl}
                                open={Boolean(userMenuAnchorEl)}
                                onClose={handleUserMenuClose}
                            >
                                <MenuItem component={Link} to="/profile" onClick={handleUserMenuClose}>
                                    {t(screenName + 'profileMenu.profile')}
                                </MenuItem>
                                <MenuItem onClick={handleSignOut}>
                                    {t(screenName + 'profileMenu.signOut')}
                                </MenuItem>
                            </Menu>
                            <IconButton
                                color="inherit"
                                edge="end"
                                onClick={handleLanguageMenuOpen}
                                sx={{ marginLeft: 4 }}
                            >
                                <LanguageIcon />
                            </IconButton>
                            <Menu
                                id="language-menu"
                                anchorEl={languageMenuAnchorEl}
                                open={Boolean(languageMenuAnchorEl)}
                                onClose={handleLanguageMenuClose}
                            >
                                <MenuItem onClick={() => handleLanguageChange('en')}>
                                    {t('English')}
                                </MenuItem>
                                <MenuItem onClick={() => handleLanguageChange('pt')}>
                                    {t('Portuguese')}
                                </MenuItem>
                            </Menu>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            {[
                                { text: t(screenName + "drawer.mainPage"), to: '/', icon: <HomeIcon /> },
                                { text: t(screenName + "drawer.users"), to: '/users', icon: <PeopleIcon /> },
                                { text: t(screenName + "drawer.books"), to: '/books', icon: <BookIcon /> },
                                { text: t(screenName + "drawer.requests"), to: '/requests', icon: <AssignmentIcon /> },
                                { text: t(screenName + "drawer.transfers"), to: '/transfers', icon: <SwapHorizIcon /> },
                                { text: t(screenName + "drawer.notifications"), to: '/notifications', icon: <NotificationsIcon /> },
                                { text: t(screenName + "drawer.authors"), to: '/authors', icon: <PersonIcon /> },
                                { text: t(screenName + "drawer.categories"), to: '/categories', icon: <CategoryIcon /> },
                            ].map(({ text, to, icon }, index) => (
                                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        component={Link}
                                        to={to}
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
            ) : (
                null
            )}
        </>
    );
}