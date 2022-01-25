import { tup } from '@ctx-core/array'
import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { auth0_userinfo$_b } from './auth0_userinfo$_b.js'
import { auth0_userinfo_auth0_token$_b } from './auth0_userinfo_auth0_token$_b.js'
const key = 'auth0_userinfo_ctx$'
/** @type {import('./auth0_userinfo_ctx$_b.d.ts').auth0_userinfo_ctx$_b} */
export const auth0_userinfo_ctx$_b = be_(key, ctx=>
	computed$(
		tup(auth0_userinfo$_b(ctx), auth0_userinfo_auth0_token$_b(ctx)),
		(auth0_userinfo, auth0_userinfo_auth0_token)=>({
			auth0_userinfo,
			auth0_userinfo_auth0_token
		})
	)
)
export { auth0_userinfo_ctx$_b as b__ctx__auth0_userinfo }
