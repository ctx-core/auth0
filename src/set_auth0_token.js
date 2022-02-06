import { auth0_token_json$_ } from './auth0_token_json$_.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./auth0_token$_.d.ts').auth0_token_T}auth0_token
 */
export function set_auth0_token(ctx, auth0_token) {
	auth0_token_json$_(ctx).$ = JSON.stringify(auth0_token)
}
