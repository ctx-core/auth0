import type { WritableAtom$ } from '@ctx-core/nanostores'
import type { B, Ctx } from '@ctx-core/object'
export declare const auth0_logout_msg$_:B<auth0_logout_msg$_T>
export interface auth0_logout_msg_T {
	time:number
}
export type auth0_logout_msg$_T = WritableAtom$<auth0_logout_msg_T|undefined>
export declare function auth0_logout(ctx:Ctx):void
