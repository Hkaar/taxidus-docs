import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const apiURL = import.meta.env.PUBLIC_API_URL;

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('session_token');

            if (!token) {
                setLoading(false);
                setIsAuthenticated(false);
                return;
            }

            try {
                await axios.get(`${apiURL}/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setLoading(false);
                setIsAuthenticated(true);
            } catch (error) {
                localStorage.removeItem('session_token');
                setLoading(false);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, [apiURL]);

    return { isAuthenticated, loading };
};

export default useAuth;
