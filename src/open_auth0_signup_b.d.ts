import { auth0_opened_Ctx } from './auth0_opened_b';
export interface open_auth0_signup_Ctx extends auth0_opened_Ctx {
    open_auth0_signup?: open_auth0_signup_T;
}
export declare const open_auth0_signup_b: import("@ctx-core/object").Be<open_auth0_signup_Ctx, "open_auth0_signup", open_auth0_signup_T>;
export declare type open_auth0_signup_T = () => void;
