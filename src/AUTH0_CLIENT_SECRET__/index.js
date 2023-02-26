import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { import_meta_env_ } from '@ctx-core/env'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').AUTH0_CLIENT_SECRET__} */
export const AUTH0_CLIENT_SECRET__ = be_('AUTH0_CLIENT_SECRET__',
	()=>
		atom_(import_meta_env_().AUTH0_CLIENT_SECRET))
/**
 * @param ctx{Ctx}
 * @returns {string}
 */
export function AUTH0_CLIENT_SECRET_(ctx) {
	return AUTH0_CLIENT_SECRET__(ctx).$
}
/**
 * @param ctx{Ctx}
 * @param AUTH0_CLIENT_SECRET{string}
 */
export function AUTH0_CLIENT_SECRET__set(ctx, AUTH0_CLIENT_SECRET) {
	AUTH0_CLIENT_SECRET__(ctx).$ = AUTH0_CLIENT_SECRET
}
