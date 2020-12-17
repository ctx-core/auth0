import { Readable } from '@ctx-core/store';
import type { Token } from '@ctx-core/jwt';
export declare const auth0_userinfo_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type) => auth0_userinfo_type;
export declare type $auth0_userinfo_type = Token;
export declare type $maybe_auth0_userinfo_type = $auth0_userinfo_type | null | boolean;
export interface auth0_userinfo_type extends Readable<$maybe_auth0_userinfo_type> {
}
export { auth0_userinfo_b as b__auth0_userinfo, };
