import { B } from '@ctx-core/object';
import { set_auth0_token_ctx_I } from './set_auth0_token_b';
export declare const logout_auth0_token_b: logout_auth0_token_b_T;
export interface logout_auth0_token_ctx_I extends set_auth0_token_ctx_I {
    logout_auth0_token?: logout_auth0_token_T;
}
export declare type logout_auth0_token_T = () => void;
export interface logout_auth0_token_b_T extends B<logout_auth0_token_T> {
}
