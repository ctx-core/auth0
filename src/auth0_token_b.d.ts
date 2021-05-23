import { Readable } from '@ctx-core/store';
import { Token } from '@ctx-core/jwt';
import { clear_auth0_token_T } from './clear_auth0_token_b';
import { logout_auth0_token_T } from './logout_auth0_token_b';
import { set_auth0_token_T } from './set_auth0_token_b';
import type { auth0_Ctx } from './auth0_Ctx';
export declare const auth0_token_b: import("@ctx-core/object").Be<auth0_Ctx, "auth0_token", auth0_token_T>;
export declare type schedule_auth0_token_current_validate = () => void;
export declare type set_auth0_token_json_T = (event: {
    key: string;
    newValue: any;
}) => void;
export declare type $auth0_token_T = Token;
export interface auth0_token_T extends Readable<$auth0_token_T | null> {
    set_auth0_token: set_auth0_token_T;
    clear_auth0_token: clear_auth0_token_T;
    logout_auth0_token: logout_auth0_token_T;
    schedule_auth0_token_current_validate: schedule_auth0_token_current_validate;
    set_auth0_token_json: set_auth0_token_json_T;
}
export { auth0_token_b as b__token__auth0 };
