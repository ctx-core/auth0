import type { jwt_token_decoded_I } from './jwt_token_decoded_I'
export function _user_id(jwt_token_decoded:jwt_token_decoded_I) {
	return (jwt_token_decoded
		&& (jwt_token_decoded.user_id || jwt_token_decoded.sub))
}
