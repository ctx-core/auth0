import type { auth0_password_confirmation_data_I } from './auth0_password_confirmation_data_I';
import type { $auth0_token_error_I } from './auth0_token_error$_b';
export declare function validate_auth0_password_confirmation(data: auth0_password_confirmation_data_I): false | change_password_error_I | undefined;
export interface change_password_error_I extends $auth0_token_error_I {
    password_confirmation?: string;
}
