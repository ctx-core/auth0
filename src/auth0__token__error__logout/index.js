import { auth0__token__error__set } from '../auth0__token__error__/index.js'
import { auth0__token__logout } from '../auth0__token__logout/index.js'
/** @typedef {import('auth0').TokenResponse}TokenResponse */
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/** @typedef {import('@ctx-core/error').BadCredentialsError}BadCredentialsError */
/** @typedef {import('./index.d.ts').auth0__token__error__logout__param_T}auth0__token__error__logout__param_T */
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {Auth0Error|BadCredentialsError|TokenResponse|auth0__token__error__logout__param_T}error
 */
export function auth0__token__error__logout(
	ctx,
	error
) {
	auth0__token__error__set(ctx,
		typeof error === 'string'
		? {
				error: 'Error',
				error_description: error,
			}
		: error)
	if (error) {
		auth0__token__logout(ctx)
	}
}
export {
	auth0__token__error__logout as logout_auth0_token_error,
}
