import { derived, get, Readable, Writable, writable } from 'svelte/store'
import { falsy } from '@ctx-core/function'
import { _b, assign } from '@ctx-core/object'
import { subscribe } from '@ctx-core/store'
// @ts-ignore
import { subscribe__debug } from '@ctx-core/store'
import { _has__dom } from '@ctx-core/dom'
import { _exp__token__jwt, Token } from '@ctx-core/jwt'
import { sync__localStorage } from '@ctx-core/local-storage'
import { get__userinfo__auth0, validate__current__token__auth0, } from './fetch--base'
import { log, warn } from '@ctx-core/logger'
import { _waitfor__ratelimit__backoff__fibonacci } from '@ctx-core/fetch/lib'
const logPrefix = '@ctx-core/auth0/store'
export type Token__auth0 = Token|falsy
export const b__AUTH0_CLIENT_ID = _b('__AUTH0_CLIENT_ID', ()=>
	writable(process.env.AUTH0_CLIENT_ID))
export const __AUTH0_CLIENT_ID = b__AUTH0_CLIENT_ID()
export const b__AUTH0_DOMAIN = _b('__AUTH0_DOMAIN', ()=>
	writable(process.env.AUTH0_DOMAIN))
export const __AUTH0_DOMAIN = b__AUTH0_DOMAIN()
export const b__AUTH0_URL = _b('__AUTH0_URL', ()=>
	writable(process.env.AUTH0_URL))
