import type { AxiosResponse } from "axios";
import type { APIResponse, APIConfig, APIError } from '@/services/api/types';

import axiosInstance from '@/services/api/instance';
import { toast } from 'sonner';
import axios from "axios";

class ApiService {
    private static instance: ApiService;

    private constructor() { }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    private handleError(error: unknown): APIError {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            const message = error.response?.data?.message || error.message;

            return {
                message: status ? `Request failed (${status}): ${message}` : `Request failed: ${message}`,
                status
            };
        }

        return {
            message: "An unexpected error occurred"
        };
    }

    async request<T = any>(config: APIConfig): Promise<APIResponse<T>> {
        const { url, method = 'GET', authorized = false, headers = {}, data = null } = config;

        if (authorized) {
            const token = localStorage.getItem("access_token");

            if (!token) {
                toast.error("Authentication required: No access token found");
                return {
                    success: false,
                    data: null as T,
                    error: "No authentication token found"
                };
            }

            headers.Authorization = `Bearer ${token}`;
        }

        try {
            const response: AxiosResponse<T> = await axiosInstance({
                url,
                method,
                headers,
                data
            });

            return {
                success: true,
                data: response.data,
            };
        } catch (error) {
            const apiError = this.handleError(error);

            // Don't show toast for 401 errors (handled by interceptor)
            if (apiError.status !== 401) {
                toast.error(apiError.message);
            }

            return {
                success: false,
                data: null as T,
                error: apiError.message,
            };
        }
    }

    // Convenience methods
    async get<T>(url: string, authorized = false, headers = {}) {
        return this.request<T>({ url, method: 'GET', authorized, headers });
    }

    async post<T>(url: string, data: any, authorized = false, headers = {}) {
        return this.request<T>({ url, method: 'POST', authorized, headers, data });
    }

    async put<T>(url: string, data: any, authorized = false, headers = {}) {
        return this.request<T>({ url, method: 'PUT', authorized, headers, data });
    }

    async delete<T>(url: string, authorized = false, headers = {}) {
        return this.request<T>({ url, method: 'DELETE', authorized, headers });
    }

    async patch<T>(url: string, data: any, authorized = false, headers = {}) {
        return this.request<T>({ url, method: 'PATCH', authorized, headers, data });
    }
}

export const apiService = ApiService.getInstance();