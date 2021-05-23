import type { AUTH0_CLIENT_ID_T } from './AUTH0_CLIENT_ID_b'
import type { _verify_id_token_header_authorization_T } from './_verify_id_token_header_authorization_b'
import type { logout_auth0_token_error_T } from './logout_auth0_token_error_b'
import type { auth0_token_error_T } from './auth0_token_error_b'
import type { logout_auth0_token_T } from './logout_auth0_token_b'
import type { set_auth0_token_T } from './set_auth0_token_b'
import type { auth0_token_json_T } from './auth0_token_json_b'
import type { auth0_change_password_opened_T } from './auth0_change_password_opened_b'
import type { auth0_opened_T } from './auth0_opened_b'
import type { auth0_email_T } from './auth0_email_b'
import type { auth0_userinfo_T } from './auth0_userinfo_b'
import type { auth0_token_T } from './auth0_token_b'
import type { clear_auth0_token_T } from './clear_auth0_token_b'
import type { in_auth0_token_T } from './in_auth0_token_b'
import type { AUTH0_DOMAIN_T } from './AUTH0_DOMAIN_b'
import type { auth0_userinfo_auth0_token_T } from './auth0_userinfo_auth0_token_b'
import type { auth0_closed_T } from './auth0_closed_b'
import type { auth0_forgot_password_check_email_opened_T } from './auth0_forgot_password_check_email_opened_b'
import type { auth0_forgot_password_opened_T } from './auth0_forgot_password_opened_b'
import type { auth0_login_opened_T } from './auth0_login_opened_b'
import type { auth0_logout_msg_T } from './auth0_logout_msg_b'
import type { auth0_opened_class_T } from './auth0_opened_class_b'
import type { auth0_signup_opened_T } from './auth0_signup_opened_b'
import type { auth0_token_error_txt_T } from './auth0_token_error_txt_b'
import type { AUTH0_URL_T } from './AUTH0_URL_b'
import type { auth0_userinfo_ctx_T } from './auth0_userinfo_ctx_b'
import type { clear_auth0_token_error_T } from './clear_auth0_token_error_b'
import type { close_auth0_T } from './close_auth0_b'
import type { get_jwks_json_T } from './get_jwks_json_b'
import type { is_auth0_loggedin_T } from './is_auth0_loggedin_b'
import type { is_auth0_loggedout_T } from './is_auth0_loggedout_b'
import type { open_auth0_forgot_password_T } from './open_auth0_forgot_password_b'
import type { open_auth0_forgot_password_check_email_T } from './open_auth0_forgot_password_check_email_b'
import type { open_auth0_login_T } from './open_auth0_login_b'
import type { open_auth0_signup_T } from './open_auth0_signup_b'
import type { post_auth0_auth_change_password_T } from './post_auth0_auth_change_password_b'
import type { post_auth0_dbconnections_change_password_T } from './post_auth0_dbconnections_change_password_b'
import type { post_auth0_dbconnections_signup_T } from './post_auth0_dbconnections_signup_b'
import type { post_auth0_oauth_token_T } from './post_auth0_oauth_token_b'
import type { post_auth0_passwordless_start_T } from './post_auth0_passwordless_start_b'
export interface auth0_Ctx {
	_verify_id_token_header_authorization?:_verify_id_token_header_authorization_T
	auth0_change_password_opened?:auth0_change_password_opened_T
	AUTH0_CLIENT_ID?:AUTH0_CLIENT_ID_T
	AUTH0_DOMAIN?:AUTH0_DOMAIN_T
	auth0_closed?:auth0_closed_T
	auth0_email?:auth0_email_T
	auth0_forgot_password_check_email_opened?:auth0_forgot_password_check_email_opened_T
	auth0_forgot_password_opened?:auth0_forgot_password_opened_T
	auth0_login_opened?:auth0_login_opened_T
	auth0_logout_msg?:auth0_logout_msg_T
	auth0_opened?:auth0_opened_T
	auth0_opened_class?:auth0_opened_class_T
	auth0_signup_opened?:auth0_signup_opened_T
	auth0_token_error?:auth0_token_error_T
	auth0_token?:auth0_token_T
	auth0_token_error_txt?:auth0_token_error_txt_T
	auth0_token_json?:auth0_token_json_T
	AUTH0_URL?:AUTH0_URL_T
	auth0_userinfo?:auth0_userinfo_T
	auth0_userinfo_auth0_token?:auth0_userinfo_auth0_token_T
	auth0_userinfo_ctx?:auth0_userinfo_ctx_T
	clear_auth0_token?:clear_auth0_token_T
	clear_auth0_token_error?:clear_auth0_token_error_T
	close_auth0?:close_auth0_T
	get_jwks_json?:get_jwks_json_T
	in_auth0_token?:in_auth0_token_T
	is_auth0_loggedin?:is_auth0_loggedin_T
	is_auth0_loggedout?:is_auth0_loggedout_T
	logout_auth0_token?:logout_auth0_token_T
	logout_auth0_token_error?:logout_auth0_token_error_T
	open_auth0_forgot_password?:open_auth0_forgot_password_T
	open_auth0_forgot_password_check_email?:open_auth0_forgot_password_check_email_T
	open_auth0_login?:open_auth0_login_T
	open_auth0_signup?:open_auth0_signup_T
	post_auth0_auth_change_password?:post_auth0_auth_change_password_T
	post_auth0_dbconnections_change_password?:post_auth0_dbconnections_change_password_T
	post_auth0_dbconnections_signup?:post_auth0_dbconnections_signup_T
	post_auth0_oauth_token?:post_auth0_oauth_token_T
	post_auth0_passwordless_start?:post_auth0_passwordless_start_T
	set_auth0_token?:set_auth0_token_T
}
