import { AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b';
export interface get_jwks_json_ctx_I extends AUTH0_DOMAIN_ctx_I {
    get_jwks_json?: get_jwks_json_T;
}
export declare const get_jwks_json_b: import("@ctx-core/object").Be<get_jwks_json_ctx_I, "get_jwks_json">;
export declare type get_jwks_json_T = () => Promise<Response>;
