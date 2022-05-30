import type { nullish } from '@ctx-core/function'
import type { JwtToken } from '@ctx-core/jwt'
import { ReadableAtom_ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
export declare const auth0_userinfo$_:B<auth0_userinfo$_T>
export declare type auth0_userinfo$_T = ReadableAtom_<JwtToken|nullish>;
