import { set_auth0_token_Ctx } from './set_auth0_token_b';
export interface logout_auth0_token_Ctx extends set_auth0_token_Ctx {
    logout_auth0_token?: logout_auth0_token_T;
}
export declare const logout_auth0_token_b: import("@ctx-core/object").Be<logout_auth0_token_Ctx, "logout_auth0_token", logout_auth0_token_T>;
export declare type logout_auth0_token_T = () => void;
