import { type WritableAtom_ } from '@ctx-core/nanostores'
import type { B, Ctx } from '@ctx-core/object'
export declare const auth0_logout_msg__:B<WritableAtom_<auth0_logout_msg_T|undefined>>
export interface auth0_logout_msg_T {
	time:number
}
export declare function auth0_logout(ctx:Ctx):void
export { auth0_logout_msg__ as auth0_logout_msg$_ }
