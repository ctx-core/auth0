import { _b, assign, B } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { derived, get, Readable, subscribe } from '@ctx-core/store'
import { _jwt_token_exp, Token } from '@ctx-core/jwt'
import { sync_localStorage } from '@ctx-core/local-storage'
import { auth0_token_json_b } from './auth0_token_json_b'
import { in_auth0_token_b } from './in_auth0_token_b'
import { validate_auth0_token_current } from './validate_auth0_token_current'
import { clear_auth0_token_b, clear_auth0_token_type } from './clear_auth0_token_b'
import { logout_auth0_token_b, logout_auth0_token_type } from './logout_auth0_token_b'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b'
import { set_auth0_token_b, set_auth0_token_type } from './set_auth0_token_b'
export const auth0_token_b:auth0_token_b_type = _b('auth0_token', ctx=>{
	const auth0_token_json = auth0_token_json_b(ctx)
	const clear_auth0_token = clear_auth0_token_b(ctx)
	const logout_auth0_token = logout_auth0_token_b(ctx)
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	const set_auth0_token = set_auth0_token_b(ctx)
	const auth0_token = derived(
		in_auth0_token_b(ctx),
		($auth0_token:$auth0_token_type|null)=>
			($auth0_token && ($auth0_token as Token).error)
			? false
			: $auth0_token as Token) as auth0_token_type
	if (has_dom) {
		subscribe(auth0_token_json,
			$auth0_token_json=>{
				if ($auth0_token_json == null) {
					clear_auth0_token()
					return
				}
				sync_localStorage('$auth0_token_json', $auth0_token_json)
				if ($auth0_token_json) {
					schedule_auth0_token_current_validate()
				}
			}
		)
	}
	if (has_dom) {
		window.addEventListener('storage', set_auth0_token_json)
	}
	return assign(auth0_token, {
		set_auth0_token,
		clear_auth0_token,
		logout_auth0_token,
		schedule_auth0_token_current_validate,
		set_auth0_token_json,
	}) as auth0_token_type
	function schedule_auth0_token_current_validate() {
		const $auth0_token:$auth0_token_type|null = get(auth0_token)
		const id_token = $auth0_token && $auth0_token.id_token
		if (!id_token) return
		const jwt_token_exp = _jwt_token_exp(id_token)
		const now = Date.now()
		const validate_millis = now - jwt_token_exp
		setTimeout(
			async ()=>{
				try {
					validate_auth0_token_current($auth0_token as $auth0_token_type)
				} catch (error) {
					if (error.type === 'bad_credentials') {
						console.error(error)
						logout_auth0_token_error(error)
						return
					}
					throw error
				}
			},
			validate_millis)
	}
	function set_auth0_token_json(event) {
		if (event.key === 'auth0_token_json') {
			auth0_token_json.set(event.newValue)
		}
	}
})
export type schedule_auth0_token_current_validate = ()=>void
export type set_auth0_token_json_type = (event:{ key:string, newValue:any })=>void
export type $auth0_token_type = Token
export interface auth0_token_type extends Readable<$auth0_token_type|null> {
	set_auth0_token:set_auth0_token_type
	clear_auth0_token:clear_auth0_token_type
	logout_auth0_token:logout_auth0_token_type
	schedule_auth0_token_current_validate:schedule_auth0_token_current_validate
	set_auth0_token_json:set_auth0_token_json_type
}
export interface auth0_token_b_type extends B<auth0_token_type> {}
export {
	auth0_token_b as b__token__auth0
}
