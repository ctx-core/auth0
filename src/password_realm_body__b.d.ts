import { Ctx } from '@ctx-core/object'
import type { auth0_client_id_body_I, auth0_client_id_optional_body_I, auth0_grant_type_body_I } from './_types'
export declare function password_realm_body__b<Out extends password_realm_body_T = password_realm_body_T>(ctx:Ctx, key:string, auth0_body_fn:(body:auth0_client_id_optional_body_I)=>Out):password_realm_body__T<Out>;
export interface password_realm_body_T extends auth0_grant_type_body_I, auth0_client_id_body_I {
	realm:string;
	connection:string;
}
export declare type password_realm_body__T<Out extends password_realm_body_T = password_realm_body_T> = (data:Partial<Out>)=>Out;
export { password_realm_body__b as _password_realm_body_b }
