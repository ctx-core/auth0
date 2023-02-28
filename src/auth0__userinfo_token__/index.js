import { neql_atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').auth0__userinfo_token__} */
export const auth0__userinfo_token__ = be_('auth0_userinfo_auth0_token_',
	()=>
		neql_atom_(undefined))
export {
	auth0__userinfo_token__ as auth0_userinfo_auth0_token__,
	auth0__userinfo_token__ as auth0_userinfo_auth0_token$_,
}
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @returns {import('./index.d.ts').auth0__userinfo_token_T}
 * @private
 */
export function auth0__userinfo_token_(ctx) {
  return auth0__userinfo_token__(ctx).$
}
