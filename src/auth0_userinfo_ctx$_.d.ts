import type { Token } from 'auth0'
import type { nullish } from '@ctx-core/function'
import { ReadableAtom$ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
import { auth0_userinfo_auth0_token_T } from './auth0_userinfo_auth0_token$_.js'
export declare const auth0_userinfo_ctx$_:B<auth0_userinfo_ctx$_T>
export interface auth0_userinfo_ctx_T {
	auth0_userinfo:Token|nullish;
	auth0_userinfo_auth0_token:auth0_userinfo_auth0_token_T;
}
export declare type auth0_userinfo_ctx$_T = ReadableAtom$<auth0_userinfo_ctx_T>;
