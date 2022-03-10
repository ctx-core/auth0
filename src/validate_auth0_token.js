import { validate_current_jwt } from '@ctx-core/jwt'
/** @type {import('./validate_auth0_token.d.ts').validate_auth0_token} */
export const validate_auth0_token = auth0_token=>{
	const id_token = auth0_token?.id_token
	validate_current_jwt(id_token)
}
