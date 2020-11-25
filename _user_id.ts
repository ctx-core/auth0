export function _user_id(decoded__jwt_token) {
	return (
		decoded__jwt_token
		&& (decoded__jwt_token.user_id
			|| decoded__jwt_token.sub)
	)
}
