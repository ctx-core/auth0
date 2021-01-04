import type { auth0_client_id_body_type, auth0_client_id_optional_body_type } from './auth0_client_id_body_type';
export declare function _auth0_body_b<I extends auth0_client_id_optional_body_type = auth0_client_id_optional_body_type, O extends auth0_client_id_body_type = auth0_client_id_body_type>(ctx: any): _auth0_body_type<I, O>;
export declare type _auth0_body_type<I extends auth0_client_id_optional_body_type = auth0_client_id_optional_body_type, O extends auth0_client_id_body_type = auth0_client_id_body_type> = (body: I) => O;
