import type { jwt_token_decoded_I } from './jwt_token_decoded_I.js'
export function user_id_(jwt_token_decoded:jwt_token_decoded_I) {
	return (jwt_token_decoded
		&& (jwt_token_decoded.user_id || jwt_token_decoded.sub))
}
export {
	user_id_ as _user_id
}
