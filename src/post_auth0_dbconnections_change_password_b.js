import { fetch } from '@ctx-core/fetch'
import { be_ } from '@ctx-core/object'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
const key = 'post_auth0_dbconnections_change_password'
/** @type {import('./post_auth0_dbconnections_change_password_b.d.ts').post_auth0_dbconnections_change_password_b} */
export const post_auth0_dbconnections_change_password_b = be_(key, (ctx)=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return post_auth0_dbconnections_change_password
	function post_auth0_dbconnections_change_password(body) {
		const promise = fetch(`https://${AUTH0_DOMAIN$.$}/dbconnections/change_password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
		return promise
	}
})
//# sourceMappingURL=post_auth0_dbconnections_change_password_b.js.map
