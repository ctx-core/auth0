import { be_, assign } from '@ctx-core/object'
import { AUTH0_CLIENT_ID$_b } from './AUTH0_CLIENT_ID$_b.js'
export function auth0_body__b(ctx, key) {
	return be_(key, ()=>{
		const AUTH0_CLIENT_ID$ = AUTH0_CLIENT_ID$_b(ctx)
		return auth0_body_
		/**
		 * @param {auth0_client_id_optional_body_I}data
		 * @private
		 */
		function auth0_body_(data) {
			return assign(
				{ client_id: AUTH0_CLIENT_ID$.$ },
				data
			)
		}
	})(ctx)
}
export {
	auth0_body__b as _auth0_body_b
}
