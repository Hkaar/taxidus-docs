import type { AxiosResponse, AxiosRequestConfig } from "axios";
import axios from "axios";
import { toast } from "sonner";

interface APIResponse<T> {
    data: T;
    success: boolean;
    error?: string;
}

export async function fetchAPI<T = any>({
    url,
    method = 'GET',
    authorized = false,
    headers = {},
    data = null,
}: {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    authorized?: boolean;
    headers?: Record<string, string>;
    data?: any;
}): Promise<APIResponse<T>> {
    const apiURL = import.meta.env.PUBLIC_API_URL;
    const config: AxiosRequestConfig = {
        headers: {},
        method,
    };

    config.headers = { ...headers };

    if (data) {
        config.data = data;
    }

    if (authorized) {
        const token = localStorage.getItem("session_token");

        if (!token) {
            toast.error("Authentication required: No session token found");
            return { success: false, data: null as T, error: "No authentication token found" };
        }

        config.headers.Authorization = `Bearer ${token}`;
    }

    try {
        const response: AxiosResponse<T> = await axios(`${apiURL}/${url}`, config);

        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            const message = error.response?.data?.message || error.message;

            const errorMessage = status
                ? `Request failed (${status}): ${message}`
                : `Request failed: ${message}`;

            toast.error(errorMessage);

            return {
                success: false,
                data: null as T,
                error: errorMessage,
            };
        }

        const errorMessage = "An unexpected error occurred";
        toast.error(errorMessage);

        return {
            success: false,
            data: null as T,
            error: errorMessage,
        };
    }
}