import { version } from 'auth0-js'
export async function AUTH0_URL_():Promise<string> {
	return `https://cdn.auth0.com/js/auth0/${version.raw}/auth0.min.js`
}
export {
	AUTH0_URL_ as _AUTH0_URL
}
