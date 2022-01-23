import { B } from '@ctx-core/object'
export declare const get_jwks_json_b:B<get_jwks_json_T>
export declare type get_jwks_json_T = ()=>Promise<[jwks_json_T, Response]>
export interface jwks_json_T {
	keys:{
		x5c:string
	}[]
}
