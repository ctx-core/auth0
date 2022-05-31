import { auth0_opened__ } from './auth0_opened__.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function open_auth0_forgot_password(ctx) {
	auth0_opened__(ctx).$ = 'forgot_password'
}
