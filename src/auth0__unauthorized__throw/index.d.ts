import type { error_o_T, UnauthorizedError } from '@ctx-core/error'
import type { Auth0Error } from 'auth0-js'
export declare function auth0__unauthorized__throw(error_o?:error_o_T):void
export declare function auth0__unauthorized__error_(error_o?:error_o_T):Auth0Error&UnauthorizedError
export {
	auth0__unauthorized__throw as throw_unauthorized_auth0,
	auth0__unauthorized__error_ as unauthorized_auth0_error_,
}
