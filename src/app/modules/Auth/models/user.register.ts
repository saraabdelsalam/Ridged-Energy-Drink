export interface userRegisterRequest{
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
}

export interface userRegisterResponse {
    success: boolean;
    message: string;
    data: {
        userId: number;
        email: string;
        verificationToken: string;
    };
    statusCode: number;
    errors: any;
}
