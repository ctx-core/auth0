import { writable, derived, Writable, } from 'svelte/store'
import { assign } from '@ctx-core/object'
// @ts-ignore
import { subscribe__debug } from '@ctx-core/store'
import { _ensure__store__instance } from '@ctx-core/store'
import { _eql, _neql, _eq } from '@ctx-core/function'
import { I } from '@ctx-core/combinators'
import {
	__AUTH0_CLIENT_ID,
	__AUTH0_DOMAIN,
	__AUTH0_URL,
	__json__token__auth0,
	set__token__auth0,
	_s__token__auth0__,
	__token__auth0__,
	clear__token__auth0,
	logout__token__auth0,
	set__error__token__auth0,
	clear__error__token__auth0,
	_s__token__auth0,
	__token__auth0,
	_s__token__auth0__userinfo__auth0,
	__token__auth0__userinfo__auth0,
	_s__userinfo__auth0,
	__userinfo__auth0,
	_s__error__token__auth0,
	__error__token__auth0,
	_s__email__auth0,
	__email__auth0,
	_s__email,
	__email,
	_s__opened__auth0,
	__opened__auth0,
	open__login__auth0,
	open__signup__auth0,
	open__forgot_password__auth0,
	open__check_email__forgot_password__auth0,
	open__change_password__auth0,
	close__auth0,
	reload__opened__auth0,
} from './store--base'
import { log } from '@ctx-core/logger'
import { falsy } from '@ctx-core/function/lib'
const logPrefix = '@ctx-core/auth0/store'
export {
	__AUTH0_CLIENT_ID,
	__AUTH0_DOMAIN,
	__AUTH0_URL,
	__json__token__auth0,
	set__token__auth0,
	_s__token__auth0__,
	__token__auth0__,
	clear__token__auth0,
	logout__token__auth0,
	set__error__token__auth0,
	clear__error__token__auth0,
	_s__token__auth0,
	__token__auth0,
	_s__token__auth0__userinfo__auth0,
	__token__auth0__userinfo__auth0,
	_s__userinfo__auth0,
	__userinfo__auth0,
	_s__error__token__auth0,
	__error__token__auth0,
	_s__email__auth0,
	__email__auth0,
	_s__email,
	__email,
	_s__opened__auth0,
	__opened__auth0,
	open__login__auth0,
	open__signup__auth0,
	open__forgot_password__auth0,
	open__check_email__forgot_password__auth0,
	open__change_password__auth0,
	close__auth0,
	reload__opened__auth0,
}
export const [_s__txt__error__token__auth0,
	__txt__error__token__auth0,
] = _ensure__store__instance(
	ctx=>derived(
		_s__error__token__auth0(ctx)[0],
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
export const [_s__ctx__userinfo__auth0,
	__ctx__userinfo__auth0
] = _ensure__store__instance(
	ctx=>
		derived([
				_s__userinfo__auth0(ctx),
				_s__token__auth0__userinfo__auth0(ctx),
			],
			([userinfo__auth0, token__auth0__userinfo__auth0])=>(
				{
					userinfo__auth0,
					token__auth0__userinfo__auth0,
				}
			))
)
export const [_s__is__loggedin__auth0,
	__is__loggedin__auth0,
] = _ensure__store__instance(
	ctx=>derived(
		_s__token__auth0(ctx),
		_neql(false)
	))
export const [_s__is__loggedout__auth0,
	__is__loggedout__auth0,
] = _ensure__store__instance(
	ctx=>derived(
		_s__token__auth0(ctx),
		_eql(false)
	))
export const [_s__class__opened__auth0,
	__class__opened__auth0,
] = _ensure__store__instance(
	ctx=>derived(_s__opened__auth0(ctx)[0], I))
export const [_s__closed__auth0,
	__closed__auth0,
] = _ensure__store__instance(
	ctx=>derived(_s__opened__auth0(ctx)[0],
		_eql(false)
	))
export const [_s__opened__login,
	__opened__login,
] = _ensure__store__instance(
	ctx=>derived(_s__opened__auth0(ctx)[0],
		opened__auth0=>!opened__auth0 || opened__auth0 == 'login'))
export const [_s__opened__signup,
	__opened__signup,
] = _ensure__store__instance(
	ctx=>derived(_s__opened__auth0(ctx)[0],
		_eq('signup')))
export const [_s__opened__forgot_password,
	__opened__forgot_password,
] = _ensure__store__instance(
	ctx=>derived(_s__opened__auth0(ctx)[0],
		_eq('forgot_password')))
export const [_s__opened__check_email__forgot_password,
	__opened__check_email__forgot_password,
] = _ensure__store__instance(
	ctx=>derived(_s__opened__auth0(ctx)[0],
		_eq('check_email__forgot_password')))
export const [_s__opened__change_password,
	__opened__change_password,
] = _ensure__store__instance(
	ctx=>derived(_s__opened__auth0(ctx)[0],
		_eq('change_password')))
interface Writable__msg__logout__auth0 extends Writable<falsy|any> {
	logout__auth0:()=>void
}
export const [_s__msg__logout__auth0,
	__msg__logout__auth0,
	logout__auth0,
] = _ensure__store__instance<Writable__msg__logout__auth0>(
	ctx=>{
		const __msg__logout__auth0 = writable(null)
		const { logout__token__auth0 } = _s__token__auth0__(ctx)[0]
		return [
			assign(__msg__logout__auth0, {
				logout__auth0,
			}),
			logout__auth0,
		] as unknown as [
			Writable__msg__logout__auth0,
			()=>void,
		]
		function logout__auth0() {
			log(`${logPrefix}|logout__auth0`)
			logout__token__auth0()
			__msg__logout__auth0.set({
				time: Date.now(),
			})
		}
	})
