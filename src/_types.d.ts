import { JwtPayload } from 'jsonwebtoken'
import { error_ctx_I } from '@ctx-core/error'
import { auth0_token_T } from './auth0_token$_'
export interface auth0_client_id_optional_body_I {
	client_id?:string
}
export interface auth0_client_id_body_I extends auth0_client_id_optional_body_I {
	client_id:string
}
export interface auth0_error_ctx_I extends error_ctx_I {
	auth0_token:auth0_token_T
}
export interface auth0_grant_type_body_I {
	grant_type:string
}
export interface auth0_password_confirmation_data_I {
	password:string;
	password_confirmation?:string;
}
export interface jwt_token_decoded_I extends JwtPayload {
	user_id:string;
	email:string;
	sub?:string;
}
export interface login_data_I {
	username:string;
	password:string;
}
export interface signup_data_I extends auth0_password_confirmation_data_I {
	email:string;
	password:string;
	password_confirmation?:string;
}
