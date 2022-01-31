import { auth0_opened$_ } from './auth0_opened$_.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function open_auth0_login(ctx) {
	auth0_opened$_(ctx).$ = 'login'
}
