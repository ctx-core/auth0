import type { Auth0Error } from 'auth0-js'
import type { HttpError } from '@ctx-core/error'
export {
	auth0__http__error_ as http_auth0_error_,
}
export declare function auth0__http__error_(http_error:HttpError):Auth0Error&HttpError
