import type { error_ctx_I, UnauthorizedError } from '@ctx-core/error'
import { Auth0Error } from 'auth0-js'
export declare function throw_unauthorized_auth0(error_ctx?:error_ctx_I):void
export declare function unauthorized_auth0_error_(error_ctx?:error_ctx_I):Auth0Error&UnauthorizedError
