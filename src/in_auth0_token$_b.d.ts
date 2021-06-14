import { B } from '@ctx-core/object';
import type { Token } from '@ctx-core/jwt';
import { Readable$ } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "in_auth0_token$";
export declare const in_auth0_token$_b: B<auth0_Ctx, typeof key>;
export declare type in_auth0_token_T = Token;
export interface in_auth0_token$_T extends Readable$<in_auth0_token_T> {
}
export { in_auth0_token$_b as b__token__auth0__ };
