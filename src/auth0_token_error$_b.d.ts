import type { Auth0Error } from 'auth0-js'
import { B } from '@ctx-core/object'
import { WritableAtom$ } from '@ctx-core/nanostores'
export declare const auth0_token_error$_b:B<auth0_token_error$_T>
export declare type auth0_token_error_T = Auth0Error|undefined
export interface auth0_token_error$_T extends WritableAtom$<auth0_token_error_T> {
}
export { auth0_token_error$_b as b__error__token__auth0, }
