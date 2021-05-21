import { auth0_opened_Ctx } from './auth0_opened_b';
export interface open_auth0_login_I extends auth0_opened_Ctx {
    open_auth0_login?: open_auth0_login_T;
}
export declare const open_auth0_login_b: import("@ctx-core/object").Be<open_auth0_login_I, "open_auth0_login">;
export declare type open_auth0_login_T = () => void;