export const __AUTH0_URL = b__AUTH0_URL()
type set__token__auth0 = (token__auth0:any)=>void
type clear__token__auth0 = (value?:falsy)=>void
type logout__token__auth0 = ()=>void
export interface Writable__json__token__auth0 extends Writable<string|falsy> {
	set__token__auth0:set__token__auth0
	clear__token__auth0:clear__token__auth0
	logout__token__auth0:logout__token__auth0
}
export const b__json__token__auth0 = _b<Writable__json__token__auth0>('__json__token__auth0', ()=>{
	const __json__token__auth0 = writable<string|falsy>(
		(
			_has__dom()
			&& localStorage.getItem('json__token__auth0')) || false
	)
	return assign(__json__token__auth0, {
		set__token__auth0,
		clear__token__auth0,
		logout__token__auth0,
	}) as Writable__json__token__auth0
	function set__token__auth0(token__auth0) {
		__json__token__auth0.set(JSON.stringify(token__auth0))
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
	derived<Readable<string|falsy>, Token__auth0>(
		b__json__token__auth0(ctx) as Writable__json__token__auth0,
		json__token__auth0=>{
			if (json__token__auth0 && typeof json__token__auth0 === 'string') {
				try {
					return JSON.parse(json__token__auth0) || false
				} catch (e) {
					warn(e)
					json__token__auth0 = null
					setTimeout(
						()=>__json__token__auth0.set(json__token__auth0))
				}
			}
			return json__token__auth0
		})
)
export const __token__auth0__ = b__token__auth0__()
type Ctx__error = {
	message?:string,
	error_message?:string,
	error_description?:string,
	error?,
}
export interface Writable__error__token__auth0 extends Writable<Ctx__error> {
	set__error__token__auth0:(error:any)=>void
	clear__error__token__auth0:()=>void
}
export const b__error__token__auth0 = _b<Writable__error__token__auth0>('__error__token__auth0', ctx=>{
	const { logout__token__auth0 } = b__json__token__auth0(ctx)
	const __error__token__auth0 = writable(null)
	return assign(__error__token__auth0, {
		set__error__token__auth0,
		clear__error__token__auth0,
	}) as Writable__error__token__auth0
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
interface Readable__token__auth0 extends Readable<Token__auth0> {
	set__token__auth0:set__token__auth0
	clear__token__auth0:clear__token__auth0
	logout__token__auth0:logout__token__auth0
	schedule__validate__current__token__auth0:schedule__validate__current__token__auth0
	__storage__json__token__auth0:__storage__json__token__auth0
}
export const b__token__auth0 = _b<Readable__token__auth0>('__token__auth0', ctx=>{
	const __json__token__auth0 = b__json__token__auth0(ctx)
	const { clear__token__auth0 } = __json__token__auth0
	const __error__token__auth0 = b__error__token__auth0(ctx)
	const { set__error__token__auth0 } = __error__token__auth0
	const __token__auth0 = derived<Readable<Token__auth0>, Token__auth0>(
		b__token__auth0__(ctx),
		token__auth0=>
			(token__auth0 && token__auth0.error)
			? false
			: token__auth0 as Token)
	if (_has__dom()) {
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
	if (_has__dom()) {
		window.addEventListener('storage', __storage__json__token__auth0)
	}
	return assign(__token__auth0, {
		set__token__auth0,
		clear__token__auth0,
		logout__token__auth0,
		schedule__validate__current__token__auth0,
		__storage__json__token__auth0,
	}) as unknown as Readable__token__auth0
	function schedule__validate__current__token__auth0() {
		const token__auth0 = get(__token__auth0)
		const id_token = token__auth0 && token__auth0.id_token
		if (!id_token) return
		const exp__token__jwt = _exp__token__jwt(id_token)
		const now = Date.now()
		const millis__validate = now - exp__token__jwt
		setTimeout(
			async ()=>{
				try {
					await validate__current__token__auth0(token__auth0)
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
			log(`${logPrefix}|__storage__json__token__auth0`)
			__json__token__auth0.set(event.newValue)
		}
	}
})
export const __token__auth0 = b__token__auth0()
export const {
	schedule__validate__current__token__auth0,
	__storage__json__token__auth0,
} = __token__auth0
export const b__token__auth0__userinfo__auth0 = _b<Writable<falsy|any>>('__token__auth0__userinfo__auth0', ()=>
	writable(null))
export const __token__auth0__userinfo__auth0 = b__token__auth0__userinfo__auth0()
export const b__userinfo__auth0 = _b('__userinfo__auth0', ctx=>
	derived([
			b__AUTH0_DOMAIN(ctx),
			b__token__auth0(ctx),
			b__token__auth0__userinfo__auth0(ctx),
		],
		(
			[
				AUTH0_DOMAIN,
				token__auth0,
				token__auth0__userinfo__auth0,
			],
			set
		)=>{
			let cancel
			(async ()=>{
				if (token__auth0 === token__auth0__userinfo__auth0) {
					return
				}
				if (!token__auth0) {
					set(_userinfo__auth0__no__token__auth0())
					return
				}
				set(token__auth0)
				const response =
					await _waitfor__ratelimit__backoff__fibonacci(()=>
						get__userinfo__auth0({
							token__auth0,
							AUTH0_DOMAIN,
						}))
				if (cancel) return
				if (!response.ok) {
					clear__token__auth0(false)
					set(false)
					return
				}
				const userinfo__auth0 = await response.json()
				set(userinfo__auth0)
			})()
			return ()=>cancel = true
			function _userinfo__auth0__no__token__auth0() {
				return (
					token__auth0 == null
					? null
					: false
				)
			}
		}))
export const __userinfo__auth0 = b__userinfo__auth0()
export const b__email__auth0 = _b('__email__auth0', ctx=>
	derived(
		b__userinfo__auth0(ctx),
		(userinfo__auth0:{ email?:string })=>
			(userinfo__auth0 == false)
			? false
			: userinfo__auth0 && userinfo__auth0.email))
export const __email__auth0 = b__email__auth0()
export const b__email = b__email__auth0
export const __email = __email__auth0
export interface Writable__opened__auth0 extends Writable<falsy|string> {
	open__login__auth0:()=>void
	open__signup__auth0:()=>void
	open__forgot_password__auth0:()=>void
	open__check_email__forgot_password__auth0:()=>void
	open__change_password__auth0:()=>void
	close__auth0:()=>void
	reload__opened__auth0:()=>void
}
export const b__opened__auth0 = _b<Writable__opened__auth0>('__opened__auth0', ()=>{
	const __opened__auth0 = assign(
		writable(null), {
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
	if (_has__dom()) {
		reload__opened__auth0()
	}
	return __opened__auth0 as Writable__opened__auth0
	function open__login__auth0() {
		log(`${logPrefix}|open__login__auth0`)
		__opened__auth0.set('login')
	}
	function open__signup__auth0() {
		log(`${logPrefix}|open__signup__auth0`)
		__opened__auth0.set('signup')
	}
	function open__forgot_password__auth0() {
		log(`${logPrefix}|open__forgot_password__auth0`)
		__opened__auth0.set('forgot_password')
	}
	function open__check_email__forgot_password__auth0() {
		log(`${logPrefix}|open__check_email__forgot_password__auth0`)
		__opened__auth0.set('check_email__forgot_password')
	}
	function open__change_password__auth0() {
		log(`${logPrefix}|open__change_password__auth0`)
		__opened__auth0.set('change_password')
	}
	function close__auth0() {
		log(`${logPrefix}|close__auth0`)
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
