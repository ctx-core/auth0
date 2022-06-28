import { type Ctx } from '@ctx-core/object'
import { type auth0_token_T } from '../auth0_token__'
export declare function verify_id_token_header_authorization(
	ctx:Ctx, auth0_token:auth0_token_T
):Promise<string>
