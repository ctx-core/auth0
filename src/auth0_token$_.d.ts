import type { nullish } from '@ctx-core/function'
import { Token } from '@ctx-core/jwt'
import { ReadableAtom$ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
import { clear_auth0_token_T } from './clear_auth0_token'
import { logout_auth0_token_T } from './logout_auth0_token'
import { set_auth0_token_T } from './set_auth0_token.js'
export declare const auth0_token$_:B<auth0_token$_T>
export declare type schedule_auth0_token_current_validate = ()=>void
export declare type set_auth0_token_json_T = (event:{
	key:string
	newValue:any
})=>void
export declare type auth0_token_T = Token
export interface auth0_token$_T extends ReadableAtom$<Token|nullish> {
	set_auth0_token:set_auth0_token_T
	clear_auth0_token:clear_auth0_token_T
	logout_auth0_token:logout_auth0_token_T
	schedule_auth0_token_current_validate:schedule_auth0_token_current_validate
	set_auth0_token_json:set_auth0_token_json_T
}
