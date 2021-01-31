import { B } from '@ctx-core/object';
import { Readable } from '@ctx-core/store';
import { Token } from '@ctx-core/jwt';
import { clear_auth0_token_type } from './clear_auth0_token_b';
import { logout_auth0_token_type } from './logout_auth0_token_b';
import { set_auth0_token_type } from './set_auth0_token_b';
export declare const auth0_token_b: auth0_token_b_type;
export declare type schedule_auth0_token_current_validate = () => void;
export declare type set_auth0_token_json_type = (event: {
    key: string;
    newValue: any;
}) => void;
export declare type $auth0_token_type = Token;
export interface auth0_token_type extends Readable<$auth0_token_type | null> {
    set_auth0_token: set_auth0_token_type;
    clear_auth0_token: clear_auth0_token_type;
    logout_auth0_token: logout_auth0_token_type;
    schedule_auth0_token_current_validate: schedule_auth0_token_current_validate;
    set_auth0_token_json: set_auth0_token_json_type;
}
export interface auth0_token_b_type extends B<auth0_token_type> {
}
export { auth0_token_b as b__token__auth0 };
