import { _auth0_body_Ctx } from './_auth0_body_b';
import type { auth0_client_id_body_I } from './auth0_client_id_body_I';
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I';
export interface _password_realm_body_Ctx<O extends password_realm_body_T = password_realm_body_T> extends _auth0_body_Ctx {
    _password_realm_body?: _password_realm_body_T<O>;
}
export declare function _password_realm_body_b<O extends password_realm_body_T = password_realm_body_T>(ctx: _password_realm_body_Ctx<O>): _password_realm_body_T<O>;
export interface password_realm_body_T extends auth0_grant_type_body_I, auth0_client_id_body_I {
    realm: string;
    connection: string;
}
export declare type _password_realm_body_T<O extends password_realm_body_T = password_realm_body_T> = (data: Partial<O>) => O;
