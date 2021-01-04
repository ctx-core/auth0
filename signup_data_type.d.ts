import type { auth0_password_confirmation_data_type } from './auth0_password_confirmation_data_type';
export interface signup_data_type extends auth0_password_confirmation_data_type {
    email: string;
    password: string;
    password_confirmation?: string;
}
