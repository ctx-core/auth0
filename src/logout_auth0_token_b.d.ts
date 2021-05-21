import { set_auth0_token_ctx_I } from './set_auth0_token_b';
export interface logout_auth0_token_ctx_I extends set_auth0_token_ctx_I {
    logout_auth0_token?: logout_auth0_token_T;
}
export declare const logout_auth0_token_b: import("@ctx-core/object").Be<logout_auth0_token_ctx_I, "logout_auth0_token">;
export declare type logout_auth0_token_T = () => void;
