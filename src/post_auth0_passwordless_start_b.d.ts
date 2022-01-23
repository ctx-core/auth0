import { B } from '@ctx-core/object'
import type { Auth0Error } from 'auth0-js'
import type { auth0_client_id_optional_body_I } from './_types'
export declare const post_auth0_passwordless_start_b:B<post_auth0_passwordless_start_T>
export interface post_auth0_passwordless_start_optional_body_T extends auth0_client_id_optional_body_I {
	connection:string;
	send:string;
	email:string;
}
export interface post_auth0_passwordless_start_body_T extends post_auth0_passwordless_start_optional_body_T {
	client_id:string;
}
export declare type post_auth0_passwordless_start_T =
	(body:post_auth0_passwordless_start_body_T)=>Promise<[null|Auth0Error, Response]>;
