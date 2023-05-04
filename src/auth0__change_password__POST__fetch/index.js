import { fetch__template_pair_ } from '@ctx-core/fetch-undici'
import { auth0__authorization__verify } from '../auth0__authorization__verify/index.js'
import { auth0__token__ } from '../auth0__token__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
export const [
	auth0__change_password__POST__fetch,
	auth0__change_password__POST__fetch2
] = fetch__template_pair_(
	/**
	 * @param {Ctx}ctx
	 * @param {string}password
	 * @returns {Promise<Response>}
	 */
	async (
		ctx,
		password
	)=>{
		const body = { password }
		const Authorization = await auth0__authorization__verify(ctx, auth0__token__(ctx).$)
		return fetch('/auth/change_password', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization
			},
			body: JSON.stringify(body)
		})
	})
export {
	auth0__change_password__POST__fetch2 as auth0__change_password__fetch_post,
	auth0__change_password__POST__fetch2 as post_auth0_auth_change_password,
}
