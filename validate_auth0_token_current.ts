import { validate_current_jwt } from '@ctx-core/jwt'
export async function validate_auth0_token_current(auth0_token) {
	const id_token = auth0_token && auth0_token.id_token
	validate_current_jwt(id_token)
}
