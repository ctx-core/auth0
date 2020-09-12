import { Readable, Writable } from 'svelte/store';
import type { falsy } from '@ctx-core/function';
import { Token } from '@ctx-core/jwt';
export declare type Token__auth0 = Token | falsy;
export declare const b__AUTH0_CLIENT_ID: (ctx?: any, opts?: any) => Writable<string>;
export declare const __AUTH0_CLIENT_ID: Writable<string>;
export declare const b__AUTH0_DOMAIN: (ctx?: any, opts?: any) => Writable<string>;
export declare const __AUTH0_DOMAIN: Writable<string>;
export declare const b__AUTH0_URL: (ctx?: any, opts?: any) => Writable<string>;
export declare const __AUTH0_URL: Writable<string>;
declare type set__token__auth0 = (token__auth0: any) => void;
declare type clear__token__auth0 = (value?: falsy) => void;
declare type logout__token__auth0 = () => void;
export interface Writable__json__token__auth0 extends Writable<string | falsy> {
    set__token__auth0: set__token__auth0;
    clear__token__auth0: clear__token__auth0;
    logout__token__auth0: logout__token__auth0;
}
export declare const b__json__token__auth0: (ctx?: any, opts?: any) => Writable__json__token__auth0;
export declare const __json__token__auth0: Writable__json__token__auth0;
export declare const set__token__auth0: set__token__auth0, clear__token__auth0: clear__token__auth0, logout__token__auth0: logout__token__auth0;
export declare const b__token__auth0__: (ctx?: any, opts?: any) => Readable<Token__auth0>;
export declare const __token__auth0__: Readable<Token__auth0>;
declare type Ctx__error = {
    message?: string;
    error_message?: string;
    error_description?: string;
    error?: any;
};
export interface Writable__error__token__auth0 extends Writable<Ctx__error> {
    set__error__token__auth0: (error: any) => void;
    clear__error__token__auth0: () => void;
}
export declare const b__error__token__auth0: (ctx?: any, opts?: any) => Writable__error__token__auth0;
export declare const __error__token__auth0: Writable__error__token__auth0;
export declare const set__error__token__auth0: (error: any) => void, clear__error__token__auth0: () => void;
declare type schedule__validate__current__token__auth0 = () => void;
declare type __storage__json__token__auth0 = (event: {
    key: string;
    newValue: any;
}) => void;
interface Readable__token__auth0 extends Readable<Token__auth0> {
    set__token__auth0: set__token__auth0;
    clear__token__auth0: clear__token__auth0;
    logout__token__auth0: logout__token__auth0;
    schedule__validate__current__token__auth0: schedule__validate__current__token__auth0;
    __storage__json__token__auth0: __storage__json__token__auth0;
}
export declare const b__token__auth0: (ctx?: any, opts?: any) => Readable__token__auth0;
export declare const __token__auth0: Readable__token__auth0;
export declare const schedule__validate__current__token__auth0: schedule__validate__current__token__auth0, __storage__json__token__auth0: __storage__json__token__auth0;
export declare const b__token__auth0__userinfo__auth0: (ctx?: any, opts?: any) => Writable<any>;
export declare const __token__auth0__userinfo__auth0: Writable<any>;
export declare const b__userinfo__auth0: (ctx?: any, opts?: any) => Readable<unknown>;
export declare const __userinfo__auth0: Readable<unknown>;
export declare const b__email__auth0: (ctx?: any, opts?: any) => Readable<string | false>;
export declare const __email__auth0: Readable<string | false>;
export declare const b__email: (ctx?: any, opts?: any) => Readable<string | false>;
export declare const __email: Readable<string | false>;
export interface Writable__opened__auth0 extends Writable<falsy | string> {
    open__login__auth0: () => void;
    open__signup__auth0: () => void;
    open__forgot_password__auth0: () => void;
    open__check_email__forgot_password__auth0: () => void;
    open__change_password__auth0: () => void;
    close__auth0: () => void;
    reload__opened__auth0: () => void;
}
export declare const b__opened__auth0: (ctx?: any, opts?: any) => Writable__opened__auth0;
export declare const __opened__auth0: Writable__opened__auth0;
export declare const open__login__auth0: () => void, open__signup__auth0: () => void, open__forgot_password__auth0: () => void, open__check_email__forgot_password__auth0: () => void, open__change_password__auth0: () => void, close__auth0: () => void, reload__opened__auth0: () => void;
export {};
