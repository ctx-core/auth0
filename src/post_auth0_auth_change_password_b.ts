import { B, be_ } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { fetch } from '@ctx-core/fetch'
import { auth0_token_T, auth0_token$_b } from './auth0_token$_b'
import { verify_id_token_header_authorization__b } from './verify_id_token_header_authorization__b'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'post_auth0_auth_change_password'
export const post_auth0_auth_change_password_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const auth0_token$ = auth0_token$_b(ctx)
	const verify_id_token_header_authorization_ = verify_id_token_header_authorization__b(ctx)
	return post_auth0_auth_change_password as post_auth0_auth_change_password_T
	async function post_auth0_auth_change_password(password:string) {
		const body = { password }
		const Authorization = await verify_id_token_header_authorization_(
			get(auth0_token$) as auth0_token_T
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
