import { B, be_ } from '@ctx-core/object'
import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
const key = 'auth0_token_error$'
export const auth0_token_error$_b:B<auth0_token_error$_T> = be_(key, _ctx=>{
	const auth0_token_error$ = atom$(undefined)
	return auth0_token_error$ as auth0_token_error$_T
})
export interface auth0_token_error_I {
	message?:string
	error_message?:string
	error_description?:string
	error?:any
	email?:string
	username?:string
	password?:string
	password_confirmation?:string
}
export type auth0_token_error_T = auth0_token_error_I|undefined
export interface auth0_token_error$_T extends WritableAtom$<auth0_token_error_T> {}
export {
	auth0_token_error$_b as b__error__token__auth0,
}
