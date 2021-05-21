import { _b } from '@ctx-core/object'
import type { Token } from '@ctx-core/jwt'
import { derived, Readable } from '@ctx-core/store'
import { auth0_token_json_b, auth0_token_json_Ctx, auth0_token_json_T } from './auth0_token_json_b'
const key = 'in_auth0_token'
export interface in_auth0_token_Ctx extends auth0_token_json_Ctx {
	in_auth0_token?:in_auth0_token_T
}
export const in_auth0_token_b = _b<in_auth0_token_Ctx, typeof key>(key, ctx=>
	derived(
		auth0_token_json_b(ctx) as auth0_token_json_T,
		$auth0_token_json=>{
			if ($auth0_token_json && typeof $auth0_token_json === 'string') {
				const auth0_token_json = auth0_token_json_b(ctx)
				try {
					return JSON.parse($auth0_token_json) || false
				} catch (err) {
					console.warn(err)
					$auth0_token_json = null
					setTimeout(
						()=>auth0_token_json.set($auth0_token_json))
				}
			}
			return $auth0_token_json
		}) as in_auth0_token_T)
export type $in_auth0_token_T = Token
export interface in_auth0_token_T extends Readable<$in_auth0_token_T> {}
export {
	in_auth0_token_b as b__token__auth0__
}
