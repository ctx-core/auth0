/** @type {import('./AUTH0_URL_.d.ts').AUTH0_URL_} */
export const AUTH0_URL_ = ()=>
	import('auth0-js/package.json', { assert: { type: 'json' } })
		.then($=>`https://cdn.auth0.com/js/auth0/${$.version}/auth0.min.js`)
export { AUTH0_URL_ as _AUTH0_URL }
