/** @typedef {import('./auth0__token__.d.ts').auth0_token_T}auth0_token_T */
import { auth0__Authorization__validation_pair_ } from '../auth0__Authorization__validation_pair_/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {auth0_token_T}auth0__token
 * @return {Promise<string>}
 * @private
 */
export async function auth0__authorization__verify(
	ctx,
	auth0__token
) {
	const [Authorization, error] =
		await auth0__Authorization__validation_pair_(ctx, auth0__token)
	if (error) throw error
	return Authorization
}
