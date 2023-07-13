import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Define a higher-order component (HOC) for route protection
const withAuth = (WrappedComponent) => {
    const ProtectedComponent = (props) => {
        // Check if the user is authenticated
        const isAuthenticated = false;
        useEffect(() => {
            // Redirect to the login page if the user is not authenticated
            if (!isAuthenticated) {
                // You can customize the login route according to your application
                return <Navigate to="/login" />;
            }
        }, [isAuthenticated]);

        // Render the protected component if the user is authenticated
        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };

    return ProtectedComponent;
};

export default withAuth;
