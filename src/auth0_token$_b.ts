import { has_dom } from '@ctx-core/dom'
import type { nullish } from '@ctx-core/function'
import { jwt_token_exp_, Token } from '@ctx-core/jwt'
import { sync_localStorage } from '@ctx-core/local-storage'
import { B, be_, assign } from '@ctx-core/object'
import { derived$, Readable$, subscribe } from '@ctx-core/store'
import type { auth0_Ctx } from './auth0_Ctx.js'
import type { auth0_token_error_T } from './auth0_token_error$_b.js'
import { auth0_token_json$_b } from './auth0_token_json$_b.js'
import { clear_auth0_token_b, clear_auth0_token_T } from './clear_auth0_token_b.js'
import { in_auth0_token$_b } from './in_auth0_token$_b.js'
import { logout_auth0_token_b, logout_auth0_token_T } from './logout_auth0_token_b.js'
import { logout_auth0_token_error_b } from './logout_auth0_token_error_b.js'
import { set_auth0_token_b, set_auth0_token_T } from './set_auth0_token_b.js'
import { validate_auth0_token_current } from './validate_auth0_token_current.js'
const key = 'auth0_token$'
export const auth0_token$_b:B<auth0_Ctx, typeof key> = be_(key, ctx=>{
	const auth0_token_json = auth0_token_json$_b(ctx)
	const clear_auth0_token = clear_auth0_token_b(ctx)
	const logout_auth0_token = logout_auth0_token_b(ctx)
	const logout_auth0_token_error = logout_auth0_token_error_b(ctx)
	const set_auth0_token = set_auth0_token_b(ctx)
	const auth0_token$ = derived$(
		in_auth0_token$_b(ctx),
		($auth0_token:auth0_token_T|null)=>
			($auth0_token && ($auth0_token as Token).error)
			? false
			: $auth0_token as Token) as auth0_token$_T
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
	return assign(auth0_token$, {
		set_auth0_token,
		clear_auth0_token,
		logout_auth0_token,
		schedule_auth0_token_current_validate,
		set_auth0_token_json,
	}) as auth0_token$_T
	function schedule_auth0_token_current_validate() {
		const auth0_token = auth0_token$.$
		const id_token:string|nullish = auth0_token?.id_token
		if (!id_token) return
		const jwt_token_exp:number = jwt_token_exp_(id_token as string)
		const now = Date.now()
		const validate_millis = now - jwt_token_exp
		setTimeout(
			async ()=>{
				try {
					validate_auth0_token_current(auth0_token as auth0_token_T)
				} catch (error) {
					if ((error as any).type === 'bad_credentials') {
						console.error(error)
						logout_auth0_token_error(error as auth0_token_error_T)
						return
					}
					throw error
				}
			},
			validate_millis)
	}
	function set_auth0_token_json(event:StorageEvent) {
		if (event.key === 'auth0_token_json') {
			auth0_token_json.set(event.newValue)
		}
	}
})
export type schedule_auth0_token_current_validate = ()=>void
export type set_auth0_token_json_T = (event:{ key:string, newValue:any })=>void
export type auth0_token_T = Token
export interface auth0_token$_T extends Readable$<Token|nullish> {
	set_auth0_token:set_auth0_token_T
	clear_auth0_token:clear_auth0_token_T
	logout_auth0_token:logout_auth0_token_T
	schedule_auth0_token_current_validate:schedule_auth0_token_current_validate
	set_auth0_token_json:set_auth0_token_json_T
}
export {
	auth0_token$_b as b__token__auth0
}
