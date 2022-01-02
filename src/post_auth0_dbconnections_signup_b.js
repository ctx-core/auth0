import { fetch } from '@ctx-core/fetch'
import { be_ } from '@ctx-core/object'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
const key = 'post_auth0_dbconnections_signup'
/** @type {import('./post_auth0_dbconnections_signup_b.d.ts').post_auth0_dbconnections_signup_b} */
export const post_auth0_dbconnections_signup_b = be_(key, (ctx)=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return post_auth0_dbconnections_signup
	// https://auth0.com/docs/libraries/custom-signup
	function post_auth0_dbconnections_signup(body) {
		return fetch(`https://${AUTH0_DOMAIN$.$}/dbconnections/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
	}
})
//# sourceMappingURL=post_auth0_dbconnections_signup_b.js.map
