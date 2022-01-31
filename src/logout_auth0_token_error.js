import { auth0_token_error$_ } from './auth0_token_error$_.js'
import { logout_auth0_token } from './logout_auth0_token.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {Auth0Error|logout_auth0_token_error_param_T|null}error
 */
export function logout_auth0_token_error(ctx, error) {
	auth0_token_error$_(ctx).$ = error
	if (error) {
		logout_auth0_token(ctx)
	}
}
