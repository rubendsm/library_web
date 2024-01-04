import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
};
