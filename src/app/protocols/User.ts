export interface User {
    name?: string;
    email: string;
    password: string;
}

export interface LoginResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
