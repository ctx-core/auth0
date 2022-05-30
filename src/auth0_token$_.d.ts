import type { nullish } from '@ctx-core/function'
import { JwtToken } from '@ctx-core/jwt'
import { ReadableAtom_ } from '@ctx-core/nanostores'
import { B, Ctx } from '@ctx-core/object'
export declare const auth0_token$_:B<auth0_token$_T>
export declare type auth0_token_T = JwtToken
export type auth0_token$_T = ReadableAtom_<JwtToken|nullish>
