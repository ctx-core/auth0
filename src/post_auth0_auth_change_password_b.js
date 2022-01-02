import { fetch } from '@ctx-core/fetch'
import { be_ } from '@ctx-core/object'
import { auth0_token$_b } from './auth0_token$_b.js'
import { verify_id_token_header_authorization__b } from './verify_id_token_header_authorization__b.js'
const key = 'post_auth0_auth_change_password'
/** @type {import('./post_auth0_auth_change_password_b.d.ts').post_auth0_auth_change_password_b} */
export const post_auth0_auth_change_password_b = be_(key, (ctx)=>{
	const auth0_token$ = auth0_token$_b(ctx)
	const verify_id_token_header_authorization_ = verify_id_token_header_authorization__b(ctx)
	return post_auth0_auth_change_password
	async function post_auth0_auth_change_password(password) {
		const body = {
			password
		}
		const Authorization = await verify_id_token_header_authorization_(auth0_token$.$)
		return fetch('/auth/change_password', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization
			},
			body: JSON.stringify(body)
		})
	}
})
//# sourceMappingURL=post_auth0_auth_change_password_b.js.map
