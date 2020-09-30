import { Token } from '@ctx-core/jwt';
export declare function _authorization__header__access_token(auth0_token: any): string | false;
export declare function _authorization__header__access_token__verify(auth0_token: any): string | false;
export interface Opts__get__userinfo__auth0 {
    auth0_token: string | Token;
    AUTH0_DOMAIN: string;
}
export declare function get__userinfo__auth0(opts: Opts__get__userinfo__auth0): any;
export declare function validate__current__token__auth0(auth0_token: any): Promise<void>;
