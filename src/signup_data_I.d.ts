import type { auth0_password_confirmation_data_I } from './auth0_password_confirmation_data_I';
export interface signup_data_I extends auth0_password_confirmation_data_I {
    email: string;
    password: string;
    password_confirmation?: string;
}
