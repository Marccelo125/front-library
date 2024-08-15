import type { FieldContext } from "vee-validate";

export interface LoginApiType {
    login(loginData: LoginDataType): Promise<LoginSuccessResponseType>
}

export interface LoginCostumerType {
    login({email, password}: LoginReferencesType): Promise<LoginSuccessResponseType>
}

export interface LoginReferencesType {
    email: FieldContext<string>
    password: FieldContext<string>
}

export interface LoginDataType {
    email: string;
    password: string;
}

export interface LoginSuccessResponseType {
    user: {
        id: number
        name: string
        email: string
        email_verified_at: null | string
        number: null | string
        created_at: string
        updated_at: string
    },
    token: string
}