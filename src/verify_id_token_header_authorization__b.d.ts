import { B } from '@ctx-core/object';
import type { auth0_token_T } from './auth0_token$_b';
import type { auth0_Ctx } from './auth0_Ctx';
declare const key = "verify_id_token_header_authorization_";
export declare const verify_id_token_header_authorization__b: B<auth0_Ctx, typeof key>;
export declare type verify_id_token_header_authorization__T = ($auth0_token: auth0_token_T) => Promise<string>;
export declare type _verify_id_token_header_authorization_T = verify_id_token_header_authorization__T;
export { verify_id_token_header_authorization__b as _verify_id_token_header_authorization_b };
