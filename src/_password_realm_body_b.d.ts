import { B } from '@ctx-core/object';
import { _auth0_body_ctx_I } from './_auth0_body_b';
import type { auth0_client_id_body_I } from './auth0_client_id_body_I';
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I';
export declare function _password_realm_body_b<O extends password_realm_body_T = password_realm_body_T>(ctx: _password_realm_body_ctx_I): _password_realm_body_T<O>;
export interface _password_realm_body_ctx_I extends _auth0_body_ctx_I {
    _password_realm_body?: _password_realm_body_T;
}
export interface password_realm_body_T extends auth0_grant_type_body_I, auth0_client_id_body_I {
    realm: string;
    connection: string;
}
export declare type _password_realm_body_T<O extends password_realm_body_T = password_realm_body_T> = (data: Partial<O>) => O;
export interface _password_realm_body_b_T<O extends password_realm_body_T = password_realm_body_T> extends B<_password_realm_body_T<O>> {
}
