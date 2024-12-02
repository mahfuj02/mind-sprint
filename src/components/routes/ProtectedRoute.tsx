// components/ProtectedRoute.tsx 
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectPath?: string;
}

const ProtectedRoute = ({ 
  children, 
  requireAuth = false,
  redirectPath = '/dashboard'
}: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;