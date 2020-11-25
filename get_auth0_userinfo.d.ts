import type { Token } from '@ctx-core/jwt';
export declare function get_auth0_userinfo(opts: get_auth0_userinfo_opts_type): any;
export interface get_auth0_userinfo_opts_type {
    auth0_token: string | Token;
    AUTH0_DOMAIN: string;
}
