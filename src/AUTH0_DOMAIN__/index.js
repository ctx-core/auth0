import { import_meta_env_ } from '@ctx-core/env'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').AUTH0_DOMAIN__} */
export const AUTH0_DOMAIN__ = be_('AUTH0_DOMAIN__',
	()=>
		atom_(import_meta_env_().AUTH0_DOMAIN))
export { AUTH0_DOMAIN__ as AUTH0_DOMAIN$_ }
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns{string}
 */
export function AUTH0_DOMAIN_(ctx) {
	return AUTH0_DOMAIN__(ctx).$
}
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @param AUTH0_DOMAIN{string}
 */
export function AUTH0_DOMAIN__set(ctx, AUTH0_DOMAIN) {
	AUTH0_DOMAIN__(ctx).$ = AUTH0_DOMAIN
}
