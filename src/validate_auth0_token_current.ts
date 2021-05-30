import { validate_current_jwt } from '@ctx-core/jwt'
import type { auth0_token_T } from './auth0_token$_b'
export function validate_auth0_token_current(auth0_token:auth0_token_T):void {
	const id_token = auth0_token && auth0_token.id_token
	validate_current_jwt(id_token)
}
