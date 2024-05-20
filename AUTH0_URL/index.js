import { import_meta_env_ } from 'ctx-core/env'
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
export const AUTH0_URL = 'https://cdn.auth0.com/js/auth0/9.26.1/auth0.min.js'
export const [
	AUTH0_URL$_,
	AUTH0_URL_,
	AUTH0_URL__set,
] = /** @type {be_sig_triple_T<string>} */
id_be_sig_triple_(
	'AUTH0_URL',
	()=>
		import_meta_env_().AUTH0_URL || AUTH0_URL)
export { AUTH0_URL$_ as AUTH0_URL__ }
