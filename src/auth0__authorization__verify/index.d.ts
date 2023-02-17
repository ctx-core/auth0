import type { Ctx } from '@ctx-core/object'
import type { auth0__token_T } from '../_types'
export declare function auth0__authorization__verify(
	ctx:Ctx, auth0__token:auth0__token_T
):Promise<string>
export {
	auth0__authorization__verify as verify_id_token_header_authorization,
	auth0__authorization__verify as auth0_token__authorization,
}
