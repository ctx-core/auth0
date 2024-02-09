import type { ctx_T } from 'ctx-core/be'
export function auth0__init(
	ctx:ctx_T,
	props?:auth0__init__props_T
):void
export interface auth0__init__props_T {
	AUTH0_CLIENT_ID?:string
	AUTH0_CLIENT_SECRET?:string
	AUTH0_DOMAIN?:string
}
