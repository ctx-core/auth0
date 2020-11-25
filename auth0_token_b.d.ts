import { Readable } from '@ctx-core/store';
import { Token } from '@ctx-core/jwt';
import { clear_auth0_token_type, logout_auth0_token_type, set_auth0_token_type } from './auth0_token_json_b';
export declare const auth0_token_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type) => auth0_token_type;
declare type schedule_auth0_token_current_validate = () => void;
declare type set_auth0_token_json_type = (event: {
    key: string;
    newValue: any;
}) => void;
export declare type $auth0_token_type = Token;
interface auth0_token_interface {
    set_auth0_token: set_auth0_token_type;
    clear_auth0_token: clear_auth0_token_type;
    logout_auth0_token: logout_auth0_token_type;
    schedule_auth0_token_current_validate: schedule_auth0_token_current_validate;
    set_auth0_token_json: set_auth0_token_json_type;
}
declare type auth0_token_type = Readable<$auth0_token_type | null> & auth0_token_interface;
export { auth0_token_b as b__token__auth0 };
