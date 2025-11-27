import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API_BASE_URL } from "../../app.config";
import { userRegisterRequest, userRegisterResponse } from "./models/user.register";
import { body } from "@primeuix/themes/aura/card";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private http = inject(HttpClient);
    private baseUrl = inject(API_BASE_URL);

    register(payload: userRegisterRequest) {
        return this.http.post<userRegisterResponse>(`${this.baseUrl}/auth/register`, payload)
    }

}