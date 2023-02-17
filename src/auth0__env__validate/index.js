import { throw_missing_env } from '@ctx-core/env'
export function auth0__env__validate() {
	if (!process.env.AUTH0_CLIENT_ID) throw_missing_env('AUTH0_CLIENT_ID')
	if (!process.env.AUTH0_DOMAIN) throw_missing_env('AUTH0_DOMAIN')
}
export {
	auth0__env__validate as validate_auth0_env,
}
