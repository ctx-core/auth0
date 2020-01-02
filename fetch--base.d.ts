export declare function _authorization__header__access_token(token__auth0: any): string | false;
export declare function _authorization__header__access_token__verify(token__auth0: any): string | false;
export interface Opts__get__userinfo__auth0 {
    token__auth0: string;
    AUTH0_DOMAIN: string;
}
export declare function get__userinfo__auth0(opts: Opts__get__userinfo__auth0): any;
export declare function validate__current__token__auth0(token__auth0: any): Promise<void>;
