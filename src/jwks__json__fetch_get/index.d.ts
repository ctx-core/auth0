import type { Ctx } from '@ctx-core/object'
export declare function jwks__json__fetch_get(
	ctx:Ctx
):Promise<[jwks_json_T, Response]>
export {
	jwks__json__fetch_get as get_jwks_json,
}
export interface jwks_json_T {
	keys:{ x5c:string }[]
}
