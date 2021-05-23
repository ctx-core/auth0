import { _b } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { fetch } from '@ctx-core/fetch'
import { $auth0_token_T, auth0_token_b } from './auth0_token_b'
import { _verify_id_token_header_authorization_b } from './_verify_id_token_header_authorization_b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'post_auth0_auth_change_password'
export const post_auth0_auth_change_password_b = _b<auth0_Ctx, typeof key>(key, ctx=>{
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
export type post_auth0_auth_change_password_T = (password:string)=>Promise<Response>
