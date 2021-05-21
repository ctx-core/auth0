import { Readable } from '@ctx-core/store';
import { auth0_token_Ctx } from './auth0_token_b';
export interface is_auth0_loggedin_Ctx extends auth0_token_Ctx {
    is_auth0_loggedin?: is_auth0_loggedin_T;
}
export declare const is_auth0_loggedin_b: import("@ctx-core/object").Be<is_auth0_loggedin_Ctx, "is_auth0_loggedin">;
export declare type $is_auth0_loggedin_T = boolean;
export interface is_auth0_loggedin_T extends Readable<$is_auth0_loggedin_T> {
}
export { is_auth0_loggedin_b as b__is__loggedin__auth0, };
