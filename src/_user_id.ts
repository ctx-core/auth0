import type { jwt_token_decoded_type } from './jwt_token_decoded_type'
export function _user_id(jwt_token_decoded:jwt_token_decoded_type):string {
	return (
		jwt_token_decoded
		&& (jwt_token_decoded.user_id || jwt_token_decoded.sub)
	)
}
