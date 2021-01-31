import { B } from '@ctx-core/object';
import type { Token } from '@ctx-core/jwt';
import { Readable } from '@ctx-core/store';
export declare const in_auth0_token_b: in_auth0_token_b_type;
export declare type $in_auth0_token_type = Token;
export interface in_auth0_token_type extends Readable<$in_auth0_token_type> {
}
export interface in_auth0_token_b_type extends B<in_auth0_token_type> {
}
export { in_auth0_token_b as b__token__auth0__ };
