import { AUTH0_CLIENT_ID_Ctx } from './AUTH0_CLIENT_ID_b';
import type { auth0_client_id_body_I, auth0_client_id_optional_body_I } from './auth0_client_id_body_I';
export interface _auth0_body_Ctx</*@formatter:off*/ I extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I, O extends auth0_client_id_body_I = auth0_client_id_body_I> extends AUTH0_CLIENT_ID_Ctx {
    _auth0_body?: _auth0_body_T<I, O>;
}
export declare function _auth0_body_b</*@formatter:off*/ I extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I, O extends auth0_client_id_body_I = auth0_client_id_body_I>(ctx: _auth0_body_Ctx<I, O>): _auth0_body_T<I, O>;
export declare type _auth0_body_T</*@formatter:off*/ I extends auth0_client_id_optional_body_I = auth0_client_id_optional_body_I, O extends auth0_client_id_body_I = auth0_client_id_body_I> = (body: I) => O;
