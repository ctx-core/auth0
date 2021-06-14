import type { auth0_client_id_body_I, auth0_client_id_optional_body_I } from './auth0_client_id_body_I';
export declare function auth0_body__b</*@formatter:off*/ Ctx extends object, Key extends keyof Ctx, Out extends auth0_client_id_body_I = auth0_client_id_body_I>(ctx: Ctx, key: Key): auth0_body__T<Out>;
export declare type auth0_body__T</*@formatter:off*/ Out extends auth0_client_id_body_I = auth0_client_id_body_I> = (body: auth0_client_id_optional_body_I) => Out;
export { auth0_body__b as _auth0_body_b };
