import { toast } from 'sonner';
import { apiService } from '@/services/api/APIService';

export async function getUserDetails(key: string) {
    const raw = localStorage.getItem("user-data");

    if (!raw) {
        const result = await apiService.get<UserData>("/user", true);

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
    const result = await apiService.post("/logout", {}, true);

    if (result.success) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        toast.success("Successfully logged out!");
        return true;
    }

    toast.error("Failed to logout");
    return false;
}