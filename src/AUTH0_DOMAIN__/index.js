import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').AUTH0_DOMAIN__} */
export const AUTH0_DOMAIN__ = be_('AUTH0_DOMAIN__',
	()=>atom_(process.env.AUTH0_DOMAIN))
export { AUTH0_DOMAIN__ as AUTH0_DOMAIN$_ }
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @param AUTH0_DOMAIN{string}
 */
export function AUTH0_DOMAIN__set(ctx, AUTH0_DOMAIN) {
  AUTH0_DOMAIN__($).$ = AUTH0_DOMAIN
}
