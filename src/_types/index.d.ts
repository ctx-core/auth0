import type { JwtPayload } from 'jsonwebtoken'
import type { error_o_T } from '@ctx-core/error'
import type { auth0__token_T } from '../auth0__token__'
export interface auth0__client_id__optional_body_T {
	client_id?:string
}
export declare type auth0_client_id_optional_body_I = auth0__client_id__optional_body_T
export interface auth0__client_id__body_T extends auth0__client_id__optional_body_T {
	client_id:string
}
export declare type auth0_client_id_body_I = auth0__client_id__body_T
export interface auth0__error_o_T extends error_o_T {
	auth0_token:auth0__token_T
}
export declare type auth0_error_ctx_I = auth0__error_o_T
export interface auth0__grant_type__body_T {
	grant_type:string
}
export declare type auth0_grant_type_body_I = auth0__grant_type__body_T
export interface auth0__password_confirmation__data_T {
	password:string;
	password_confirmation?:string;
}
export declare type auth0_password_confirmation_data_I = auth0__password_confirmation__data_T
export interface auth0__verified__jwt_token_T extends JwtPayload {
	user_id:string;
	email:string;
	sub?:string;
}
export declare type verified_jwt_token_I = auth0__verified__jwt_token_T
export interface auth0__login_data_T {
	username:string;
	password:string;
}
export declare type login_data_I = auth0__login_data_T
export interface auth0__signup_data_T extends auth0__password_confirmation__data_T {
	email:string;
	password:string;
	password_confirmation?:string;
}
export declare type signup_data_I = auth0__signup_data_T
