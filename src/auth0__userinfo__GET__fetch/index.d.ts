import type { response_pair_T } from '@ctx-core/fetch'
import type { Ctx } from '@ctx-core/object'
import type { auth0__userinfo__GET__fetch2__params_T, auth0__userinfo__GET__fetch2__payload_T } from '../_types'
export declare function auth0__userinfo__GET__fetch(
	ctx:Ctx, params:auth0__userinfo__GET__fetch2__params_T
):Promise<Response>
export declare function auth0__userinfo__GET__fetch(
	params:auth0__userinfo__GET__fetch2__params_T&{ AUTH0_DOMAIN:string }
):Promise<Response>
export declare function auth0__userinfo__GET__fetch2(
	ctx:Ctx, params:auth0__userinfo__GET__fetch2__params_T
):Promise<response_pair_T<auth0__userinfo__GET__fetch2__payload_T>>
export declare function auth0__userinfo__GET__fetch2(
	params:auth0__userinfo__GET__fetch2__params_T&{ AUTH0_DOMAIN:string }
):Promise<response_pair_T<auth0__userinfo__GET__fetch2__payload_T>>
export {
	auth0__userinfo__GET__fetch2 as auth0__userinfo__fetch_get,
	auth0__userinfo__GET__fetch2 as get_auth0_userinfo,
}
