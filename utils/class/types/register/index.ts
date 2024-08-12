export interface RegisterApiType {
    register(userData: RegisterType): Promise<RegisterResponseType> 
}

export interface RegisterCostumerType {
    register({
        userName,
        email,
        password,
    }: RegisterReferenciesType): Promise<void>
}

export interface RegisterReferenciesType {
    userName: globalThis.Ref<string>
    email: globalThis.Ref<string>
    password: globalThis.Ref<string>
}

export interface RegisterType {
    name: string,
	email: string,
	password: string
}

export interface RegisterResponseType {
    success: boolean
    msg: string
    data: Array<
    {
        name: string
        email: string,
        updated_at: string,
        created_at: string,
        id: number
    }>
}