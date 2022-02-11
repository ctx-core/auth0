import { clear_auth0_token } from './clear_auth0_token.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function logout_auth0_token(ctx) {
	clear_auth0_token(ctx)
}
