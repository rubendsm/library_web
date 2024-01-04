import './App.css'

import SideBar from '@/components/SideBar/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LibrarianFrontPage from '@/pages/FrontPages/LibrarianFrontPage/LibrarianFrontPage';
import { PrivateRoute } from '@/utils/PrivateRoute'
import { AuthProvider } from '@/context/AuthContext';
import EvaluationsPage from '@/pages/Evaluations/EvaluationsPage';
import Status404 from '@/pages/Status/Status404';
import AddBookPage from '@/pages/Books/AddBookPage/AddBookPage';
import EditBookPage from '@/pages/Books/EditBookPage/EditBookPage';

import AuthorsPage from '@/pages/Authors/AuthorsPage';
import BooksPage from '@/pages/Books/BooksPage';
import ViewBookPage from '@/pages/Books/ViewBookPage';
import BookCopiesPage from './pages/Books/BookCopiesPage';
import CategoriesPage from '@/pages/Categories/CategoriesPage';
import LoginPage from '@/pages/Login/LoginPage';
import AddRequestPage from '@/pages/Requests/AddRequestPage';
import RequestsPage from '@/pages/Requests/RequestsPage';
import AddTransferPage from '@/pages/Transfers/AddTransferPage';
import TransfersPage from '@/pages/Transfers/TransfersPage';
import UsersPage from '@/pages/Users/UsersPage';
import UsersPunishmentsPage from '@/pages/Users/UsersPunishmentsPage';
import UsersRequestsPage from '@/pages/Users/UsersRequestsPage';
import NotificationsPage from '@/pages/Notifications/NotificationsPage';
import ProfilePage from './pages/Profile/ProfilePage';
import AdminFrontPage from './pages/FrontPages/AdminFrontPage/AdminFrontPage';

function App() {

  const routes = [
    {
      path: "/login",
      element: <LoginPage />,
      requiresAuth: false,
    },
    {
      path: "/",
      element: <LibrarianFrontPage />,
      requiresAuth: true,
    },
    {
      path: "/users",
      element: <UsersPage />,
      requiresAuth: true,
    },
    {
      path: "/users/punishments",
      element: <UsersPunishmentsPage />,
      requiresAuth: true,
    },
    {
      path: "/users/requests",
      element: <UsersRequestsPage />,
      requiresAuth: true,
    },
    {
      path: "/requests",
      element: <RequestsPage />,
      requiresAuth: true,
    },
    {
      path: "/requests/add",
      element: <AddRequestPage />,
      requiresAuth: true,
    },
    {
      path: "/transfers",
      element: <TransfersPage />,
      requiresAuth: true,
    },
    {
      path: "/transfers/add",
      element: <AddTransferPage />,
      requiresAuth: true,
    },
    {
      path: "/authors",
      element: <AuthorsPage />,
      requiresAuth: true,
    },
    {
      path: "/categories",
      element: <CategoriesPage />,
      requiresAuth: true,
    },
    {
      path: "/books",
      element: <BooksPage />,
      requiresAuth: true,
    },
    {
      path: "books/view",
      element: <ViewBookPage />,
      requiresAuth: true,
    },
    {
      path: "books/add",
      element: <AddBookPage />,
      requiresAuth: true,
    },
    {
      path: "books/edit",
      element: <EditBookPage />,
      requiresAuth: true,
    },
    {
      path: "/books/physical-books",
      element: <BookCopiesPage />,
      requiresAuth: true,
    },
    {
      path: "/evaluations",
      element: <EvaluationsPage />,
      requiresAuth: true,
    },
    {
      path: "/notifications",
      element: <NotificationsPage />,
      requiresAuth: true,
    },
    {
      path: "*",
      element: <Status404 />,
      requiresAuth: true,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
      requiresAuth: true,
    },
    {
      path: "/adm",
      element: <AdminFrontPage />,
      requiresAuth: true
    }
  ];


  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <div className="left-column">
            <SideBar />
          </div>
          <div className="right-column">
            <div className="screen">
              <Routes>
                {routes.map((route) => {
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        route.requiresAuth ? (
                          <PrivateRoute>{route.element}</PrivateRoute>
                        ) : (
                          route.element
                        )
                      } />
                  );
                })}
              </Routes>
            </div>
          </div>
        </AuthProvider>
      </Router>
    </div >
  );
}

export default App