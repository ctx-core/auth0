import { auth0_opened$_ } from './auth0_opened$_.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function close_auth0(ctx) {
	auth0_opened$_(ctx).$ = null
}
