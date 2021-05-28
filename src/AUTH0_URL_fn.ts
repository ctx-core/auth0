import { _package_version } from '@ctx-core/package'
export function AUTH0_URL_fn():string {
	return `https://cdn.auth0.com/js/auth0/${_package_version('auth0-js')}/auth0.min.js`
}
export {
	AUTH0_URL_fn as _AUTH0_URL
}
