type BASE_PATHS_PROPS = {
    AUTH: string,
    APP: string
}

type AUTH_PATHS_PROPS = {
    SIGNIN: string,
    SIGNUP: string,
    FORGOT_PASSWORD:string
}

export const BASE_PATHS:BASE_PATHS_PROPS = {
    AUTH: "auth",
    APP: " "
}

export const AUTH_PATHS:AUTH_PATHS_PROPS = {
    SIGNUP: "signup",
    SIGNIN: "sign-in",
    FORGOT_PASSWORD:"forgot-password"
}