import { B } from '@ctx-core/object';
import { logout_auth0_token_error_ctx_I } from './logout_auth0_token_error_b';
import type { $auth0_token_T } from './auth0_token_b';
export declare const _verify_id_token_header_authorization_b: _verify_id_token_header_authorization_b_T;
export interface _verify_id_token_header_authorization_ctx_I extends logout_auth0_token_error_ctx_I {
    _verify_id_token_header_authorization?: _verify_id_token_header_authorization_T;
}
export declare type _verify_id_token_header_authorization_T = ($auth0_token: $auth0_token_T) => Promise<string>;
export interface _verify_id_token_header_authorization_b_T extends B<_verify_id_token_header_authorization_T> {
}
