import { auth0_opened__ } from './auth0_opened__.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function open_auth0_signup(ctx) {
	auth0_opened__(ctx).$ = 'signup'
}
