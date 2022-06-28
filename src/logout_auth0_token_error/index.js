import { auth0_token_error__ } from '../auth0_token_error__/index.js'
import { logout_auth0_token } from '../logout_auth0_token/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {Auth0Error|logout_auth0_token_error_param_T|null}error
 */
export function logout_auth0_token_error(ctx, error) {
	auth0_token_error__(ctx).$ = typeof error === 'string' ? {
		error: 'Error',
		error_description: error
	} : error
	if (error) {
		logout_auth0_token(ctx)
	}
}
