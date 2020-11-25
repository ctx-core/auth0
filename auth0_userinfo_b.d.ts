import { Readable } from '@ctx-core/store';
import type { Token } from '@ctx-core/jwt';
export declare const auth0_userinfo_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type) => Readable<unknown>;
export declare type $type__auth0_userinfo = Token;
export declare type $maybe_type__auth0_userinfo = $type__auth0_userinfo | null | boolean;
export declare type type__auth0_userinfo = Readable<$maybe_type__auth0_userinfo>;
export { auth0_userinfo_b as b__auth0_userinfo, };
