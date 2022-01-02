import type { Ctx } from '@ctx-core/object'
import type { auth0_client_id_body_I, auth0_client_id_optional_body_I } from './_types'
export declare function auth0_body__b<Out extends auth0_client_id_body_I = auth0_client_id_body_I>(
	ctx:Ctx, key:string
):auth0_body__T<Out>
export type auth0_body__T<Out extends auth0_client_id_body_I = auth0_client_id_body_I> =
	(body:auth0_client_id_optional_body_I)=>Out
