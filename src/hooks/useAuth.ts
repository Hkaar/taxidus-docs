import { useState, useEffect } from 'react';
import { apiService } from '@/services/api/APIService';

const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const accessToken = localStorage.getItem('access_token');

            if (!accessToken) {
                setLoading(false);
                setIsAuthenticated(false);
                return;
            }

            try {
                const response = await apiService.get('user', true);
                setIsAuthenticated(response.success);
            } catch (error) {
                localStorage.removeItem('access_token');
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    return { isAuthenticated, loading };
};

export default useAuth;