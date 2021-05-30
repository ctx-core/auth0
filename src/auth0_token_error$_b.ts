import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { auth0_Ctx } from './auth0_Ctx'
const key = 'auth0_token_error$'
export const auth0_token_error$_b = _b<auth0_Ctx, typeof key>(key, _ctx=>{
	const auth0_token_error$ = writable$(undefined)
	return auth0_token_error$ as auth0_token_error$_T
})
export interface $auth0_token_error_I {
	message?:string
	error_message?:string
	error_description?:string
	error?:any
	email?:string
	password?:string
}
export type auth0_token_error_T = $auth0_token_error_I|undefined
export interface auth0_token_error$_T extends Writable$<auth0_token_error_T> {}
export {
	auth0_token_error$_b as b__error__token__auth0,
}
