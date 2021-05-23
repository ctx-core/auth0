import type { auth0_client_id_body_I } from './auth0_client_id_body_I';
import type { auth0_grant_type_body_I } from './auth0_grant_type_body_I';
import type { auth0_client_id_optional_body_I } from './auth0_client_id_body_I';
export declare function _password_realm_body_b</*@formatter:off*/ Ctx extends object, In extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I, Out extends password_realm_body_T = password_realm_body_T>(ctx: Ctx, _key: (base: string) => keyof Ctx): _password_realm_body_T<Out>;
export interface password_realm_body_T extends auth0_grant_type_body_I, auth0_client_id_body_I {
    realm: string;
    connection: string;
}
export declare type _password_realm_body_T<Out extends password_realm_body_T = password_realm_body_T> = (data: Partial<Out>) => Out;
