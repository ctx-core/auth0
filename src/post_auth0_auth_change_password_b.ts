import { _b, B } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { fetch } from '@ctx-core/fetch'
import { $auth0_token_type, auth0_token_b } from './auth0_token_b'
import { _verify_id_token_header_authorization_b } from './_verify_id_token_header_authorization_b'
export const post_auth0_auth_change_password_b:post_auth0_auth_change_password_b_type = _b('post_auth0_auth_change_password', (ctx)=>{
	const auth0_token = auth0_token_b(ctx)
	const _verify_id_token_header_authorization = _verify_id_token_header_authorization_b(ctx)
	return post_auth0_auth_change_password as post_auth0_auth_change_password_type
	async function post_auth0_auth_change_password(password:string) {
		const body = { password }
		const Authorization = await _verify_id_token_header_authorization(
			get(auth0_token) as $auth0_token_type
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
export type post_auth0_auth_change_password_type = (password:string)=>Promise<Response>
export interface post_auth0_auth_change_password_b_type extends B<post_auth0_auth_change_password_type> {}
