import type { Token } from '@ctx-core/jwt';
import { Readable } from '@ctx-core/store';
import { auth0_token_json_Ctx } from './auth0_token_json_b';
export interface in_auth0_token_Ctx extends auth0_token_json_Ctx {
    in_auth0_token?: in_auth0_token_T;
}
export declare const in_auth0_token_b: import("@ctx-core/object").Be<in_auth0_token_Ctx, "in_auth0_token">;
export declare type $in_auth0_token_T = Token;
export interface in_auth0_token_T extends Readable<$in_auth0_token_T> {
}
export { in_auth0_token_b as b__token__auth0__ };
