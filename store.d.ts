import { Writable } from 'svelte/store';
import { falsy } from '@ctx-core/function';
import { b__AUTH0_CLIENT_ID, __AUTH0_CLIENT_ID, b__AUTH0_DOMAIN, __AUTH0_DOMAIN, b__AUTH0_URL, __AUTH0_URL, b__json__token__auth0, __json__token__auth0, set__token__auth0, b__token__auth0__, __token__auth0__, set__error__token__auth0, clear__token__auth0, logout__token__auth0, clear__error__token__auth0, b__token__auth0, __token__auth0, b__token__auth0__userinfo__auth0, __token__auth0__userinfo__auth0, b__userinfo__auth0, __userinfo__auth0, b__error__token__auth0, __error__token__auth0, b__email__auth0, __email__auth0, b__email, __email, b__opened__auth0, __opened__auth0, open__login__auth0, open__signup__auth0, open__forgot_password__auth0, open__check_email__forgot_password__auth0, open__change_password__auth0, close__auth0, reload__opened__auth0 } from './store--base';
export { b__AUTH0_CLIENT_ID, __AUTH0_CLIENT_ID, b__AUTH0_DOMAIN, __AUTH0_DOMAIN, b__AUTH0_URL, __AUTH0_URL, b__json__token__auth0, __json__token__auth0, set__token__auth0, b__token__auth0__, __token__auth0__, set__error__token__auth0, clear__token__auth0, logout__token__auth0, clear__error__token__auth0, b__token__auth0, __token__auth0, b__token__auth0__userinfo__auth0, __token__auth0__userinfo__auth0, b__userinfo__auth0, __userinfo__auth0, b__error__token__auth0, __error__token__auth0, b__email__auth0, __email__auth0, b__email, __email, b__opened__auth0, __opened__auth0, open__login__auth0, open__signup__auth0, open__forgot_password__auth0, open__check_email__forgot_password__auth0, open__change_password__auth0, close__auth0, reload__opened__auth0, };
export declare const b__txt__error__token__auth0: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __txt__error__token__auth0: import("svelte/store").Readable<any>;
export declare const b__ctx__userinfo__auth0: (ctx?: any, opts?: any) => import("svelte/store").Readable<{
    userinfo__auth0: unknown;
    token__auth0__userinfo__auth0: any;
}>;
export declare const __ctx__userinfo__auth0: import("svelte/store").Readable<{
    userinfo__auth0: unknown;
    token__auth0__userinfo__auth0: any;
}>;
export declare const b__is__loggedin__auth0: (ctx?: any, opts?: any) => import("svelte/store").Readable<boolean>;
export declare const __is__loggedin__auth0: import("svelte/store").Readable<boolean>;
export declare const b__is__loggedout__auth0: (ctx?: any, opts?: any) => import("svelte/store").Readable<boolean>;
export declare const __is__loggedout__auth0: import("svelte/store").Readable<boolean>;
export declare const b__class__opened__auth0: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __class__opened__auth0: import("svelte/store").Readable<any>;
export declare const b__closed__auth0: (ctx?: any, opts?: any) => import("svelte/store").Readable<boolean>;
export declare const __closed__auth0: import("svelte/store").Readable<boolean>;
export declare const b__opened__login: (ctx?: any, opts?: any) => import("svelte/store").Readable<boolean>;
export declare const __opened__login: import("svelte/store").Readable<boolean>;
export declare const b__opened__signup: (ctx?: any, opts?: any) => import("svelte/store").Readable<boolean>;
export declare const __opened__signup: import("svelte/store").Readable<boolean>;
export declare const b__opened__forgot_password: (ctx?: any, opts?: any) => import("svelte/store").Readable<boolean>;
export declare const __opened__forgot_password: import("svelte/store").Readable<boolean>;
export declare const b__opened__check_email__forgot_password: (ctx?: any, opts?: any) => import("svelte/store").Readable<boolean>;
export declare const __opened__check_email__forgot_password: import("svelte/store").Readable<boolean>;
export declare const b__opened__change_password: (ctx?: any, opts?: any) => import("svelte/store").Readable<boolean>;
export declare const __opened__change_password: import("svelte/store").Readable<boolean>;
export interface Writable__msg__logout__auth0 extends Writable<falsy | any> {
    logout__auth0: () => void;
}
export declare const b__msg__logout__auth0: (ctx?: any, opts?: any) => Writable__msg__logout__auth0;
export declare const __msg__logout__auth0: Writable__msg__logout__auth0;
export declare const logout__auth0: () => void;
