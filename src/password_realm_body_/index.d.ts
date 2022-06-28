import { type Ctx } from '@ctx-core/object'
import type { auth0_client_id_body_I, auth0_grant_type_body_I } from '../_types'
export declare function password_realm_body_<Out extends password_realm_body_T = password_realm_body_T>(
	ctx:Ctx, data:Partial<Out>
):Out
export interface password_realm_body_T extends auth0_grant_type_body_I, auth0_client_id_body_I {
	realm:string;
	connection:string;
}
