import { B } from '@ctx-core/object';
import type { $auth0_token_type } from './auth0_token_b';
export declare const _verify_id_token_header_authorization_b: _verify_id_token_header_authorization_b_type;
export declare type _verify_id_token_header_authorization_type = ($auth0_token: $auth0_token_type) => Promise<string>;
export interface _verify_id_token_header_authorization_b_type extends B<_verify_id_token_header_authorization_type> {
}
