import axios from 'axios';
import { toast } from 'sonner';
import { fetchAPI } from './network';

export async function getUserDetails(key: string) {
    const raw = localStorage.getItem("user-data");

    if (!raw) {
        const result = await fetchAPI<UserData>({ url: "/user", method: "GET", authorized: true });

        if (result.error) {
            toast.error(result.error);
        }

        localStorage.setItem("user-data", JSON.stringify(result.data));

        if (key in result.data) {
            return result.data[key];
        }
    }

    const userData: UserData = JSON.parse(raw as string);

    if (key in userData) {
        return userData[key];
    }

    return null;
}

export async function logout() {
    const result = await fetchAPI<{ message: string }>({ url: "/logout", method: "POST", authorized: true });

    if (result.success) {
        localStorage.removeItem('session_token');

        toast.success("Successfully logged out!");
        return true;
    }

    toast.error("Failed to logout");
    return false;
}