import type { Auth0Error } from 'auth0-js'
import type { ctx_T } from 'ctx-core/be'
import type { HttpError } from 'ctx-core/error'
import type { auth0__token_T } from '../_types/index.js'
export declare function auth0__Authorization__validation_pair_(
	ctx:ctx_T,
	auth0__token:auth0__token_T
):Promise<auth0__Authorization__validation_pair_T>
export type auth0__Authorization__validation_pair_T =
	[string|null, Auth0Error&HttpError|null]
