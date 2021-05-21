import { Readable } from '@ctx-core/store';
import { auth0_opened_ctx_I } from './auth0_opened_b';
export interface auth0_closed_ctx_I extends auth0_opened_ctx_I {
    auth0_closed?: auth0_closed_T;
}
export declare const auth0_closed_b: import("@ctx-core/object").Be<auth0_closed_ctx_I, "auth0_closed">;
export declare type $auth0_closed_T = boolean;
export interface auth0_closed_T extends Readable<$auth0_closed_T> {
}
export { auth0_closed_b as b__closed__auth0, };
