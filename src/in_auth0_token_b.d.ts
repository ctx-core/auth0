import type { Token } from '@ctx-core/jwt';
import { Readable } from '@ctx-core/store';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const in_auth0_token_b: import("@ctx-core/object").Be<auth0_Ctx, "in_auth0_token", in_auth0_token_T>;
export declare type $in_auth0_token_T = Token;
export interface in_auth0_token_T extends Readable<$in_auth0_token_T> {
}
export { in_auth0_token_b as b__token__auth0__ };
