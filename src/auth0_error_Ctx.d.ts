import type { error_Ctx } from '@ctx-core/error';
import type { $auth0_token_T } from './auth0_token_b';
export interface auth0_error_Ctx extends error_Ctx {
    auth0_token: $auth0_token_T;
}
