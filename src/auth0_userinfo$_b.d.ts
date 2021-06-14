import type { nullish } from '@ctx-core/function';
import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { Token } from '@ctx-core/jwt';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "auth0_userinfo$";
export declare const auth0_userinfo$_b: B<auth0_Ctx, typeof key>;
export declare type auth0_userinfo$_T = Readable$<Token | nullish>;
export { auth0_userinfo$_b as b__auth0_userinfo, };
