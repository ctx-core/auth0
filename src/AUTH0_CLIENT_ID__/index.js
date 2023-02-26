import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { import_meta_env_ } from '@ctx-core/env'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').AUTH0_CLIENT_ID__} */
export const AUTH0_CLIENT_ID__ = be_('AUTH0_CLIENT_ID__',
	()=>
		atom_(import_meta_env_().AUTH0_CLIENT_ID))
export { AUTH0_CLIENT_ID__ as AUTH0_CLIENT_ID$_ }
/**
 * @param ctx{Ctx}
 * @returns {string}
 */
export function AUTH0_CLIENT_ID_(ctx) {
	return AUTH0_CLIENT_ID__(ctx).$
}
/**
 * @param ctx{Ctx}
 * @param AUTH0_CLIENT_ID{string}
 */
export function AUTH0_CLIENT_ID__set(ctx, AUTH0_CLIENT_ID) {
	AUTH0_CLIENT_ID__(ctx).$ = AUTH0_CLIENT_ID
}
