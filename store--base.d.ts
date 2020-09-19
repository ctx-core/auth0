import { Readable, Writable } from 'svelte/store';
import type { falsy, maybe_null } from '@ctx-core/function';
import { Token } from '@ctx-core/jwt';
import type { maybe } from '@ctx-core/function';
export declare const b__AUTH0_CLIENT_ID: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Writable<string | undefined>;
export declare const __AUTH0_CLIENT_ID: Writable<string | undefined>;
export declare const b__AUTH0_DOMAIN: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Writable<string | undefined>;
export declare const __AUTH0_DOMAIN: Writable<string | undefined>;
export declare const b__AUTH0_URL: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Writable<string | undefined>;
export declare const __AUTH0_URL: Writable<string | undefined>;
declare type set__token__auth0 = (auth0_token: any) => void;
declare type clear__token__auth0 = (value?: falsy) => void;
declare type logout__token__auth0 = () => void;
export interface type__json__token__auth0 extends Writable<string | falsy> {
    set__token__auth0: set__token__auth0;
    clear__token__auth0: clear__token__auth0;
    logout__token__auth0: logout__token__auth0;
}
export declare const b__json__token__auth0: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__json__token__auth0;
export declare const __json__token__auth0: type__json__token__auth0;
export declare const set__token__auth0: set__token__auth0, clear__token__auth0: clear__token__auth0, logout__token__auth0: logout__token__auth0;
export declare const b__token__auth0__: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => auth0_token_type;
export declare type $auth0_token_type = Token | falsy;
export declare const __token__auth0__: auth0_token_type;
export declare type error_ctx_type = {
    message?: string;
    error_message?: string;
    error_description?: string;
    error?: any;
};
export declare type maybe_error_ctx_type = maybe_null<error_ctx_type>;
export interface type__error__token__auth0 extends Writable<maybe_error_ctx_type> {
    set__error__token__auth0: (error: any) => void;
    clear__error__token__auth0: () => void;
}
export declare const b__error__token__auth0: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__error__token__auth0;
export declare const __error__token__auth0: type__error__token__auth0;
export declare const set__error__token__auth0: (error: any) => void, clear__error__token__auth0: () => void;
declare type schedule__validate__current__token__auth0 = () => void;
declare type __storage__json__token__auth0 = (event: {
    key: string;
    newValue: any;
}) => void;
interface auth0_token_type extends Readable<$auth0_token_type> {
    set__token__auth0: set__token__auth0;
    clear__token__auth0: clear__token__auth0;
    logout__token__auth0: logout__token__auth0;
    schedule__validate__current__token__auth0: schedule__validate__current__token__auth0;
    __storage__json__token__auth0: __storage__json__token__auth0;
}
export declare const b__token__auth0: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => auth0_token_type;
export declare const __token__auth0: auth0_token_type;
export declare const schedule__validate__current__token__auth0: schedule__validate__current__token__auth0, __storage__json__token__auth0: __storage__json__token__auth0;
export declare function b__token__auth0__userinfo__auth0<I>(ctx?: any): Writable<maybe<I, falsy>>;
export declare const __token__auth0__userinfo__auth0: Writable<unknown>;
export declare type $type__userinfo__auth0 = {
    email: string;
};
export declare type $maybe_type__userinfo__auth0 = maybe<$type__userinfo__auth0, null | false>;
export declare type type__userinfo__auth0 = Readable<$maybe_type__userinfo__auth0>;
export declare const b__userinfo__auth0: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__userinfo__auth0;
export declare const __userinfo__auth0: type__userinfo__auth0;
export declare const b__email__auth0: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Readable<string | false | null>;
export declare const __email__auth0: Readable<string | false | null>;
export declare const b__email: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Readable<string | false | null>;
export declare const __email: Readable<string | false | null>;
export declare type $type__opened__auth0 = maybe<string>;
export interface type__opened__auth0 extends Writable<$type__opened__auth0> {
    open__login__auth0: () => void;
    open__signup__auth0: () => void;
    open__forgot_password__auth0: () => void;
    open__check_email__forgot_password__auth0: () => void;
    open__change_password__auth0: () => void;
    close__auth0: () => void;
    reload__opened__auth0: () => void;
}
export declare const b__opened__auth0: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__opened__auth0;
export declare const __opened__auth0: type__opened__auth0;
export declare const open__login__auth0: () => void, open__signup__auth0: () => void, open__forgot_password__auth0: () => void, open__check_email__forgot_password__auth0: () => void, open__change_password__auth0: () => void, close__auth0: () => void, reload__opened__auth0: () => void;
export {};
