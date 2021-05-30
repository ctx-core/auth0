import { package_version_ } from '@ctx-core/package'
export function AUTH0_URL_():string {
	return `https://cdn.auth0.com/js/auth0/${package_version_('auth0-js')}/auth0.min.js`
}
export {
	AUTH0_URL_ as _AUTH0_URL
}
