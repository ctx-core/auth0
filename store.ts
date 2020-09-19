import { writable, derived, Writable, } from 'svelte/store'
import { assign, _b } from '@ctx-core/object'
import { _eql, _eq, maybe } from '@ctx-core/function'
import {
	b__AUTH0_CLIENT_ID,
	__AUTH0_CLIENT_ID,
	b__AUTH0_DOMAIN,
	__AUTH0_DOMAIN,
	b__AUTH0_URL,
	__AUTH0_URL,
	b__json__token__auth0,
	__json__token__auth0,
	set__token__auth0,
	b__token__auth0__,
	__token__auth0__,
	set__error__token__auth0,
	clear__token__auth0,
	logout__token__auth0,
	clear__error__token__auth0,
	b__token__auth0,
	__token__auth0,
	b__token__auth0__userinfo__auth0,
	__token__auth0__userinfo__auth0,
	b__userinfo__auth0,
	__userinfo__auth0,
	b__error__token__auth0,
	__error__token__auth0,
	b__email__auth0,
	__email__auth0,
	b__email,
	__email,
	b__opened__auth0,
	__opened__auth0,
	open__login__auth0,
	open__signup__auth0,
	open__forgot_password__auth0,
	open__check_email__forgot_password__auth0,
	open__change_password__auth0,
	close__auth0,
	reload__opened__auth0, $type__opened__auth0,
} from './store--base'
export {
	b__AUTH0_CLIENT_ID,
	__AUTH0_CLIENT_ID,
	b__AUTH0_DOMAIN,
	__AUTH0_DOMAIN,
	b__AUTH0_URL,
	__AUTH0_URL,
	b__json__token__auth0,
	__json__token__auth0,
	set__token__auth0,
	b__token__auth0__,
	__token__auth0__,
	set__error__token__auth0,
	clear__token__auth0,
	logout__token__auth0,
	clear__error__token__auth0,
	b__token__auth0,
	__token__auth0,
	b__token__auth0__userinfo__auth0,
	__token__auth0__userinfo__auth0,
	b__userinfo__auth0,
	__userinfo__auth0,
	b__error__token__auth0,
	__error__token__auth0,
	b__email__auth0,
	__email__auth0,
	b__email,
	__email,
	b__opened__auth0,
	__opened__auth0,
	open__login__auth0,
	open__signup__auth0,
	open__forgot_password__auth0,
	open__check_email__forgot_password__auth0,
	open__change_password__auth0,
	close__auth0,
	reload__opened__auth0,
}
export const b__txt__error__token__auth0 = _b('__txt__error__token__auth0', ctx=>
	derived(
		b__error__token__auth0(ctx),
		error__token__auth0=>
			error__token__auth0
			? error__token__auth0.error_message || error__token__auth0.message
				? error__token__auth0.error_message || error__token__auth0.message
				: error__token__auth0.error_description
					? error__token__auth0.error_description
					: error__token__auth0.error
						? error__token__auth0.error
						: ''
			: ''))
export const __txt__error__token__auth0 = b__txt__error__token__auth0()
export const b__ctx__userinfo__auth0 = _b('__ctx__userinfo__auth0', ctx=>
	derived([
			b__userinfo__auth0(ctx),
			b__token__auth0__userinfo__auth0(ctx),
		],
		([userinfo__auth0, token__auth0__userinfo__auth0])=>(
			{
				userinfo__auth0,
				token__auth0__userinfo__auth0,
			}
		))
)
export const __ctx__userinfo__auth0 = b__ctx__userinfo__auth0()
export const b__is__loggedin__auth0 = _b('__is__loggedin__auth0', ctx=>
	derived(
		b__token__auth0(ctx),
		auth0_token=>!!auth0_token
	))
export const __is__loggedin__auth0 = b__is__loggedin__auth0()
export const b__is__loggedout__auth0 = _b('__is__loggedout__auth0', ctx=>
	derived(
		b__token__auth0(ctx),
		_eql(false)
	))
export const __is__loggedout__auth0 = b__is__loggedout__auth0()
export const b__class__opened__auth0 = _b('__class__opened__auth0', ctx=>
	derived(b__opened__auth0(ctx), (v:$type__opened__auth0)=>v))
export const __class__opened__auth0 = b__class__opened__auth0()
export const b__closed__auth0 = _b('__closed__auth0', ctx=>
	derived(b__opened__auth0(ctx),
		_eql(false)
	))
export const __closed__auth0 = b__closed__auth0()
export const b__opened__login = _b('__opened__login', ctx=>
	derived(b__opened__auth0(ctx),
		opened__auth0=>!opened__auth0 || opened__auth0 == 'login'))
export const __opened__login = b__opened__login()
export const b__opened__signup = _b('__opened__signup', ctx=>
	derived(b__opened__auth0(ctx),
		_eq('signup')))
export const __opened__signup = b__opened__signup()
export const b__opened__forgot_password = _b('__opened__forgot_password', ctx=>
	derived(b__opened__auth0(ctx),
		_eq('forgot_password')))
export const __opened__forgot_password = b__opened__forgot_password()
export const b__opened__check_email__forgot_password = _b('__opened__check_email__forgot_password', ctx=>
	derived(b__opened__auth0(ctx),
		_eq('check_email__forgot_password')))
export const __opened__check_email__forgot_password = b__opened__check_email__forgot_password()
export const b__opened__change_password = _b('__opened__change_password', ctx=>
	derived(b__opened__auth0(ctx),
		_eq('change_password')))
export const __opened__change_password = b__opened__change_password()
export type $type__msg__logout__auth0 = {
	time: number
}
export type type__msg__logout__auth0 = Writable<maybe<$type__msg__logout__auth0>>&{
	logout__auth0:()=>void
}
export function b__msg__logout__auth0(ctx?) {
	return _b<type__msg__logout__auth0>('__msg__logout__auth0', ctx=>{
		const __msg__logout__auth0 = writable(null) as type__msg__logout__auth0
		const { logout__token__auth0 } = b__token__auth0(ctx)
		return assign(__msg__logout__auth0, {
			logout__auth0,
		})
		function logout__auth0() {
			logout__token__auth0()
			__msg__logout__auth0.set({
				time: Date.now(),
			})
		}
	})(ctx)
}
export const __msg__logout__auth0 = b__msg__logout__auth0()
export const {
	logout__auth0,
} = __msg__logout__auth0
