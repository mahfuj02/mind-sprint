import { Navigate } from 'react-router-dom';
import { useAuth } from "../../context/authContext";
import React from 'react';

const  AdminRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, loading } = useAuth();

    if (loading) return null;
    
    if (!user || user.role !== 'admin') {
      return <Navigate to="/" replace />;
    }
  
    return <>{children}</>;
  };

  export default AdminRoute;