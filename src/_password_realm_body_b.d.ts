import { B } from '@ctx-core/object';
import type { auth0_client_id_body_type } from './auth0_client_id_body_type';
import type { auth0_grant_type_body_type } from './auth0_grant_type_body_type';
export declare function _password_realm_body_b<O extends password_realm_body_type = password_realm_body_type>(ctx: any): _password_realm_body_type<O>;
export interface password_realm_body_type extends auth0_grant_type_body_type, auth0_client_id_body_type {
    grant_type: string;
    realm: string;
    connection: string;
}
export declare type _password_realm_body_type<O extends password_realm_body_type = password_realm_body_type> = (data: Partial<O>) => O;
export interface _password_realm_body_b_type<O extends password_realm_body_type = password_realm_body_type> extends B<_password_realm_body_type<O>> {
}
