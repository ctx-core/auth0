import { auth0_opened_Ctx } from './auth0_opened_b';
export interface close_auth0_Ctx extends auth0_opened_Ctx {
    close_auth0?: close_auth0_T;
}
export declare const close_auth0_b: import("@ctx-core/object").Be<close_auth0_Ctx, "close_auth0">;
export declare type close_auth0_T = () => void;
