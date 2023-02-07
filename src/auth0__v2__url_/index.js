import { AUTH0_DOMAIN__ } from '@ctx-core/auth0'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {string}
 */
export function auth0__v2__url_(ctx) {
	return `https://${AUTH0_DOMAIN__(ctx).$}/api/v2/`
}
