import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'auth0_token_error'
export interface auth0_token_error_Ctx {
	auth0_token_error?:auth0_token_error_T
}
export const auth0_token_error_b = _b<auth0_token_error_Ctx, typeof key>(key, _ctx=>{
	const auth0_token_error = writable$(null)
	return auth0_token_error as auth0_token_error_T
})
export interface $auth0_token_error_I {
	message?:string
	error_message?:string
	error_description?:string
	error?:any
	email?:string
	password?:string
}
export type $auth0_token_error_T = $auth0_token_error_I|null
export interface auth0_token_error_T extends Writable$<$auth0_token_error_T> {}
export {
	auth0_token_error_b as b__error__token__auth0,
}
