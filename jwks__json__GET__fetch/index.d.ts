import type { fetch__template_pair_T } from 'ctx-core/fetch'
import type { Auth0Error } from 'auth0-js'
import type { ctx_T } from 'ctx-core/be'
export declare const [
	jwks__json__GET__fetch,
	jwks__json__GET__fetch2,
]:fetch__template_pair_T<
	[ctx:ctx_T],
	jwks_json_T|Auth0Error
>
export {
	jwks__json__GET__fetch2 as jwks__json__fetch_get,
	jwks__json__GET__fetch2 as get_jwks_json,
}
export interface jwks_json_T {
	keys:{ x5c:string }[]
}
