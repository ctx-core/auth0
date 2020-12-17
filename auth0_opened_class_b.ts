import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { $auth0_opened_type, auth0_opened_b } from './auth0_opened_b'
export const auth0_opened_class_b = _b('auth0_opened_class', ctx=>
	derived(auth0_opened_b(ctx),
		(v:$auth0_opened_type)=>v) as auth0_opened_class_type
)
export type $auth0_opened_class_type = $auth0_opened_type
export interface auth0_opened_class_type extends Readable<$auth0_opened_class_type> {}
export {
	auth0_opened_class_b as b__class__opened__auth0,
}
