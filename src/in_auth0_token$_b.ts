import { B, be_ } from '@ctx-core/object'
import type { Token } from '@ctx-core/jwt'
import { derived$, Readable$ } from '@ctx-core/store'
import type { auth0_Ctx } from './auth0_Ctx.js'
import { auth0_token_json$_b, auth0_token_json$_T } from './auth0_token_json$_b.js'
const key = 'in_auth0_token$'
export const in_auth0_token$_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		auth0_token_json$_b(ctx) as auth0_token_json$_T,
		auth0_token_json=>{
			if (auth0_token_json && typeof auth0_token_json === 'string') {
				const auth0_token_json$ = auth0_token_json$_b(ctx)
				try {
					return JSON.parse(auth0_token_json) || false
				} catch (err) {
					console.warn(err)
					auth0_token_json = null
					setTimeout(()=>auth0_token_json$.$ = auth0_token_json)
				}
			}
			return auth0_token_json
		}) as in_auth0_token$_T)
export type in_auth0_token_T = Token
export interface in_auth0_token$_T extends Readable$<in_auth0_token_T> {}
export {
	in_auth0_token$_b as b__token__auth0__
}
