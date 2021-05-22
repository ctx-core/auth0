import { auth0_token_Ctx } from './auth0_token_b';
import { _verify_id_token_header_authorization_Ctx } from './_verify_id_token_header_authorization_b';
export interface post_auth0_auth_change_password_Ctx extends auth0_token_Ctx, _verify_id_token_header_authorization_Ctx {
    post_auth0_auth_change_password?: post_auth0_auth_change_password_T;
}
export declare const post_auth0_auth_change_password_b: import("@ctx-core/object").Be<post_auth0_auth_change_password_Ctx, "post_auth0_auth_change_password", post_auth0_auth_change_password_T>;
export declare type post_auth0_auth_change_password_T = (password: string) => Promise<Response>;
