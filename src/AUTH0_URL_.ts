import { package_version_ } from '@ctx-core/package'
export async function AUTH0_URL_():Promise<string> {
	return `https://cdn.auth0.com/js/auth0/${await package_version_('auth0-js')}/auth0.min.js`
}
export {
	AUTH0_URL_ as _AUTH0_URL
}
