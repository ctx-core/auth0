import { logout_auth0_token_error_ctx_I } from './logout_auth0_token_error_b';
import type { $auth0_token_T } from './auth0_token_b';
export interface _verify_id_token_header_authorization_ctx_I extends logout_auth0_token_error_ctx_I {
    _verify_id_token_header_authorization?: _verify_id_token_header_authorization_T;
}
export declare const _verify_id_token_header_authorization_b: import("@ctx-core/object").Be<_verify_id_token_header_authorization_ctx_I, "_verify_id_token_header_authorization">;
export declare type _verify_id_token_header_authorization_T = ($auth0_token: $auth0_token_T) => Promise<string>;
