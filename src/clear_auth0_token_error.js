import { logout_auth0_token_error } from './logout_auth0_token_error.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
function clear_auth0_token_error(ctx) {
	logout_auth0_token_error(ctx, null)
}
