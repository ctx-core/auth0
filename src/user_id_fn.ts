import type { jwt_token_decoded_I } from './jwt_token_decoded_I'
export function user_id_fn(jwt_token_decoded:jwt_token_decoded_I) {
	return (jwt_token_decoded
		&& (jwt_token_decoded.user_id || jwt_token_decoded.sub))
}
export {
	user_id_fn as _user_id
}
