import { _b } from '@ctx-core/object'
import type { Token } from '@ctx-core/jwt'
import { derived, Readable } from '@ctx-core/store'
import { auth0_token_json_b, auth0_token_json_type } from './auth0_token_json_b'
export const in_auth0_token_b = _b('in_auth0_token', ctx=>
	derived(
		auth0_token_json_b(ctx) as auth0_token_json_type,
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
		}) as in_auth0_token_type
)
export type $in_auth0_token_type = Token
export interface in_auth0_token_type extends Readable<$in_auth0_token_type> {}
export {
	in_auth0_token_b as b__token__auth0__
}
