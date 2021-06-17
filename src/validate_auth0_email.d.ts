import type { auth0_token_error_I } from './auth0_token_error$_b';
export declare function validate_auth0_email(data: validate_auth0_email_data_T): validate_auth0_email_error_T | null;
export interface validate_auth0_email_data_T {
    email: string;
}
export declare type validate_auth0_email_error_T = auth0_token_error_I;
