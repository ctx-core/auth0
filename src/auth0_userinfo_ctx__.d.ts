import type { nullish } from '@ctx-core/function'
import { ReadableAtom_ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
import type { Token } from 'auth0'
import { auth0_userinfo_auth0_token_T } from './auth0_userinfo_auth0_token__.js'
export declare const auth0_userinfo_ctx__:B<ReadableAtom_<auth0_userinfo_ctx_T>>
export interface auth0_userinfo_ctx_T {
	auth0_userinfo:Token|nullish;
	auth0_userinfo_auth0_token:auth0_userinfo_auth0_token_T;
}
export { auth0_userinfo_ctx__ as auth0_userinfo_ctx$_ }
