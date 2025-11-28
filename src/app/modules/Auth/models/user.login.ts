export interface userLoginRequest{
    Email: string;
    Password: string;
}

export interface userLoginResponse {
    success: boolean;
    message: string;
    data: {
        accessToken: string,
        RefreshToken: string,
        UserId: number,
        Email: string,
        FirstName: string,
        LastName: string,
        Role: string
    };
    statusCode: number;
    errors: any;
}
