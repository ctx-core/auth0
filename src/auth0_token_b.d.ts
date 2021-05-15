import { B } from '@ctx-core/object';
import { Readable } from '@ctx-core/store';
import { Token } from '@ctx-core/jwt';
import { auth0_token_json_ctx_I } from './auth0_token_json_b';
import { clear_auth0_token_ctx_I, clear_auth0_token_T } from './clear_auth0_token_b';
import { logout_auth0_token_ctx_I, logout_auth0_token_T } from './logout_auth0_token_b';
import { logout_auth0_token_error_ctx_I } from './logout_auth0_token_error_b';
import { set_auth0_token_ctx_I, set_auth0_token_T } from './set_auth0_token_b';
export declare const auth0_token_b: auth0_token_b_T;
export interface auth0_token_ctx_I extends auth0_token_json_ctx_I, clear_auth0_token_ctx_I, logout_auth0_token_ctx_I, logout_auth0_token_error_ctx_I, set_auth0_token_ctx_I {
    auth0_token?: auth0_token_T;
}
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
export interface auth0_token_b_T extends B<auth0_token_T> {
}
export { auth0_token_b as b__token__auth0 };
