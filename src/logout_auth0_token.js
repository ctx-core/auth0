import { set_auth0_token } from './set_auth0_token.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function logout_auth0_token(ctx) {
	set_auth0_token(ctx, null)
}
