export interface APIResponse<T> {
    data: T;
    success: boolean;
    error?: string;
}

export interface APIError {
    message: string;
    status?: number;
}

export interface APIConfig {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    authorized?: boolean;
    headers?: Record<string, string>;
    data?: any;
}