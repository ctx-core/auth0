import { auth0_token_json__ } from './auth0_token_json__.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./auth0_token__.d.ts').auth0_token_T}auth0_token
 */
export function set_auth0_token(ctx, auth0_token) {
	auth0_token_json__(ctx).$ = JSON.stringify(auth0_token)
}
