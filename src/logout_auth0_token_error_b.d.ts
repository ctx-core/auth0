import { $auth0_token_error_T, auth0_token_error_Ctx } from './auth0_token_error_b';
import { logout_auth0_token_Ctx } from './logout_auth0_token_b';
export interface logout_auth0_token_error_Ctx extends auth0_token_error_Ctx, logout_auth0_token_Ctx {
    logout_auth0_token_error?: logout_auth0_token_error_T;
}
export declare const logout_auth0_token_error_b: import("@ctx-core/object").Be<logout_auth0_token_error_Ctx, "logout_auth0_token_error">;
export declare type logout_auth0_token_error_T = (error: $auth0_token_error_T | null) => void;
