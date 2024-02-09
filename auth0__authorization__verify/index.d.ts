import type { ctx_T } from 'ctx-core/be'
import type { auth0__token_T } from '../_types/index.js'
export declare function auth0__authorization__verify(
	ctx:ctx_T,
	auth0__token:auth0__token_T
):Promise<string>
export {
	auth0__authorization__verify as verify_id_token_header_authorization,
	auth0__authorization__verify as auth0_token__authorization,
}
