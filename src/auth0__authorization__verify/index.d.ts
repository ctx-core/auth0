import type { Ctx } from '@ctx-core/object'
import type { auth0__token_T } from '../auth0__token__'
export declare function auth0__authorization__verify(
	ctx:Ctx, auth0_token:auth0__token_T
):Promise<string>
export {
	auth0__authorization__verify as auth0_token__authorization,
}
