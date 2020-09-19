import { _authorization__header__access_token, _authorization__header__access_token__verify, get__userinfo__auth0, Opts__get__userinfo__auth0 } from './fetch--base';
export { _authorization__header__access_token, _authorization__header__access_token__verify, Opts__get__userinfo__auth0, get__userinfo__auth0, };
export declare function get__jwks__json(): Promise<any>;
export declare function post__signup__dbconnections__auth0(body: any): any;
export declare function post__start__passwordless__auth0(body: any): any;
export declare function post__change_password__auth(password: any): Promise<any>;
export declare function post__change_password__dbconnections__auth0(body: any): any;
export declare function post__token__oauth__auth0(body: any): any;
export declare function _authorization__header__id_token__verify(auth0_token: any): Promise<string | null>;
export declare function _body__password_realm(...form: any[]): {
    client_id: any;
};
export declare function _body(...form: any[]): {
    client_id: any;
};
