import { Readable } from '@ctx-core/store';
import type { Token } from '@ctx-core/jwt';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_email_b: (ctx: auth0_Ctx, opts?: import("@ctx-core/object")._be_opts_T) => auth0_email_T;
export declare type $auth0_email_T = Token | false;
export interface auth0_email_T extends Readable<$auth0_email_T> {
}
export { auth0_email_b as b__email__auth0, auth0_email_b as b__email, };
