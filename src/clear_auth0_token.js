import { set_auth0_token } from './set_auth0_token.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {null|undefined}value
 */
export function clear_auth0_token(ctx, value = null) {
	set_auth0_token(ctx, value)
}
