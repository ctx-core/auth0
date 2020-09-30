import {
	derived, get, Readable, subscribe, Writable, writable
} from '@ctx-core/store'
import type { falsy, maybe_null } from '@ctx-core/function'
import { _b, assign } from '@ctx-core/object'
import { has__dom } from '@ctx-core/dom'
import { _exp__jwt_token, Token } from '@ctx-core/jwt'
import { sync__localStorage } from '@ctx-core/local-storage'
import { get__userinfo__auth0, validate__current__token__auth0, } from './fetch--base'
import { _waitfor__ratelimit__backoff__fibonacci } from '@ctx-core/fetch/lib'
import type { maybe } from '@ctx-core/function'
export const b__AUTH0_CLIENT_ID = _b('__AUTH0_CLIENT_ID', ()=>
	writable(process.env.AUTH0_CLIENT_ID))
export const __AUTH0_CLIENT_ID = b__AUTH0_CLIENT_ID()
export const b__AUTH0_DOMAIN = _b('__AUTH0_DOMAIN', ()=>
	writable(process.env.AUTH0_DOMAIN as string))
export const __AUTH0_DOMAIN = b__AUTH0_DOMAIN()
export const b__AUTH0_URL = _b('__AUTH0_URL', ()=>
	writable(process.env.AUTH0_URL))
export const __AUTH0_URL = b__AUTH0_URL()
type set__token__auth0 = (auth0_token:any)=>void
type clear__token__auth0 = (value?:falsy)=>void
type logout__token__auth0 = ()=>void
export interface type__json__token__auth0 extends Writable<string|falsy> {
	set__token__auth0:set__token__auth0
	clear__token__auth0:clear__token__auth0
	logout__token__auth0:logout__token__auth0
}
export const b__json__token__auth0 = _b<type__json__token__auth0>('__json__token__auth0', ()=>{
	const __json__token__auth0 = writable<string|falsy>(
		(
			has__dom
			&& localStorage.getItem('json__token__auth0')) || false
	) as type__json__token__auth0
	return assign(__json__token__auth0, {
		set__token__auth0,
		clear__token__auth0,
		logout__token__auth0,
	}) as type__json__token__auth0
	function set__token__auth0(auth0_token) {
		__json__token__auth0.set(JSON.stringify(auth0_token))
	}
	function clear__token__auth0(value:falsy = null) {
		set__token__auth0(value)
	}
	function logout__token__auth0() {
		set__token__auth0(null)
	}
})
export const __json__token__auth0 = b__json__token__auth0()
export const {
	set__token__auth0,
	clear__token__auth0,
	logout__token__auth0,
} = __json__token__auth0
export const b__token__auth0__ = _b('__token__auth0__', ctx=>
	derived(
		b__json__token__auth0(ctx) as type__json__token__auth0,
		json__token__auth0=>{
			if (json__token__auth0 && typeof json__token__auth0 === 'string') {
				try {
					return JSON.parse(json__token__auth0) || false
				} catch (err) {
					console.warn(err)
					json__token__auth0 = null
					setTimeout(
						()=>__json__token__auth0.set(json__token__auth0))
				}
			}
			return json__token__auth0
		}) as auth0_token_type
)
export type $auth0_token_type = Token
export const __token__auth0__ = b__token__auth0__()
export type error_ctx_type = {
	message?:string,
	error_message?:string,
	error_description?:string,
	error?,
}
export type maybe_error_ctx_type = maybe_null<error_ctx_type>
export interface type__error__token__auth0 extends Writable<maybe_error_ctx_type> {
	set__error__token__auth0:(error:any)=>void
	clear__error__token__auth0:()=>void
}
export const b__error__token__auth0 = _b<type__error__token__auth0>('__error__token__auth0', ctx=>{
	const { logout__token__auth0 } = b__json__token__auth0(ctx)
	const __error__token__auth0 = writable(null) as type__error__token__auth0
	return assign(__error__token__auth0, {
		set__error__token__auth0,
		clear__error__token__auth0,
	}) as type__error__token__auth0
	function set__error__token__auth0(error) {
		__error__token__auth0.set(error)
		if (error) {
			logout__token__auth0()
		}
	}
	function clear__error__token__auth0() {
		set__error__token__auth0(null)
	}
})
export const __error__token__auth0 = b__error__token__auth0()
export const {
	set__error__token__auth0,
	clear__error__token__auth0,
} = __error__token__auth0
type schedule__validate__current__token__auth0 = ()=>void
type __storage__json__token__auth0 = (event:{ key:string, newValue:any })=>void
type auth0_token_type = Readable<$auth0_token_type|null>&{
	set__token__auth0:set__token__auth0
	clear__token__auth0:clear__token__auth0
	logout__token__auth0:logout__token__auth0
	schedule__validate__current__token__auth0:schedule__validate__current__token__auth0
	__storage__json__token__auth0:__storage__json__token__auth0
}
export const b__token__auth0 = _b<auth0_token_type>('__token__auth0', ctx=>{
	const __json__token__auth0 = b__json__token__auth0(ctx)
	const { clear__token__auth0 } = __json__token__auth0
	const __error__token__auth0 = b__error__token__auth0(ctx)
	const { set__error__token__auth0 } = __error__token__auth0
	const __token__auth0 = derived(
		b__token__auth0__(ctx),
		(auth0_token:$auth0_token_type|null)=>
			(auth0_token && (auth0_token as Token).error)
			? false
			: auth0_token as Token) as auth0_token_type
	if (has__dom) {
		subscribe(__json__token__auth0,
			json__token__auth0=>{
				if (json__token__auth0 == null) {
					clear__token__auth0()
					return
				}
				sync__localStorage('json__token__auth0', json__token__auth0)
				if (json__token__auth0) {
					schedule__validate__current__token__auth0()
				}
			}
		)
	}
	if (has__dom) {
		window.addEventListener('storage', __storage__json__token__auth0)
	}
	return assign(__token__auth0, {
		set__token__auth0,
		clear__token__auth0,
		logout__token__auth0,
		schedule__validate__current__token__auth0,
		__storage__json__token__auth0,
	})
	function schedule__validate__current__token__auth0() {
		const auth0_token = get(__token__auth0)
		const id_token = auth0_token && auth0_token.id_token
		if (!id_token) return
		const exp__jwt_token = _exp__jwt_token(id_token)
		const now = Date.now()
		const millis__validate = now - exp__jwt_token
		setTimeout(
			async ()=>{
				try {
					await validate__current__token__auth0(auth0_token)
				} catch (error) {
					if (error.type === 'bad_credentials') {
						console.error(error)
						set__error__token__auth0(error)
						return
					}
					throw error
				}
			},
			millis__validate)
	}
	function __storage__json__token__auth0(event) {
		if (event.key === 'json__token__auth0') {
			__json__token__auth0.set(event.newValue)
		}
	}
})
export const __token__auth0 = b__token__auth0()
export const {
	schedule__validate__current__token__auth0,
	__storage__json__token__auth0,
} = __token__auth0
export function b__token__auth0__userinfo__auth0<I extends unknown = unknown>(ctx?) {
	return _b<Writable<maybe<I>>>('__token__auth0__userinfo__auth0', ()=>
		writable(null))(ctx)
}
export const __token__auth0__userinfo__auth0 = b__token__auth0__userinfo__auth0()
export type $type__userinfo__auth0 = Token
export type $maybe_type__userinfo__auth0 = $type__userinfo__auth0|null|boolean
export type type__userinfo__auth0 = Readable<$maybe_type__userinfo__auth0>
export const b__userinfo__auth0 = _b('__userinfo__auth0', ctx=>
	derived([
			b__AUTH0_DOMAIN(ctx),
			b__token__auth0(ctx),
			b__token__auth0__userinfo__auth0(ctx),
		],
		(
			[
				AUTH0_DOMAIN,
				auth0_token,
				token__auth0__userinfo__auth0,
			],
			set
		)=>{
			(async ()=>{
				if (auth0_token === token__auth0__userinfo__auth0) {
					return
				}
				if (!auth0_token) {
					set(_userinfo__auth0__no__token__auth0())
					return
				}
				set(auth0_token)
				const response =
					await _waitfor__ratelimit__backoff__fibonacci(()=>
						get__userinfo__auth0({
							auth0_token,
							AUTH0_DOMAIN,
						}))
				if (!response.ok) {
					clear__token__auth0(false)
					set(false)
					return
				}
				const userinfo__auth0 = await response.json()
				set(userinfo__auth0)
			})()
			function _userinfo__auth0__no__token__auth0() {
				return (
					auth0_token == null
					? null
					: false
				)
			}
		}))
