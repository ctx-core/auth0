import { Readable, Writable } from 'svelte/store';
import { falsy } from '@ctx-core/function';
import { Token } from '@ctx-core/jwt';
export declare type Token__auth0 = Token | falsy;
export declare const _s__AUTH0_CLIENT_ID: (ctx?: any, opts?: any) => Writable<string>, __AUTH0_CLIENT_ID: Writable<string>;
export declare const _s__AUTH0_DOMAIN: (ctx?: any, opts?: any) => Writable<string>, __AUTH0_DOMAIN: Writable<string>;
export declare const _s__AUTH0_URL: (ctx?: any, opts?: any) => Writable<string>, __AUTH0_URL: Writable<string>;
export declare const _s__json__token__auth0: (ctx?: any, opts?: any) => [Writable<string | false | 0>, ...any[]], __json__token__auth0: Writable<string | false | 0>, set__token__auth0: any, schedule__validate__current__token__auth0: any;
interface Writable__Opened__Auth0 extends Writable<falsy | string> {
    open__login__auth0: () => void;
    open__signup__auth0: () => void;
    open__forgot_password__auth0: () => void;
    open__check_email__forgot_password__auth0: () => void;
    open__change_password__auth0: () => void;
    close__auth0: () => void;
    reload__opened__auth0: () => void;
}
export declare const _s__opened__auth0: (ctx?: any, opts?: any) => [Writable__Opened__Auth0, ...any[]], __opened__auth0: Writable__Opened__Auth0, open__login__auth0: any, open__signup__auth0: any, open__forgot_password__auth0: any, open__check_email__forgot_password__auth0: any, open__change_password__auth0: any, close__auth0: any, reload__opened__auth0: any;
declare type clear__token__auth0 = (value: any) => void;
declare type logout__token__auth0 = () => void;
interface TokenAuth0Readable extends Readable<Token__auth0> {
    clear__token__auth0: clear__token__auth0;
    logout__token__auth0: logout__token__auth0;
}
export declare const _s__token__auth0__: (ctx?: any, opts?: any) => [TokenAuth0Readable, ...any[]], __token__auth0__: TokenAuth0Readable, clear__token__auth0: any, logout__token__auth0: any;
export declare const _s__token__auth0: (ctx?: any, opts?: any) => Readable<Token__auth0>, __token__auth0: Readable<Token__auth0>;
export declare const _s__token__auth0__userinfo__auth0: (ctx?: any, opts?: any) => Writable<any>, __token__auth0__userinfo__auth0: Writable<any>;
export declare const _s__userinfo__auth0: (ctx?: any, opts?: any) => Readable<unknown>, __userinfo__auth0: Readable<unknown>;
export declare const _s__email__auth0: (ctx?: any, opts?: any) => Readable<string | false>, __email__auth0: Readable<string | false>;
export declare const _s__email: (ctx?: any, opts?: any) => Readable<string | false>;
export declare const __email: Readable<string | false>;
declare type Ctx__error = {
    message?: string;
    error_message?: string;
    error_description?: string;
    error?: any;
};
interface Writable__error__token__auth0 extends Writable<Ctx__error> {
    set__error__token__auth0: (error: any) => void;
    clear__error__token__auth0: () => void;
}
export declare const _s__error__token__auth0: (ctx?: any, opts?: any) => [Writable__error__token__auth0, ...any[]], __error__token__auth0: Writable__error__token__auth0, set__error__token__auth0: any, clear__error__token__auth0: any;
export {};
