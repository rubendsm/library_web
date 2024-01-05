import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Props {
  children: React.ReactNode;
  roles?: string[];
  path: string
}

export const PrivateRoute: React.FC<Props> = ({ children, roles, path }) => {
  const { user } = useAuth();

  const userRole = user["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  const isLibrarian = userRole === 'Librarian';

  if (user) {

    if (path === '/' && isLibrarian) {
      return <Navigate to="/librarian" />;
    } else if (path === '/' && !isLibrarian) {
      return <Navigate to="/admin" />;
    }

    if (roles && roles.includes(userRole)) {
      return <>{children}</>;
    }
    return <Navigate to="/" />;
  }

  return <Navigate to="/login" />;
};
