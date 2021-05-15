import { _b, B } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { fetch } from '@ctx-core/fetch'
import { $auth0_token_T, auth0_token_b, auth0_token_ctx_I } from './auth0_token_b'
import {
	_verify_id_token_header_authorization_b, _verify_id_token_header_authorization_ctx_I
} from './_verify_id_token_header_authorization_b'
export const post_auth0_auth_change_password_b:post_auth0_auth_change_password_b_T = _b('post_auth0_auth_change_password', (
	ctx:post_auth0_auth_change_password_ctx_I
)=>{
	const auth0_token = auth0_token_b(ctx)
	const _verify_id_token_header_authorization = _verify_id_token_header_authorization_b(ctx)
	return post_auth0_auth_change_password as post_auth0_auth_change_password_T
	async function post_auth0_auth_change_password(password:string) {
		const body = { password }
		const Authorization = await _verify_id_token_header_authorization(
			get(auth0_token) as $auth0_token_T
		)
		return (
			fetch(
				'/auth/change_password',
				{
					method: 'POST',
					headers:
						{
							'Content-Type': 'application/json',
							Authorization,
						},
					body: JSON.stringify(body)
				})
		)
	}
})
export interface post_auth0_auth_change_password_ctx_I
	extends auth0_token_ctx_I,
		_verify_id_token_header_authorization_ctx_I {
	post_auth0_auth_change_password?:post_auth0_auth_change_password_T
}
export type post_auth0_auth_change_password_T = (password:string)=>Promise<Response>
export interface post_auth0_auth_change_password_b_T extends B<post_auth0_auth_change_password_T> {}
