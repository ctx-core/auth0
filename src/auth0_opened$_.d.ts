import type { nullish } from '@ctx-core/function'
import type { WritableAtom$ } from '@ctx-core/nanostores'
import type { Be } from '@ctx-core/object'
export declare const auth0_opened$_:Be<auth0_opened$_T>
export type auth0_opened_T = string|nullish
export interface auth0_opened$_T extends WritableAtom$<auth0_opened_T> {
	open_auth0_change_password:()=>void
	reload_auth0_opened:()=>void
}
