import type { Token } from '@ctx-core/jwt'
export declare function get_auth0_userinfo(params:get_auth0_userinfo_params_I):Promise<Response>;
export interface get_auth0_userinfo_params_I {
	auth0_token:Token;
	AUTH0_DOMAIN:string;
}
