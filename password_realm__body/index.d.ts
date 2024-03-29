import type { ctx_T } from 'ctx-core/be'
import type { auth0__client_id__body_T, auth0__grant_type__body_T } from '../_types/index.js'
export declare function password_realm__body_<
	Out extends password_realm__body_T = password_realm__body_T
>(
	ctx:ctx_T,
	data:auth0__client_id__body_T|password_realm__body_T
):Out
export {
	password_realm__body_ as password_realm_body_,
}
export interface password_realm__body_T
	extends auth0__grant_type__body_T, auth0__client_id__body_T {
	realm:string
	connection:string
}
export declare type password_realm_body_T = password_realm__body_T
