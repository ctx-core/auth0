import { auth0_opened__ } from '../auth0_opened__/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function open_auth0_login(ctx) {
	auth0_opened__(ctx).$ = 'login'
}
