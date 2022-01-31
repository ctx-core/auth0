import type { WritableAtom$ } from '@ctx-core/nanostores'
import type { B } from '@ctx-core/object'
export declare const auth0_logout_msg$_:B<auth0_logout_msg$_T>
export interface auth0_logout_msg_T {
	time:number
}
export interface auth0_logout_msg$_T extends WritableAtom$<auth0_logout_msg_T|undefined> {
	auth0_logout():void
}
