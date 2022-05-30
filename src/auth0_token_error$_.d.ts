import type { Auth0Error } from 'auth0-js'
import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { B } from '@ctx-core/object'
export declare const auth0_token_error$_:B<auth0_token_error$_T>
export declare type auth0_token_error_T = Auth0Error|undefined
export type auth0_token_error$_T = WritableAtom_<auth0_token_error_T>
