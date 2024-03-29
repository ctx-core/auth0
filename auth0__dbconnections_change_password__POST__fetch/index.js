import { fetch, fetch__template_pair__new } from 'ctx-core/fetch'
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN/index.js'
/** @typedef {import('./index.d.ts').auth0__dbconnections_change_password__fetch_T} */
export const [
	auth0__dbconnections_change_password__POST__fetch,
	auth0__dbconnections_change_password__POST__fetch2,
] = fetch__template_pair__new(
	/**
	 * @param {ctx_T}ctx
	 * @param {auth0__dbconnections_change_password__fetch_T}body
	 */
	(ctx, body)=>
		fetch(
			`https://${AUTH0_DOMAIN_(ctx)}/dbconnections/change_password`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			})
)
export {
	auth0__dbconnections_change_password__POST__fetch2 as auth0__dbconnections_change_password__fetch_post,
	auth0__dbconnections_change_password__POST__fetch2 as post_auth0_dbconnections_change_password,
}