export const __userinfo__auth0 = b__userinfo__auth0()
export const b__email__auth0 = _b('__email__auth0', ctx=>
	derived(
		b__userinfo__auth0(ctx),
		userinfo__auth0=>
			(userinfo__auth0 == false)
			? false
			: userinfo__auth0 && (userinfo__auth0 as Token).email))
export const __email__auth0 = b__email__auth0()
export const b__email = b__email__auth0
export const __email = __email__auth0
export type $type__opened__auth0 = maybe<string>
export interface type__opened__auth0 extends Writable<$type__opened__auth0> {
	open__login__auth0:()=>void
	open__signup__auth0:()=>void
	open__forgot_password__auth0:()=>void
	open__check_email__forgot_password__auth0:()=>void
	open__change_password__auth0:()=>void
	close__auth0:()=>void
	reload__opened__auth0:()=>void
}
export const b__opened__auth0 = _b<type__opened__auth0>('__opened__auth0', ()=>{
	const __opened__auth0 = assign(
		writable(null) as type__opened__auth0, {
			open__login__auth0,
			open__signup__auth0,
			open__forgot_password__auth0,
			open__check_email__forgot_password__auth0,
			open__change_password__auth0,
			close__auth0,
			reload__opened__auth0,
		}
	)
	let unsubscribe__reload__opened__auth0
	if (has__dom) {
		reload__opened__auth0()
	}
	return __opened__auth0 as type__opened__auth0
	function open__login__auth0() {
		__opened__auth0.set('login')
	}
	function open__signup__auth0() {
		__opened__auth0.set('signup')
	}
	function open__forgot_password__auth0() {
		__opened__auth0.set('forgot_password')
	}
	function open__check_email__forgot_password__auth0() {
		__opened__auth0.set('check_email__forgot_password')
	}
	function open__change_password__auth0() {
		__opened__auth0.set('change_password')
	}
	function close__auth0() {
		__opened__auth0.set(false)
	}
	function reload__opened__auth0() {
		if (!unsubscribe__reload__opened__auth0) {
			unsubscribe__reload__opened__auth0 = true
			unsubscribe__reload__opened__auth0 =
				subscribe(__email__auth0, reload__opened__auth0)
			return
		}
		__opened__auth0.set(false)
	}
})
export const __opened__auth0 = b__opened__auth0()
export const {
	open__login__auth0,
	open__signup__auth0,
	open__forgot_password__auth0,
	open__check_email__forgot_password__auth0,
	open__change_password__auth0,
	close__auth0,
	reload__opened__auth0,
} = __opened__auth0
