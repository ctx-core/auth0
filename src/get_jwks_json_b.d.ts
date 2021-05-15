import { B } from '@ctx-core/object';
import { AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b';
export declare const get_jwks_json_b: get_jwks_json_b_T;
export interface get_jwks_json_ctx_I extends AUTH0_DOMAIN_ctx_I {
    get_jwks_json?: get_jwks_json_T;
}
export declare type get_jwks_json_T = () => Promise<Response>;
export interface get_jwks_json_b_T extends B<get_jwks_json_T> {
}
