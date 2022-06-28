export function http_auth0_error_(http_error) {
	return {
		error_description: http_error.error_message,
		...http_error
	}
}
