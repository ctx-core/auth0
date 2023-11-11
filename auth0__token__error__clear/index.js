import { auth0__token__error__logout } from '../auth0__token__error__logout/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 */
export function auth0__token__error__clear(ctx) {
	auth0__token__error__logout(ctx, null)
}
export {
	auth0__token__error__clear as clear_auth0_token_error,
}
