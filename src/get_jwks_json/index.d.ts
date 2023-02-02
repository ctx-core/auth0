import type { Ctx } from '@ctx-core/object'
export declare function get_jwks_json(ctx:Ctx):Promise<[jwks_json_T, Response]>
export interface jwks_json_T {
	keys:{ x5c:string }[]
}
