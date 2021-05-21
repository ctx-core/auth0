import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { $auth0_opened_T, auth0_opened_b, auth0_opened_Ctx } from './auth0_opened_b'
const key = 'auth0_opened_class'
export interface auth0_opened_class_Ctx
	extends auth0_opened_Ctx {
	auth0_opened_class?:auth0_opened_class_T
}
export const auth0_opened_class_b = _b<auth0_opened_class_Ctx, typeof key>(key, ctx=>
	derived$(auth0_opened_b(ctx),
		(v:$auth0_opened_T)=>v
	) as auth0_opened_class_T)
export type $auth0_opened_class_T = $auth0_opened_T
export interface auth0_opened_class_T extends Readable$<$auth0_opened_class_T> {}
export {
	auth0_opened_class_b as b__class__opened__auth0,
}
