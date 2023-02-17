import { missing_env__throw } from '@ctx-core/env'
export function auth0__env__validate() {
	if (!process.env.AUTH0_CLIENT_ID) missing_env__throw('AUTH0_CLIENT_ID')
	if (!process.env.AUTH0_DOMAIN) missing_env__throw('AUTH0_DOMAIN')
}
export {
	auth0__env__validate as validate_auth0_env,
}
