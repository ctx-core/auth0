import { AUTH0_DOMAIN__ } from '../AUTH0_DOMAIN__/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @return {string}
 */
export function auth0__v2__url_(ctx) {
	return `https://${AUTH0_DOMAIN__(ctx).$}/api/v2/`
}
