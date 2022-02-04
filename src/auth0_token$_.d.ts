import type { nullish } from '@ctx-core/function'
import { Token } from '@ctx-core/jwt'
import { ReadableAtom$ } from '@ctx-core/nanostores'
import { B, Ctx } from '@ctx-core/object'
export declare const auth0_token$_:B<auth0_token$_T>
export declare type auth0_token_T = Token
export type auth0_token$_T = ReadableAtom$<Token|nullish>
export declare function schedule_auth0_token_current_validate(ctx:Ctx):void
export declare function set_auth0_token_json(ctx:Ctx, event:{
	key:string
	newValue:any
}):void
