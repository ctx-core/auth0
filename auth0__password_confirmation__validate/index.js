/** @typedef {import('../_types/index.d.ts').auth0__password_confirmation__error_T} */
/** @typedef {import('../_types/index.d.ts').auth0__password_confirmation__data_T} */
/**
 * @param {auth0__password_confirmation__data_T}data
 * @returns {auth0__password_confirmation__error_T}
 */
export function auth0__password_confirmation__validate(
	data
) {
	const {
		password,
		password_confirmation
	} = data
	const change_password_error = {}
	let has_errors
	if (password != password_confirmation) {
		change_password_error.password_confirmation =
			'Your passwords do not match.'
		has_errors = true
	}
	return (
		has_errors
			? change_password_error
			: null)
}
export {
	auth0__password_confirmation__validate as validate_auth0_password_confirmation,
}
