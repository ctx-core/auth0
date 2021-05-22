import { AUTH0_DOMAIN_Ctx } from './AUTH0_DOMAIN_b';
export interface get_jwks_json_Ctx extends AUTH0_DOMAIN_Ctx {
    get_jwks_json?: get_jwks_json_T;
}
export declare const get_jwks_json_b: import("@ctx-core/object").Be<get_jwks_json_Ctx, "get_jwks_json", get_jwks_json_T>;
export declare type get_jwks_json_T = () => Promise<Response>;
