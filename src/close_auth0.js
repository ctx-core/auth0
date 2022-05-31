import { auth0_opened__ } from './auth0_opened__.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function close_auth0(ctx) {
	auth0_opened__(ctx).$ = null
}
