import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API_BASE_URL } from "../../app.config";
import { userRegisterRequest, userRegisterResponse } from "./models/user.register";
import { body } from "@primeuix/themes/aura/card";
import { userLoginRequest, userLoginResponse } from "./models/user.login";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private http = inject(HttpClient);
    private baseUrl = inject(API_BASE_URL);

    register(payload: userRegisterRequest) {
        return this.http.post<userRegisterResponse>(`${this.baseUrl}/auth/register`, payload)
    }
    verifyAccount( token: string){
        return this.http.post<any>(`${this.baseUrl}/auth/verify-email`, { token });
    }
    login(payload: userLoginRequest){
        return this.http.post<userLoginResponse>(`${this.baseUrl}/auth/login`, payload);
    }
    forgotPassword(payload: { email: string }){
        return this.http.post<any>(`${this.baseUrl}/auth/forgot-password`, payload);
    }
    resetPassword(payload: { token: string; newPassword: string; confirmPassword: string }){
        return this.http.post<any>(`${this.baseUrl}/auth/reset-password`, payload);
    }
}
