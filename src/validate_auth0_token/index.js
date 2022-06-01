import { auth0_validate_current_jwt } from '../auth0_validate_current_jwt/index.js'
/** @type {import('./validate_auth0_token.d.ts').validate_auth0_token} */
export const validate_auth0_token = auth0_token=>{
	auth0_validate_current_jwt(auth0_token?.id_token)
}
