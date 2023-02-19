import { clone } from '@ctx-core/object'
/** @typedef {import('auth0-js').Auth0Error}Auth0Error */
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/**
 * @param http_error{HttpError}
 * @returns {Auth0Error&HttpError}
 */
export function auth0__http__error_(http_error) {
	return /** @type {Auth0Error&HttpError} */clone(
		http_error,
		/** @type {Auth0Error} */{ error_description: http_error.error_message })
}
export {
	auth0__http__error_ as http_auth0_error_,
}
