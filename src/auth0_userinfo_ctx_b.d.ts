import { B } from '@ctx-core/object';
import { Readable } from '@ctx-core/store';
import { $auth0_userinfo_type } from './auth0_userinfo_b';
import { $auth0_userinfo_auth0_token_type } from './auth0_userinfo_auth0_token_b';
export declare const auth0_userinfo_ctx_b: auth0_userinfo_ctx_b_type;
export interface $auth0_userinfo_ctx_type {
    auth0_userinfo: $auth0_userinfo_type;
    auth0_userinfo_auth0_token: $auth0_userinfo_auth0_token_type;
}
export interface auth0_userinfo_ctx_type extends Readable<$auth0_userinfo_ctx_type> {
}
export interface auth0_userinfo_ctx_b_type extends B<auth0_userinfo_ctx_type> {
}
export { auth0_userinfo_ctx_b as b__ctx__auth0_userinfo };
