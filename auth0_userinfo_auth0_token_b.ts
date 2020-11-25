import { _b } from '@ctx-core/object'
import type { maybe } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
export function auth0_userinfo_auth0_token_b<I extends unknown = unknown, C extends object = object>(ctx: C) {
	return _b<Writable<maybe<I>>, C>('auth0_userinfo_auth0_token', ()=>
		writable(null))(ctx)
}
export {
	auth0_userinfo_auth0_token_b as b__auth0_userinfo_auth0_token,
}
