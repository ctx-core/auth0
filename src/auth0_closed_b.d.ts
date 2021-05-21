import { Readable } from '@ctx-core/store';
import { auth0_opened_Ctx } from './auth0_opened_b';
export interface auth0_closed_Ctx extends auth0_opened_Ctx {
    auth0_closed?: auth0_closed_T;
}
export declare const auth0_closed_b: import("@ctx-core/object").Be<auth0_closed_Ctx, "auth0_closed">;
export declare type $auth0_closed_T = boolean;
export interface auth0_closed_T extends Readable<$auth0_closed_T> {
}
export { auth0_closed_b as b__closed__auth0, };
