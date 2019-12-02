import { __AUTH0_CLIENT_ID, __AUTH0_DOMAIN, __AUTH0_URL, __json__token__auth0, __token__auth0__, __token__auth0, __error__token__auth0, clear__token__auth0, logout__token__auth0, set__error__token__auth0 } from './store--base';
export { __AUTH0_CLIENT_ID, __AUTH0_DOMAIN, __AUTH0_URL, __json__token__auth0, __token__auth0__, __token__auth0, __error__token__auth0, clear__token__auth0, logout__token__auth0, set__error__token__auth0, };
export declare const __txt__error__token__auth0: import("svelte/store").Readable<any>;
export declare function set__token__auth0(token__auth0: any): void;
export declare const __token__auth0__userinfo__auth0: import("svelte/store").Writable<any>;
export declare const __userinfo__auth0: import("svelte/store").Readable<unknown>;
export declare const __ctx__userinfo__auth0: import("svelte/store").Readable<{
    userinfo__auth0: unknown;
    token__auth0__userinfo__auth0: any;
}>;
export declare const __email__auth0: import("svelte/store").Readable<string | false>;
export declare const __email: import("svelte/store").Readable<string | false>;
export declare const __is__loggedin__auth0: import("svelte/store").Readable<boolean>;
export declare const __is__loggedout__auth0: import("svelte/store").Readable<boolean>;
export declare const __opened__auth0: import("svelte/store").Writable<any>;
export declare const __class__opened__auth0: import("svelte/store").Readable<any>;
export declare const __closed__auth0: import("svelte/store").Readable<boolean>;
export declare const __opened__login: import("svelte/store").Readable<boolean>;
export declare const __opened__signup: import("svelte/store").Readable<boolean>;
export declare const __opened__forgot_password: import("svelte/store").Readable<boolean>;
export declare const __opened__check_email__forgot_password: import("svelte/store").Readable<boolean>;
export declare const __opened__change_password: import("svelte/store").Readable<boolean>;
export declare function reload__opened__auth0(): void;
export declare function clear__error__token__auth0(): void;
export declare function open__login__auth0(): void;
export declare function open__signup__auth0(): void;
export declare function open__forgot_password__auth0(): void;
export declare function open__check_email__forgot_password__auth0(): void;
export declare function open__change_password__auth0(): void;
export declare function close__auth0(): void;
export declare const __msg__logout__auth0: import("svelte/store").Writable<any>;
export declare function logout__auth0(): void;
