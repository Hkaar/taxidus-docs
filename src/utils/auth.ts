import axios from 'axios';
import { toast } from 'sonner';

export async function logout() {
    const token = localStorage.getItem('session_token');
    const apiURL = import.meta.env.PUBLIC_API_URL;

    if (!token) {
        return false;
    }

    try {
        await axios.post(`${apiURL}/logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        localStorage.removeItem('session_token');

        toast.success("Successfully logged out!");
        return true;
    } catch (error) {
        return false;
    }
}