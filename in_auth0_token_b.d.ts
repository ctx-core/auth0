import type { Token } from '@ctx-core/jwt';
import { Readable } from '@ctx-core/store';
export declare const in_auth0_token_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type) => in_auth0_token_type;
export declare type $in_auth0_token_type = Token;
export interface in_auth0_token_type extends Readable<$in_auth0_token_type> {
}
export { in_auth0_token_b as b__token__auth0__ };
